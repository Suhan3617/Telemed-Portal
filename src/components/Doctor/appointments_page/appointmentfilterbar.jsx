import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, X, ChevronDown, Calendar, RotateCcw } from "lucide-react";
import "./VFXfilter.css"; // same shimmer animation from reports filter

export default function AppointmentsFilterBar({
  searchTerm,
  setSearchTerm,
  selectedStatuses,
  setSelectedStatuses,
  dateRange,
  setDateRange,
  sortOption,
  setSortOption,
  appointments,
  onReset,
}) {
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  // 🔍 Auto-suggest options (patient name or ID)
  const suggestions = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const lower = searchTerm.toLowerCase();
    return appointments
      .filter(
        (a) =>
          a.patientName.toLowerCase().includes(lower) ||
          a.id.toLowerCase().includes(lower)
      )
      .slice(0, 5);
  }, [searchTerm, appointments]);

  const handleSuggestionClick = (val) => {
    setSearchTerm(val);
    setSuggestionsOpen(false);
  };

  const toggleStatus = (status) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-br from-blue-50/70 via-white/60 to-blue-100/50
                 backdrop-blur-2xl border border-blue-200/50 rounded-3xl p-6
                 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col gap-6"
    >
      {/* 🔍 Search Bar with Auto-suggest */}
      <div className="relative flex flex-col lg:flex-row items-center gap-4 w-full">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-3.5 text-blue-500/80" size={22} />
          <input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSuggestionsOpen(true);
            }}
            placeholder="Search by patient name or appointment ID..."
            className="w-full pl-12 pr-10 py-3 rounded-2xl
                       bg-gradient-to-r from-white/80 via-blue-50/50 to-white/80
                       text-gray-800 border border-blue-100/60 shadow-inner font-medium
                       placeholder:text-gray-400 focus:ring-2 focus:ring-blue-300/70
                       focus:outline-none focus:bg-white/90 hover:bg-white/90 transition-all duration-200"
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSuggestionsOpen(false);
              }}
              className="absolute right-4 top-3 text-blue-400 hover:text-blue-600 transition"
            >
              <X size={18} />
            </button>
          )}

          {/* Auto-suggest dropdown */}
          {suggestionsOpen && suggestions.length > 0 && (
            <div className="absolute z-50 mt-1 w-full bg-white border border-blue-100 rounded-xl shadow-lg overflow-hidden">
              {suggestions.map((s) => (
                <div
                  key={s.id}
                  onClick={() => handleSuggestionClick(s.patientName)}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer"
                >
                  {s.patientName} <span className="text-gray-400">({s.id})</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Reset Button */}
        <motion.button
          onClick={onReset}
          whileHover={{ rotate: 180, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 shadow-sm transition"
        >
          <RotateCcw size={18} />
        </motion.button>
      </div>

      {/* 🗓️ Filters Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-items-stretch">

        {/* Date Range */}
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
          <div className="relative w-full group">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="appearance-none w-full px-4 py-3 pr-10 rounded-xl
                         bg-gradient-to-br from-white/80 via-blue-50/60 to-white/80
                         text-blue-800 font-semibold shadow-[inset_0_1px_6px_rgba(0,0,0,0.08)]
                         border border-blue-200/50 focus:ring-0 focus:outline-none
                         hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)]
                         hover:bg-gradient-to-br hover:from-white/90 hover:to-blue-50/80
                         transition-all duration-300 cursor-pointer shimmer-dropdown"
            >
              <option>Today</option>
              <option>This Week</option>
              <option>Custom</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-3.5 text-blue-500 pointer-events-none
                         transition-transform duration-300 group-hover:translate-y-[2px]"
              size={18}
            />
          </div>

          {/* Custom Date Inputs */}
          {dateRange === "Custom" && (
            <div className="flex gap-2 mt-2">
              <input
                type="date"
                value={customFrom}
                onChange={(e) => setCustomFrom(e.target.value)}
                className="flex-1 rounded-lg border border-blue-200 p-2 text-sm text-blue-700 bg-white/80 shadow-inner focus:ring-2 focus:ring-blue-300 outline-none"
              />
              <input
                type="date"
                value={customTo}
                onChange={(e) => setCustomTo(e.target.value)}
                className="flex-1 rounded-lg border border-blue-200 p-2 text-sm text-blue-700 bg-white/80 shadow-inner focus:ring-2 focus:ring-blue-300 outline-none"
              />
            </div>
          )}
        </motion.div>

        {/* Status Multi-select */}
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
          <div className="bg-white/70 border border-blue-200 rounded-xl p-3 shadow-inner">
            <div className="text-xs font-semibold text-blue-600 mb-2">
              Status
            </div>
            <div className="flex flex-wrap gap-2">
              {["Scheduled", "Completed", "Cancelled", "Pending"].map((s) => (
                <button
                  key={s}
                  onClick={() => toggleStatus(s)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedStatuses.includes(s)
                      ? "bg-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sort Options */}
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
          <div className="relative w-full group">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none w-full px-4 py-3 pr-10 rounded-xl
                         bg-gradient-to-br from-white/80 via-blue-50/60 to-white/80
                         text-blue-800 font-semibold shadow-[inset_0_1px_6px_rgba(0,0,0,0.08)]
                         border border-blue-200/50 focus:ring-0 focus:outline-none
                         hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)]
                         hover:bg-gradient-to-br hover:from-white/90 hover:to-blue-50/80
                         transition-all duration-300 cursor-pointer shimmer-dropdown"
            >
              <option>By Time</option>
              <option>By Patient Name</option>
              <option>By Appointment Type</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-3.5 text-blue-500 pointer-events-none
                         transition-transform duration-300 group-hover:translate-y-[2px]"
              size={18}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
