import { create } from "zustand";

export type NotificationType = "info" | "error" | "success";

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  read: boolean;
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (message: string, type: NotificationType) => void;
  markAsRead: (id: string) => void;
  clearNotifications: () => void;
}

// 1. Create a Zustand store for notifications:
//  Each notification has id, message, type ('info' | 'error' | 'success'), and read: boolean.
//  Add actions: addNotification, markAsRead, and clearNotifications.

const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (message, type) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: Date.now().toString(), message, type, read: false },
      ],
    })),
  markAsRead: (id) => {
    set((state) => ({
      notifications: state.notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      ),
    }));
  },
  clearNotifications: () =>
    set({
      notifications: [],
    }),
}));

export default useNotificationStore;
