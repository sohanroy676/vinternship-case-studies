# Express Case Study 3: HTTP Methods & Status Codes

### NPTEL Vinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study shows HTTP Methods & Status Codes in Express. It demonstrates how to Organize and implement all types of requests (looking up, adding, changing, removing) in Express and use HTTP status codes for clear communication.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_Express_CS_3
    ```

2. **Install** dependencies:

    ```
    npm install
    ```

3. **Run** the application:
    ```
    node app.js
    ```
4. **Open** in brower by Ctrl + Click on Localhost URL

## Tasks in Case Studies

1. Add a PATCH endpoint /products/:id/inStock to update only the inStock status of a product.

2. Return 400 Bad Request if the new status is missing or not a boolean.
