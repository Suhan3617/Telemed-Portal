import React from "react";
import { motion } from "framer-motion";
import { Calendar, FileText, Clock } from "lucide-react";

const AppointmentStatsCard = ({ todayAppointments, pendingLabResults, upcomingFollowUps }) => {
  const statsCards = [
    {
      label: "Today's Appointments",
      value: todayAppointments,
      Icon: Calendar,
      glow: "from-blue-300 to-blue-500",
      iconColor: "text-blue-600",
      description: "Ready for consultation today",
    },
    {
      label: "Pending Lab Results",
      value: pendingLabResults,
      Icon: FileText,
      glow: "from-amber-300 to-amber-500",
      iconColor: "text-amber-600",
      description: "Awaiting your review",
    },
    {
      label: "Upcoming Follow-ups",
      value: upcomingFollowUps,
      Icon: Clock,
      glow: "from-emerald-300 to-emerald-500",
      iconColor: "text-emerald-600",
      description: "Next scheduled reviews",
    },
  ];

  return (
    <div className="w-full">
      {/* 🔷 Full width responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
        {statsCards.map((c, i) => (
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
              scale: 1.04,
              y: -4,
              boxShadow:
                "0 10px 22px rgba(0, 0, 0, 0.1), 0 0 15px rgba(59,130,246,0.25)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
            className={`relative overflow-hidden rounded-2xl p-6 shadow-md flex items-center justify-between transition-all duration-200 cursor-pointer bg-white/70 backdrop-blur-md border border-white/40`}
          >
            {/* Gradient glow */}
            <div
              className={`absolute -inset-10 bg-gradient-to-br ${c.glow} opacity-30 blur-3xl`}
            ></div>

            {/* Reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/40 opacity-50"></div>

            {/* Main content */}
            <div className="relative z-10">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                {c.label}
              </div>
              <div
                className="text-5xl font-extrabold mt-2 text-blue-900 drop-shadow-md"
                style={{ textShadow: "0 0 8px rgba(59,130,246,0.3)" }}
              >
                {c.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{c.description}</div>
            </div>

            {/* Icon */}
            <motion.div
              whileHover={{
                rotate: 5,
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 18 },
              }}
              className="relative z-10 p-3 rounded-xl bg-white/70 backdrop-blur-sm shadow-md border border-white/50"
            >
              <c.Icon size={32} className={`${c.iconColor}`} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentStatsCard;
