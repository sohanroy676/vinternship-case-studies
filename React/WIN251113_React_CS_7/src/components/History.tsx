import useHistoryStore from "../store/HistoryStore";

export default function History() {
  const logs = useHistoryStore((state) => state.logs);
  const clearHistory = useHistoryStore((state) => state.clearHistory);

  // Renders the History Logs
  return (
    <div className="history">
      <h2>HISTORY</h2>
      {logs.length !== 0 ? (
        <ul>
          {logs.map((log, index) => (
            <li key={index}>
              {log.action} {log.noteId} at {log.timestamp}
            </li>
          ))}
        </ul>
      ) : (
        <div>No history logged</div>
      )}
      <button onClick={clearHistory} className="controls">
        Clear History
      </button>
    </div>
  );
}
