import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// 2. Use devtools and immer middleware for a note history log:
//  - Actions: addHistoryEntry, clearHistory
//  - Log each entry as { noteId: string, action: string, timestamp: number }

interface LogEntry {
  noteId: string;
  action: string;
  timestamp: number;
}

interface HistoryStore {
  logs: LogEntry[];
  addHistoryEntry: (log: LogEntry) => void;
  clearHistory: () => void;
}

const useHistoryStore = create<HistoryStore>()(
  devtools(
    immer((set) => ({
      logs: [],
      addHistoryEntry: (log) =>
        set((state) => {
          state.logs.push(log);
        }),
      clearHistory: () =>
        set((state) => {
          state.logs = [];
        }),
    }))
  )
);

export default useHistoryStore;
