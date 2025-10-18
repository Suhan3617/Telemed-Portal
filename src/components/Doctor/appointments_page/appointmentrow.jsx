import { motion } from "framer-motion";
import { Video, MapPin } from "lucide-react";

const statusStyles = {
  Scheduled:
    "bg-blue-100/70 text-blue-800 shadow-[0_0_10px_rgba(59,130,246,0.15)] backdrop-blur-md",
  Completed:
    "bg-green-100/70 text-green-800 shadow-[0_0_10px_rgba(34,197,94,0.15)] backdrop-blur-md",
  Cancelled:
    "bg-rose-100/70 text-rose-800 shadow-[0_0_10px_rgba(244,63,94,0.15)] backdrop-blur-md",
  Pending:
    "bg-amber-100/70 text-amber-800 shadow-[0_0_10px_rgba(251,191,36,0.15)] backdrop-blur-md",
};

export default function AppointmentRow({ a, onOpen, index }) {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.4, ease: "easeOut" }}
      whileHover={{
        scale: 1.015,
        backgroundColor: "rgba(239,246,255,0.6)",
        boxShadow: "0 0 20px rgba(59,130,246,0.15)",
      }}
      className="transition-all cursor-pointer border-t border-transparent hover:border-blue-100"
    >
      {/* Time + Date */}
      <td className="px-6 py-5">
        <div className="text-base font-semibold text-blue-900">{a.time}</div>
        <div className="text-xs text-slate-500 mt-1">
          {new Date(a.date).toLocaleDateString()}
        </div>
      </td>

      {/* Patient Info */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <img
            src={a.patientPhoto}
            alt="avatar"
            className="hidden sm:block w-12 h-12 rounded-full border border-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.25)] hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300"
          />
          <div>
            <button
              onClick={() => onOpen(a)}
              className="text-[15px] text-slate-900 font-semibold hover:text-blue-600 transition-colors"
            >
              {a.patientName}
            </button>
            <div className="text-sm text-slate-500">{a.reason}</div>
          </div>
        </div>
      </td>

      {/* Gender */}
      <td className="px-6 py-5 text-[15px] text-slate-700 font-medium">
        {a.gender === "Female" ? "♀" : "♂"}
      </td>

      {/* Appointment Type */}
      <td className="px-6 py-5 text-[15px] text-slate-800">
        <div className="flex items-center gap-2">
          {a.type === "Teleconsultation" ? (
            <Video size={18} className="text-blue-500" />
          ) : (
            <MapPin size={18} className="text-blue-500" />
          )}
          <span>{a.type}</span>
        </div>
      </td>

      {/* Status */}
      <td className="px-6 py-5">
        <div
          className={`inline-flex items-center px-3 py-1.5 rounded-full text-[14px] font-semibold ${statusStyles[a.status]}`}
        >
          {a.status}
        </div>
      </td>
    </motion.tr>
  );
}
