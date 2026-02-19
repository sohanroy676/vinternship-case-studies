import express, { Request, Response, NextFunction } from "express";
import redeemRouter from "./routes/redeem.route";
import transferRouter from "./routes/transfer.route";
import ApiError from "./errors/api-error";
import { customers } from "./services/customer.service";

const app = express();

app.use(express.json());

// Handling the errors with their appropriate status codes and error messages
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      status: "error",
      error: err.message,
      details: err.details,
    });
  } else {
    // Log unexpected errors but don’t expose details
    console.error(err);
    res.status(500).json({
      status: "error",
      error: "Internal server error",
    });
  }
});

// Mount redeem router at /redeem
app.use("/redeem", redeemRouter);
// Mount transfer router at /transfer
app.use("/transfer", transferRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to FreshMart!");
});

app.get("/customers", (req: Request, res: Response) => {
  res.json(customers);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Community Center server running at http://localhost:${port}`);
});
