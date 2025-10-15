import React from "react";
import { motion } from "framer-motion";

const PrescriptionPreview = ({ patient, medicines, notes }) => {
  if (!patient)
    return (
      <motion.div
        className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 text-center text-blue-600 font-semibold shadow-xl border border-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        👩‍⚕️ Select a patient to start prescription
      </motion.div>
    );

  return (
    <motion.div
      className="bg-gradient-to-br from-blue-50/70 to-blue-100/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200 p-6 sticky top-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center border-b border-blue-200 pb-2">
        📝 Prescription Preview
      </h3>

      <div className="text-sm text-gray-700 space-y-2 mb-4">
        <p><strong>Patient:</strong> {patient.name}</p>
        <p><strong>Age:</strong> {patient.age} | <strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
      </div>

      <div className="space-y-3 border-t border-blue-200 pt-3">
        {medicines.map(
          (med, i) =>
            med.name && (
              <motion.div
                key={i}
                className="bg-blue-50/50 rounded-2xl p-3 shadow-sm border border-blue-200 text-sm hover:shadow-md transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <p className="font-semibold text-blue-700">{med.name}</p>
                <p>
                  {med.strength} | {med.dose} | {med.frequency} | {med.duration}
                </p>
                {med.instructions && <p className="italic text-gray-600">{med.instructions}</p>}
              </motion.div>
            )
        )}
      </div>

      {notes && (
        <div className="mt-4 border-t border-blue-200 pt-3">
          <h4 className="font-semibold text-blue-600">Doctor's Notes:</h4>
          <p className="text-sm text-gray-700">{notes}</p>
        </div>
      )}

      <div className="mt-6 text-right text-blue-700 font-medium">
        — Dr. John (MBBS, MD)
      </div>
    </motion.div>
  );
};

export default PrescriptionPreview;
