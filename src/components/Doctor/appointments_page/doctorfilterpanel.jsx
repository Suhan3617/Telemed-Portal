import React from 'react'
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";

const doctorfilterpanel = ({ q, setQ, type, setType, range, setRange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-md bg-white/60 border border-blue-200 shadow-2xl p-6 rounded-3xl flex flex-wrap items-center justify-between gap-4"
    >
      {/* Search Input */}
      <div className="relative flex-1 min-w-[220px]">
        <Search className="absolute left-3 top-3 text-blue-500" size={18} />
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search patient..."
          className="w-full pl-10 pr-4 py-2 rounded-xl border border-blue-200 bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2 text-blue-600 font-semibold">
          <Filter size={18} /> Filters:
        </div>
        <select
          className="px-4 py-2 rounded-xl border border-blue-200 bg-white/70 text-blue-700 focus:ring-2 focus:ring-blue-500"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>All</option>
          <option>Video Consultation</option>
          <option>In-person</option>
        </select>

        <select
          className="px-4 py-2 rounded-xl border border-blue-200 bg-white/70 text-blue-700 focus:ring-2 focus:ring-blue-500"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option>Today</option>
          <option>Upcoming</option>
          <option>Past</option>
        </select>
      </div>
    </motion.div>
  );
}

export default doctorfilterpanel
