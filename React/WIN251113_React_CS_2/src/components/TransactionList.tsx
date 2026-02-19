import type { IncomeEntry, ExpenseEntry } from "../types/transaction";

interface TransactionListProps {
  transactions: ReadonlyArray<IncomeEntry | ExpenseEntry>;
}

export default function TransactionList({ transactions }: TransactionListProps) {
  // Renders the Transaction History
  return (
    <>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id}>
            [{tx.type}]: {tx.amount} {tx.currency} - {tx.date.toLocaleDateString()}
          </li>
        ))}
      </ul>
    </>
  );
}
