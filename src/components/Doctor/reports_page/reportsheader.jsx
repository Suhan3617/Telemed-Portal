import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "./animation.js";
import { Plus, UploadCloud } from "lucide-react";

export default function PR_PremiumHeader() {
  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className="mb-10"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* ---------- Left: Title & Subtitle ---------- */}
        <div>
          <div className="text-sm font-semibold tracking-wide text-blue-400 uppercase">
            Dashboard / Reports
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 flex items-center gap-4 mt-3">
            <span className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg shadow-blue-200 text-blue-600 flex items-center justify-center">
              📄
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
              Patient Reports
            </span>
          </h1>

          <p className="text-base text-slate-600/90 mt-3 font-medium max-w-lg">
            Manage, review, and analyze all uploaded patient reports in one
            smart dashboard.
          </p>
        </div>

        {/* ---------- Right: Buttons ---------- */}
        <div className="flex gap-4 flex-wrap sm:flex-nowrap">
          {/* Import Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(239,246,255,0.8)",
              boxShadow: "0 0 10px rgba(59,130,246,0.15)",
            }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2.5 rounded-xl font-semibold border border-blue-200 text-blue-600 bg-white/80 shadow-md backdrop-blur-sm flex items-center gap-2 transition-all"
          >
            <UploadCloud size={18} />
            Import
          </motion.button>

          {/* New Report Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 24px rgba(59,130,246,0.4)",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg font-semibold tracking-wide flex items-center gap-2"
          >
            <Plus size={18} className="stroke-[3]" />
            New Report
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
