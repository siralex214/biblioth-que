import { BookRepository } from '../repositories/BookRepository';

export class BorrowBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookId: string): Promise<void> {
    const book = await this.bookRepository.findById(bookId);
    
    if (!book) {
      throw new Error('Livre non trouvé');
    }
    
    if (!book.isAvailable) {
      throw new Error('Le livre n\'est pas disponible');
    }

    const borrowedAt = new Date();
    const returnDeadline = new Date(borrowedAt);
    returnDeadline.setDate(returnDeadline.getDate() + 14); // 14 jours de délai

    book.isAvailable = false;
    book.borrowedAt = borrowedAt;
    book.returnDeadline = returnDeadline;
    
    await this.bookRepository.save(book);
  }
}