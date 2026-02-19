import React, { useCallback, useState, useMemo } from "react";

// 1. Create a TagList component that:
//     - Receives a list of tags and a filter string.
//     - Uses useMemo to compute the filtered list.
//     - Is wrapped in React.memo to avoid unnecessary re-renders.

// 2. Create a TagInput component that:
//     - Accepts a memoized onAddTag callback via useCallback.
//     - Only re-renders when the callback or input value changes.

// 3. Show how changing unrelated state in the parent does not re-render the memoized TagList or TagInput.

interface TagListProps {
  tags: ReadonlyArray<string>;
  filterText: string;
}

// wrapped in React.memo to avoid unnecessary re-renders.
const TagList = React.memo(({ tags, filterText }: TagListProps) => {
  // Using useMemo to compute the filtered list.
  const filteredTags = useMemo(
    () => tags.filter((tag) => tag.includes(filterText)),
    [tags, filterText]
  );

  console.log("TagList rendered"); // Test Memo

  return (
    <ul>
      {filteredTags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
});

// wrapped in React.memo to avoid unnecessary re-renders.
// Accepts a memoized onAddTag callback via useCallback.
const TagInput = React.memo(({ onAddTag }: { onAddTag: (tag: string) => void }) => {
  console.log("TagInput rendered"); // Test Memo

  return (
    <input
      type="text"
      onChange={(event) => onAddTag(event.target.value)}
      placeholder="Enter tag..."
    />
  );
});

export function TagsPanel({ tags }: { tags: ReadonlyArray<string> }) {
  const [tag, setTag] = useState<string>("");
  const [count, setCount] = useState<number>(0); // Unrelated State

  const onAddTag = useCallback((tag: string) => setTag(tag), []);

  console.log("TagPanel rendered", count);

  return (
    <div className="tagsPanel">
      <h1>Tags</h1>
      <TagInput onAddTag={onAddTag} />
      <TagList tags={tags} filterText={tag} />

      {/* 3. Show how changing unrelated state in the parent does not re-render the memoized TagList or TagInput.*/}
      {/* See console while clicking Test Memo button */}
      <button onClick={() => setCount(count + 1)}>Test Memo</button>
    </div>
  );
}
