import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import PatientsList from "./pages/PatientsList";
import AppointmentsList from "./pages/AppointmentsList";
import AppointmentDetails from "./pages/AppointmentDetails";
import DoctorsList from "./pages/DoctorsList";
import DoctorPatientsList from "./pages/DoctorPatientsList";
import DoctorPatientDetails from "./pages/DoctorPatientDetails";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  // Defines the complete routing
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/patients" element={<PatientsList />} />
          <Route path="/patients/:patientId/appointments" element={<AppointmentsList />} />
          <Route
            path="/patients/:patientId/appointments/:appointmentId"
            element={<AppointmentDetails />}
          />
          <Route path="/doctors" element={<DoctorsList />} />
          <Route path="/doctors/:doctorId/patients" element={<DoctorPatientsList />} />
          {/* 1. Define a route /doctors/:doctorId/patients/:patientId and a DoctorPatientDetails component. */}
          <Route path="/doctors/:doctorId/patients/:patientId" element={<DoctorPatientDetails />} />

          {/* Error Page for missing or invalid parameters */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
