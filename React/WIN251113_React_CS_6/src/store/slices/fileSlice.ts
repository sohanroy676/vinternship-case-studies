import { type StateCreator } from "zustand";

import type { FileSlice } from "../types";

export const createFileSlice: StateCreator<FileSlice> = (set) => ({
  files: [],
  addFile: (file) => set((state) => ({ files: [...state.files, file] })),
  updateFile: (id, content) =>
    set((state) => ({
      files: state.files.map((f) => (f.id === id ? { ...f, content } : f)),
    })),
  clearFiles: () => set({ files: [] }),
});
