import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type themeType = "light" | "dark";

interface PreferencesStore {
  theme: themeType;
  fontSize: number;
  setTheme: (theme: themeType) => void;
  setFontSize: (size: number) => void;
}

interface PersistedPreferences {
  theme: themeType;
  fontSize: number;
}

const usePreferencesStore = create<PreferencesStore>()(
  persist(
    (set) => ({
      theme: "light",
      fontSize: 14,
      setTheme: (theme) => set({ theme }),
      setFontSize: (size) => set({ fontSize: size }),
    }),
    {
      name: "collabnotes-preferences",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ theme: state.theme, fontSize: state.fontSize }),
      version: 2,
      migrate: (persistedState, version) => {
        if (version < 2) return { ...(persistedState as PersistedPreferences), fontSize: 14 };
        return persistedState;
      },
    }
  )
);

export default usePreferencesStore;
