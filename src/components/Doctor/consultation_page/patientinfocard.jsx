import { motion } from "framer-motion";
import { Calendar, Clock, Search } from "lucide-react";
import { Link } from "react-router-dom";

const PatientInfoCard = ({ summaryData }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      className="group relative w-full p-6 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:shadow-[0_0_45px_rgba(59,130,246,0.25)] transition-all duration-500"
    >
      {/* ✨ Soft animated glow border */}
      <motion.div
        className="absolute inset-0 rounded-3xl border border-blue-400/20 group-hover:border-blue-400/60 blur-[2px]"
        animate={{
          opacity: [0.5, 1, 0.5],
          boxShadow: [
            "0 0 10px rgba(59,130,246,0.2)",
            "0 0 25px rgba(59,130,246,0.5)",
            "0 0 10px rgba(59,130,246,0.2)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🧑‍⚕️ Patient Header */}
      <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5 border-b border-blue-100 pb-4">
        <motion.img
          src={summaryData.avatar}
          alt={summaryData.name}
          className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-500/50 shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 180 }}
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-all duration-300">
            {summaryData.name}
          </h2>
          <p className="text-sm font-semibold text-blue-600">
            {summaryData.condition}
          </p>
        </div>
      </div>

      {/* 📋 Patient Info */}
      <div className="space-y-3 text-sm">
        <motion.div whileHover={{ x: 5 }} className="text-gray-700 flex items-center">
          <Calendar size={16} className="mr-3 text-blue-400" />
          <span>
            DOB:{" "}
            <span className="font-medium ml-1 text-gray-900">
              {summaryData.dob}
            </span>
          </span>
        </motion.div>

        <motion.div whileHover={{ x: 5 }} className="text-gray-700 flex items-center">
          <Clock size={16} className="mr-3 text-blue-400" />
          <span>
            Last Visit:{" "}
            <span className="font-medium ml-1 text-gray-900">
              {summaryData.lastVisit}
            </span>
          </span>
        </motion.div>
      </div>

      {/* 🔗 Link Instead of Button */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="mt-6 w-full text-center"
      >
        <Link
          to="/doctor/patients"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg transition-all hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300"
        >
          <Search size={18} />
          View Full Patient Record
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default PatientInfoCard;
