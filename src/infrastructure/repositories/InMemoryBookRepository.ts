import { Book } from '../../domain/entities/Book';
import { BookRepository } from '../../domain/repositories/BookRepository';

export class InMemoryBookRepository implements BookRepository {
  private books: Map<string, Book> = new Map();

  async findById(id: string): Promise<Book | null> {
    return this.books.get(id) || null;
  }

  async save(book: Book): Promise<void> {
    this.books.set(book.id, book);
  }

  async findAll(): Promise<Book[]> {
    return Array.from(this.books.values());
  }

  async delete(id: string): Promise<void> {
    this.books.delete(id);
  }
}