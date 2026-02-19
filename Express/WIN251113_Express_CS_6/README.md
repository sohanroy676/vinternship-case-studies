# Express Case Study 6: Middleware

### NPTEL Vinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study demonstrates Middleware in Express. It demonstrates how to use built-in, third-party, and custom middleware in Express, chain multiple middleware for complex, multi-step processes and implement error-handling middleware for consistent, user-friendly error responses.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_Express_CS_6
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

1. Add a middleware that checks if the patient’s insurance approval is present (req.body.insuranceApproved).

2. If not, return a 403 Forbidden with a clear error message.

3. Test by sending a discharge request without insurance approval.
