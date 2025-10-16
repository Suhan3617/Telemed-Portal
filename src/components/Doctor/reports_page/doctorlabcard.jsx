import React from "react";
import { motion } from "framer-motion";
import { FileText, Eye, User, MessageSquare } from "lucide-react";

export default function PR_PremiumCard({ r = {}, onView, onPatient, onNote }) {
  // Safe defaults
  const patientName = r.patientName || "Unknown Patient";
  const title = r.title || "No Title";
  const date = r.date ? new Date(r.date).toLocaleDateString() : "No Date";
  const summary = r.summary || "No summary available";
  const files = Array.isArray(r.files) ? r.files : [];
  const statusClass = {
    Reviewed: "bg-green-100 text-green-800 border-green-200",
    Pending: "bg-yellow-100 text-yellow-900 border-yellow-300",
    "Requires Follow-Up": "bg-red-100 text-red-800 border-red-300"
  }[r.status] || "bg-slate-50 text-slate-700 border-blue-100";
  const statusText = r.status || "Unknown";

  return (
    <motion.article
      whileHover={{ y: -8, boxShadow: "0 12px 32px rgba(59,130,246,0.10)" }}
      transition={{ type: "spring", stiffness: 320 }}
      className="bg-gradient-to-br from-white/95 to-blue-50/80 p-6 rounded-2xl border border-blue-100 shadow-xl hover:ring-2 hover:ring-blue-300 glow-card transition"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-50 shadow-sm premium-icon-glow">
            <FileText className="text-blue-600" size={22} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">{patientName}</h3>
            <div className="text-sm text-blue-500 font-medium">{title}</div>
            <div className="text-xs mt-1 text-slate-400">{date}</div>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-xl text-xs font-bold border ${statusClass}`}>
          {statusText}
        </div>
      </div>
      <p className="text-sm text-blue-700 mt-3 font-medium line-clamp-2">{summary}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {files.slice(0, 2).map(f => (
            <div
              key={f.id || f.name}
              className="text-xs px-3 py-1 bg-white/70 border border-blue-50 rounded-lg flex items-center gap-2 shadow-sm"
            >
              <span className="text-blue-500 font-bold">{f.name || "Unnamed File"}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onView && onView(r)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl font-bold hover:brightness-105 transition inline-flex items-center gap-2"
          >
            <Eye size={16} /> View
          </button>
          <button
            onClick={() => onPatient && onPatient(r)}
            className="px-3 py-2 rounded-xl bg-white/90 border shadow-sm font-medium"
          >
            <User size={16} />
          </button>
          <button
            onClick={() => onNote && onNote(r)}
            className="px-3 py-2 rounded-xl bg-white/90 border shadow-sm font-medium"
          >
            <MessageSquare size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
