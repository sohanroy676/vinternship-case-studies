type EntityRecordMap = Record<string, Record<string, string>>;

export default interface HospitalData {
  appointments: EntityRecordMap;
  patientDetails: EntityRecordMap;
}
