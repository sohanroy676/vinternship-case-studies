import { type StateCreator } from "zustand";
import type { CommentSlice } from "../types";

export const createCommentSlice: StateCreator<CommentSlice> = (set) => ({
  comments: [],
  addComment: (comment) => set((state) => ({ comments: [...state.comments, comment] })),
});
