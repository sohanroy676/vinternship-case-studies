import { Request, Response } from "express";
import { BookService } from "../services/BookService";

export class BookController {
  constructor(private bookService: BookService) {}

  async borrowBook(req: Request, res: Response): Promise<void> {
    try {
      const book = await this.bookService.borrowBook(req.params.id as string);
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  // 1. Add a returnBook method to BookService and BookController.
  // 2. Ensure the repository updates the book’s status when returned.
  async returnBook(req: Request, res: Response): Promise<void> {
    try {
      const book = await this.bookService.returnBook(req.params.id as string);
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
