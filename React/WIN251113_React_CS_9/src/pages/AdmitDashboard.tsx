import { useNavigate } from "react-router";
import { route, useTypedParams } from "react-router-typesafe-routes";

const dashboardPath = route({ path: "admin/:username" });

export default function AdminDashboard() {
  const { username } = useTypedParams(dashboardPath);
  const navigate = useNavigate();

  // Renders the Admin Dashboard
  return (
    <div>
      <div className="dashboardHead">
        <h1>Welcome Admin {username}</h1>
        <button onClick={() => navigate("settings")}>View Profile</button>
      </div>
      <div className="dashboardBody">
        <h2>Student List</h2>
        <ul>
          <li>Student 1</li>
          <li>Student 2</li>
          <li>Student 3</li>
        </ul>
      </div>
    </div>
  );
}
