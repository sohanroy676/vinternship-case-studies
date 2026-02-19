# React Case Study 6: Zustand Slices and Modular State Architecture

### NPTEL Vinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study demonstrates Modular State Management in React using Zustand Slices with TypeScript.
It demonstrates how to design scalable, type-safe global state for a task management app while avoiding prop drilling and unnecessary re-renders.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_React_CS_6
    ```

2. **Install** dependencies:

    ```
    npm install
    ```

3. **Run** the application:

    ```
    npm run dev
    ```

4. **Open** in brower by Ctrl + Click on Localhost URL

## Tasks in Case Studies

**Your Task:**

1. Create a notificationsSlice:
    - Fields: notifications: { id: string; message: string; read: boolean }[]
    - Actions: addNotification, markAsRead, clearNotifications

2. Add the slice to the main store.

3. Build a NotificationsPanel component that displays unread notifications and lets users mark them as read.
