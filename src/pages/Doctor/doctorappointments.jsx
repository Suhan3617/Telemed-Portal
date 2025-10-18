import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

import SummaryCards from "../../components/Doctor/appointments_page/summarycard";
import FiltersBar from "../../components/Doctor/appointments_page/appointmentfilterbar";
import AppointmentsTable from "../../components/Doctor/appointments_page/appointmenttable";
import AppointmentModal from "../../components/Doctor/appointments_page/appointmentmodal";
import FloatingAdd from "../../components/Doctor/appointments_page/floatingadd";

// mock data
import { appointments as mockAppointments } from "../../data/doctor/mockdata";

export default function DoctorAppointmentsPage() {
  const [appointments] = useState(mockAppointments);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const todayISO = new Date().toISOString().split("T")[0];

  // ✅ Filter logic based on search term
  const filteredAppointments = useMemo(() => {
    return appointments.filter(
      (a) =>
        a.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [appointments, searchTerm]);

  // Reset search and filters
  const handleReset = () => {
    setSearchTerm("");
  };

  // Open modal for appointment details
  const handleOpenModal = (appointment) => {
    setSelected(appointment);
    setModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => setModalOpen(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-slate-900"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* 🔹 Quick Stats Cards */}
        <SummaryCards appointments={appointments} />

        {/* 🔹 Header */}
        <div className="flex items-center justify-between mt-4">
          <h2 className="text-3xl font-bold tracking-tight text-blue-700 drop-shadow-sm">
            Appointments
          </h2>
        </div>

        {/* 🔹 Filters Bar (updated props) */}
        <FiltersBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onReset={handleReset}
        />

        {/* 🔹 Appointments Table */}
        <AppointmentsTable
          appointments={filteredAppointments}
          onView={handleOpenModal}
        />
      </motion.div>

      {/* Floating Add Button */}
      <FloatingAdd />

      {/* Modal */}
      <AppointmentModal
        open={modalOpen}
        appointment={selected}
        onClose={handleCloseModal}
      />
    </motion.div>
  );
}
