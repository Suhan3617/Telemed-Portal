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
      className="bg-gradient-to-r from-white/70 to-white/60 backdrop-blur-lg border border-blue-100 rounded-3xl p-4 shadow-sm"
    >
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3 text-blue-500" size={18} />
          <input
            value={q}
            onChange={(e)=>setQ(e.target.value)}
            placeholder="Search by patient name, report type, or date"
            className="w-full pl-12 pr-3 py-3 rounded-2xl bg-white/80 border border-blue-50 focus:ring-2 focus:ring-blue-200 outline-none transition shadow-sm"
          />
        </div>

        <div className="flex gap-2 flex-wrap items-center">
          <select value={type} onChange={e=>setType(e.target.value)} className="px-3 py-2 rounded-lg border">
            <option value="All">All Types</option>
            <option>Blood Test</option>
            <option>MRI</option>
            <option>CT Scan</option>
            <option>X-Ray</option>
            <option>Prescription</option>
          </select>

          <select value={dateRange} onChange={e=>setDateRange(e.target.value)} className="px-3 py-2 rounded-lg border">
            <option value="Any">Any Time</option>
            <option>This Week</option>
            <option>Last Month</option>
            <option>Custom</option>
          </select>

          <select value={status} onChange={e=>setStatus(e.target.value)} className="px-3 py-2 rounded-lg border">
            <option>All Status</option>
            <option>Pending</option>
            <option>Reviewed</option>
            <option>Requires Follow-Up</option>
          </select>

          <select className="px-3 py-2 rounded-lg border">
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>

          <motion.button
            onClick={onApply}
            whileHover={{ scale: 1.03 }}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white shadow-md"
          >
            Apply
          </motion.button>

          <button
            onClick={onClear}
            className="p-2 rounded-lg bg-white border"
            title="Clear filters"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="mt-3 text-sm text-slate-600">
        Showing <span className="font-semibold text-blue-700">{resultsCount}</span> reports {dateRange !== "Any" ? ` • ${dateRange}` : ""}.
      </div>
    </motion.div>
  );
}
