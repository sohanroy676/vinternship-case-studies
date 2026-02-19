# Express Case Study 5: Routing Controllers

### NPTEL Vinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study demonstrates Routing Controllers, Middleware, and Request Validation in Express. It demonstrates how to Organize workflows into routing controllers, add checkpoints to catch errors early (middleware) and validate requests before they’re processed.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_Express_CS_5
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

1. Create a BakingController for /baking routes.

2. Add a POST /baking/start endpoint to start baking an order.

3. Add a GET /baking/status/:id endpoint to check the baking status of an order.
