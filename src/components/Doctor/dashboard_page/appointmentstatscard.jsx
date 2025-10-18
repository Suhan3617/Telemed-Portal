import React from 'react';
import { motion } from 'framer-motion';
// Using the icons you provided in the main dashboard file
// Assuming 'lucide-react' icons for a modern look (like in PR_PremiumStats)
import { Calendar, FileText, Clock } from 'lucide-react';

const appointmentstatscard = ({ todayAppointments, pendingLabResults, upcomingFollowUps }) => {
  const statsCards = [
    {
      label: "Today's Appointments",
      value: todayAppointments,
      Icon: Calendar, // Calendar icon for appointments
      glow: "from-blue-300 to-blue-500", // Blue glow for main metric
      iconColor: "text-blue-600",
      description: "Ready for consultation today",
    },
    {
      label: "Pending Lab Results",
      value: pendingLabResults,
      Icon: FileText, // File icon for reports
      glow: "from-amber-300 to-amber-500", // Amber glow for pending status
      iconColor: "text-amber-600",
      description: "Awaiting your review",
    },
    {
      label: "Upcoming Follow-ups",
      value: upcomingFollowUps,
      Icon: Clock, // Clock icon for follow-ups/future
      glow: "from-emerald-300 to-emerald-500", // Green glow for future tasks
      iconColor: "text-emerald-600",
      description: "Next scheduled reviews",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
            scale: 1.05, // Slightly less aggressive scale than PR_PremiumStats for dashboard feel
            y: -4,
            boxShadow:
              "0 12px 24px rgba(0, 0, 0, 0.15), 0 0 15px rgba(59, 130, 246, 0.4)",
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 },
          }}
          className={`relative overflow-hidden rounded-2xl p-6 shadow-lg flex items-center justify-between transition-all duration-200 cursor-pointer`}
          style={{
            background: "rgba(255, 255, 255, 0.65)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* 1. Gradient Glow Background */}
          <div
            className={`absolute -inset-10 bg-gradient-to-br ${c.glow} opacity-30 blur-3xl`}
          ></div>

          {/* 2. Light Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/30 opacity-60"></div>

          {/* 3. Content */}
          <div className="relative z-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-600">
              {c.label}
            </div>
            <div className="text-5xl font-extrabold mt-2 text-blue-900 drop-shadow-md"
                 style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.3)' }} // Consistent number glow
            >
              {c.value}
            </div>
            <div className='text-sm text-gray-500 mt-1'>{c.description}</div>
          </div>

          {/* 4. Icon */}
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
  );
}

export default appointmentstatscard
