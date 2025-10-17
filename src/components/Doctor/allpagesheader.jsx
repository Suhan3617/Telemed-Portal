import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "./animation.js";

/**
 * 🔷 PremiumHeader Component
 * A reusable, motion-enhanced header for all dashboard pages.
 *
 * Props:
 * - breadcrumb: string → small top text (e.g. "Dashboard / Reports")
 * - icon: string → emoji or icon component (e.g. "📄" or <SomeIcon />)
 * - title: string → main heading (e.g. "Patient Reports")
 * - subtitle: string → small descriptive text (e.g. "Manage and analyze reports...")
 */
export default function PremiumHeader({ breadcrumb, icon, title, subtitle }) {
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
          {/* Breadcrumb / Path */}
          {breadcrumb && (
            <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
              {breadcrumb}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 flex items-center gap-4 mt-3">
            <span className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg shadow-blue-200 text-blue-600 flex items-center justify-center">
              {typeof icon === "string" ? icon : icon}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
              {title}
            </span>
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-base text-slate-600/90 mt-3 font-medium max-w-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.header>
  );
}
