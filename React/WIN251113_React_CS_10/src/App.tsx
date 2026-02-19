import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 1. Use Webpack Bundle Analyzer (or Rsdoctor/Statoscope) on your project.
// 2. Identify the three largest libraries in your bundle.

// Before Optimization:

// import _ from "lodash";
// import moment from "moment";
// import { Chart } from 'chart.js'

// console.log(_.chunk([1, 2, 3, 4], 2));
// console.log(moment().format());
// console.log(Chart);

// 3. Refactor your imports to only include what’s needed (e.g., for lodash, date-fns, or moment).

// After Optimization:
import chunk from "lodash/chunk";
import { format } from "date-fns";

console.log(format(new Date(), "yyyy-MM-dd"));

console.log(chunk([1, 2, 3, 4], 2));
console.log(format(new Date(), "yyyy-MM-dd"));

const Admin = React.lazy(() => import("./Admin"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Admin />
    </>
  );
}

export default App;
