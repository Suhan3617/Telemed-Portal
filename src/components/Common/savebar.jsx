// src/pages/DoctorSettings/Common/SaveBar.jsx
import React from "react";
import { motion } from "framer-motion";
import { Save } from "lucide-react";

const SaveBar = ({ onSave }) => (
  <motion.div
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4 }}
    className="fixed bottom-6 right-8 z-50"
  >
    <button
      onClick={onSave}
      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <Save size={20} />
      Save Changes
    </button>
  </motion.div>
);

export default SaveBar;
