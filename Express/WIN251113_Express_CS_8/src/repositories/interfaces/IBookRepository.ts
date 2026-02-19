import { Book } from "../../models/Book";

export interface IBookRepository {
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book | null>;
  save(book: Book, isBorrowed: boolean): Promise<void>;
}
