import React from "react";
import { motion } from "framer-motion";
import { FileText, Eye, User, MessageSquare } from "lucide-react";

export default function PR_PremiumCard({ r, onView, onPatient, onNote }) {
  const statusClass = {
    Reviewed: "bg-green-50 text-green-700",
    Pending: "bg-amber-50 text-amber-800",
    "Requires Follow-Up": "bg-red-50 text-red-700"
  }[r.status] || "bg-slate-50 text-slate-700";

  return (
    <motion.article whileHover={{ y: -6, boxShadow: "0 18px 45px rgba(59,130,246,0.08)" }} transition={{ type: "spring", stiffness: 280 }} className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-blue-100">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-50 to-white shadow">
            <FileText className="text-blue-600" size={18}/>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">{r.patientName}</h3>
            <div className="text-sm text-slate-500">{r.title}</div>
            <div className="text-xs mt-1 text-slate-400">{new Date(r.date).toLocaleDateString()}</div>
          </div>
        </div>

        <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusClass}`}>{r.status}</div>
      </div>

      <p className="text-sm text-slate-600 mt-4 line-clamp-2">{r.summary}</p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {r.files.slice(0,2).map(f=>(
            <div key={f.id} className="text-xs px-2 py-1 bg-white border rounded flex items-center gap-2 shadow-sm">
              <span className="text-slate-500">{f.name}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={()=>onView(r)} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm inline-flex items-center gap-2">
            <Eye size={16}/> View
          </button>
          <button onClick={()=>onPatient(r)} className="px-3 py-2 rounded-lg bg-white border shadow-sm">
            <User size={16}/>
          </button>
          <button onClick={()=>onNote(r)} className="px-3 py-2 rounded-lg bg-white border shadow-sm">
            <MessageSquare size={16}/>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
