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
  // --------------------- 🔹 States ---------------------
  const [appointments] = useState(mockAppointments);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [dateRange, setDateRange] = useState("Today");
  const [sortOption, setSortOption] = useState("By Time");
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // --------------------- 🔹 Date Utility ---------------------
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  const isInRange = (dateStr) => {
    const date = new Date(dateStr);
    if (dateRange === "Today") return date.toDateString() === today.toDateString();
    if (dateRange === "This Week") return date >= startOfWeek && date <= today;
    return true; // For "Custom" — you can enhance later with actual from–to picker values
  };

  // --------------------- 🔹 Filter & Sort Logic ---------------------
  const filteredAppointments = useMemo(() => {
    let data = [...appointments];

    // 🔍 Search by patient name or ID
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      data = data.filter(
        (a) =>
          a.patientName.toLowerCase().includes(term) ||
          a.id.toLowerCase().includes(term)
      );
    }

    // 📅 Date range filter
    data = data.filter((a) => isInRange(a.date));

    // 🟢 Status multi-select
    if (selectedStatuses.length > 0) {
      data = data.filter((a) => selectedStatuses.includes(a.status));
    }

    // ↕️ Sort logic
    switch (sortOption) {
      case "By Patient Name":
        data.sort((a, b) => a.patientName.localeCompare(b.patientName));
        break;
      case "By Appointment Type":
        data.sort((a, b) => a.type.localeCompare(b.type));
        break;
      default:
        data.sort((a, b) => new Date(a.date) - new Date(b.date)); // By Time
    }

    return data;
  }, [appointments, searchTerm, selectedStatuses, dateRange, sortOption]);

  // --------------------- 🔹 Reset All Filters ---------------------
  const handleReset = () => {
    setSearchTerm("");
    setSelectedStatuses([]);
    setDateRange("Today");
    setSortOption("By Time");
  };

  // --------------------- 🔹 Modal Control ---------------------
  const handleOpenModal = (appointment) => {
    setSelected(appointment);
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);

  // --------------------- 🔹 Render ---------------------
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
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
        {/* 🔹 Summary Cards */}
        <SummaryCards appointments={appointments} />

        {/* 🔹 Filter Bar */}
        <FiltersBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedStatuses={selectedStatuses}
          setSelectedStatuses={setSelectedStatuses}
          dateRange={dateRange}
          setDateRange={setDateRange}
          sortOption={sortOption}
          setSortOption={setSortOption}
          appointments={appointments}
          onReset={handleReset}
        />

        {/* 🔹 Appointments Table */}
        <AppointmentsTable
          appointments={filteredAppointments}
          onView={handleOpenModal}
        />
      </motion.div>

      {/* ➕ Floating Add Button */}
      <FloatingAdd />

      {/* 📅 Appointment Modal */}
      <AppointmentModal
        open={modalOpen}
        appointment={selected}
        onClose={handleCloseModal}
      />
    </motion.div>
  );
}
