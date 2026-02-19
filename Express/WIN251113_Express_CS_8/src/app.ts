// src/app.ts
import express from "express";
import { BookController } from "./controllers/BookController";
import { BookService } from "./services/BookService";
import { InMemoryBookRepository } from "./repositories/InMemoryBookRepository";

const app = express();
app.use(express.json());

// Add a returnBook method to BookService and BookController.

// Ensure the repository updates the book’s status when returned.

// Initialize components
const bookRepository = new InMemoryBookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

// Routes
app.post("/books/:id/borrow", (req, res) => bookController.borrowBook(req, res));
app.post("/books/:id/return", (req, res) => bookController.returnBook(req, res));

const port = 3000;
app.listen(port, () => {
  console.log(`Library system running on port ${port}`);
});
