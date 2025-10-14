import React, { useState } from "react";
import { motion } from "framer-motion";
import DoctorSidebar from "../../components/Doctor/doctorsidebar";
import DoctorTopbar from "../../components/Doctor/doctortopbar";
import DoctorStats from "../../components/Doctor/doctorstats";
import DoctorActionButtons from "../../components/Doctor/doctoractionbuttons";
import DoctorAppointmentCard from "../../components/Doctor/appointments_page/doctorappointmentcard";
import DoctorAppointmentDetailsModal from "../../components/Doctor/doctorappointmentdetialsmodal";
import { appointments } from "../../data/doctor/mockdata";

const DoctorDashboard = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 text-gray-800">
      {/* Sidebar */}
      <DoctorSidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <DoctorTopbar name="Dr. Arjun Mehta" />

        {/* Main Section */}
        <main className="p-6 space-y-8 overflow-y-auto">
          
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <DoctorStats />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <DoctorActionButtons />
          </motion.div>

          {/* Today's Appointments */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white/70 backdrop-blur-sm border border-blue-100 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-blue-800">
                Today’s Appointments
              </h2>
              <span className="text-sm text-gray-500">
                {appointments.length} Scheduled
              </span>
            </div>

            {appointments.length === 0 ? (
              <div className="text-center py-10 text-gray-500">
                No appointments scheduled for today
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {appointments.map((appt) => (
                  <DoctorAppointmentCard
                    key={appt.id}
                    appt={appt}
                    onViewDetails={() => setSelectedAppointment(appt)}
                  />
                ))}
              </div>
            )}
          </motion.section>
        </main>
      </div>

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <DoctorAppointmentDetailsModal
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
        />
      )}
    </div>
  );
};

export default DoctorDashboard;
