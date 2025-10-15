import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, User, Mars, Venus, Tablet, Bottle, Zap, Droplet, Info } from "lucide-react";

const getMedicineIcon = (type) => {
  switch (type?.toLowerCase()) {
    case "tablet":
      return <Tablet className="w-5 h-5 text-blue-500" />;
    case "syrup":
      return <Bottle className="w-5 h-5 text-blue-500" />;
    case "injection":
      return <Zap className="w-5 h-5 text-blue-500" />;
    case "ointment":
    case "cream":
      return <Droplet className="w-5 h-5 text-blue-500" />;
    default:
      return <Info className="w-5 h-5 text-blue-500" />;
  }
};

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
      className="bg-gradient-to-br from-blue-100/80 to-blue-200/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-300 p-6 sticky top-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center border-b border-blue-300 pb-2">
        📝 Prescription Preview
      </h3>

      {/* Patient Info */}
      <div className="bg-blue-50/70 rounded-2xl p-4 mb-4 shadow-md border border-blue-200 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
        <p className="flex items-center gap-1 text-blue-700 font-semibold">
          <User className="w-5 h-5" /> {patient.name}
        </p>
        <p className="flex items-center gap-1 text-blue-600">
          <CalendarDays className="w-5 h-5" /> {new Date().toLocaleDateString()}
        </p>
        <p className="flex items-center gap-1 text-blue-600">
          {patient.gender === "Male" ? <Mars className="w-5 h-5" /> : <Venus className="w-5 h-5" />}{" "}
          {patient.age} yrs
        </p>
      </div>

      {/* Medicines */}
      <div className="space-y-3">
        {medicines.map(
          (med, i) =>
            med.name && (
              <motion.div
                key={i}
                className="bg-white/80 rounded-2xl p-4 shadow-md border border-blue-200 hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <p className="font-bold text-blue-700 text-lg flex items-center gap-1">
                  {getMedicineIcon(med.type)} {med.name}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-1 text-sm text-blue-700">
                  <p>
                    <span className="font-semibold">Type:</span> {med.type || "-"}
                  </p>
                  <p>
                    <span className="font-semibold">Strength:</span> {med.strength || "-"}
                  </p>
                  <p>
                    <span className="font-semibold">Dose:</span> {med.dose || "-"}
                  </p>
                  <p>
                    <span className="font-semibold">Frequency:</span> {med.frequency || "-"}
                  </p>
                  <p>
                    <span className="font-semibold">Duration:</span> {med.duration || "-"}
                  </p>
                </div>
              </motion.div>
            )
        )}
      </div>

      {/* Doctor's Notes */}
      {notes && (
        <div className="mt-4 border-t border-blue-300 pt-3">
          <h4 className="font-semibold text-blue-600 flex items-center gap-1">
            <Info className="w-5 h-5" /> Doctor's Notes:
          </h4>
          <p className="text-sm text-gray-700">{notes}</p>
        </div>
      )}

      {/* Doctor Signature */}
      <div className="mt-6 text-right text-blue-700 font-medium">
        — Dr. John (MBBS, MD)
      </div>
    </motion.div>
  );
};

export default PrescriptionPreview;
