import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays } from "lucide-react";

import SummaryCards from "../../components/Doctor/appointments_page/summarycard";
import FiltersBar from "../../components/Doctor/appointments_page/appointmentfilterbar";
import AppointmentsTable from "../../components/Doctor/appointments_page/appointmenttable";
import AppointmentModal from "../../components/Doctor/appointments_page/appointmentmodal";
import FloatingAdd from "../../components/Doctor/appointments_page/floatingadd";
import PremiumHeader from "../../components/Doctor/allpagesheader";
import NewAppointmentModal from "../../components/Doctor/appointments_page/newappointmentmodal";

// mock data
import { appointments as mockAppointments } from "../../data/doctor/mockdata";

export default function DoctorAppointmentsPage() {
  const location = useLocation();

  // --------------------- 🔹 States ---------------------
  const [appointments, setAppointments] = useState(mockAppointments);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [dateRange, setDateRange] = useState("Today");
  const [sortOption, setSortOption] = useState("By Time");
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // --------------------- 🔹 URL & State Listener ---------------------
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get("search");
    const triggerModal = params.get("triggerModal");

    // 1. Sync search if provided in URL
    if (searchParam) {
      setSearchTerm(searchParam);
      setDateRange("All");
    }

    // 2. Open Modal if triggered from Dashboard
    if (triggerModal === "true") {
      setIsAddModalOpen(true);
    }
  }, [location.search]);

  // --------------------- 🔹 Date Utility ---------------------
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  const isInRange = (dateStr) => {
    const date = new Date(dateStr);
    if (dateRange === "Today")
      return date.toDateString() === today.toDateString();
    if (dateRange === "This Week") return date >= startOfWeek && date <= today;
    if (dateRange === "All") return true;
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
          a.id.toLowerCase().includes(term),
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

  // --------------------- 🔹 Handlers ---------------------
  const handleReset = () => {
    setSearchTerm("");
    setSelectedStatuses([]);
    setDateRange("Today");
    setSortOption("By Time");
  };

  const handleOpenModal = (appointment) => {
    setSelected(appointment);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelected(null);
  };

  const handleAddNewAppointment = (newApp) => {
    setAppointments([newApp, ...appointments]);
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 rounded-3xl text-slate-900 overflow-hidden"
    >
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
        <motion.div variants={fadeInUp}>
          <SummaryCards appointments={appointments} />
        </motion.div>

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
        onClick={() => setIsAddModalOpen(true)}
        className="cursor-pointer"
      >
        <FloatingAdd />
      </motion.div>

      {/* 📅 New Appointment Modal with Pre-selection Logic */}
      <NewAppointmentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddNewAppointment}
        preSelectedData={location.state?.preSelectedPatient} // 👈 Dashboard state passed here
      />

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
          >
            <AppointmentModal
              open={modalOpen}
              appointment={selected}
              onClose={handleCloseModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}