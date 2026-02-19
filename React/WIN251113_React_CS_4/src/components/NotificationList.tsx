import NotificationItem from "./NotificationItem";
import useNotificationStore from "../store/notificationStore";

export default function NotficationList() {
  // 2. Use the store in a NotificationList component to display unread notifications and mark them as read.
  const notifications = useNotificationStore((state) => state.notifications);
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
