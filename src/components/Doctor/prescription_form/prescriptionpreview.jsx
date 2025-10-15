import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, User, Mars, Venus, Tablet, Zap, Droplet, Info } from "lucide-react";

// Medicine Badge with vivid colors + gradient
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

// Tooltip for hover hints
const renderTooltip = (text) => (
  <span className="relative group ml-1 text-gray-600 cursor-pointer">
    <Info className="w-4 h-4" />
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 p-2 text-xs bg-blue-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-50">
      {text}
    </span>
  </span>
);

const PrescriptionPreview = ({ patient, medicines, notes }) => {
  if (!patient)
    return (
      <motion.div
        className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 text-center text-blue-700 font-semibold shadow-xl border border-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        👩‍⚕️ Select a patient to start prescription
      </motion.div>
    );

  return (
    <motion.div
      className="bg-gradient-to-br from-blue-100/90 to-blue-200/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-300 p-6 sticky top-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center border-b border-blue-300 pb-2">
        📝 Prescription Preview
      </h3>

      {/* Patient Info */}
      <div className="bg-blue-50/80 rounded-2xl p-4 mb-4 shadow-md border border-blue-200 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
        <p className="flex items-center gap-1 text-blue-900 font-semibold">
          <User className="w-5 h-5" /> {patient.name}
        </p>
        <p className="flex items-center gap-1 text-blue-800">
          <CalendarDays className="w-5 h-5" /> {new Date().toLocaleDateString()}
        </p>
        <p className="flex items-center gap-1 text-blue-800">
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
                className="bg-white/95 rounded-3xl p-4 shadow-lg border border-blue-200 hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.02 }}
              >
                {/* Medicine Name + Badge */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="font-bold text-gray-900 text-lg flex items-center gap-2">
                    {med.name} {getMedicineBadge(med.type)}
                  </p>
                </div>

                {/* Medicine Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-2 text-sm text-gray-800">
                  <p>
                    <span className="font-semibold">Strength:</span> {med.strength || "-"} {renderTooltip("Strength of medicine, e.g., 500mg")}
                  </p>
                  <p>
                    <span className="font-semibold">Dose:</span> {med.dose || "-"} {renderTooltip("Dose (number only), e.g., 1, 2")}
                  </p>
                  <p>
                    <span className="font-semibold">Frequency:</span> {med.frequency || "-"} {renderTooltip("How many times per day, e.g., 2 times/day")}
                  </p>
                  <p>
                    <span className="font-semibold">Duration:</span> {med.duration || "-"} {renderTooltip("Duration of course, e.g., 5 days")}
                  </p>
                  {med.instructions && (
                    <p className="col-span-2 md:col-span-1 italic text-gray-700 mt-1 bg-blue-50/90 p-1 rounded-lg">
                      {med.instructions}
                    </p>
                  )}
                </div>
              </motion.div>
            )
        )}
      </div>

      {/* Doctor's Notes */}
      {notes && (
        <div className="mt-4 border-t border-blue-300 pt-3">
          <h4 className="font-semibold text-blue-800 flex items-center gap-1">
            <Info className="w-5 h-5" /> Doctor's Notes:
          </h4>
          <p className="text-sm text-gray-700">{notes}</p>
        </div>
      )}

      {/* Doctor Signature */}
      <div className="mt-6 text-right text-blue-900 font-medium">
        — Dr. John (MBBS, MD)
      </div>
    </motion.div>
  );
};

export default PrescriptionPreview;
