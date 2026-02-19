# React Case Study 7: Advanced State Management with Zustand

### NPTEL Pinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study demonstrates Advanced State Management in React using Zustand with TypeScript.
It demonstrates how to use Zustand, with Middleware, Persistence, and Async Patterns, for type-safe global state in a Collaborative Notes app while avoiding prop drilling and unnecessary re-renders.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_React_CS_7
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

**Your Task:**

1. Create a persisted Zustand store for user session:
    - Fields: userId: string, token: string, expiresAt: number
    - Only persist userId and token, not expiresAt
    - Add a migration to handle a new field, role: 'admin' | 'user' (default ‘user’), in version 2.

2. Use devtools and immer middleware for a note history log:
    - Actions: addHistoryEntry, clearHistory
    - Log each entry as { noteId: string, action: string, timestamp: number }

3. Combine Zustand and React Query:
    - Fetch a list of collaborators from an API.
    - Store collaborators in Zustand.
    - Display collaborators in a component, updating automatically when data is fetched.
