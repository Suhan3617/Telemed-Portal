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
    <div className="min-h-screen bg-gray-50 p-6">
      <Pageheader
        title="Appointment Details"
        subtitle="View and manage your booked consultation"
        breadcrumb={["Dashboard", "Appointments", "Details"]}
      />

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
        <AppointmentHeader />

        <DoctorInfoCard doctor={doctor} />

        <div className="mt-6 border-t pt-4">
          <AppointmentInfo appointment={appointment} />
        </div>

        <div className="mt-8 border-t pt-4">
          <AppointmentActions
            onCancel={handleCancel}
            onEdit={handleEdit}
            onJoin={handleJoin}
          />
        </div>
      </div>

      {/* Modals */}
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
