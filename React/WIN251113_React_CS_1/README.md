# React Case Study 1: TSX & Typed Components

### NPTEL Pinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study is a Portfolio Dashboard built using React and TypeScript. It allows users to add, remove, and manage assets, ensuring strict type safety for both functional and class components and their props and state.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_React_CS_1
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

1. Create a PortfolioSummary functional component that:
    - Receives a typed array of assets (Asset[]) as props.
    - Renders the total value and average percentage change.

- Present in 'src/components/PortfolioSummary.tsx'

2. Create an AssetEditor class component that:
    - Has typed state for name, symbol, value, and change.
    - Accepts a callback prop onUpdate (typed) to update an asset.
    - Resets the form after submission.

- Present in 'src/components/AssetEditor.tsx'
