import { route, useTypedParams } from "react-router-typesafe-routes";
import { Link } from "react-router-dom";

import HOSPITAL_DATA from "../data/appointments";

// Definining the route for type safety and validation
const patientsRoute = route({ path: ":doctorId/patients" });

export default function DoctorPatientsList() {
  const { doctorId } = useTypedParams(patientsRoute);

  // Renders all the patients under a doctor
  return (
    <>
      <h1>Patients Under Doctor {doctorId}</h1>
      <ul>
        {Object.keys(HOSPITAL_DATA["patientDetails"][doctorId]).map((appointmentId) => (
          <li key={appointmentId}>
            <Link to={`${appointmentId}`}>View Patient {appointmentId}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
