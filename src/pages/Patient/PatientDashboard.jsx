import React from "react";
import PatientHeader from "../../components/Patient/patientheader";
import PatientSidebar from "../../components/Patient/patientsidebar";
import PatientDashboardStats from "../../components/Patient/patientDashboardStats";
import Patientupcomingappts from "../../components/Patient/patientupcomingappts";
import PatientMedicalRecordCard from "../../components/Patient/patientrecentrecords";
import PatientAppointmentCard from "../../components/Patient/patientAppointmentCard";
import Button from "../../components/Common/Button";
import { appointments ,medicalRecords } from "../../data/patient/mockdata";

export default function PatientDashboard() {
  const patientId = "p1";

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-blue-400 to-blue-100">
      <PatientSidebar />
      <div className="flex-1 flex flex-col">
        <PatientHeader name="Suhan" />
        <main className="p-6 space-y-6">
          <PatientDashboardStats patientId={patientId} />

          <section className="bg-blue-100 p-6 rounded-2xl shadow-xl">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-semibold text-gray-800">
                Upcoming Appointments
              </h2>
              <Button>View All</Button>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {appointments.slice(0, 2).map((a) => (
                <div
                  key={a.id}
                  className="shadow-xl transition-transform transform hover:scale-105 hover:shadow-3xl cursor-pointer"
                >
                  <PatientAppointmentCard appt={a} />
                </div>
              ))}
            </div>
          </section>

           <section className="bg-blue-100 p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Medical Records
              </h2>
              <Button>
                View All
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalRecords.slice(0, 3).map((r) => (
                <PatientMedicalRecordCard key={r.id} record={r} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
