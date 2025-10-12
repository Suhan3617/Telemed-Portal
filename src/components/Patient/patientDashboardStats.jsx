import React from "react";
import { CalendarDays, FileText, Clock } from "lucide-react";
import { useMemo } from "react";
import { appointments, medicalRecords } from "../../data/patient/mockdata";

const StatCard = ({ icon, label, value }) => (
  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
    <div className="flex justify-center mb-3">{icon}</div>
    <div className="text-3xl font-bold">{value}</div>
    <div className="text-sm text-blue-100">{label}</div>
  </div>
);

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
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard icon={<CalendarDays size={28} />} label="Appointments" value={myappts.length} />
      <StatCard icon={<FileText size={28} />} label="Records" value={myrecords.length} />
      <StatCard icon={<Clock size={28} />} label="Upcoming" value={myappts.filter((a)=>a.status==="Scheduled").length} />
    </div>
  );
};

export default PatientDashboardStats;
