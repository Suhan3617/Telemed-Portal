import React from "react";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle2, Clock, Droplet } from "lucide-react";

export default function PR_PremiumStats({ stats }) {
  const cards = [
    {
      label: "Total Reports",
      value: stats.total,
      Icon: BarChart3,
      glow: "from-blue-300 to-blue-500",
      iconColor: "text-blue-600",
    },
    {
      label: "Reviewed",
      value: stats.reviewed,
      Icon: CheckCircle2,
      glow: "from-emerald-300 to-emerald-500",
      iconColor: "text-emerald-600",
    },
    {
      label: "Pending",
      value: stats.pending,
      Icon: Clock,
      glow: "from-amber-300 to-amber-500",
      iconColor: "text-amber-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 my-6">
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: i * 0.07,
            type: "spring",
            stiffness: 230,
            damping: 18,
          }}
          whileHover={{
            scale: 1.07,
            y: -6,
            boxShadow:
              "0 16px 32px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255,255,255,0.4)",
            transition: { type: "spring", stiffness: 340, damping: 20 },
          }}
          whileTap={{
            scale: 0.97,
            transition: { duration: 0.1 },
          }}
          className={`relative overflow-hidden rounded-2xl p-6 shadow-lg flex items-center justify-between transition-all duration-200`}
          style={{
            background:
              "rgba(255, 255, 255, 0.55)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
          }}
        >
          {/* Glow background */}
          <div
            className={`absolute -inset-12 bg-gradient-to-br ${c.glow} opacity-40 blur-3xl`}
          ></div>

          {/* Light reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/40 opacity-40"></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-600">
              {c.label}
            </div>
            <div className="text-4xl font-bold mt-2 text-gray-900 drop-shadow-sm">
              {c.value}
            </div>
          </div>

          {/* Icon */}
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.15,
              transition: { type: "spring", stiffness: 400, damping: 18 },
            }}
            className="relative z-10 p-3 rounded-xl bg-white/60 backdrop-blur-sm shadow-md border border-white/50"
          >
            <c.Icon size={28} className={`${c.iconColor}`} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
