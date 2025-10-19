import React from "react";
import { motion } from "framer-motion";

const SystemPreferences = () => {
  const items = [
    "Theme: Light/Dark mode",
    "Default landing page",
    "Date/time format & timezone",
    "Data backup/export",
    "Language preference",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    >
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">System Preferences (Optional)</h2>
      <ul className="space-y-2 text-gray-700">
        {items.map((item) => (
          <li key={item} className="hover:text-blue-600 cursor-pointer transition-colors">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SystemPreferences;
