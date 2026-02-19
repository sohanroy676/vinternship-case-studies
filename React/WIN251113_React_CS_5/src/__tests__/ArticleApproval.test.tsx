import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ArticleApproval } from "../components/ArticleApproval";

test("shows Approved! after clicking approve", () => {
  render(<ArticleApproval article={{ title: "Title", author: "author" }} />);
  fireEvent.click(screen.getByText("Approve"));

  // 3. Debug a failing test: The test expects “Approved!” to appear, but it doesn’t—what could be wrong?

  // expect(screen.getByText("Approved!")).toBeInTheDocument();

  // "Approved!" may not appear if the click handler or state update is missing,
  // the condition for rendering is never met, or the test asserts before async
  // updates finish.

  waitFor(() => {
    expect(screen.getByText("Approved!")).toBeInTheDocument();
  });
});
