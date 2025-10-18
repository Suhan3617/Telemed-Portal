import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
// Assume you've imported the appointments data
import { appointments } from '../../../data/doctor/mockdata'; 

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

const getBadgeClasses = (type) =>
  type.includes("Video") 
    ? "bg-blue-100 text-blue-700 border border-blue-200"
    : "bg-green-100 text-green-700 border border-green-200";

const upcomingappointments = () => {
  const upcomingAppts = appointments.slice(0, 4); // Only show top 4 for dashboard view

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b pb-2">Upcoming Appointments</h3>
      <motion.div 
        className="overflow-x-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <table className="min-w-full text-left">
          <thead className="text-gray-500 uppercase text-sm border-b-2 border-blue-100">
            <tr>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Type</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {upcomingAppts.map((appt) => (
                <motion.tr
                  key={appt.id}
                  variants={item}
                  whileHover={{ scale: 1.01, backgroundColor: 'rgba(59, 130, 246, 0.05)', boxShadow: '0 2px 10px rgba(59, 130, 246, 0.1)' }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="border-b border-gray-100 cursor-pointer"
                >
                  <td className="px-4 py-4 flex items-center gap-3">
                    <img 
                      src={appt.patientPhoto} 
                      alt={appt.patientName} 
                      className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 p-[2px]" 
                    />
                    <span className="font-semibold text-gray-800">{appt.patientName}</span>
                  </td>
                  <td className="px-4 py-4 text-gray-600 font-mono">{appt.time}</td>
                  <td className="px-4 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${getBadgeClasses(appt.type)}`}>
                      {appt.type.split(' ')[0]}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}

export default upcomingappointments
