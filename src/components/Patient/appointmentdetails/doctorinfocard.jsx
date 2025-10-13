import React from "react";
import { motion } from "framer-motion";

const DoctorInfoCard = ({ doctor }) => {
  if (!doctor) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <img
        src={doctor.photo}
        alt={doctor.name}
        className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
      />
      <div className="text-center sm:text-left">
        <h3 className="text-2xl font-bold text-blue-700">{doctor.name}</h3>
        <p className="text-gray-600">{doctor.specialization}</p>
        <p className="text-sm text-gray-500">{doctor.hospital}</p>
        <p className="text-sm text-gray-500 mt-2">
          Experience:{" "}
          <span className="font-semibold text-blue-600">
            {doctor.experience}
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default DoctorInfoCard;
