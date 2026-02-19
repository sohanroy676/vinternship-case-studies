import NotificationItem from "./NotificationItem";
import useDesignHubStore from "../store";

export default function NotificationsPanel() {
  // 3. Build a NotificationsPanel component that displays unread notifications and lets users mark them as read.
  const notifications = useDesignHubStore((state) => state.notifications);
  return (
    <div className="notificationContainer">
      <h1>Notifications</h1>
      <ul className="notificationList">
        {notifications.map(
          (notification) =>
            !notification.read && (
              <li key={notification.id}>
                <NotificationItem notification={notification} />
              </li>
            )
        )}
      </ul>
    </div>
  );
}
