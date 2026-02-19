// Build a BudgetTracker component that:

// 1. Tracks income and expenses in different currencies.
// 2. Shows net balance in a selected currency.
// 3. Uses useReducer for state management.
// 4. Implements type-safe props for currency conversion rates.

import { useReducer, useState } from "react";

import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

import type {
  Transaction,
  ExpenseEntry,
  IncomeEntry,
  CurrencyType,
  CurrencyRates,
} from "../types/transaction";

// 1. Tracks income and expenses in different currencies.
interface BudgetState {
  readonly transactions: ReadonlyArray<IncomeEntry | ExpenseEntry>; // Using Readonly/ReadonlyArray to prevent mutations
  netBudget: number;
  budgetCurrency: CurrencyType;
}

type BudgetAction =
  | { type: "addIncome" | "addExpense"; transaction: Transaction }
  | { type: "convertCurrency"; amount: number; to: CurrencyType };

// 4. Implements type-safe props for currency conversion rates.
type BudgetProps = { currencyRates: CurrencyRates };

function budgetDispatch(state: BudgetState, action: BudgetAction) {
  // Dispatch function handle actions of type: addIncome, AddExpense, convertCurrency
  switch (action.type) {
    case "addIncome": {
      const newTransaction: IncomeEntry = {
        ...action.transaction,
        type: "income",
        currency: state.budgetCurrency,
      };
      return {
        ...state,
        transactions: [...state.transactions, newTransaction],
        netBudget: state.netBudget + action.transaction.amount,
      };
    }
    case "addExpense": {
      const newTransaction: ExpenseEntry = {
        ...action.transaction,
        type: "expense",
        currency: state.budgetCurrency,
      };
      return {
        ...state,
        transactions: [...state.transactions, newTransaction],
        netBudget: state.netBudget - action.transaction.amount,
      };
    }
    case "convertCurrency":
      return {
        ...state,
        netBudget: action.amount,
        budgetCurrency: action.to,
      };
    default:
      return state;
  }
}

export default function BudgetTracker({ currencyRates }: BudgetProps) {
  // 3. Uses useReducer for state management.
  const [budgetState, dispatch] = useReducer(budgetDispatch, {
    transactions: [],
    netBudget: 0,
    budgetCurrency: "USD",
  });
  const [errorState, setErrorState] = useState<string | null>(null);

  const convertCurrency = (from: CurrencyType, to: CurrencyType, amount: number): number => {
    return Number((amount * currencyRates[from][to]).toFixed(2));
  };

  const validateBudgetDispatch = (type: "addIncome" | "addExpense", transaction: Transaction) => {
    // Validating the transaction to prevent negetive net balance.
    return type !== "addExpense" || budgetState.netBudget >= transaction.amount
      ? { status: "ok", errorMessage: null }
      : { status: "error", errorMessage: "Balance cannot be negetive" };
  };

  return (
    <>
      <TransactionForm
        onSubmit={(type: "addIncome" | "addExpense", transaction: Transaction) => {
          const result = validateBudgetDispatch(type, transaction);
          if (result.status === "ok") {
            // Valid Transaction
            transaction.amount = convertCurrency(
              transaction.currency,
              budgetState.budgetCurrency,
              transaction.amount
            );
            dispatch({ type: type, transaction: transaction });
            setErrorState(null);
          } else setErrorState(result.errorMessage); // Invalid Transaction
        }}
      />
      <TransactionList transactions={budgetState.transactions} />
      {/* Error Message on invalid transaction. */}
      {errorState && <h3 style={{ color: "red" }}>Error: {errorState}</h3>}
      {/* 2. Shows net balance in a selected currency. */}
      <h3>Net Budget: {budgetState.netBudget}</h3>{" "}
      <select
        value={budgetState.budgetCurrency}
        name="Currency"
        onChange={(e) =>
          dispatch({
            type: "convertCurrency",
            to: e.target.value as CurrencyType,
            amount: convertCurrency(
              budgetState.budgetCurrency,
              e.target.value as CurrencyType,
              budgetState.netBudget
            ),
          })
        }
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </>
  );
}
