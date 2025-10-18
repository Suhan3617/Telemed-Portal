import { motion } from "framer-motion";
import { Video, Clock, Sparkles } from "lucide-react";

export default function AppointmentsTable({ appointments, onView }) {
  const statusColors = {
    Scheduled:
      "bg-gradient-to-r from-blue-100/80 to-indigo-100/80 text-blue-800 shadow-[0_0_10px_rgba(59,130,246,0.25)]",
    Completed:
      "bg-gradient-to-r from-green-100/80 to-emerald-100/80 text-green-800 shadow-[0_0_10px_rgba(34,197,94,0.25)]",
    Cancelled:
      "bg-gradient-to-r from-rose-100/80 to-pink-100/80 text-rose-800 shadow-[0_0_10px_rgba(244,63,94,0.25)]",
    Pending:
      "bg-gradient-to-r from-amber-100/80 to-yellow-100/80 text-amber-800 shadow-[0_0_10px_rgba(251,191,36,0.25)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-blue-300/40 bg-gradient-to-br from-blue-50/80 via-indigo-50/70 to-blue-100/60 backdrop-blur-2xl shadow-[0_8px_40px_rgba(59,130,246,0.15)] w-full"
    >
      <div className="overflow-x-auto md:overflow-x-hidden">
        <motion.table
          layout
          className="min-w-full text-[15px] sm:text-[16px] text-gray-800 font-medium table-auto"
        >
          <thead className="text-[13px] sm:text-[14px] uppercase tracking-wider bg-gradient-to-r from-blue-100/80 via-blue-50/80 to-indigo-100/80 text-blue-800 backdrop-blur-md">
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
                    "linear-gradient(90deg, rgba(240,248,255,0.85), rgba(219,234,254,0.75))",
                  boxShadow:
                    "0 0 25px rgba(59,130,246,0.25), 0 0 80px rgba(147,197,253,0.15)",
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
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 text-[15px] sm:text-[16px]">
                      {a.patientName}
                    </p>
                    <p className="text-xs text-gray-500">{a.reason}</p>
                  </div>
                </td>

                {/* Date & Time */}
                <td className="px-4 sm:px-8 py-5">
                  <div className="flex items-center gap-2 text-blue-700 font-medium">
                    <Clock className="w-4 h-4 text-blue-500" />
                    {a.time}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{a.date}</p>
                </td>

                {/* Type */}
                <td className="px-4 sm:px-8 py-5 text-blue-700">
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
                    className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm border ${statusColors[a.status]}`}
                  >
                    {a.status}
                  </motion.span>
                </td>

                {/* Actions */}
                <td className="px-4 sm:px-8 py-5 text-right sm:text-left">
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      boxShadow:
                        "0 0 12px rgba(59,130,246,0.4), 0 0 25px rgba(147,197,253,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onView(a)}
                    className="relative inline-flex items-center gap-1 px-4 py-1.5 text-sm sm:text-[15px] font-semibold rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.4)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"
                  >
                    <Sparkles size={14} className="text-white/80" />
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
