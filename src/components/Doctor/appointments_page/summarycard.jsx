import { motion } from "framer-motion";
import { CalendarDays, Clock, CheckCircle, XCircle } from "lucide-react";

const cardsDef = (appointments, todayISO) => {
  const todayCount = appointments.filter((a) => a.date === todayISO).length;
  const upcomingCount = appointments.length;
  const completedCount = appointments.filter((a) => a.status === "Completed").length;
  const cancelledCount = appointments.filter((a) => a.status === "Cancelled").length;

  return [
    {
      label: "Today's Appointments",
      value: todayCount,
      icon: CalendarDays,
      gradient: "from-blue-500 via-blue-400 to-blue-300",
    },
    {
      label: "Upcoming (7d)",
      value: upcomingCount,
      icon: Clock,
      gradient: "from-indigo-500 via-blue-500 to-cyan-400",
    },
    {
      label: "Completed",
      value: completedCount,
      icon: CheckCircle,
      gradient: "from-green-500 via-emerald-400 to-emerald-300",
    },
    {
      label: "Cancelled / Missed",
      value: cancelledCount,
      icon: XCircle,
      gradient: "from-rose-500 via-rose-400 to-amber-400",
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
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59,130,246,0.4)" }}
          className={`relative overflow-hidden rounded-2xl p-5 bg-gradient-to-tr ${c.gradient} text-white shadow-xl transition-all`}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-4xl font-extrabold">{c.value}</div>
              <div className="mt-1 text-sm opacity-90">{c.label}</div>
            </div>
            <div className="p-3 bg-white/25 rounded-lg backdrop-blur-sm">
              <c.icon size={22} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
