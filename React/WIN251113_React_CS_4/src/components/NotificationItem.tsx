import useNotificationStore, { type Notification } from "../store/notificationStore";

export default function NotificationItem({ notification }: { notification: Notification }) {
  // Renders each notification item
  const markAsRead = useNotificationStore((state) => state.markAsRead);
  return (
    <div className={`notificationItem ${notification.type}Notification`}>
      <ul className="notificationItemHeader">
        <li key={1}>{notification.id}</li>
        <li key={2}>{notification.type}</li>
        <li key={3}>
          <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>
        </li>
      </ul>
      <p className="notificationItemMessage">{notification.message}</p>
    </div>
  );
}
