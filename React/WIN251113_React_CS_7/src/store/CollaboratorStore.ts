import { create } from "zustand";

interface CollaboratorStore {
  collaborators: string[];
  setCollaborators: (collaborators: string[]) => void;
}

const useCollaboratorsStore = create<CollaboratorStore>((set) => ({
  collaborators: [],
  setCollaborators: (collaborators) => set(() => ({ collaborators: collaborators })),
}));

export default useCollaboratorsStore;
