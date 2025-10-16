import React from "react";
import { motion } from "framer-motion";
import { Search, X, ChevronDown } from "lucide-react";
import { pop } from "./animation.js";

export default function PR_PremiumFilters({
  q,
  setQ,
  type,
  setType,
  status,
  setStatus,
  dateRange,
  setDateRange,
  resultsCount,
  onClear,
}) {
  const filters = [
    {
      label: "Type",
      value: type,
      set: setType,
      options: ["All", "Blood Test", "MRI", "CT Scan", "X-Ray", "Prescription"],
    },
    {
      label: "Date Range",
      value: dateRange,
      set: setDateRange,
      options: ["Any", "This Week", "Last Month", "Custom"],
    },
    {
      label: "Status",
      value: status,
      set: setStatus,
      options: ["All", "Pending", "Reviewed", "Requires Follow-Up"],
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pop}
      className="bg-gradient-to-br from-blue-50/70 via-white/60 to-blue-100/50
                 backdrop-blur-2xl border border-blue-400/50 rounded-3xl p-6
                 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col gap-6"
    >
      {/* 🔍 Search Bar */}
      <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-3.5 text-blue-500/80" size={22} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search reports, patients, or dates..."
            className="w-full pl-12 pr-10 py-3 rounded-2xl
                       bg-gradient-to-r from-white/80 via-blue-50/50 to-white/80
                       text-gray-800 border border-blue-100/60 shadow-inner font-medium
                       placeholder:text-gray-400 focus:ring-2 focus:ring-blue-300/70
                       focus:outline-none focus:bg-white/90 hover:bg-white/90 transition-all duration-200"
          />
          {q && (
            <button
              onClick={() => setQ("")}
              className="absolute right-4 top-3 text-blue-400 hover:text-blue-600 transition"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <motion.button
          onClick={onClear}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="px-5 py-2 rounded-2xl
                     bg-gradient-to-br from-white/75 via-blue-50/50 to-white/80
                     border border-blue-200 text-blue-600 font-semibold shadow-md
                     hover:bg-blue-50/80 transition-all duration-300 flex items-center gap-2"
        >
          <X size={16} /> Clear
        </motion.button>
      </div>

      {/* 🔽 Filter Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-items-stretch">
        {filters.map((f) => (
          <motion.div key={f.label} whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
            <div className="relative w-full group">
              <select
                value={f.value}
                onChange={(e) => f.set(e.target.value)}
                className="appearance-none w-full px-4 py-3 pr-10 rounded-xl
                           bg-gradient-to-r from-white/80 via-blue-50/50 to-white/80
                           text-blue-800 font-semibold shadow-[inset_0_1px_4px_rgba(0,0,0,0.08)]
                           border border-blue-200/50 focus:ring-0 focus:outline-none
                           hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)]
                           hover:bg-gradient-to-br hover:from-white/90 hover:to-blue-50/80
                           transition-all duration-300 cursor-pointer"
              >
                {f.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-3.5 text-blue-500 pointer-events-none
                           transition-transform duration-300 group-hover:translate-y-[2px]"
                size={18}
              />
            </div>
          </motion.div>
        ))}

        {/* Sort Dropdown */}
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
          <div className="relative w-full group">
            <select
              className="appearance-none w-full px-4 py-3 pr-10 rounded-xl
                         bg-gradient-to-r from-white/80 via-blue-50/50 to-white/80
                         text-blue-800 font-semibold shadow-[inset_0_1px_4px_rgba(0,0,0,0.08)]
                         border border-blue-200/50 focus:ring-0 focus:outline-none
                         hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)]
                         hover:bg-gradient-to-br hover:from-white/90 hover:to-blue-50/80
                         transition-all duration-300 cursor-pointer"
            >
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-3.5 text-blue-500 pointer-events-none
                         transition-transform duration-300 group-hover:translate-y-[2px]"
              size={18}
            />
          </div>
        </motion.div>
      </div>

      {/* 📊 Footer */}
      <div className="text-sm font-semibold text-blue-700/90 tracking-wide text-center sm:text-right mt-2">
        Showing{" "}
        <span className="text-blue-800 font-bold">{resultsCount}</span> reports
        {dateRange !== "Any" ? ` • ${dateRange}` : ""}.
      </div>
    </motion.div>
  );
}
