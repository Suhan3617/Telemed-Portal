import React from "react";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle2, Clock, Droplet } from "lucide-react";

export default function PR_PremiumStats({ stats }) {
  const cards = [
    { label: "Total Reports", value: stats.total, Icon: BarChart3, color: "from-blue-100 via-white to-blue-300" },
    { label: "Reviewed", value: stats.reviewed, Icon: CheckCircle2, color: "from-green-50 via-white to-green-200" },
    { label: "Pending", value: stats.pending, Icon: Clock, color: "from-yellow-50 via-white to-yellow-200" },
    { label: "Most Common", value: stats.common, Icon: Droplet, color: "from-blue-200 via-white to-indigo-100" }
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-7 my-6">
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
          transition={{delay:i*0.08}}
          className={`rounded-2xl p-6 border border-blue-100 shadow-2xl bg-gradient-to-br ${c.color} flex items-center justify-between premium-glow-card hover:scale-105 transition-transform`}
        >
          <div>
            <div className="text-xs tracking-wide text-blue-500 font-semibold uppercase">{c.label}</div>
            <div className="text-3xl font-black text-blue-700 mt-1">{c.value}</div>
          </div>
          <div className="p-4 rounded-full bg-white/70 shadow-inner premium-icon-glow">
            <c.Icon className="text-blue-500" size={28} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
