import { motion } from "framer-motion";
import { Video, Clock, Sparkles } from "lucide-react";

export default function AppointmentsTable({ appointments, onView }) {
  const statusColors = {
    Scheduled:
      "bg-blue-100/80 text-blue-800 border border-blue-300/50 shadow-blue-200/50",
    Completed:
      "bg-green-100/80 text-green-800 border border-green-300/50 shadow-green-200/50",
    Cancelled:
      "bg-red-100/80 text-red-800 border border-red-300/50 shadow-red-200/50",
    Pending:
      "bg-amber-100/80 text-amber-800 border border-amber-300/50 shadow-amber-200/50",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-blue-200/40 bg-white/60 backdrop-blur-2xl shadow-[0_8px_30px_rgba(59,130,246,0.12)] w-full"
    >
      <div className="overflow-x-auto md:overflow-x-hidden">
        <motion.table
          layout
          className="min-w-full text-[15px] sm:text-[16px] text-gray-800 font-medium table-auto"
        >
          <thead className="text-[13px] sm:text-[14px] uppercase tracking-wider bg-gradient-to-r from-blue-100/60 via-indigo-100/60 to-blue-50/60 text-blue-700 backdrop-blur-md">
            <tr>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left">Patient</th>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left">Date & Time</th>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left">Type</th>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left">Status</th>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, i) => (
              <motion.tr
                key={a.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(240,248,255,0.85)",
                  boxShadow:
                    "0 0 25px rgba(59,130,246,0.25), 0 0 60px rgba(147,197,253,0.15)",
                }}
                className="border-b border-blue-50/60 transition-all duration-300"
              >
                {/* Patient */}
                <td className="px-4 sm:px-8 py-4 flex items-center gap-3 sm:gap-4">
                  {/* Hide avatar below 420px */}
                  <div className="hidden xs:block">
                    <motion.img
                      src={a.patientPhoto}
                      alt={a.patientName}
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-blue-300 shadow-md shadow-blue-100"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">{a.patientName}</p>
                    <p className="text-xs text-gray-500">{a.reason}</p>
                  </div>
                </td>

                {/* Date & Time */}
                <td className="px-4 sm:px-8 py-4">
                  <div className="flex items-center gap-2 text-blue-700">
                    <Clock className="w-4 h-4 text-blue-500" />
                    {a.time}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{a.date}</p>
                </td>

                {/* Type */}
                <td className="px-4 sm:px-8 py-4 text-blue-700">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-blue-500" />
                    {a.type}
                  </div>
                </td>

                {/* Status */}
                <td className="px-4 sm:px-8 py-4">
                  <motion.span
                    animate={{ opacity: [1, 0.9, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${statusColors[a.status]}`}
                  >
                    {a.status}
                  </motion.span>
                </td>

                {/* Action */}
                <td className="px-4 sm:px-8 py-4 text-right sm:text-left">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onView(a)}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
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
