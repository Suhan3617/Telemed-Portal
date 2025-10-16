import { ClipboardList, FileText, Video } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const actions = [
  {
    label: "Start Consultation",
    icon: <Video size={20} />,
    gradient: "from-blue-500 to-blue-600",
    path: "/doctor/consultation",
  },
  {
    label: "Write Prescription",
    icon: <FileText size={20} />,
    gradient: "from-blue-600 to-indigo-500",
    path: "/doctor/prescription",
  },
  {
    label: "View Medical Records",
    icon: <ClipboardList size={20} />,
    gradient: "from-indigo-500 to-blue-500",
    path: "/doctor/reports",
  },
];

const DoctorActionButtons = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl shadow-sm border border-blue-100">

      <div className="flex flex-wrap gap-4">
        {actions.map((a, i) => (
          <motion.div
            key={a.label}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="flex-1 min-w-[200px]"
          >
            <Link
              to={a.path}
              className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-md bg-gradient-to-r ${a.gradient} text-white hover:shadow-lg transition-all duration-200`}
            >
              <div className="p-2 bg-white/20 rounded-lg">{a.icon}</div>
              <span className="font-semibold tracking-wide">{a.label}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DoctorActionButtons;
