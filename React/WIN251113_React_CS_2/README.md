# React Case Study 2: TSX & Typed Components: Mastering Type Safety

### NPTEL Pinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study is a Budget Tracker application built using React and TypeScript. It enables users to record income and expenses across multiple currencies while ensuring strict type safety for transactions, state management, and component props.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_React_CS_2
    ```

2. **Install** dependencies:

    ```
    npm install
    ```

3. **Run** the application:
    ```
    npm run dev
    ```
4. **Open** in brower by Ctrl + Click on Localhost URL

## Tasks in Case Studies

**Your Task:** Build a BudgetTracker component that:

1. Tracks income and expenses in different currencies.
2. Shows net balance in a selected currency.
3. Uses useReducer for state management.
4. Implements type-safe props for currency conversion rates.

Present in 'src/components/BudgetTracker.tsx'

**Requirements:**

1. Define interfaces for IncomeEntry and ExpenseEntry.
2. Create a reducer with addIncome and addExpense actions.
3. Prevent negative balances through type-safe checks.
