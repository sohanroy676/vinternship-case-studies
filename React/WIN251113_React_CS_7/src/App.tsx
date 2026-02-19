import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./components/Login";
import NotesList from "./components/NotesList";
import useUserStore from "./store/UserStore";
import CollaboratorsList from "./components/CollaboratorsList";
import History from "./components/History";
import Topbar from "./components/Topbar";

const queryClient = new QueryClient();

export default function App() {
  const userId = useUserStore((state) => state.userId);
  return (
    <QueryClientProvider client={queryClient}>
      {userId === null ? (
        <Login />
      ) : (
        <div id="home">
          <Topbar />
          <NotesList />
          <CollaboratorsList />
          <History />
        </div>
      )}
    </QueryClientProvider>
  );
}
