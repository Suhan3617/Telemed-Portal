import React from "react";
import { motion } from "framer-motion";
import { BarChart3, FlaskConical, Image, FileText } from "lucide-react";

const DoctorStatsBar = ({ stats }) => {
  const items = [
    { label: "Total Reports", value: stats.total, icon: BarChart3, color: "text-blue-600" },
    { label: "Lab Results", value: stats.lab, icon: FlaskConical, color: "text-green-600" },
    { label: "Imaging", value: stats.imaging, icon: Image, color: "text-indigo-600" },
    { label: "Prescriptions", value: stats.prescription, icon: FileText, color: "text-blue-500" },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {items.map(({ label, value, icon: Icon, color }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 shadow hover:shadow-xl border border-blue-100 flex items-center justify-between"
        >
          <div>
            <p className="text-sm text-gray-500">{label}</p>
            <h3 className="text-xl font-bold text-blue-700">{value}</h3>
          </div>
          <Icon className={`${color}`} size={28} />
        </motion.div>
      ))}
    </div>
  );
};

export default DoctorStatsBar;
