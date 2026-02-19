import { Link } from "react-router-dom";

import HOSPITAL_DATA from "../data/appointments";

export default function DoctorsList() {
  // Renders all the doctors
  return (
    <div>
      <h1>Doctors List</h1>
      <ul>
        {Object.keys(HOSPITAL_DATA["patientDetails"]).map((doctorId) => (
          <li key={doctorId}>
            {/* 4. Add a link from a doctor list to a specific doctor/patient page, passing the IDs as parameters. */}
            <Link to={`${doctorId}/patients`}>Doctor: {doctorId}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
