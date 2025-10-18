import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function FloatingAdd() {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="fixed right-8 bottom-8 z-40 bg-blue-600 text-white p-4 rounded-full shadow-2xl ring-4 ring-blue-200/20 hover:shadow-3xl"
    >
      <Plus size={20} />
    </motion.button>
  );
}
