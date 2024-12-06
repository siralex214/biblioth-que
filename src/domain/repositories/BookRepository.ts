import { Book } from '../entities/Book';

export interface BookRepository {
  findById(id: string): Promise<Book | null>;
  save(book: Book): Promise<void>;
  findAll(): Promise<Book[]>;
  delete(id: string): Promise<void>;
}