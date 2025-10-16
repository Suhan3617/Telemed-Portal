import React from "react";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle2, Clock, Droplet } from "lucide-react";
import { fadeInUp } from "./animation.js";

export default function PR_PremiumStats({ stats }) {
  const cards = [
    { label: "Total Reports", value: stats.total, Icon: BarChart3, color: "from-blue-50 to-blue-100" },
    { label: "Reviewed", value: stats.reviewed, Icon: CheckCircle2, color: "from-green-50 to-green-100" },
    { label: "Pending", value: stats.pending, Icon: Clock, color: "from-yellow-50 to-yellow-100" },
    { label: "Most Common", value: stats.common, Icon: Droplet, color: "from-blue-50 to-indigo-50" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 my-4">
      {cards.map((c, i) => (
        <motion.div key={c.label} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:i*0.06}} className="rounded-2xl p-4 border border-blue-100 bg-white/75 shadow-md flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500">{c.label}</div>
            <div className="text-2xl font-bold text-slate-900">{c.value}</div>
          </div>
          <div className={`p-3 rounded-lg bg-gradient-to-br ${c.color} shadow-inner`} style={{boxShadow: "inset 0 -6px 18px rgba(0,0,0,0.03)"}}>
            <c.Icon className="text-blue-600" size={24} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
