import React from "react";
import { motion } from "framer-motion";
import { Upload, Search } from "lucide-react";

const SearchInput = ({ value, onChange, placeholder }) => (
  <div className="relative w-full sm:w-72">
    <Search className="absolute left-3 top-2.5 text-blue-500" size={18} />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/60 border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none transition shadow-sm"
    />
  </div>
);

const DoctorFiltersBar = ({ q, setq, type, settype }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white/60 backdrop-blur-xl rounded-3xl p-4 shadow-md flex flex-col sm:flex-row justify-between items-center gap-4 border border-blue-100"
  >
    <div className="flex flex-wrap gap-3 justify-center">
      <SearchInput
        value={q}
        onChange={setq}
        placeholder="Search reports or patient..."
      />

      <select
        value={type}
        onChange={(e) => settype(e.target.value)}
        className="px-4 py-2 rounded-xl bg-white border border-blue-200 focus:ring-2 focus:ring-blue-400 transition"
      >
        <option>All</option>
        <option>Lab Result</option>
        <option>Imaging</option>
        <option>Prescription</option>
      </select>
    </div>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-blue-600 transition"
    >
      <Upload size={18} /> Upload
    </motion.button>
  </motion.div>
);

export default DoctorFiltersBar;
