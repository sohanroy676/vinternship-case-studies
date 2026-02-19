import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import useNoteStore, { type Note } from "../store/NoteStore";
import useHistoryStore from "../store/HistoryStore";

async function fetchNotesFromAPI() {
  return [{ id: "n1", text: "Text for Note1" } as Note];
}

function Controls() {
  const addNote = useNoteStore((state) => state.addNote);
  const clearNotes = useNoteStore((state) => state.clearNotes);
  const addHistory = useHistoryStore((state) => state.addHistoryEntry);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const noteId: string = Date.now().toString();
    addNote({ id: noteId, text: form.get("note") as string });
    addHistory({ noteId: noteId, action: "Added", timestamp: Math.floor(Date.now() / 1000) });
  };

  // Renders the controls for the
  return (
    <div className="controls">
      <form onSubmit={handleSubmit}>
        <input type="text" name="note" placeholder="Enter Note" />
        <button type="submit">Add Note</button>
      </form>
      <button onClick={clearNotes}>Clear Notes</button>
    </div>
  );
}

export default function NotesList() {
  const setNotes = useNoteStore((state) => state.setNotes);
  const notes = useNoteStore((state) => state.notes);

  // Fetching the notes from api
  const { data, isLoading } = useQuery({ queryKey: ["notes"], queryFn: fetchNotesFromAPI });

  useEffect(() => {
    if (!data || notes) return;
    setNotes(data);
  }, [data, notes, setNotes]);

  if (isLoading) return <div>Loading...</div>;

  // Renders the Notes List
  return (
    <div className="notesPanel">
      <h2>NOTES</h2>
      <ul>
        {notes.map((n) => (
          <li key={n.id}>{n.text}</li>
        ))}
      </ul>
      <Controls />
    </div>
  );
}
