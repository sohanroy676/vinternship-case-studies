import { NavLink } from "react-router-dom";

export default function NavBar() {
  // Component for a navbar with links to Home, Patients and Doctors pages.
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/patients">Patients</NavLink>
      </li>
      <li>
        <NavLink to="/doctors">Doctors</NavLink>
      </li>
    </ul>
  );
}
