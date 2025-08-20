import React from "react";
import PatientAppointmentCard from "./patientAppointmentCard";
import { appointments } from "../../data/patient/mockdata";
const patientupcomingappts = ({ patientId }) => {
  const upcoming = useMemo(
    () =>
      appointments
        .filter((a) => a.patientId === patientId && a.status === "Scheduled")
        .slice(0, 3),
    [patientId]
  );
  return <div></div>;
};

export default patientupcomingappts;
