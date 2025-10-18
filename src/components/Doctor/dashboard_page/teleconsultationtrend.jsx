import React from 'react'
import { motion } from "framer-motion";

// Mock data for the chart from the screenshot 
const trendData = [
  { month: "Jan", count: 35 }, { month: "Feb", count: 42 }, { month: "Mar", count: 28 }, 
  { month: "Apr", count: 55 }, { month: "May", count: 62 }, { month: "Jun", count: 48 }, 
  { month: "Jul", count: 30 }, { month: "Aug", count: 58 }, { month: "Sep", count: 38 }, 
  { month: "Oct", count: 50 }, { month: "Nov", count: 45 }, { month: "Dec", count: 65 }
];

const teleconsultationtrend = () => {
  const maxCount = Math.max(...trendData.map(d => d.count));
  
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 md:col-span-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-blue-700 mb-6">Teleconsultation Trends</h3>
      <div className="flex items-end h-64 space-x-4">
        {trendData.map((d, index) => {
          const heightPercent = (d.count / maxCount) * 90; // Max height 90%
          const barHeight = `${heightPercent}%`;

          return (
            <motion.div
              key={d.month}
              className="flex flex-col items-center justify-end flex-1"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: barHeight }}
                whileHover={{ scaleY: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)' }}
                transition={{ duration: 0.8, delay: index * 0.05, type: "spring", stiffness: 100 }}
                className="w-full rounded-t-lg bg-gradient-to-t from-blue-500 to-blue-300 relative"
                style={{ height: barHeight }}
              >
                <div className="absolute -top-6 text-xs text-gray-500 font-medium">{d.count}</div>
              </motion.div>
              <span className="mt-2 text-sm text-gray-500 font-semibold">{d.month}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default teleconsultationtrend
