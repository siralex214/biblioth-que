import React, { useEffect, useState } from 'react';
import { Book, BookEntity } from './domain/entities/Book';
import { InMemoryBookRepository } from './infrastructure/repositories/InMemoryBookRepository';
import { BorrowBookUseCase } from './domain/usecases/BorrowBook';
import { ReturnBookUseCase } from './domain/usecases/ReturnBook';
import { AddBookUseCase } from './domain/usecases/AddBook';
import { UpdateBookUseCase } from './domain/usecases/UpdateBook';
import { DeleteBookUseCase } from './domain/usecases/DeleteBook';
import { BookList } from './presentation/components/BookList';
import { BookForm } from './presentation/components/BookForm';
import { Library } from 'lucide-react';

// Initialiser le repository et les cas d'utilisation
const bookRepository = new InMemoryBookRepository();
const borrowBookUseCase = new BorrowBookUseCase(bookRepository);
const returnBookUseCase = new ReturnBookUseCase(bookRepository);
const addBookUseCase = new AddBookUseCase(bookRepository);
const updateBookUseCase = new UpdateBookUseCase(bookRepository);
const deleteBookUseCase = new DeleteBookUseCase(bookRepository);

// Données d'exemple
const sampleBooks: Book[] = [
  new BookEntity('1', 'Le Grand Gatsby', 'F. Scott Fitzgerald', '978-0743273565', true),
  new BookEntity('2', '1984', 'George Orwell', '978-0451524935', true),
  new BookEntity('3', 'Orgueil et Préjugés', 'Jane Austen', '978-0141439518', true),
];

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | undefined>();

  useEffect(() => {
    // Initialiser les livres d'exemple
    const initializeBooks = async () => {
      for (const book of sampleBooks) {
        await bookRepository.save(book);
      }
      const allBooks = await bookRepository.findAll();
      setBooks(allBooks);
    };
    initializeBooks();
  }, []);

  const handleBorrow = async (bookId: string) => {
    try {
      await borrowBookUseCase.execute(bookId);
      const updatedBooks = await bookRepository.findAll();
      setBooks(updatedBooks);
    } catch (error) {
      console.error('Erreur lors de l\'emprunt du livre:', error);
    }
  };

  const handleReturn = async (bookId: string) => {
    try {
      await returnBookUseCase.execute(bookId);
      const updatedBooks = await bookRepository.findAll();
      setBooks(updatedBooks);
    } catch (error) {
      console.error('Erreur lors du retour du livre:', error);
    }
  };

  const handleAddBook = () => {
    setEditingBook(undefined);
    setShowForm(true);
  };

  const handleEditBook = (book: Book) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const handleDeleteBook = async (bookId: string) => {
    try {
      await deleteBookUseCase.execute(bookId);
      const updatedBooks = await bookRepository.findAll();
      setBooks(updatedBooks);
    } catch (error) {
      console.error('Erreur lors de la suppression du livre:', error);
    }
  };

  const handleFormSubmit = async (data: { title: string; author: string; isbn: string }) => {
    try {
      if (editingBook) {
        await updateBookUseCase.execute({ id: editingBook.id, ...data });
      } else {
        await addBookUseCase.execute(data);
      }
      const updatedBooks = await bookRepository.findAll();
      setBooks(updatedBooks);
      setShowForm(false);
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du livre:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex items-center">
            <Library className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">
              Système de Gestion de Bibliothèque
            </h1>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <BookList
          books={books}
          onBorrow={handleBorrow}
          onReturn={handleReturn}
          onAddBook={handleAddBook}
          onEditBook={handleEditBook}
          onDeleteBook={handleDeleteBook}
        />
        {showForm && (
          <BookForm
            book={editingBook}
            onSubmit={handleFormSubmit}
            onCancel={() => setShowForm(false)}
          />
        )}
      </main>
    </div>
  );
}

export default App;