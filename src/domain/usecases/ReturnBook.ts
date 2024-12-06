import { BookRepository } from '../repositories/BookRepository';

export class ReturnBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookId: string): Promise<void> {
    const book = await this.bookRepository.findById(bookId);
    
    if (!book) {
      throw new Error('Livre non trouvé');
    }
    
    if (book.isAvailable) {
      throw new Error('Le livre est déjà retourné');
    }

    book.isAvailable = true;
    book.borrowedAt = undefined;
    book.returnDeadline = undefined;
    
    await this.bookRepository.save(book);
  }
}