import { route, useTypedParams } from "react-router-typesafe-routes";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import HOSPITAL_DATA from "../data/appointments";

// 2. Use a typed interface for params and extract them in the component.
const patientAppointmentRoutes = route({
  path: "doctors/:doctorId/patients/:patientId",
});

// 1. Define a route /doctors/:doctorId/patients/:patientId and a DoctorPatientDetails component.
export default function DoctorPatientDetails() {
  // 2. Use a typed interface for params and extract them in the component.
  const { doctorId, patientId } = useTypedParams(patientAppointmentRoutes);
  const navigate = useNavigate();
  useEffect(() => {
    // 3. Validate that both IDs are present and numeric; display an error if not.
    async function validate() {
      if (!doctorId || !patientId || isNaN(Number(doctorId)) || isNaN(Number(patientId))) {
        navigate("/error");
      }
    }
    validate();
  }, [doctorId, patientId, navigate]);

  // Renders the details of a patient under a doctor
  return (
    <div>
      <h1>Doctor: {doctorId}</h1>
      <h2>Patient: {patientId}</h2>
      <h3>{HOSPITAL_DATA["patientDetails"][doctorId][patientId]}</h3>
    </div>
  );
}
