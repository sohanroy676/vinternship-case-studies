# React Case Study 5: Testing & Debugging React Apps

### NPTEL Pinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This case study explores the use of Jest and React Testing Library to test React components, analyze failing test scenarios, and apply systematic debugging techniques to ensure correct UI behavior.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_React_CS_5
    ```

2. **Install** dependencies:

    ```
    npm install
    ```

3. **Run** the application:
    ```
    npm run test
    ```

## Tasks in Case Studies

**Your Task:**

1. Write a test for a CommentBox component that:
    - Renders an input and a “Post” button.
    - Calls a provided onPost callback with the input value when clicked.
    - Clears the input after posting.
2. Add a lint rule that forbids console.log statements in production code.
3. Debug a failing test: The test expects “Approved!” to appear, but it doesn’t—what could be wrong?
