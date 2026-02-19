import { useNavigate } from "react-router";
import { route, useTypedParams } from "react-router-typesafe-routes";

const SettingsPath = route({ path: ":role/:username/settings" });

export default function ProfileSettings() {
  const { role, username } = useTypedParams(SettingsPath);
  const navigate = useNavigate();

  // Renders the Settings page
  return (
    <div className="profileSettings">
      <h1>Profile</h1>
      <ul>
        <li>Name: {username}</li>
        <li>Role: {role}</li>
      </ul>
      <button onClick={() => navigate("/")}>Logout</button>
      <button onClick={() => navigate(`/${role}/${username}`)}>Back</button>
    </div>
  );
}
