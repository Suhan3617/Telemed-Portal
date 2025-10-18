import { motion } from "framer-motion";
import { Video, Clock, Sparkles } from "lucide-react";

export default function AppointmentsTable({ appointments, onView }) {
  const statusColors = {
    Scheduled:
      "bg-gradient-to-r from-blue-200/80 via-blue-100/70 to-cyan-100/80 text-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.35)] border border-blue-300/40",
    Completed:
      "bg-gradient-to-r from-emerald-100/80 via-green-100/80 to-teal-100/80 text-emerald-900 shadow-[0_0_15px_rgba(16,185,129,0.35)] border border-emerald-300/40",
    Cancelled:
      "bg-gradient-to-r from-rose-100/80 via-pink-100/70 to-rose-200/80 text-rose-900 shadow-[0_0_15px_rgba(244,63,94,0.35)] border border-rose-300/40",
    Pending:
      "bg-gradient-to-r from-amber-100/80 via-yellow-100/70 to-orange-100/80 text-amber-900 shadow-[0_0_15px_rgba(251,191,36,0.35)] border border-amber-300/40",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-blue-300/40 bg-gradient-to-br from-slate-50/80 via-blue-50/70 to-indigo-100/60 backdrop-blur-3xl shadow-[0_10px_50px_rgba(59,130,246,0.25)] w-full"
    >
      <div className="overflow-x-auto md:overflow-x-hidden">
        <motion.table
          layout
          className="min-w-full text-[15px] sm:text-[16px] text-gray-800 font-medium table-auto"
        >
          <thead className="text-[13px] sm:text-[14px] uppercase tracking-wider bg-gradient-to-r from-blue-500/70 via-sky-400/70 to-indigo-300/60 text-blue-800 backdrop-blur-xl border-b border-blue-200/50 shadow-[inset_0_-2px_8px_rgba(59,130,246,0.1)]">
            <tr>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left font-semibold">
                Patient
              </th>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left font-semibold">
                Date & Time
              </th>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left font-semibold">
                Type
              </th>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left font-semibold">
                Status
              </th>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((a, i) => (
              <motion.tr
                key={a.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  scale: 1.02,
                  background:
                    "linear-gradient(100deg, rgba(240,248,255,0.9), rgba(224,242,254,0.85), rgba(219,234,254,0.85))",
                  boxShadow:
                    "0 0 25px rgba(59,130,246,0.35), 0 0 80px rgba(147,197,253,0.2)",
                }}
                className="border-b border-blue-100/50 transition-all duration-300"
              >
                {/* Patient */}
                <td className="px-4 sm:px-8 py-5 flex items-center gap-3 sm:gap-4">
                  <div className="hidden xs:block">
                    <motion.img
                      src={a.patientPhoto}
                      alt={a.patientName}
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 text-[15px] sm:text-[16px] tracking-tight">
                      {a.patientName}
                    </p>
                    <p className="text-xs text-gray-500">{a.reason}</p>
                  </div>
                </td>

                {/* Date & Time */}
                <td className="px-4 sm:px-8 py-5">
                  <div className="flex items-center gap-2 text-blue-800 font-medium">
                    <Clock className="w-4 h-4 text-blue-500" />
                    {a.time}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{a.date}</p>
                </td>

                {/* Type */}
                <td className="px-4 sm:px-8 py-5 text-blue-800">
                  <div className="flex items-center gap-2 font-medium">
                    <Video className="w-4 h-4 text-blue-500" />
                    {a.type}
                  </div>
                </td>

                {/* Status */}
                <td className="px-4 sm:px-8 py-5">
                  <motion.span
                    animate={{ opacity: [1, 0.9, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm ${statusColors[a.status]}`}
                  >
                    {a.status}
                  </motion.span>
                </td>

                {/* Actions */}
                <td className="px-4 sm:px-8 py-5 text-right sm:text-left">
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                      background:
                        "linear-gradient(to right, #3b82f6, #2563eb, #1e40af)",
                      boxShadow:
                        "0 0 25px rgba(59,130,246,0.6), 0 0 60px rgba(147,197,253,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onView(a)}
                    className="relative inline-flex items-center gap-1 px-4 py-1.5 text-sm sm:text-[15px] font-semibold rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.45)] hover:shadow-[0_0_30px_rgba(59,130,246,0.55)] transition-all duration-300"
                  >
                    <Sparkles size={14} className="text-white/90" />
                    View
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </motion.div>
  );
}
