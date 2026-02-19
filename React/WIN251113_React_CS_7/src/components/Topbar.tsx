import useUserStore from "../store/UserStore";

export default function Topbar() {
  const userId = useUserStore((state) => state.userId);
  const clearUser = useUserStore((state) => state.clearUser);
  // Renders the Top bar with a welcome message, App name and button to logout
  return (
    <div className="topbar">
      <p style={{ fontWeight: "bolder" }}>Welcome {userId}</p>
      <h1>CollabNotes</h1>
      <button onClick={clearUser}>Logout</button>
    </div>
  );
}
