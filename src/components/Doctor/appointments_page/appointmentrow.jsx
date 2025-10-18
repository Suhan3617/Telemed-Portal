import React from "react";
import { motion } from "framer-motion";
import { Video, MapPin } from "lucide-react";

const statusStyles = {
  Scheduled: "bg-blue-50 text-blue-700 ring-1 ring-blue-100",
  Completed: "bg-green-50 text-green-700 ring-1 ring-green-100",
  Cancelled: "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
  Pending: "bg-amber-50 text-amber-800 ring-1 ring-amber-100",
};

export default function AppointmentRow({ a, onOpen, index }) {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02 }}
      whileHover={{ scale: 1.002 }}
      className="border-t hover:bg-blue-50 transition"
    >
      <td className="px-6 py-4 align-top w-[180px]">
        <div className="text-sm font-medium text-slate-900">{a.time}</div>
        <div className="text-xs text-slate-500 mt-1">
          {new Date(a.date).toLocaleDateString()}
        </div>
      </td>

      <td className="px-6 py-4 align-top">
        <div className="flex items-center gap-3">
          <img
            src={a.patient.avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full shadow-sm"
          />
          <div>
            <button
              onClick={() => onOpen(a)}
              className="text-slate-900 font-semibold hover:text-blue-600 transition"
            >
              {a.patient.name}
            </button>
            <div className="text-xs text-slate-500">{a.reason}</div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 align-top">
        <div className="flex items-center gap-3 text-sm text-slate-700">
          <div className="text-slate-600 opacity-90">
            {a.patient.gender === "Female" ? "♀" : "♂"}
          </div>
          <div className="text-xs">{a.patient.age} yrs</div>
        </div>
      </td>

      <td className="px-6 py-4 align-top">
        <div className="flex items-center gap-2 text-sm">
          {a.type === "Teleconsultation" ? (
            <Video size={16} className="text-slate-600" />
          ) : (
            <MapPin size={16} className="text-slate-600" />
          )}
          <div className="text-sm text-slate-800">{a.type}</div>
        </div>
      </td>

      <td className="px-6 py-4 align-top">
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            statusStyles[a.status] || "bg-slate-100 text-slate-800"
          }`}
        >
          {a.status}
        </div>
      </td>
    </motion.tr>
  );
}
