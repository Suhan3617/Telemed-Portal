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
