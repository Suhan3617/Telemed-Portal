import React from "react";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle2, Clock, Droplet } from "lucide-react";

export default function PR_PremiumStats({ stats }) {
  const cards = [
    {
      label: "Total Reports",
      value: stats.total,
      Icon: BarChart3,
      bg: "bg-blue-100",
      accent: "from-blue-200 to-blue-400",
      iconColor: "text-blue-600",
    },
    {
      label: "Reviewed",
      value: stats.reviewed,
      Icon: CheckCircle2,
      bg: "bg-emerald-100",
      accent: "from-emerald-200 to-emerald-400",
      iconColor: "text-emerald-600",
    },
    {
      label: "Pending",
      value: stats.pending,
      Icon: Clock,
      bg: "bg-amber-100",
      accent: "from-amber-200 to-amber-400",
      iconColor: "text-amber-600",
    },
    {
      label: "Most Common",
      value: stats.common,
      Icon: Droplet,
      bg: "bg-indigo-100",
      accent: "from-indigo-300 to-indigo-400",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 my-6">
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.06,
            y: -4,
            boxShadow:
              "0 12px 30px rgba(0, 0, 0, 0.15), 0 0 10px rgba(0,0,0,0.05)",
          }}
          className={`relative overflow-hidden rounded-2xl p-6 shadow-md ${c.bg} text-gray-800 flex items-center justify-between transition-all duration-300`}
        >
          {/* soft gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-40 blur-2xl`}
          ></div>

          <div className="relative z-10">
            <div className="text-sm font-semibold uppercase tracking-wide text-gray-600">
              {c.label}
            </div>
            <div className="text-4xl font-bold mt-2 text-gray-800">
              {c.value}
            </div>
          </div>

          <motion.div
            whileHover={{ rotate: 6, scale: 1.1 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 p-3 rounded-xl bg-white/70 backdrop-blur-sm shadow-inner"
          >
            <c.Icon size={28} className={`${c.iconColor}`} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
