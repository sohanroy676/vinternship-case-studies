# Express Case Study 7: Request Validation

### NPTEL Vinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study demonstrates Request Validation in Express. It demonstrates how to use express-validator or class-validator to enforce rules on incoming data, provide clear, actionable feedback to users when their input is invalid and prevent downstream errors and confusion by catching mistakes early.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_Express_CS_7
    ```

2. **Install** dependencies:

    ```
    npm install
    ```

3. **Run** the application:
    ```
    ts-node app.js
    ```
4. **Open** in brower by Ctrl + Click on Localhost URL

## Tasks in Case Studies

1. Add a validation rule that requires a “portfolioLink” field to be a valid URL (for art applicants).

2. If missing or invalid, return an error message: “A valid portfolio link is required for art applicants.”
