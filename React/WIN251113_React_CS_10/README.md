# React Case Study 10: Bundle Analysis

### NPTEL Vinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study demonstrates how to analyze bundle sizes in React.
It demonstrates how to analyze and understand the impact of TypeScript code, types, and third-party libraries on your app’s bundle size—and what practical steps can you take to optimize it

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_React_CS_10
    ```

2. **Install** dependencies:

    ```
    npm install
    ```

3. **Build** the unoptimized application:

    ```
    npm run build
    ```

4. **Optimize** the code by commenting the unoptimized code and uncommenting the optimized code in App.tsx and uninstalling the unused libraries:

```bash
npm uninstall moment
```

5. **Build** the application:

    ```
    npm run build
    ```

## Tasks in Case Studies

**Your Task:**

1. Use Webpack Bundle Analyzer (or Rsdoctor/Statoscope) on your project.
2. Identify the three largest libraries in your bundle.
    - "Steps to Run" step 3

3. Refactor your imports to only include what’s needed (e.g., for lodash, date-fns, or moment).
    - Optimized Code in App.tsx

4. Change your tsconfig.json to "module": "esnext" and rerun your build—does the bundle shrink?
    - In tsconfig.app.json

5. Remove an unused library and rerun the analyzer—how much did you save?
    - "Steps to Run" step 4, 5

6. Bonus: Add code splitting for a rarely-used admin page and compare the initial chunk size before and after.
    - Admin Component
