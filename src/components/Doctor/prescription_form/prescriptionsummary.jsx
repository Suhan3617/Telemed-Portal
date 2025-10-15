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
        className="bg-white rounded-2xl shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 p-8 border border-blue-100 relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-blue-500 hover:text-blue-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          🧾 Prescription Summary
        </h2>

        {/* Patient details */}
        <div className="text-sm text-gray-700 mb-4 space-y-1">
          <p>
            <strong>Patient:</strong> {patient.name}
          </p>
          <p>
            <strong>Age:</strong> {patient.age} | <strong>Gender:</strong> {patient.gender}
          </p>
          <p>
            <strong>Date:</strong> {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Medicines */}
        <div className="border-t pt-3 mb-3 space-y-2">
          {medicines.map(
            (m, i) =>
              m.name && (
                <div
                  key={i}
                  className="bg-blue-50/70 rounded-lg p-3 border border-blue-100 text-sm"
                >
                  <p className="font-semibold text-blue-700">{m.name}</p>
                  <p>
                    {m.strength} | {m.dose} | {m.frequency} | {m.duration}
                  </p>
                  {m.instructions && (
                    <p className="italic text-gray-600">{m.instructions}</p>
                  )}
                </div>
              )
          )}
        </div>

        {notes && (
          <div className="border-t pt-3 mb-3">
            <h4 className="font-semibold text-blue-600">Doctor's Notes:</h4>
            <p className="text-sm text-gray-700">{notes}</p>
          </div>
        )}

        <div className="text-right text-blue-700 font-medium mt-6">
          — Dr. John (MBBS, MD)
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrescriptionSummary;
