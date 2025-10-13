import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { appointments, doctors } from "../../data/patient/mockdata";
import Pageheader from "../../components/Common/pageheader";
import AppointmentHeader from "../../components/Patient/appointmentdetails/AppointmentHeader";
import DoctorInfoCard from "../../components/Patient/appointmentdetails/DoctorInfoCard";
import AppointmentInfo from "../../components/Patient/appointmentdetails/AppointmentInfo";
import AppointmentActions from "../../components/Patient/appointmentdetails/AppointmentActions";
import CancelAppointmentModal from "../../components/Patient/appointmentdetails/CancelAppointmentModal";
import EditAppointmentModal from "../../components/Patient/appointmentdetails/EditAppointmentModal";
import { motion } from "framer-motion";

const PatientAppointmentDetails = () => {
  const { id } = useParams();
  const [showCancel, setShowCancel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const appointment = appointments.find((a) => a.id === id);
  const doctor = doctors.find((d) => d.id === appointment?.doctorId);

  const handleCancel = () => setShowCancel(true);
  const handleEdit = () => setShowEdit(true);
  const handleJoin = () => alert("Joining meeting...");

  const handleConfirmCancel = () => {
    alert("Appointment cancelled successfully.");
    setShowCancel(false);
  };

  const handleSaveChanges = (updated) => {
    alert(`Updated Date: ${updated.date}, Slot: ${updated.slot}`);
    setShowEdit(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white p-6 sm:p-10">
      <Pageheader
        title="Appointment Details"
        subtitle="View and manage your booked consultation"
        breadcrumb={["Dashboard", "Appointments", "Details"]}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto backdrop-blur-xl bg-white/80 border border-blue-200 rounded-3xl shadow-2xl p-8 sm:p-10 mt-6"
      >
        <AppointmentHeader />

        <DoctorInfoCard doctor={doctor} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 border-t pt-6"
        >
          <AppointmentInfo appointment={appointment} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 border-t pt-6"
        >
          <AppointmentActions
            onCancel={handleCancel}
            onEdit={handleEdit}
            onJoin={handleJoin}
          />
        </motion.div>
      </motion.div>

      <CancelAppointmentModal
        show={showCancel}
        onClose={() => setShowCancel(false)}
        onConfirm={handleConfirmCancel}
      />

      <EditAppointmentModal
        show={showEdit}
        appointment={appointment}
        onClose={() => setShowEdit(false)}
        onSave={handleSaveChanges}
      />
    </div>
  );
};

export default PatientAppointmentDetails;
