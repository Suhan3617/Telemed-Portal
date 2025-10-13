import React from "react";
import { CalendarClock, FileText, Video } from "lucide-react";
import { motion } from "framer-motion";

const DoctorAppointmentCard = ({ appt, onViewDetails }) => {
  // status badge colors
  const statusColor =
    appt.status === "Scheduled"
      ? "yellow"
      : appt.status === "Completed"
      ? "green"
      : "red";

  // 🔹 Inner reusable Badge component
  const Badge = ({ children, color = "blue" }) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-700",
      green: "bg-green-100 text-green-700",
      yellow: "bg-yellow-100 text-yellow-700",
      red: "bg-red-100 text-red-700",
      gray: "bg-gray-100 text-gray-700",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${colorMap[color] || colorMap.blue}`}
      >
        {children}
      </span>
    );
  };

  // 🔹 Inner reusable Button component
  const Button = ({ children, className = "", ...props }) => (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 active:scale-[0.98] shadow-md hover:shadow-lg transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/90 backdrop-blur-md border border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Patient Info Section */}
      <div className="flex items-center gap-4">
        <img
          src={appt.patientPhoto}
          alt={appt.patientName}
          className="w-16 h-16 rounded-full border-4 border-blue-200 shadow-lg"
        />
        <div>
          <div className="font-bold text-blue-700 text-lg">{appt.patientName}</div>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <CalendarClock size={15} />
            {appt.date} • {appt.time}
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 mt-5">
        <Badge color="blue">{appt.type}</Badge>
        <Badge color={statusColor}>{appt.status}</Badge>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        {appt.type === "Video Consultation" && (
          <Button className="w-full flex items-center gap-2 justify-center">
            <Video size={18} /> Start VC
          </Button>
        )}
        <Button
          onClick={onViewDetails}
          className="bg-gray-100 text-blue-600 hover:bg-blue-50 hover:text-blue-700 border border-blue-200 font-medium flex items-center justify-center gap-2"
        >
          <FileText size={18} /> Details
        </Button>
      </div>
    </motion.div>
  );
};

export default DoctorAppointmentCard;
