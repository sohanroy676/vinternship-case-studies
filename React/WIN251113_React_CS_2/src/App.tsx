import BudgetTracker from "./components/BudgetTracker";

import type { CurrencyRates } from "./types/transaction";

import "./App.css";

const currencyRates: CurrencyRates = { USD: { USD: 1, EUR: 0.84 }, EUR: { USD: 1.2, EUR: 1 } };

export default function App() {
  return <BudgetTracker currencyRates={currencyRates} />;
}
