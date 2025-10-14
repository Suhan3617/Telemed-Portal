import React, { useState } from "react";
import { motion } from "framer-motion";
import DoctorSidebar from "../../components/Doctor/doctorsidebar.jsx";
import DoctorTopbar from "../../components/Doctor/doctortopbar.jsx";
import Doctorstats from "../../components/Doctor/doctorstats.jsx";
import DoctorAppointmentCard from "../../components/Doctor/appointments_page/doctorappointmentcard.jsx";
import Doctoractionbuttons from "../../components/Doctor/doctoractionbuttons.jsx";
import Doctorappointmentdetialsmodal from "../../components/Doctor/doctorappointmentdetialsmodal.jsx";
import Pageheader from "../../components/Common/pageheader.jsx";
import { appointments } from "../../data/doctor/mockdata.js";
import { CalendarDays } from "lucide-react";

const DoctorDashboard = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-blue-400 to-blue-100">
      {/* Sidebar */}
      <DoctorSidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <DoctorTopbar name="Dr. Smith" />

        <main className="p-6 space-y-10">
          

          {/* ✅ Doctor Stats Section Fixed */}
          <section className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md border border-blue-200">
            <Doctorstats />
          </section>

          {/* Action Buttons */}
          <Doctoractionbuttons />

          {/* Appointments Section */}
          <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6 rounded-xl shadow">
            <div className="flex items-center gap-3 mb-4">
              <CalendarDays className="text-blue-600 w-6 h-6" />
              <h2 className="text-lg font-semibold text-gray-800">
                Today's Appointments
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {appointments.map((a) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <DoctorAppointmentCard
                    appt={a}
                    onViewDetails={() => setSelectedAppointment(a)}
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <Doctorappointmentdetialsmodal
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
        />
      )}
    </div>
  );
};

export default DoctorDashboard;
