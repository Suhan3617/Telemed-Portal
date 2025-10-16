import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, ClipboardCheck } from "lucide-react";

export default function PR_ShimmerModal({ open, setOpen, record, onMarkReviewed }) {
  const [notes, setNotes] = useState("");
  if (!open || !record) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Animated shimmer background */}
          <motion.div
            onClick={() => setOpen(false)}
            className="absolute inset-0 backdrop-blur-[8px] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_70%),radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.3),transparent_70%)]"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-indigo-950/40 to-slate-900/60" />
          </motion.div>

          {/* Modal container */}
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className="relative z-10 w-full max-w-5xl 
                       bg-white/80 backdrop-blur-2xl 
                       border border-blue-200/40 
                       rounded-3xl p-8 shadow-[0_25px_80px_rgba(37,99,235,0.25)]
                       overflow-hidden"
          >
            {/* Glow orbs */}
            <div className="absolute -top-20 -left-16 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 blur-3xl rounded-full pointer-events-none" />

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-start justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-blue-700 tracking-tight flex items-center gap-2">
                  <FileText size={22} className="text-blue-500" />
                  {record.title}
                </h2>
                <div className="text-sm text-blue-500 mt-1">
                  {record.patientName} • {record.age} • {record.gender}
                </div>
                <div className="text-xs mt-1 text-slate-400">
                  {record.source} • Uploaded: {new Date(record.date).toLocaleString()}
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 
                             text-white font-semibold inline-flex items-center gap-2 
                             shadow-md hover:shadow-blue-300/40 transition-all duration-300"
                >
                  <Download size={18} />
                  Download
                </motion.button>

                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 
                             shadow-sm hover:bg-blue-100 transition-all"
                >
                  <X size={18} />
                </motion.button>
              </div>
            </motion.div>

            {/* Main body */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 grid lg:grid-cols-3 gap-7"
            >
              {/* Left preview */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="lg:col-span-2 bg-slate-50/80 rounded-2xl p-5 
                           min-h-[360px] flex items-center justify-center 
                           border border-blue-100 shadow-inner hover:shadow-blue-200/40 transition-all"
              >
                {record.files && record.files[0]?.type === "image" ? (
                  <motion.img
                    key={record.files[0].url}
                    src={record.files[0].url}
                    alt=""
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-[440px] object-contain rounded-xl shadow-md border border-blue-100"
                  />
                ) : (
                  <div className="text-blue-400/70 italic text-sm text-center">
                    PDF preview placeholder — integrate PDF.js or iframe for full preview
                  </div>
                )}
              </motion.div>

              {/* Right notes */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                className="rounded-2xl p-5 border border-blue-100/70 bg-white/90 shadow-lg"
              >
                <h3 className="text-base font-bold text-blue-700 flex items-center gap-2">
                  <ClipboardCheck size={18} className="text-blue-500" />
                  Doctor Notes
                </h3>

                <textarea
                  className="w-full mt-4 p-4 border border-blue-100 rounded-xl min-h-[140px] font-medium text-slate-700 
                             focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add your clinical observations..."
                />

                <div className="mt-6 flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,197,94,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onMarkReviewed(record.id);
                      setOpen(false);
                    }}
                    className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 
                               text-white font-semibold shadow-md hover:shadow-green-300/40 transition-all"
                  >
                    Mark Reviewed
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(250,204,21,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 
                               text-white font-semibold shadow-md hover:shadow-yellow-300/40 transition-all"
                  >
                    Follow-Up
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
