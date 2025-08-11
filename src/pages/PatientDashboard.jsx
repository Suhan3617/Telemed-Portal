import React from "react";
import PatientMessageCard from "../components/PatientMessageCard";
import PatientHeader from "../components/PatientHeader";
import PatientSidebar from "../components/PatientSidebar";
import PatientDashboardStats from "../components/PatientDashboardStats";
import PatientMedicalRecordCard from "../components/PatientMedicalRecordCard";
import PatientAppointmentCard from "../components/PatientAppointmentCard";

const appointments = [
  {
    id: "a1",
    date: "12 Aug 2025",
    time: "10:30 AM",
    doctor: "Dr. Sarah Williams",
    specialization: "Dermatology",
    type: "Video Consultation",
    status: "Upcoming",
  },
  {
    id: "a2",
    date: "15 Aug 2025",
    time: "02:00 PM",
    doctor: "Dr. Michael Chen",
    specialization: "Cardiology",
    type: "In-Person",
    status: "Completed",
  },
];

const records = [
  { id: "r1", title: "Blood Test Report", date: "05 Aug 2025" },
  { id: "r2", title: "X-Ray Scan", date: "20 Jul 2025" },
  { id: "r3", title: "Prescription", date: "12 Jul 2025" },
];

const messages = [
  {
    id: "m1",
    doctor: "Dr. Sarah Williams",
    message: "Please remember to take your medication regularly.",
    time: "2h ago",
  },
  {
    id: "m2",
    doctor: "Dr. Michael Chen",
    message: "Your test results look good. Keep following your diet plan.",
    time: "1d ago",
  },
];

const PatientDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <PatientSidebar />
      <div className="flex-1 flex flex-col">
        <PatientHeader name="Suhan" />
        <main className="p-6 space-y-8">
          {/* Stats */}
          <PatientDashboardStats />

          {/* Appointments */}
          <section className="bg-white p-6 rounded-xl shadow">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Upcoming Appointments
              </h2>
              <button className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition">
                View All
              </button>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {appointments.map((a) => (
                <PatientAppointmentCard key={a.id} appt={a} />
              ))}
            </div>
          </section>

          {/* Medical Records */}
          <section className="bg-white p-6 rounded-xl shadow">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Medical Records
              </h2>
              <button className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition">
                Upload
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {records.map((r) => (
                <PatientMedicalRecordCard key={r.id} record={r} />
              ))}
            </div>
          </section>

          {/* Messages */}
          <section className="bg-white p-6 rounded-xl shadow">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Messages</h2>
              <button className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition">
                Open Inbox
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {messages.map((m) => (
                <PatientMessageCard key={m.id} msg={m} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;
