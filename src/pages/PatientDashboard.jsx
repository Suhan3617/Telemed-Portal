import React from "react";
import PatientMessageCard from "../components/patientMessageCard";
import Patientheader from "../components/patientheader";
import Patientsidebar from "../components/patientsidebar";
import PatientDashboardStats from "../components/patientDashboardStats";
import PatientMedicalRecordCard from "../components/patientMedicalRecordCard";
import Patientappointmentcard from "../components/patientappointmentcard";

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
