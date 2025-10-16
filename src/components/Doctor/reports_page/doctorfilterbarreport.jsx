import React from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { pop } from "./animation.js";

export default function PR_PremiumFilters({
  q, setQ, type, setType, status, setStatus, dateRange, setDateRange, resultsCount, onClear, onApply
}) {
  return (
    <motion.div
      initial="initial" animate="animate" variants={pop}
      className="bg-gradient-to-r from-white/80 to-blue-50/60 backdrop-blur-lg border border-blue-200 rounded-3xl p-6 shadow-xl flex flex-col gap-4"
    >
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3 text-blue-500/80 glow-primary" size={22} />
          <input
            value={q}
            onChange={(e)=>setQ(e.target.value)}
            placeholder="Search by patient, report, or date"
            className="w-full pl-14 pr-4 py-3 rounded-2xl bg-white bg-opacity-85 border border-blue-100 focus:ring-2 focus:ring-blue-300 font-medium shadow-sm"
          />
        </div>
        <div className="flex gap-2 flex-wrap items-center">
          <select value={type} onChange={e=>setType(e.target.value)} className="px-3 py-2 rounded-lg border font-semibold">
            <option value="All">All Types</option>
            <option>Blood Test</option>
            <option>MRI</option>
            <option>CT Scan</option>
            <option>X-Ray</option>
            <option>Prescription</option>
          </select>
          <select value={dateRange} onChange={e=>setDateRange(e.target.value)} className="px-3 py-2 rounded-lg border font-semibold">
            <option value="Any">Any Time</option>
            <option>This Week</option>
            <option>Last Month</option>
            <option>Custom</option>
          </select>
          <select value={status} onChange={e=>setStatus(e.target.value)} className="px-3 py-2 rounded-lg border font-semibold">
            <option>All Status</option>
            <option>Pending</option>
            <option>Reviewed</option>
            <option>Requires Follow-Up</option>
          </select>
          <select className="px-3 py-2 rounded-lg border font-semibold">
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
          <motion.button
            onClick={onApply}
            whileHover={{ scale: 1.07 }}
            className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold shadow-lg transition"
          >
            Apply
          </motion.button>
          <button
            onClick={onClear}
            className="p-2 rounded-lg bg-blue-50 border flex items-center"
            title="Clear filters"
          >
            <X size={16} />
          </button>
        </div>
      </div>
      <div className="mt-2 text-sm text-blue-600 font-semibold">
        Showing <span className="font-bold">{resultsCount}</span> reports {dateRange !== "Any" ? ` • ${dateRange}` : ""}.
      </div>
    </motion.div>
  );
}
