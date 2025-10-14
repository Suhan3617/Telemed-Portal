import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, FileText, MessageCircle, Users } from "lucide-react";

const DoctorStats = () => {
  const stats = [
    {
      title: "Today’s Appointments",
      value: 5,
      icon: <CalendarDays className="w-6 h-6 text-blue-600" />,
      gradient: "from-blue-500/10 to-blue-100",
    },
    {
      title: "Pending Prescriptions",
      value: 3,
      icon: <FileText className="w-6 h-6 text-yellow-600" />,
      gradient: "from-yellow-100 to-yellow-50",
    },
    {
      title: "Unread Messages",
      value: 8,
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      gradient: "from-green-100 to-green-50",
    },
    {
      title: "Recent Patients",
      value: 12,
      icon: <Users className="w-6 h-6 text-purple-600" />,
      gradient: "from-purple-100 to-purple-50",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ scale: 1.04 }}
          className={`bg-gradient-to-br ${s.gradient} rounded-2xl p-5 shadow-md hover:shadow-lg transition`}
        >
          <div className="flex items-center justify-between">
            <div className="p-3 bg-white/70 rounded-full shadow-inner">{s.icon}</div>
            <div className="text-3xl font-extrabold text-gray-800">{s.value}</div>
          </div>
          <div className="mt-3 text-sm font-semibold text-gray-600">{s.title}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default DoctorStats;
