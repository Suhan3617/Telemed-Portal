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
    if (dateRange === "Today")
      return date.toDateString() === today.toDateString();
    if (dateRange === "This Week") return date >= startOfWeek && date <= today;
    return true;
  };

  // --------------------- 🔹 Filter & Sort Logic ---------------------
  const filteredAppointments = useMemo(() => {
    let data = [...appointments];
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      data = data.filter(
        (a) =>
          a.patientName.toLowerCase().includes(term) ||
          a.id.toLowerCase().includes(term)
      );
    }
    data = data.filter((a) => isInRange(a.date));
    if (selectedStatuses.length > 0) {
      data = data.filter((a) => selectedStatuses.includes(a.status));
    }
    switch (sortOption) {
      case "By Patient Name":
        data.sort((a, b) => a.patientName.localeCompare(b.patientName));
        break;
      case "By Appointment Type":
        data.sort((a, b) => a.type.localeCompare(b.type));
        break;
      default:
        data.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    return data;
  }, [appointments, searchTerm, selectedStatuses, dateRange, sortOption]);

  // --------------------- 🔹 Reset Filters ---------------------
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
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelected(null);
  };

  // --------------------- 🔹 Motion Variants ---------------------
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // --------------------- 🔹 Render ---------------------
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 rounded-3xl text-slate-900 overflow-hidden"
    >
      {/* 🔷 Premium Header */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        <PremiumHeader
          breadcrumb="Doctor Dashboard / Appointments"
          icon={<CalendarDays size={28} />}
          title="Appointments Overview"
          subtitle="Manage, review, and track your patients’ appointments efficiently."
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="space-y-8 sm:space-y-10 mt-6"
      >
        {/* 🔹 Summary Cards */}
        <motion.div variants={fadeInUp}>
          <SummaryCards appointments={appointments} />
        </motion.div>

        {/* 🔹 Filter Bar */}
        <motion.div variants={fadeInUp}>
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
        </motion.div>

        {/* 🔹 Appointments Table */}
        <motion.div variants={fadeInUp}>
          <AppointmentsTable
            appointments={filteredAppointments}
            onView={handleOpenModal}
          />
        </motion.div>
      </motion.div>

      {/* ➕ Floating Add Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <FloatingAdd />
      </motion.div>

      {/* 📅 Appointment Modal */}
      {modalOpen && (
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AppointmentModal
            open={modalOpen}
            appointment={selected}
            onClose={handleCloseModal}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
