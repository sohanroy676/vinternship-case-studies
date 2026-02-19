import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const applicationValidation = [
  body("name").isString().notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("birthdate").isISO8601().withMessage("Birthdate must be a valid date (YYYY-MM-DD)"),
  body("grades").isArray({ min: 1 }).withMessage("At least one grade is required"),
  body("grades.*").isNumeric().withMessage("All grades must be numbers"),
  body("essay").isLength({ min: 100 }).withMessage("Essay must be at least 100 characters"),
  body("recommendationLetter")
    .isURL()
    .withMessage("A valid recommendation letter link is required"),

  // 1. Add a validation rule that requires a “portfolioLink” field to be a valid URL (for art applicants).
  // 2.If missing or invalid, return an error message: “A valid portfolio link is required for art applicants.”
  body("type")
    .isIn(["art", "science", "engineering"])
    .withMessage("Application type must be art, science, or engineering"),
  body("portfolioLink")
    .if(body("type").equals("art"))
    .isURL()
    .withMessage("A valid portfolio link is required for art applicants."),
];

const app = express();

app.use(express.json());

app.post("/apply", applicationValidation, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return all validation errors
    return res.status(400).json({ errors: errors.array() });
  }
  // If we reach here, the application is valid!
  res.json({ status: "Application received!" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
