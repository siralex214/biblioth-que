export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  isAvailable: boolean;
  borrowedAt?: Date;
  returnDeadline?: Date;
}

export class BookEntity implements Book {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public isbn: string,
    public isAvailable: boolean = true,
    public borrowedAt?: Date,
    public returnDeadline?: Date
  ) {}
}