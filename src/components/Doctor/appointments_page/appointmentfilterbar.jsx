import { Search, Calendar, Filter, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function FiltersBar({ searchTerm, setSearchTerm, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap justify-between items-center mt-8 mb-6 gap-4 p-4 bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl border border-blue-100"
    >
      {/* 🔍 Search Bar */}
      <div className="relative w-full md:w-1/3">
        <Search className="absolute left-3 top-3 text-blue-500 drop-shadow-sm" size={18} />
        <input
          type="text"
          placeholder="Search by patient name or appointment ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all bg-gradient-to-r from-white to-blue-50/60 shadow-inner"
        />
      </div>

      {/* 🎛️ Filters */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500 text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition"
        >
          <Calendar size={16} /> Today
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-300 text-blue-700 bg-white hover:bg-blue-50 transition shadow-sm"
        >
          <Filter size={16} /> Filters
        </motion.button>

        <motion.button
          whileHover={{ rotate: 180, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={onReset}
          className="p-2.5 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 shadow-sm transition"
        >
          <RotateCcw size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}
