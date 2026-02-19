import { create } from "zustand";
import { persist } from "zustand/middleware";

// 1. Create a persisted Zustand store for user session:
//  - Fields: userId: string, token: string, expiresAt: number
//  - Only persist userId and token, not expiresAt
//  - Add a migration to handle a new field, role: 'admin' | 'user' (default ‘user’), in version 2.

type UserRole = "admin" | "user";

interface UserStore {
  userId: string | null;
  token: string | null;
  expiresAt: number | null;
  role: UserRole | null;
  setUser: (userId: string, token: string, expiresAt: number, role?: UserRole) => void;
  clearUser: () => void;
}

interface PersistedUser {
  userId: string | null;
  token: string | null;
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userId: null,
      token: null,
      expiresAt: null,
      role: null,
      setUser: (userId, token, expiresAt, role = "user") => {
        set(() => ({ userId, token, expiresAt, role }));
      },
      clearUser: () => {
        set({ userId: null, token: null, expiresAt: null, role: null });
      },
    }),
    {
      name: "user-session",
      partialize: (state) => ({ userId: state.userId, token: state.token }),
      version: 2,
      migrate(persistedState, version) {
        if (version < 2) return { ...(persistedState as PersistedUser), role: "user" };
        return persistedState;
      },
    }
  )
);

export default useUserStore;
