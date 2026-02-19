import type HospitalData from "../types/HospitalDataType";

// Mock data for testing and demonstration.
const HOSPITAL_DATA: HospitalData = {
  appointments: {
    P1: { P1A1: "Appointment1 of Patient1", P1A2: "Appointment2 of Patient1" },
    P2: { P2A1: "Appointment1 of Patient2", P2A2: "Appointment2 of Patient2" },
  },
  patientDetails: {
    "1": { "11": "Patient1 details by Doctor1", "12": "Patient2 details by Doctor1" },
    "2": { "21": "Patient1 details by Doctor2", "22": "Patient2 details by Doctor2" },
  },
};

export default HOSPITAL_DATA;
