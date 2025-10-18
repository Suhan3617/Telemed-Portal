import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

import SummaryCards from "../../components/Doctor/appointments_page/summarycard";
import FiltersBar from "../../components/Doctor/appointments_page/appointmentfilterbar";
import AppointmentsTable from "../../components/Doctor/appointments_page/appointmenttable";
import AppointmentModal from "../../components/Doctor/appointments_page/appointmentmodal";
import FloatingAdd from "../../components/Doctor/appointments_page/floatingadd";
import PremiumHeader from "../../components/Doctor/allpagesheader";

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
      {/* 🔷 Premium Header */}
      <PremiumHeader
        breadcrumb="Doctor Dashboard / Appointments"
        icon={<CalendarDays size={28} />}
        title="Appointments Overview"
        subtitle="Manage, review, and track your patients’ appointments efficiently."
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-10"
      >
        {/* 🔹 Quick Stats Cards */}
        <SummaryCards appointments={appointments} />

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
