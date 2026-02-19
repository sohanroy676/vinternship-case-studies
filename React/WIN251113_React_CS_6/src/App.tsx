import Home from "./pages/Home";
import Login from "./pages/Login";

import useDesignHubStore from "./store";

export default function App() {
  const user = useDesignHubStore((state) => state.user);
  return <>{user ? <Home /> : <Login />}</>;
}
