import { BookRepository } from '../repositories/BookRepository';

export class DeleteBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookId: string): Promise<void> {
    const book = await this.bookRepository.findById(bookId);
    
    if (!book) {
      throw new Error('Book not found');
    }

    await this.bookRepository.delete(bookId);
  }
}