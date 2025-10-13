import React from "react";
import { motion } from "framer-motion";

const AppointmentInfo = ({ appointment }) => {
  if (!appointment)
    return <p className="text-red-500">No appointment data found.</p>;

  const statusColor =
    appointment.status === "Completed"
      ? "bg-green-500"
      : appointment.status === "Scheduled"
      ? "bg-blue-500"
      : "bg-red-500";

  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4 text-gray-700">
      <p>
        <span className="font-semibold">Date:</span> {appointment.date}
      </p>
      <p>
        <span className="font-semibold">Time:</span> {appointment.time}
      </p>
      <p>
        <span className="font-semibold">Consultation Type:</span>{" "}
        {appointment.type}
      </p>
      <p>
        <span className="font-semibold">Status:</span>{" "}
        <span
          className={`px-3 py-1 rounded-full text-white text-sm ${statusColor}`}
        >
          {appointment.status}
        </span>
      </p>
      <p>
        <span className="font-semibold">Notes:</span>{" "}
        {appointment.notes || "—"}
      </p>
    </motion.div>
  );
};

export default AppointmentInfo;
