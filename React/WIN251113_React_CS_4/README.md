# React Case Study 4: State Management in React

### NPTEL Vinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**

## Description

This Case Study demonstrates State Management in React using Context and Zustand with TypeScript.
It demonstrates how to design scalable, type-safe global state for a task management app while avoiding prop drilling and unnecessary re-renders.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_React_CS_4
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

1. Create a Zustand store for notifications:
    - Each notification has id, message, type ('info' | 'error' | 'success'), and read: boolean.
    - Add actions: addNotification, markAsRead, and clearNotifications.

2. Use the store in a NotificationList component to display unread notifications and mark them as read.
