import React, { useState } from "react";

interface CommentBoxProps {
  onPost: (comment: string) => void;
}

export default function CommentBox({ onPost }: CommentBoxProps) {
  // Renders a comment box and a button to post the comment
  const [comment, setComment] = useState<string>("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postedComment: string = comment;
    setComment("");
    onPost(postedComment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="commentbox"
        value={comment}
        placeholder="Type comment..."
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
}
