import React from "react";

import type { CurrencyType, Transaction } from "../types/transaction";

interface TransactionFormState {
  id: string;
  amount: string;
  currency: CurrencyType;
  type: "addIncome" | "addExpense";
}

interface TransactionFormProps {
  onSubmit: (type: "addIncome" | "addExpense", transaction: Transaction) => void;
}

// Class Component to add a new transaction
export default class TransactionForm extends React.Component<
  TransactionFormProps,
  TransactionFormState
> {
  state: TransactionFormState = { id: "", amount: "", currency: "USD", type: "addExpense" };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const transaction: Transaction = {
      id: this.state.id,
      amount: Number(this.state.amount),
      currency: this.state.currency,
      date: new Date(),
    };
    this.props.onSubmit(this.state.type, transaction);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.id}
          onChange={(e) => this.setState({ id: e.target.value })}
          placeholder="Transaction ID"
        />
        <input
          type="text"
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
          placeholder="Transaction Amount"
        />
        <select
          value={this.state.currency}
          onChange={(e) => this.setState({ currency: e.target.value as "USD" | "EUR" })}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <select
          value={this.state.type}
          onChange={(e) => this.setState({ type: e.target.value as "addIncome" | "addExpense" })}
        >
          <option value="addIncome">Income</option>
          <option value="addExpense">Expense</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
