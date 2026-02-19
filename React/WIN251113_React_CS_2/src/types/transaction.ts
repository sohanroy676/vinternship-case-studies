// Types used in multiple files

export type CurrencyType = "USD" | "EUR";

export type CurrencyRates = Record<CurrencyType, Record<CurrencyType, number>>;

export interface Transaction {
  id: string;
  amount: number;
  currency: CurrencyType;
  date: Date;
}

export interface IncomeEntry extends Transaction {
  type: "income";
}

export interface ExpenseEntry extends Transaction {
  type: "expense";
}
