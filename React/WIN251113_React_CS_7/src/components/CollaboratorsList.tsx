import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import useCollaboratorStore from "../store/CollaboratorStore";

// 3. Combine Zustand and React Query:
//  - Fetch a list of collaborators from an API.
//  - Store collaborators in Zustand.
//  - Display collaborators in a component, updating automatically when data is fetched.

async function fetchCollaboratorsFromAPI() {
  return ["Collaborator1", "Collaborator2", "Collaborator3"];
}

export default function CollaboratorsList() {
  const collaborators = useCollaboratorStore((state) => state.collaborators);
  const setCollaborators = useCollaboratorStore((state) => state.setCollaborators);

  // Fetching collaborators
  const { data } = useQuery({
    queryKey: ["collaborators"],
    queryFn: fetchCollaboratorsFromAPI,
  });

  useEffect(() => {
    setCollaborators(data as string[]);
  }, [data, setCollaborators]);

  // Rendering the collaborators list
  return (
    <div className="collaborators">
      <h2>Collaborators</h2>
      {collaborators ? (
        <ul>
          {collaborators.map((collaborator, index) => (
            <li key={index}>{collaborator}</li>
          ))}
        </ul>
      ) : (
        <div className="collaborators">Loading the collaborators list</div>
      )}
    </div>
  );
}
