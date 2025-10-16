import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Download } from "lucide-react";

export default function PR_PremiumModal({ open, setOpen, record, onMarkReviewed }) {
  const [notes, setNotes] = useState("");

  if (!open || !record) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div onClick={()=>setOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.18 }} className="relative z-10 w-full max-w-5xl bg-white rounded-3xl p-6 shadow-2xl border">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">{record.title}</h2>
            <div className="text-sm text-slate-500">{record.patientName} • {record.age} • {record.gender}</div>
            <div className="text-xs mt-1 text-slate-400">{record.source} • Uploaded: {new Date(record.date).toLocaleString()}</div>
          </div>

          <div className="flex gap-2 items-center">
            <button className="px-3 py-2 rounded-lg bg-blue-50 inline-flex items-center gap-2"><Download size={16}/> Download</button>
            <button onClick={()=>setOpen(false)} className="p-2 rounded-lg bg-white border"><X/></button>
          </div>
        </div>

        <div className="mt-5 grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 bg-slate-50 rounded-xl p-4 min-h-[360px] flex items-center justify-center">
            {record.files && record.files[0] && record.files[0].type === "image" ? (
              <img src={record.files[0].url} alt="" className="max-w-full max-h-[560px] object-contain rounded" />
            ) : (
              <div className="text-slate-400">PDF preview placeholder — integrate PDF.js or iframe for real preview</div>
            )}
          </div>

          <div className="rounded-xl p-4 border bg-white">
            <h3 className="text-sm font-semibold text-slate-700">Doctor Notes</h3>
            <textarea className="w-full mt-3 p-3 border rounded-md min-h-[160px]" value={notes} onChange={(e)=>setNotes(e.target.value)} placeholder="Add observations..." />
            <div className="mt-4 flex gap-2">
              <button onClick={()=>{ onMarkReviewed(record.id); setOpen(false); }} className="flex-1 px-3 py-2 rounded-lg bg-green-600 text-white">Mark Reviewed</button>
              <button className="px-3 py-2 rounded-lg bg-amber-400">Follow-Up</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
