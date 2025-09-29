import React from "react";
import PatientSidebar from "../../components/Patient/patientsidebar";
import PatientHeader from "../../components/Patient/patientheader";
import Patientbookappointments from "../../components/Patient/patientbookappointments";

const BookAppointment = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <PatientSidebar />
      <div className="flex-1 flex flex-col">
        \
        <PatientHeader />
        <div className="flex-1 p-6 overflow-y-auto">
          <Patientbookappointments />
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
