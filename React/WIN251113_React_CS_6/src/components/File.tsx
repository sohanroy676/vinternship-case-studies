import { type File } from "../store/types";

interface FileProps {
  file: File;
}

export default function FileContent({ file }: FileProps) {
  // Renders the given File
  return (
    <div className="fileContent">
      <h2>File {file.id}</h2>
      <p>{file.content}</p>
    </div>
  );
}
