import React, { useState } from "react";
import { motion } from "framer-motion";
import VitalSignCard from "./vitalsigncard";

const VitalsPanel = ({ vitalsData }) => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="p-4 space-y-4 overflow-y-auto custom-scrollbar max-h-[80vh]">
      {vitalsData.map((vital, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveCard(index)}
          className={`transition-all duration-200 ${
            activeCard === index
              ? "bg-gradient-to-r from-blue-100/80 to-indigo-100/80 shadow-lg"
              : ""
          } rounded-2xl`}
        >
          <VitalSignCard {...vital} />
        </motion.div>
      ))}
    </div>
  );
};

export default VitalsPanel;
