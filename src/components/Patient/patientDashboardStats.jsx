import React from "react";
import { useMemo } from "react";
import { appointments, medicalRecords } from "../../data/patient/mockdata";

const PatientDashboardStats = ({ patientId }) => {
  const myappts = useMemo(
    () => appointments.filter((a) => a.patientId === patientId),
    [patientId]
  );

  const myrecords = useMemo(
    () => medicalRecords.filter((r) => r.patientId === patientId),
    [patientId]
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white rounded-2xl shadow p-4 text-center">
        <div className="text-2xl font-bold">{myappts.length}</div>
        <div className="text-gray-500 text-sm">Appointments</div>
      </div>
      <div className="bg-white rounded-2xl shadow p-4 text-center">
        <div className="text-2xl font-bold">{myrecords.length}</div>
        <div className="text-gray-500 text-sm">Records</div>
      </div>
      <div className="bg-white rounded-2xl shadow p-4 text-center">
        <div className="text-2xl font-bold">
          {myappts.filter((a)=>a.status==="Scheduled").length}
        </div>
        <div className="text-gray-500 text-sm">Upcoming</div>
      </div>
    </div>
  );
};

export default PatientDashboardStats;
