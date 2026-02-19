# Express Case Study 4: Request and Response

### NPTEL Vinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study shows Request/Response in Express. It demonstrates how to type request bodies, query params, and responses with TypeScript, validate JSON data using schemas and middleware, and return consistent error messages and status codes.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_Express_CS_4
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

1. Add a POST /transfer endpoint allowing customers to transfer points to another account.

2. Validate:
    - Both fromCustomerId and toCustomerId must be valid UUIDs.

    - points must be a positive integer.

    - The sender must have enough points.

3. Return appropriate errors for each failure case.
