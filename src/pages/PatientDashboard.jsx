import React from "react";
import PatientMessageCard from "../components/patientMessageCard";
import Patientheader from "../components/patientheader";
import Patientsidebar from "../components/patientsidebar";
import PatientDashboardStats from "../components/patientDashboardStats";
import PatientMedicalRecordCard from "../components/patientMedicalRecordCard";
import Patientappointmentcard from "../components/patientappointmentcard";

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
    status: "Upcoming",
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
    <div className="min-h-screen flex bg-gray-100">
      <Patientsidebar />
      <div className="flex-1 flex flex-col">
        <Patientheader name="Suhan" />
        <main>
          <PatientDashboardStats />
          <section>
            <div className="flex items-center justify-center">
              <h2 className="text-lg text-white font-semibold">
                Upcoming Appointments
              </h2>
              <button className="w-full bg-red-500 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800 my-2">
                View All
              </button>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {appointments.map((a) => (
                <Patientappointmentcard key={a.id} appt={a} />
              ))}
            </div>
          </section>
          <section>
            <div className="flex items-center justify-center">
              <h2 className="text-lg text-white font-semibold">
                Medical Records
              </h2 >
              <button className="w-full bg-red-500 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800 my-2">
                Upload
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                records.map((a)=>(
                  <PatientMedicalRecordCard key={r.id} record={r}/>
                ))
              }
            </div>
          </section>
          <section>
            <div className="flex items-center justify-center">
              <h2 className="text-lg text-white font-semibold">
                Messages
              </h2 >
              <button className="w-full bg-red-500 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800 my-2">
                Open Inbox
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                messages.map((a)=>(
                  <PatientMessageCard key={m.id} msg={m}/>
                ))
              }
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;
