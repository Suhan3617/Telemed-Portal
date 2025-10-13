import React from 'react'
import { CalendarClock, FileText, Video } from "lucide-react";
import { motion } from "framer-motion";
import Badge from "../Common/Badge";
import Button from "../Common/Button";

const doctorappointmentcard = ({ appt, onViewDetails }) => {
  const statusColor =
    appt.status === "Scheduled"
      ? "yellow"
      : appt.status === "Completed"
      ? "green"
      : "red";

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl shadow-md hover:shadow-2xl p-5 transition-all duration-300 flex flex-col justify-between"
    >
      <div className="flex items-center gap-3">
        <img
          src={appt.patientPhoto}
          alt={appt.patientName}
          className="w-14 h-14 rounded-full border-4 border-blue-200 shadow-lg"
        />
        <div>
          <div className="font-bold text-blue-700">{appt.patientName}</div>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <CalendarClock size={14} />
            {appt.date} • {appt.time}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge color="blue">{appt.type}</Badge>
        <Badge color={statusColor}>{appt.status}</Badge>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        {appt.type === "Video Consultation" && (
          <Button className="w-full flex items-center gap-1 justify-center">
            <Video size={16} /> Start VC
          </Button>
        )}
        <button
          onClick={onViewDetails}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center gap-1 transition-all"
        >
          <FileText size={16} /> Details
        </button>
      </div>
    </motion.div>
  );
}

export default doctorappointmentcard
