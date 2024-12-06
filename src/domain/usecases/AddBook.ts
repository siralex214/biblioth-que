import { Book, BookEntity } from '../entities/Book';
import { BookRepository } from '../repositories/BookRepository';

export interface AddBookDTO {
  title: string;
  author: string;
  isbn: string;
}

export class AddBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookData: AddBookDTO): Promise<Book> {
    const id = crypto.randomUUID();
    const newBook = new BookEntity(id, bookData.title, bookData.author, bookData.isbn, true);
    await this.bookRepository.save(newBook);
    return newBook;
  }
}