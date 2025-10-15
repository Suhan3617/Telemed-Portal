import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const PrescriptionSummary = ({ patient, medicines, notes, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-gradient-to-br from-blue-50/70 to-blue-100/70 backdrop-blur-xl rounded-3xl shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 p-8 border border-blue-200 relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-500 hover:text-blue-700 transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center border-b border-blue-200 pb-3">
          🧾 Prescription Summary
        </h2>

        {/* Patient Details */}
        <div className="text-sm text-gray-700 mb-4 space-y-1">
          <p><strong>Patient:</strong> {patient.name}</p>
          <p><strong>Age:</strong> {patient.age} | <strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        </div>

        {/* Medicines */}
        <div className="space-y-3 border-t border-blue-200 pt-3 mb-3">
          {medicines.map(
            (m, i) =>
              m.name && (
                <motion.div
                  key={i}
                  className="bg-gradient-to-r from-blue-50/60 to-blue-100/60 rounded-2xl p-4 border border-blue-200 shadow-sm hover:shadow-md transition-all text-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-semibold text-blue-700">{m.name}</p>
                  <p>
                    {m.strength} | {m.dose} | {m.frequency} | {m.duration}
                  </p>
                  {m.instructions && <p className="italic text-gray-600">{m.instructions}</p>}
                </motion.div>
              )
          )}
        </div>

        {/* Notes */}
        {notes && (
          <div className="border-t border-blue-200 pt-3 mb-3">
            <h4 className="font-semibold text-blue-600">Doctor's Notes:</h4>
            <p className="text-sm text-gray-700">{notes}</p>
          </div>
        )}

        {/* Doctor Signature */}
        <div className="text-right text-blue-700 font-medium mt-6">
          — Dr. John (MBBS, MD)
        </div>

        <div className="mt-6 text-center">
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-7 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrescriptionSummary;
