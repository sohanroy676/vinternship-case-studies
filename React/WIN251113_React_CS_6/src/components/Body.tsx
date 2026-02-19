import FilesPanel from "./FilesPanel";
import NotificationsPanel from "./NotificationList";

export default function Body() {
  // Renders the main body of the UI, containing the Panel for the Files/Comments and for Notifications.
  return (
    <div id="body">
      <FilesPanel />
      <NotificationsPanel />
    </div>
  );
}
