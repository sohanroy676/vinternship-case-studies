import { useState } from "react";

export function useApproval() {
  // Hook to approve an article
  const [approved, setApproved] = useState(false);
  const approve = () => setApproved(true);
  return { approved, approve };
}
