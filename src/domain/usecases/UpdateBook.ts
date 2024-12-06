import { Book } from '../entities/Book';
import { BookRepository } from '../repositories/BookRepository';

export interface UpdateBookDTO {
  id: string;
  title: string;
  author: string;
  isbn: string;
}

export class UpdateBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookData: UpdateBookDTO): Promise<Book> {
    const existingBook = await this.bookRepository.findById(bookData.id);
    
    if (!existingBook) {
      throw new Error('Book not found');
    }

    const updatedBook = {
      ...existingBook,
      title: bookData.title,
      author: bookData.author,
      isbn: bookData.isbn,
    };

    await this.bookRepository.save(updatedBook);
    return updatedBook;
  }
}