import React from 'react';
import { Book } from '../../domain/entities/Book';
import { BookCard } from './BookCard';
import { PlusCircle } from 'lucide-react';

interface BookListProps {
  books: Book[];
  onBorrow: (bookId: string) => void;
  onReturn: (bookId: string) => void;
  onAddBook: () => void;
  onEditBook: (book: Book) => void;
  onDeleteBook: (bookId: string) => void;
}

export function BookList({
  books,
  onBorrow,
  onReturn,
  onAddBook,
  onEditBook,
  onDeleteBook,
}: BookListProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Collection de Livres</h2>
        <button
          onClick={onAddBook}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Ajouter un Livre
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onBorrow={onBorrow}
            onReturn={onReturn}
            onEdit={onEditBook}
            onDelete={onDeleteBook}
          />
        ))}
      </div>
    </div>
  );
}