# React Case Study 9: Lazy Loading

### NPTEL Vinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study demonstrates Lazy Loading in React with TypeScript.
It demonstrates how to split a React app into smaller bundles and load them only when needed—improving initial load times, reducing bandwidth, and keeping the user experience smooth

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_React_CS_9
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

1. Create a ProfileSettings component that is only loaded when the user clicks a “Settings” button.

2. Use React.lazy() and Suspense to load the component with a loading spinner.

3. Add a route /admin that lazy-loads an AdminPanel component only when visited.

4. Show how to handle loading errors with an error boundary.
