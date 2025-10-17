import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "./animation.js";
import { Menu } from "lucide-react";

export default function DoctorTopbar({ onToggleSidebar }) {
  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className="mb-10"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* ---------- Left: Title & Subtitle ---------- */}
        <div className="flex items-start sm:items-center gap-5">
          {/* Hamburger Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(239,246,255,0.8)",
              boxShadow: "0 0 10px rgba(59,130,246,0.15)",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={onToggleSidebar}
            className="p-3 rounded-xl font-semibold border border-blue-200 text-blue-600 bg-white/80 shadow-md backdrop-blur-sm flex items-center justify-center transition-all"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} strokeWidth={2.5} />
          </motion.button>

          <div>
            <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
              Dashboard / Overview
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 flex items-center gap-4 mt-3">
              <span className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg shadow-blue-200 text-blue-600 flex items-center justify-center">
                📊
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                Patient Overview
              </span>
            </h1>

            <p className="text-base text-slate-600/90 mt-3 font-medium max-w-lg">
              Quick glance of your patients, recent activity, and analytics — all in one premium dashboard.
            </p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
