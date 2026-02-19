# Express Case Study 10: Dependency Injection

### NPTEL Vinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study demonstrates Dependency Injection and Inversion of Control in Express. It demonstrates how to use a DI container (TypeDI) to manage dependencies in a Node.js/Express app and write modular, testable code by injecting services (e.g., notification, billing) instead of hardcoding them.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_Express_CS_10
    ```

2. **Install** dependencies:

    ```
    npm install
    ```

3. **Run** the application:
    ```
    ts-node src/app.js
    ```
4. **Open** in brower by Ctrl + Click on Localhost URL

## Tasks in Case Studies

1. Add a BillingService interface and a StripeBillingService implementation.

2. Inject BillingService into AppointmentService to charge patients when booking.

3. Write a test using a mock billing service to verify the charge is made.
