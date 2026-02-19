import useDesignHubStore from "../store";

export default function Header() {
  const user = useDesignHubStore((state) => state.user);
  const clearUser = useDesignHubStore((state) => state.clearUser);
  const clearFiles = useDesignHubStore((state) => state.clearFiles);

  const resetAll = () => {
    clearUser();
    clearFiles();
  };

  // Readers the Header containing the Welcome message for the user and buttos to reset Store and to logout.
  return (
    <div id="header">
      <div>Welcome, {user!.name}</div>
      <button onClick={resetAll}>Reset All</button>
      <button onClick={clearUser}>Logout</button>
    </div>
  );
}
