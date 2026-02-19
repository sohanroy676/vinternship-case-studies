import React, { useMemo } from "react";
import useDesignHubStore from "../store";

export default function CommentsPanel({ fileId }: { fileId: string }) {
  const comments = useDesignHubStore((state) => state.comments);
  const user = useDesignHubStore((state) => state.user);
  const addComment = useDesignHubStore((state) => state.addComment);
  const addNotification = useDesignHubStore((state) => state.addNotification);

  // Prevent infinite re-rendering due to filter creating a new reference each time it is called.
  const fileComments = useMemo(
    () => comments.filter((comment) => comment.fileId === fileId),
    [comments, fileId]
  );

  // Adding a comment on the Form submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    addComment({
      id: Date.now().toString(),
      fileId,
      author: user!.name,
      text: form.get("comment") as string,
    });
    addNotification(`${user!.name} has commented on File${fileId}`, "info");
  };

  // Renders the Comments Panel
  return (
    <div className="commentsPanel">
      <h3>Comments </h3>
      <ul>
        {fileComments.map((c) => (
          <li key={c.id}>
            {c.author}: {c.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="comment" placeholder="Enter comment..." />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
