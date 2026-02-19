import { useState } from "react";
import { renderHook, act } from "@testing-library/react";

function useApproval() {
  const [approved, setApproved] = useState(false);
  return { approved, approve: () => setApproved(true) };
}

// Test to approve article
test("approves article", () => {
  const { result } = renderHook(() => useApproval());

  act(() => {
    result.current.approve();
  });

  expect(result.current.approved).toBe(true);
});
