import React, { useState, useMemo } from "react";
import { appointments, patients } from "../../data/doctor/mockdata";
import Pageheader from "../../components/Common/pageheader";
import Doctorfilterpanel from "../../components/Doctor/appointments_page/doctorfilterpanel";
import DoctorAppointmentCard from "../../components/Doctor/appointments_page/doctorappointmentcard";
import Doctordetailsmodal from "../../components/Doctor/appointments_page/doctordetailsmodal";
import { motion } from "framer-motion";

const DoctorAppointments = () => {
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
  const [range, setRange] = useState("Upcoming");
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const list = useMemo(() => {
    return appointments.filter((a) => {
      const matchQ = a.patientName.toLowerCase().includes(q.toLowerCase());
      const matchType = type === "All" || a.type === type;
      return matchQ && matchType;
    });
  }, [q, type, range]);

  const openDetails = (appt) => {
    const patient = patients.find((p) => p.id === appt.patientId);
    const patientPrescriptions = appt.prescriptions.filter(
      (pr) => pr.patientId === appt.patientId
    );
    setCurrent({ appt, patient, patientPrescriptions });
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white p-6 sm:p-10">
      <Pageheader
        title="Appointments Records"
        subtitle="Manage and view your patient appointments"
        breadcrumb={["Dashboard", "Appointments"]}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Doctorfilterpanel q={q} setQ={setQ} type={type} setType={setType} range={range} setRange={setRange} />
      </motion.div>

      <motion.div
        layout
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {list.map((a, i) => (
          <DoctorAppointmentCard
            key={i}
            appt={a}
            onViewDetails={() => openDetails(a)}
          />
        ))}
      </motion.div>

      {open && (
        <Doctordetailsmodal
          open={open}
          onClose={() => setOpen(false)}
          current={current}
        />
      )}
    </div>
  );
};

export default DoctorAppointments;
