import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  // Layout followed by all the pages
  return (
    <>
      <NavBar />
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
}
