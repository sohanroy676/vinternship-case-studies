import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";

// 1. Create a ProfileSettings component that is only loaded when the user clicks a “Settings” button.
const ProfileSettings = React.lazy(
  () =>
    new Promise<typeof import("./pages/ProfileSettings")>((resolve) => {
      setTimeout(() => {
        resolve(import("./pages/ProfileSettings"));
      }, 1000);
    })
);

const AdmitDashboard = React.lazy(() => import("./pages/AdmitDashboard"));

function RootLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

// Fallback Component for the Error Boundary
function MyFallbackComponent({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <span className="loader"></span>
      <h2>Something went wrong</h2>
      <p>{(error as Error).message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function App() {
  return (
    // 4. Show how to handle loading errors with an error boundary.
    <ErrorBoundary
      FallbackComponent={MyFallbackComponent}
      onReset={() => console.log("Reset triggered")}
      resetKeys={["resetKey"]}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Login />} />
            <Route path="user/:username" element={<UserDashboard />} />
            {/* 3. Add a route /admin that lazy-loads an AdminPanel component only when visited. */}
            <Route path="admin/:username" element={<AdmitDashboard />} />
            {/* 2. Use React.lazy() and Suspense to load the component with a loading spinner. */}
            <Route
              path=":role/:username/settings"
              element={
                <Suspense fallback={<span className="loader"></span>}>
                  <ProfileSettings />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
