import React from "react";
import { motion } from "framer-motion";

const Recordfilter = ({ filter, setFilter }) => {
  const types = ["All", "Lab Report", "Scan", "Prescription"];

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-3"
    >
      {types.map((type) => (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          key={type}
          onClick={() => setFilter(type)}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm 
            ${
              filter === type
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-400 shadow-md"
                : "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 hover:shadow-md hover:text-blue-700"
            }`}
        >
          {type}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default Recordfilter;
