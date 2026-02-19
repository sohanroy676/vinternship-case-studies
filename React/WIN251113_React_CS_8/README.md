# React Case Study 8: Memoization

### NPTEL Vinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study demonstrates Memoization in React with TypeScript.
It demonstrates how to use useMemo, useCallback, and React.memo, to prevent unnecessary recalculations and re-renders in React, ensuring the UI remains fast—even as state and props change frequently

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_React_CS_8
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

1. Create a TagList component that:
    - Receives a list of tags and a filter string.
    - Uses useMemo to compute the filtered list.
    - Is wrapped in React.memo to avoid unnecessary re-renders.

2. Create a TagInput component that:
    - Accepts a memoized onAddTag callback via useCallback.
    - Only re-renders when the callback or input value changes.

3. Show how changing unrelated state in the parent does not re-render the memoized TagList or TagInput.
