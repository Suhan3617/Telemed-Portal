import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeartPulse, CalendarDays, ClipboardList } from "lucide-react";
import PatientHeader from "../../components/Patient/patientheader";
import PatientSidebar from "../../components/Patient/patientsidebar";
import PatientDashboardStats from "../../components/Patient/patientDashboardStats";
import PatientAppointmentCard from "../../components/Patient/patientAppointmentCard";
import PatientMedicalRecordCard from "../../components/Patient/patientrecentrecords";
import { appointments, medicalRecords } from "../../data/patient/mockdata";

export default function PatientDashboard() {
  const patientId = "p1";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-400 via-blue-100 to-white overflow-hidden relative">
      
      {/* Desktop Sidebar */}
      <PatientSidebar className="hidden md:block" />

      {/* Mobile Sidebar Drawer only when open */}
      {sidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar sliding in */}
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-0">
            <PatientSidebar />
          </div>
        </>
      )}

      <div className="flex-1 flex flex-col relative">
        {/* Mobile Hamburger / Close Toggle Button */}
        <button
          className="md:hidden absolute top-4 left-4 p-2 bg-blue-500 text-white rounded-lg z-50 shadow-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "×" : "☰"}
        </button>

        {/* Animated Background */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />

        <PatientHeader name="Suhan" />

        <main className="relative z-10 p-8 space-y-10">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Good Morning, Suhan 👋</h1>
              <p className="text-blue-100 text-sm">
                Manage your health, track appointments, and view your records — all in one place.
              </p>
            </div>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/doctor-consultation-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--healthcare-medicine-medical-pack-illustrations-4929970.png"
              alt="Dashboard"
              className="w-44 md:w-56 mt-4 md:mt-0 drop-shadow-lg"
            />
          </section>

          {/* Stats */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <HeartPulse className="text-blue-600" size={22} /> Overview
            </h2>
            <PatientDashboardStats patientId={patientId} />
          </section>

          {/* Upcoming Appointments */}
          <section className="backdrop-blur-lg bg-white/60 p-6 rounded-3xl shadow-xl border border-blue-100">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <CalendarDays className="text-blue-600" size={20} /> Upcoming Appointments
              </h2>
              <Link
                to="/patient/appointments"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition"
              >
                View All
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {appointments.slice(0, 2).map((a) => (
                <div
                  key={a.id}
                  className="transform hover:scale-[1.03] transition duration-300"
                >
                  <PatientAppointmentCard appt={a} />
                </div>
              ))}
            </div>
          </section>

          {/* Medical Records */}
          <section className="backdrop-blur-lg bg-white/60 p-6 rounded-3xl shadow-xl border border-blue-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <ClipboardList className="text-blue-600" size={20} /> Medical Records
              </h2>
              <Link
                to="/patient/medicalrecords"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition"
              >
                View All
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalRecords.slice(0, 3).map((r) => (
                <div
                  key={r.id}
                  className="transform hover:scale-[1.03] transition duration-300"
                >
                  <PatientMedicalRecordCard record={r} />
                </div>
              ))}
            </div>
          </section>

          {/* Tip Section */}
          <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-3xl shadow-lg text-center mt-10">
            <h3 className="text-lg font-semibold mb-2">💙 Health Tip of the Day</h3>
            <p className="text-blue-100">
              “Small healthy habits daily bring the biggest results.”
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
