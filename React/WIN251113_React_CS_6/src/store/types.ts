interface User {
  id: string;
  name: string;
}

export interface UserSlice {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export interface File {
  id: string;
  name: string;
  content: string;
}

export interface FileSlice {
  files: File[];
  addFile: (file: File) => void;
  updateFile: (id: string, content: string) => void;
  clearFiles: () => void;
}

export interface Comment {
  id: string;
  fileId: string;
  author: string;
  text: string;
}

export interface CommentSlice {
  comments: Comment[];
  addComment: (comment: Comment) => void;
}

export type NotificationType = "info" | "error" | "success";

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  read: boolean;
}

export interface NotificationSlice {
  notifications: Notification[];
  addNotification: (message: string, type: NotificationType) => void;
  markAsRead: (id: string) => void;
  clearNotifications: () => void;
}

export type DesignHubStore = UserSlice & FileSlice & CommentSlice & NotificationSlice;

export type StoreMiddlewares = [["zustand/devtools", never], ["zustand/persist", DesignHubStore]];
