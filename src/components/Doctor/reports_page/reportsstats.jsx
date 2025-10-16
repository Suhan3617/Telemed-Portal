import React from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const DoctorLabCard = ({ record }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white/70 backdrop-blur-xl border border-blue-100 p-5 rounded-2xl shadow hover:shadow-xl transition flex flex-col justify-between h-48"
  >
    <div>
      <div className="flex items-center gap-2">
        <FileText className="text-blue-500" size={20} />
        <h3 className="font-semibold text-lg text-blue-800 truncate">
          {record.title}
        </h3>
      </div>
      <p className="text-sm text-gray-600 mt-1">
        {record.patientName} • {record.date}
      </p>
      <span className="text-xs inline-block mt-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">
        {record.type}
      </span>
    </div>

    <div className="flex gap-3 mt-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="flex-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-xl font-medium hover:bg-blue-100 transition"
      >
        View
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="flex items-center justify-center gap-1 px-4 py-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
      >
        <Download size={16} /> Download
      </motion.button>
    </div>
  </motion.div>
);

export default DoctorLabCard;
