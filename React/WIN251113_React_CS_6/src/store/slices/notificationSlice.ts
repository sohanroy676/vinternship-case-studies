import { type StateCreator } from "zustand";

import type { NotificationSlice } from "../types";

export type NotificationType = "info" | "error" | "success";

// 1. Create a notificationsSlice:
//  - Fields: notifications: { id: string; message: string; read: boolean }[]
//  - Actions: addNotification, markAsRead, clearNotifications

export const createNotificationSlice: StateCreator<NotificationSlice> = (set) => ({
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
});
