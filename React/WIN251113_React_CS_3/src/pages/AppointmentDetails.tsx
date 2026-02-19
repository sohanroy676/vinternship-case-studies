import { route, useTypedParams } from "react-router-typesafe-routes";

import HOSPITAL_DATA from "../data/appointments";

// Definining the route for type safety and validation
const patientAppointmentRoutes = route({
  path: "patients/:patientId/appointments/:appointmentId",
});

export default function AppointmentDetails() {
  const { patientId, appointmentId } = useTypedParams(patientAppointmentRoutes);

  // Validate and use parameters
  if (!patientId || !appointmentId) {
    return <div className="error">Missing or invalid parameters</div>;
  }

  // Renders appointment details of a patient
  return (
    <div>
      <h1>Patient: {patientId}</h1>
      <h2>Appointment: {appointmentId}</h2>
      <h3>{HOSPITAL_DATA["appointments"][patientId][appointmentId]}</h3>
    </div>
  );
}
