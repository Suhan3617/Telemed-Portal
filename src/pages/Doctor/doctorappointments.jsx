import React, { useState, useMemo } from "react";
import SummaryCards from "../../components/Doctor/appointments_page/summarycard";
import FiltersBar from "../../components/Doctor/appointments_page/appointmentfilterbar";
import AppointmentsTable from "../../components/Doctor/appointments_page/appointmenttable";
import AppointmentModal from "../../components/Doctor/appointments_page/appointmentmodal";
import FloatingAdd from "../../components/Doctor/appointments_page/floatingadd";

// mock data (replace with API)
import { appointments as mockAppointments } from "../../data/doctor/mockdata.js";
export default function DoctorAppointmentsPage() {
  const [appointments] = useState(mockAppointments);
  const [filters, setFilters] = useState({
    range: "today",
    status: "all",
    q: "",
  });
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const todayISO = new Date().toISOString().split("T")[0];

  const filtered = useMemo(() => {
    let list = appointments;
    if (filters.range === "today")
      list = list.filter((a) => a.date === todayISO);
    if (filters.status !== "all")
      list = list.filter((a) => a.status === filters.status);
    if (filters.q)
      list = list.filter(
        (a) =>
          a.patientName.toLowerCase().includes(filters.q.toLowerCase()) ||
          a.id.includes(filters.q)
      );
    return list;
  }, [appointments, filters, todayISO]);

  function openModal(appointment) {
    setSelected(appointment);
    setModalOpen(true);
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-white to-blue-50 text-slate-900">
      {/* Header is provided by doctor layout (title, subtitle, breadcrumbs) */}

      <div className="space-y-6">
        <SummaryCards appointments={appointments} />

        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Appointments
          </h2>
        </div>

        <FiltersBar filters={filters} setFilters={setFilters} />

        <AppointmentsTable appointments={filtered} onView={openModal} />

      </div>

      <FloatingAdd />

      <AppointmentModal
        open={modalOpen}
        appointment={selected || null}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
