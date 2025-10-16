import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "./animation.js";

export default function PR_PremiumHeader() {
  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className="mb-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="text-sm text-blue-500/70">Dashboard &nbsp;/&nbsp; Reports</div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 flex items-center gap-3 mt-1">
            <span className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-white shadow-sm text-blue-600">📄</span>
            Patient Reports
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review and analyze reports uploaded by your patients.
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <button className="px-4 py-2 rounded-xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition">
            Import
          </button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:brightness-105 transition"
          >
            New Report
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
