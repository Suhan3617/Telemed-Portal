import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, MessageCircle, ClipboardList } from "lucide-react";

import DoctorSidebar from "../../components/Doctor/doctorsidebar.jsx";
import DoctorTopbar from "../../components/Doctor/doctortopbar.jsx";
import DoctorStats from "../../components/Doctor/doctorstats.jsx";
import DoctorActionButtons from "../../components/Doctor/doctoractionbuttons.jsx";
import DoctorAppointmentCard from "../../components/Doctor/appointments_page/doctorappointmentcard.jsx";
import DoctorAppointmentDetailsModal from "../../components/Doctor/doctorappointmentdetialsmodal.jsx";
import { appointments } from "../../data/doctor/mockdata.js";

const DoctorDashboard = () => {
  const [SelectedAppointment, setSelectedAppointment] = useState(null);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">

      {/* Main Section */}
      <div className="flex flex-col flex-1">

        <main className="p-6 space-y-10">

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.25 }}
          >
            <DoctorStats />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.25 }}
          >
            <DoctorActionButtons />
          </motion.div>

          {/* Appointments Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.25, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-sm border border-blue-100 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
                <ClipboardList className="text-blue-600 w-5 h-5" /> Today’s Appointments
              </h2>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Users size={15} /> {appointments.length} Scheduled
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {appointments.map((a) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0px 4px 15px rgba(59,130,246,0.25)",
                  }}
                >
                  <DoctorAppointmentCard
                    appt={a}
                    onViewDetails={() => setSelectedAppointment(a)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>
      </div>

      {/* Appointment Modal */}
      {SelectedAppointment && (
        <DoctorAppointmentDetailsModal
          appointment={SelectedAppointment}
          onClose={() => setSelectedAppointment(null)}
        />
      )}
    </div>
  );
};

export default DoctorDashboard;
