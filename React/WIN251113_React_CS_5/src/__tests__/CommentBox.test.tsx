import { fireEvent, render, screen } from "@testing-library/react";
import CommentBox from "../components/CommentBox";

// 1. Write a test for a CommentBox component that:
//     - Renders an input and a “Post” button.
//     - Calls a provided onPost callback with the input value when clicked.
//     - Clears the input after posting.

test("test for a CommentBox component", () => {
  const onPost = jest.fn();

  // Renders an input and a “Post” button.
  render(<CommentBox onPost={onPost} />);

  const textarea = screen.getByPlaceholderText("Type comment...");
  const postButton = screen.getByText("Post");

  expect(textarea).toBeInTheDocument();
  expect(postButton).toBeInTheDocument();

  // Calls a provided onPost callback with the input value when clicked.
  fireEvent.change(textarea, {
    target: { value: "Test comment" },
  });

  fireEvent.click(postButton);

  expect(onPost).toHaveBeenCalledWith("Test comment");

  // Clears the input after posting.
  expect(textarea).toBeEmptyDOMElement();
});
