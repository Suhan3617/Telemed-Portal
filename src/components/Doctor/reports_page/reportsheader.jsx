import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "./animation.js";

export default function PR_PremiumHeader() {
  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className="mb-10"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="text-xs font-semibold tracking-wide text-blue-400 uppercase">Dashboard &nbsp;/&nbsp; Reports</div>
          <h1 className="text-4xl sm:text-5xl font-black text-blue-700 tracking-tight flex items-center gap-4 mt-2">
            <span className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-blue-500/60 shadow-blue-300/30 text-blue-600 premium-icon-glow">📄</span>
            Patient Reports
          </h1>
          <p className="text-base text-slate-600/90 mt-2 font-medium glow-secondary">
            Review and analyze reports uploaded by your patients.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <button className="px-5 py-2 rounded-xl font-semibold bg-white/70 border border-blue-200 shadow-xl text-blue-600 hover:bg-blue-50 transition-all">Import</button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 24px 8px rgba(59,130,246,0.28)" }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl font-bold tracking-wide transition"
          >
            + New Report
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
