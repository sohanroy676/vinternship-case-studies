# React Case Study 3: Routing

### NPTEL Vinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study demonstrates how to build type-safe dynamic routing in React using React Router and TypeScript.
It shows how to define routes with URL parameters, extract and validate them safely, and prevent common runtime errors by catching mistakes at compile time.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_React_CS_3
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

1. Define a route /doctors/:doctorId/patients/:patientId and a DoctorPatientDetails component.
2. Use a typed interface for params and extract them in the component.
3. Validate that both IDs are present and numeric; display an error if not.
4. Add a link from a doctor list to a specific doctor/patient page, passing the IDs as parameters.
