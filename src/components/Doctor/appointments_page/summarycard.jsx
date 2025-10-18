import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, CheckCircle, XCircle } from "lucide-react";

const cardsDef = (appointments, todayISO) => {
  const todayCount = appointments.filter((a) => a.date === todayISO).length;
  const upcomingCount = appointments.length;
  const completedCount = appointments.filter(
    (a) => a.status === "Completed"
  ).length;
  const cancelledCount = appointments.filter(
    (a) => a.status === "Cancelled"
  ).length;

  return [
    {
      label: "Today's Appointments",
      value: todayCount,
      icon: CalendarDays,
      gradient: "from-blue-500/90 via-blue-400 to-blue-300",
    },
    {
      label: "Upcoming (7d)",
      value: upcomingCount,
      icon: Clock,
      gradient: "from-indigo-500/85 via-blue-500 to-cyan-400",
    },
    {
      label: "Completed",
      value: completedCount,
      icon: CheckCircle,
      gradient: "from-green-400 via-emerald-400 to-emerald-300",
    },
    {
      label: "Cancelled / Missed",
      value: cancelledCount,
      icon: XCircle,
      gradient: "from-rose-400 via-rose-300 to-amber-300",
    },
  ];
};

export default function SummaryCards({ appointments }) {
  const todayISO = new Date().toISOString().split("T")[0];
  const cards = cardsDef(appointments, todayISO);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className="relative overflow-hidden rounded-2xl p-5 shadow-xl transform-gpu hover:scale-[1.02] transition-all"
        >
          <div
            className={`p-4 rounded-xl text-white/95 bg-gradient-to-tr ${c.gradient} drop-shadow-[0_20px_50px_rgba(59,130,246,0.18)]`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-3xl font-extrabold leading-none">
                  {c.value}
                </div>
                <div className="mt-1 text-sm opacity-90">{c.label}</div>
              </div>
              <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <c.icon size={22} />
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 opacity-15 text-7xl select-none text-blue-700">
            •
          </div>
        </motion.div>
      ))}
    </div>
  );
}
