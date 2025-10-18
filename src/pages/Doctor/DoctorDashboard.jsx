// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { CalendarDays, Users, MessageCircle, ClipboardList } from "lucide-react";

// import DoctorSidebar from "../../components/Doctor/doctorsidebar.jsx";
// import DoctorTopbar from "../../components/Doctor/doctortopbar.jsx";
// import DoctorStats from "../../components/Doctor/doctorstats.jsx";
// import DoctorActionButtons from "../../components/Doctor/doctoractionbuttons.jsx";
// import DoctorAppointmentCard from "../../components/Doctor/appointments_page/doctorappointmentcard.jsx";
// import DoctorAppointmentDetailsModal from "../../components/Doctor/doctorappointmentdetialsmodal.jsx";
// import { appointments } from "../../data/doctor/mockdata.js";

// const DoctorDashboard = () => {
//   const [SelectedAppointment, setSelectedAppointment] = useState(null);

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">

//       {/* Main Section */}
//       <div className="flex flex-col flex-1">

//         <main className="p-6 space-y-10">

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.25 }}
//           >
//             <DoctorStats />
//           </motion.div>

//           {/* Action Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.25 }}
//           >
//             <DoctorActionButtons />
//           </motion.div>

//           {/* Appointments Section */}
//           <motion.section
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.25, duration: 0.25, ease: "easeOut" }}
//             className="bg-white/80 backdrop-blur-sm border border-blue-100 p-6 rounded-2xl shadow-lg"
//           >
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
//                 <ClipboardList className="text-blue-600 w-5 h-5" /> Today’s Appointments
//               </h2>
//               <span className="text-sm text-gray-500 flex items-center gap-1">
//                 <Users size={15} /> {appointments.length} Scheduled
//               </span>
//             </div>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {appointments.map((a) => (
//                 <motion.div
//                   key={a.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.25 }}
//                   whileHover={{
//                     scale: 1.04,
//                     boxShadow: "0px 4px 15px rgba(59,130,246,0.25)",
//                   }}
//                 >
//                   <DoctorAppointmentCard
//                     appt={a}
//                     onViewDetails={() => setSelectedAppointment(a)}
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>
//         </main>
//       </div>

//       {/* Appointment Modal */}
//       {SelectedAppointment && (
//         <DoctorAppointmentDetailsModal
//           appointment={SelectedAppointment}
//           onClose={() => setSelectedAppointment(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default DoctorDashboard;


import React from 'react';
import Appointmentstatscard from '../../components/Doctor/dashboard_page/appointmentstatscard';
import Upcomingappointments from '../../components/Doctor/dashboard_page/upcomingappointments';
import Teleconsultationtrend from '../../components/Doctor/dashboard_page/teleconsultationtrend';
import Messagepanel from '../../components/Doctor/dashboard_page/messagepanel';
import { motion } from 'framer-motion';
// Assume you've imported appointments, records, etc.
import { appointments , records } from '../../data/doctor/mockdata';

// Simple placeholder icons
const icons = {
  Appointments: (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  LabResults: (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16h.01" /></svg>,
  FollowUps: (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

const DoctorDashboard = () => {
   // Calculated Mock Data
  const todayAppointments = appointments.filter(a => a.status === "Scheduled").length;
  const pendingLabResults = records.filter(r => r.status === "Pending").length;
  const upcomingFollowUps = appointments.filter(a => a.status === "Scheduled" && a.type.includes("Follow-up")).length || 3; // Placeholder 3

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* Stats Cards (Full width on large screens) */}
        <div className="md:col-span-3 lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Appointmentstatscard 
            label="Today's Appointments" 
            value={todayAppointments} 
            icon={icons.Appointments} 
          />
          <Appointmentstatscard 
            label="Pending Lab Results" 
            value={pendingLabResults} 
            icon={icons.LabResults} 
          />
          <Appointmentstatscard 
            label="Upcoming Follow-ups" 
            value={upcomingFollowUps} 
            icon={icons.FollowUps} 
          />
        </div>

        {/* Appointments Table (2/3 width) */}
        <div className="md:col-span-2 lg:col-span-2">
          <Upcomingappointments />
        </div>

        {/* Messages Panel (1/3 width) */}
        <div className="md:col-span-1 lg:col-span-1">
          <Messagepanel />
        </div>
        
        {/* Calendar (1/4 width - Placeholder, but in the screenshot's position) */}
        {/* This component is omitted for brevity but would sit in the last column on lg screens */}
        <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 md:col-span-1 lg:col-span-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
        >
            <h3 className="text-xl font-bold text-blue-700 mb-4">Appointment Calendar</h3>
            {/* Calendar component would go here (e.g., a simple view of March 2024) */}
            <div className='flex items-center justify-center h-48 bg-blue-50/50 rounded-lg text-gray-400 font-semibold'>
                Calendar View Placeholder 🗓️
            </div>
        </motion.div>


        {/* Teleconsultation Trends Chart (Full width) */}
        <div className="lg:col-span-4">
          <Teleconsultationtrend />
        </div>

      </div>
    </div>
  );
}

export default DoctorDashboard

