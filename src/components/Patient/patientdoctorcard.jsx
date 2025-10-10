import React from 'react'
import { motion } from "framer-motion"; 

const patientdoctorcard = ({ doc, onBook }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-blue-100"
    >
      <div className="flex flex-col items-center">
        <img
          src={doc.photo}
          alt={doc.name}
          className="w-20 h-20 rounded-full border-4 border-blue-200 shadow-sm"
        />
        <h2 className="mt-4 text-lg font-semibold text-gray-800 text-center">
          {doc.name}
        </h2>
        <p className="text-sm text-blue-600 font-medium">{doc.specialization}</p>
        <p className="text-xs text-gray-500 mt-1">{doc.experience}</p>
        <p className="text-xs text-gray-400">{doc.hospital}</p>

        <button
          onClick={onBook}
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-xl font-semibold shadow hover:from-blue-600 hover:to-blue-700 transition-all"
        >
          Book Appointment
        </button>
      </div>
    </motion.div>
  );
}

export default patientdoctorcard
