import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createUserSlice } from "./slices/userSlice";
import { createFileSlice } from "./slices/fileSlice";
import { createCommentSlice } from "./slices/commentSlice";
import { createNotificationSlice } from "./slices/notificationSlice";
import type { DesignHubStore } from "./types";

// 2. Add the slice to the main store.
const useDesignHubStore = create<DesignHubStore>()(
  devtools(
    persist(
      (...args) => ({
        ...createUserSlice(...args),
        ...createFileSlice(...args),
        ...createCommentSlice(...args),
        ...createNotificationSlice(...args),
      }),
      { name: "designhub-store" }
    )
  )
);

export default useDesignHubStore;
