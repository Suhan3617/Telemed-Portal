import React from "react";
import { motion } from "framer-motion";
import { FileText, Eye, User, MessageSquare, ClipboardList } from "lucide-react";

export default function LabCard({ r = {}, onView, onPatient, onNote }) {
  const patientName = r.patientName || "Unknown Patient";
  const title = r.title || "No Title";
  const date = r.date ? new Date(r.date).toLocaleDateString() : "No Date";
  const summary = r.summary || "No summary available";
  const files = Array.isArray(r.files) ? r.files : [];

  const statusClass = {
    Reviewed: "bg-emerald-100 text-emerald-800",
    Pending: "bg-amber-100 text-amber-800",
    "Requires Follow-Up": "bg-rose-100 text-rose-800",
  }[r.status] || "bg-blue-100 text-blue-800";

  const statusText = r.status || "Unknown";

  return (
    <motion.article
      whileHover={{
        y: -5,
        scale: 1.02,
        boxShadow: "0 12px 40px rgba(59,130,246,0.25)",
      }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="relative overflow-hidden rounded-3xl border border-blue-100 shadow-lg
                 bg-gradient-to-br from-blue-100/70 via-white/80 to-blue-50/70
                 backdrop-blur-md p-6 sm:p-7 w-full max-w-md mx-auto
                 transition-all duration-300"
    >
      {/* Top section */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl
                          bg-gradient-to-br from-blue-600 to-indigo-500
                          flex items-center justify-center shadow-md">
            <FileText className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
              {patientName}
            </h3>
            <div className="flex items-center gap-1 text-blue-600 font-semibold">
              <ClipboardList size={16} className="text-blue-500" />
              <span>{title}</span>
            </div>
            <div className="text-xs text-slate-400 mt-0.5">{date}</div>
          </div>
        </div>

        {/* Status badge */}
        <span
          className={`px-3 py-1 rounded-xl text-xs font-semibold ${statusClass}`}
        >
          {statusText}
        </span>
      </div>

      {/* Summary */}
      <p className="mt-4 text-sm text-slate-700 leading-relaxed">{summary}</p>

      {/* Files */}
      {files.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {files.slice(0, 3).map((f, i) => (
            <div
              key={i}
              className="text-xs px-3 py-1.5 bg-white/70 border border-blue-100 rounded-lg
                         shadow-inner text-blue-700 font-medium "
            >
              {f.name || "File"}
            </div>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
        <motion.button
          onClick={() => onView && onView(r)}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 20px rgba(59,130,246,0.35)",
          }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl
                     bg-gradient-to-r from-blue-600 to-indigo-600 text-white
                     font-semibold text-sm shadow-md transition w-full sm:w-auto justify-center"
        >
          <Eye size={16} /> View Report
        </motion.button>

        <div className="flex gap-2">
          <motion.button
            onClick={() => onPatient && onPatient(r)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-2xl bg-white border border-blue-100 shadow-sm
                       text-blue-600 flex items-center justify-center"
          >
            <User size={18} />
          </motion.button>

          <motion.button
            onClick={() => onNote && onNote(r)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-2xl bg-white border border-blue-100 shadow-sm
                       text-blue-600 flex items-center justify-center"
          >
            <MessageSquare size={18} />
          </motion.button>
        </div>
      </div>

      {/* Subtle glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl 
                      bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400 opacity-50"></div>
    </motion.article>
  );
}
