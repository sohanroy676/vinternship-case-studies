import { useNavigate } from "react-router";
import { route, useTypedParams } from "react-router-typesafe-routes";

const dashboardPath = route({ path: "user/:username" });

export default function UserDashboard() {
  const { username } = useTypedParams(dashboardPath);
  const navigate = useNavigate();

  // Renders the user dashboard
  return (
    <div>
      <div className="dashboardHead">
        <h1>Welcome User {username}</h1>
        <button onClick={() => navigate("settings")}>View Profile</button>
      </div>
      <div className="dashboardBody">
        <h2>Course List</h2>
        <ul>
          <li>Course 1</li>
          <li>Course 2</li>
          <li>Course 3</li>
        </ul>
      </div>
    </div>
  );
}
