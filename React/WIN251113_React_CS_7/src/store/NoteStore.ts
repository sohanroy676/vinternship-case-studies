import { create, type StateCreator, type StoreMutatorIdentifier } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface Note {
  id: string;
  text: string;
}

interface NoteStore {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
  addNote: (note: Note) => void;
  updateNote: (id: string, text: string) => void;
  clearNotes: () => void;
}

interface PersistedNote {
  notes: Note[];
}

/**
 * Properly typed custom middleware
 */

type Logger = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = [],
>(
  f: StateCreator<T, Mps, Mcs>,
  name?: string
) => StateCreator<T, Mps, Mcs>;

type LoggerImpl = <T>(f: StateCreator<T, [], []>, name?: string) => StateCreator<T, [], []>;

const loggerImpl: LoggerImpl = (f, name) => (set, get, store) => {
  const loggedSet: typeof set = (...a) => {
    set(...(a as Parameters<typeof set>));
    console.log(...(name ? [`${name}:`] : []), get());
  };
  const setState = store.setState;
  store.setState = (...a) => {
    setState(...(a as Parameters<typeof setState>));
    console.log(...(name ? [`${name}:`] : []), store.getState());
  };

  return f(loggedSet, get, store);
};

export const logger = loggerImpl as unknown as Logger;

const useNoteStore = create<NoteStore>()(
  devtools(
    persist(
      logger(
        immer((set) => ({
          notes: [],
          setNotes: (notes) => {
            set(() => ({
              notes: notes,
            }));
          },
          addNote: (note) => {
            set((state) => {
              state.notes.push(note);
            });
          },
          updateNote: (id, text) =>
            set((state: NoteStore) => {
              const note = state.notes.find((n) => n.id === id);
              if (note) note.text = text;
            }),
          clearNotes: () =>
            set((state) => {
              state.notes = [];
            }),
        }))
      ),
      {
        name: "notes-storage",
        version: 2,
        partialize: (state) => ({ notes: state.notes }),
        migrate: (persisted, version) => {
          if (version < 2) return { ...(persisted as PersistedNote), lastSynced: null };
          return persisted;
        },
      }
    )
  )
);

export default useNoteStore;
