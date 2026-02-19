import useNotificationStore, { type NotificationType } from "../store/notificationStore";

export default function Control() {
  // Renders a control panel to add or clear notifications
  const addNotification = useNotificationStore((state) => state.addNotification);
  const clearNotification = useNotificationStore((state) => state.clearNotifications);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Add a notification on form submit
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    addNotification(
      form.get("message") as string,
      form.get("notificationType") as NotificationType
    );
  };

  return (
    <div className="control">
      <button onClick={clearNotification}>Clear Notifications</button>
      <form onSubmit={handleSubmit}>
        <textarea name="message" placeholder="message"></textarea>
        <select name="notificationType">
          <option value="info">info</option>
          <option value="error">error</option>
          <option value="success">success</option>
        </select>
        <button type="submit">Add Notification</button>
      </form>
    </div>
  );
}
