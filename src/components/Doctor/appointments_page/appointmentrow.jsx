import { motion } from "framer-motion";
import { Video, MapPin } from "lucide-react";

const statusStyles = {
  Scheduled: "bg-blue-100 text-blue-800",
  Completed: "bg-green-100 text-green-800",
  Cancelled: "bg-rose-100 text-rose-800",
  Pending: "bg-amber-100 text-amber-800",
};

export default function AppointmentRow({ a, onOpen, index }) {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ scale: 1.01, backgroundColor: "rgba(219,234,254,0.3)" }}
      className="border-t border-blue-100 transition cursor-pointer"
    >
      <td className="px-6 py-4">
        <div className="text-sm font-semibold text-blue-800">{a.time}</div>
        <div className="text-xs text-slate-500 mt-1">{new Date(a.date).toLocaleDateString()}</div>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={a.patientPhoto}
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-blue-200 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
          />
          <div>
            <button
              onClick={() => onOpen(a)}
              className="text-slate-900 font-semibold hover:text-blue-600 transition"
            >
              {a.patientName}
            </button>
            <div className="text-xs text-slate-500">{a.reason}</div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 text-sm text-slate-700">{a.gender === "Female" ? "♀" : "♂"}</td>

      <td className="px-6 py-4 text-sm">
        <div className="flex items-center gap-2 text-slate-700">
          {a.type === "Teleconsultation" ? <Video size={16} /> : <MapPin size={16} />}
          {a.type}
        </div>
      </td>

      <td className="px-6 py-4">
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusStyles[a.status]}`}
        >
          {a.status}
        </div>
      </td>
    </motion.tr>
  );
}
