import { Link } from "react-router-dom";

import HOSPITAL_DATA from "../data/appointments";

export default function PatientsList() {
  // Renders all the patients who have appointments
  return (
    <div>
      <h1>Patients List</h1>
      <ul>
        {Object.keys(HOSPITAL_DATA["appointments"]).map((patientId) => (
          <li key={patientId}>
            <Link to={`${patientId}/appointments`}>Patient: {patientId}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
