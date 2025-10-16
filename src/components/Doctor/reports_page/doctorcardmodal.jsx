import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Download } from "lucide-react";

export default function PR_PremiumModal({ open, setOpen, record, onMarkReviewed }) {
  const [notes, setNotes] = useState("");
  if (!open || !record) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div onClick={()=>setOpen(false)} className="absolute inset-0 bg-blue-900/40 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.14 }}
        className="relative z-10 w-full max-w-5xl bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl border border-blue-200 premium-glow-card"
      >
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-600">{record.title}</h2>
            <div className="text-sm text-blue-500">{record.patientName} • {record.age} • {record.gender}</div>
            <div className="text-xs mt-1 text-slate-400">{record.source} • Uploaded: {new Date(record.date).toLocaleString()}</div>
          </div>
          <div className="flex gap-3 items-center">
            <button className="px-4 py-2 rounded-lg bg-blue-100 inline-flex items-center gap-2 font-bold shadow"><Download size={18}/> Download</button>
            <button onClick={()=>setOpen(false)} className="p-2 rounded-xl bg-blue-50 border shadow"><X size={18}/></button>
          </div>
        </div>
        <div className="mt-7 grid lg:grid-cols-3 gap-7">
          <div className="lg:col-span-2 bg-slate-50/70 rounded-xl p-5 min-h-[360px] flex items-center justify-center border border-blue-100 shadow-inner">
            {record.files && record.files[0] && record.files[0].type === "image" ? (
              <img src={record.files[0].url} alt="" className="max-w-full max-h-[440px] object-contain rounded-lg shadow-md border" />
            ) : (
              <div className="text-blue-400/50">PDF preview placeholder — integrate PDF.js or iframe for full preview</div>
            )}
          </div>
          <div className="rounded-xl p-5 border bg-white min-h-[360px]">
            <h3 className="text-base font-bold text-blue-700">Doctor Notes</h3>
            <textarea className="w-full mt-4 p-4 border rounded-xl min-h-[140px] font-medium" value={notes} onChange={(e)=>setNotes(e.target.value)} placeholder="Add observations..." />
            <div className="mt-6 flex gap-2">
              <button onClick={()=>{ onMarkReviewed(record.id); setOpen(false); }} className="flex-1 px-4 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md">Mark Reviewed</button>
              <button className="px-3 py-3 rounded-xl bg-yellow-400 font-semibold shadow">Follow-Up</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
