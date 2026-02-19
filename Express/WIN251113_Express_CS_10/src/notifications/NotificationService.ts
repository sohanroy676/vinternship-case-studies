import { Token } from "typedi";

// notifications/NotificationService.ts
export interface NotificationService {
  send(to: string, message: string): Promise<void>;
}

export const NOTIFICATION_SERVICE_TOKEN = new Token<() => NotificationService>(
  "NotificationServiceToken"
);
