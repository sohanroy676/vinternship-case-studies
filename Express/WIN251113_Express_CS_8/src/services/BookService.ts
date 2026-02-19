import { IBookRepository } from "../repositories/interfaces/IBookRepository";
import { Book } from "../models/Book";

export class BookService {
  constructor(private bookRepository: IBookRepository) {}

  async borrowBook(bookId: string): Promise<Book> {
    const book = await this.bookRepository.findById(bookId);
    if (!book) throw new Error("Book not found");
    if (book.isBorrowed) throw new Error("Book already borrowed");

    const updatedBook = { ...book, isBorrowed: true };
    await this.bookRepository.save(book, true);
    return updatedBook;
  }

  // 1. Add a returnBook method to BookService and BookController.
  async returnBook(bookId: string): Promise<Book> {
    const book = await this.bookRepository.findById(bookId);
    if (!book) throw new Error(`Book not found (${bookId})`);
    if (!book.isBorrowed) throw new Error("Book has not been borrowed");

    const updatedBook = { ...book, isBorrowed: false };
    await this.bookRepository.save(book, false);
    return updatedBook;
  }
}
