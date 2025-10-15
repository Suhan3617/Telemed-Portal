import React from "react";
import { motion } from "framer-motion";
import { X, Tablet, Zap, Droplet, Info } from "lucide-react";

// Badge generator (static, no animation)
const getMedicineBadge = (type) => {
  let badgeStyle = "";
  let icon = null;

  switch (type?.toLowerCase()) {
    case "tablet":
      badgeStyle = "bg-gradient-to-r from-purple-500 to-purple-600 text-white";
      icon = <Tablet className="w-4 h-4" />;
      break;
    case "syrup":
      badgeStyle = "bg-gradient-to-r from-blue-500 to-blue-600 text-white";
      icon = <Droplet className="w-4 h-4" />;
      break;
    case "injection":
      badgeStyle = "bg-gradient-to-r from-red-500 to-red-600 text-white";
      icon = <Zap className="w-4 h-4" />;
      break;
    case "ointment":
    case "cream":
      badgeStyle = "bg-gradient-to-r from-green-500 to-green-600 text-white";
      icon = <Droplet className="w-4 h-4" />;
      break;
    default:
      badgeStyle = "bg-gray-500 text-white";
      icon = <Info className="w-4 h-4" />;
  }

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${badgeStyle}`}>
      {icon} {type || "Other"}
    </span>
  );
};

const PrescriptionSummary = ({ patient, medicines, notes, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-xl rounded-3xl shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 p-8 border border-blue-200 relative"
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

        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center border-b border-blue-200 pb-3">
          🧾 Prescription Summary
        </h2>

        {/* Patient Details */}
        <div className="bg-blue-50/70 rounded-2xl p-4 mb-4 shadow-md border border-blue-200 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
          <p className="flex items-center gap-1 text-blue-900 font-semibold">👤 {patient.name}</p>
          <p className="flex items-center gap-1 text-blue-800">📅 {new Date().toLocaleDateString()}</p>
          <p className="flex items-center gap-1 text-blue-800">
            {patient.gender === "Male" ? "♂️" : "♀️"} {patient.age} yrs
          </p>
        </div>

        {/* Medicines */}
        <div className="space-y-3 border-t border-blue-200 pt-3 mb-3">
          {medicines.map(
            (m, i) =>
              m.name && (
                <div
                  key={i}
                  className="bg-white/95 rounded-3xl p-4 border border-blue-200 shadow-md hover:shadow-lg transition-all text-sm"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <p className="font-bold text-gray-900 text-lg flex items-center gap-2">
                      {m.name} {getMedicineBadge(m.type)}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-2 text-gray-800 text-sm">
                    <p><strong>Strength:</strong> {m.strength || "-"}</p>
                    <p><strong>Dose:</strong> {m.dose || "-"}</p>
                    <p><strong>Frequency:</strong> {m.frequency || "-"}</p>
                    <p><strong>Duration:</strong> {m.duration || "-"}</p>
                    {m.instructions && (
                      <p className="col-span-2 md:col-span-1 italic text-gray-700 mt-1 bg-blue-50/90 p-1 rounded-lg">
                        {m.instructions}
                      </p>
                    )}
                  </div>
                </div>
              )
          )}
        </div>

        {/* Notes */}
        {notes && (
          <div className="border-t border-blue-200 pt-3 mb-3">
            <h4 className="font-semibold text-blue-800 flex items-center gap-1">📝 Doctor's Notes:</h4>
            <p className="text-sm text-gray-700">{notes}</p>
          </div>
        )}

        {/* Doctor Signature */}
        <div className="text-right text-blue-900 font-medium mt-6">— Dr. John (MBBS, MD)</div>

        {/* Close Button */}
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
