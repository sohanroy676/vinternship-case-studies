import { useState } from "react";
import useDesignHubStore from "../store";
import CommentsPanel from "./CommentsPanel";
import FileContent from "./File";

import type { File } from "../store/types";

interface ControlsProps {
  setFilesIndex: React.Dispatch<React.SetStateAction<number>>;
  filesIndex: number;
  files: File[];
}

function Controls({ setFilesIndex, filesIndex, files }: ControlsProps) {
  const addNotification = useDesignHubStore((state) => state.addNotification);
  const addFile = useDesignHubStore((state) => state.addFile);

  // Renders the basic controls like next file, previous file and add file for the File Panel.
  return (
    <div className="filePanelControls">
      <button onClick={() => setFilesIndex((filesIndex > 0 ? filesIndex : files.length) - 1)}>
        Prev
      </button>
      <button
        onClick={() => {
          if (files.length === 0) setFilesIndex(0);
          addFile({
            id: Date.now().toString(),
            name: `File${files.length}`,
            content: `Sample text for File${files.length}`,
          });
          addNotification(`New File has been added`, "success");
        }}
      >
        Add File
      </button>
      <button onClick={() => setFilesIndex((filesIndex + 1) % files.length)}>Next</button>
    </div>
  );
}

export default function FilesPanel() {
  const files = useDesignHubStore((state) => state.files);

  const [filesIndex, setFilesIndex] = useState<number>(0);

  return (
    <div id="filesPanel">
      <Controls setFilesIndex={setFilesIndex} filesIndex={filesIndex} files={files} />
      {files.length === 0 ? (
        <h3>No files added</h3>
      ) : (
        <>
          <FileContent file={files[filesIndex]} />
          <CommentsPanel fileId={files[filesIndex].id} />
        </>
      )}
    </div>
  );
}
