import React from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import PremiumHeader from "../allpagesheader.jsx";

export default function DoctorTopbar({ onToggleSidebar }) {
  return (
    <motion.header
      initial="initial"
      animate="animate"
      className="mb-10"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* ---------- Left Section ---------- */}
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

          {/* Premium Header (reused) */}
          <PremiumHeader
            breadcrumb="Dashboard / Overview"
            icon="📊"
            title="Patient Overview"
            subtitle="Quick glance of your patients, recent activity, and analytics — all in one premium dashboard."
          />
        </div>
      </div>
    </motion.header>
  );
}
