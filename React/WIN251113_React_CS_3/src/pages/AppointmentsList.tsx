import { route, useTypedParams } from "react-router-typesafe-routes";
import { Link } from "react-router-dom";

import HOSPITAL_DATA from "../data/appointments";

// Definining the route for type safety and validation
const appointmentsRoute = route({ path: ":patientId/appointments" });

export default function AppointmentsList() {
  const { patientId } = useTypedParams(appointmentsRoute);

  // Renders the list of appointments of a patient
  return (
    <>
      <h1>Appointments for Patient {patientId}</h1>
      <ul>
        {Object.keys(HOSPITAL_DATA["appointments"][patientId]).map((appointmentId) => (
          <li key={appointmentId}>
            <Link to={`${appointmentId}`}>View Appointment {appointmentId}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
