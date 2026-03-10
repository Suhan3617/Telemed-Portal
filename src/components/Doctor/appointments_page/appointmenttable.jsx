import { motion } from "framer-motion";
import { Video, Clock, Sparkles, Video as VideoIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AppointmentsTable({ appointments, onView }) {
  const navigate = useNavigate();

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

  const handleStartCall = (pId) => {
    // We navigate using the Patient ID (e.g., "p6"), not the Appointment ID ("ap6")
    if (pId) {
      navigate(`/doctor/consultation/${pId}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-blue-300/40 bg-gradient-to-br from-slate-50/80 via-blue-50/70 to-indigo-100/60 backdrop-blur-3xl shadow-[0_10px_50px_rgba(59,130,246,0.25)] w-full"
    >
      <div className="overflow-x-auto">
        <motion.table
          layout
          className="min-w-full text-[15px] sm:text-[16px] text-gray-800 font-medium table-auto"
        >
          <thead className="text-[13px] sm:text-[14px] uppercase tracking-wider bg-gradient-to-r from-blue-500/70 via-sky-400/70 to-indigo-300/60 text-blue-800 backdrop-blur-xl border-b border-blue-200/50 shadow-[inset_0_-2px_8px_rgba(59,130,246,0.1)]">
            <tr>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left font-semibold">Patient</th>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left font-semibold">Date & Time</th>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left font-semibold">Type</th>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-left font-semibold">Status</th>
              <th className="px-4 sm:px-8 py-3 sm:py-4 text-center font-semibold">Actions</th>
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
                  scale: 1.01,
                  background:
                    "linear-gradient(100deg, rgba(240,248,255,0.9), rgba(224,242,254,0.85), rgba(219,234,254,0.85))",
                  boxShadow: "0 0 25px rgba(59,130,246,0.1)",
                }}
                className="border-b border-blue-100/50 transition-all duration-300"
              >
                <td className="px-4 sm:px-8 py-5 flex items-center gap-3 sm:gap-4">
                  <motion.img
                    src={a.patientPhoto}
                    alt={a.patientName}
                    whileHover={{ scale: 1.08 }}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.4)] object-cover"
                  />
                  <div>
                    <p className="font-semibold text-blue-900 text-[15px] sm:text-[16px] tracking-tight">
                      {a.patientName}
                    </p>
                    <p className="text-xs text-gray-500">{a.reason}</p>
                  </div>
                </td>

                <td className="px-4 sm:px-8 py-5">
                  <div className="flex items-center gap-2 text-blue-800 font-medium">
                    <Clock className="w-4 h-4 text-blue-500" />
                    {a.time}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{a.date}</p>
                </td>

                <td className="px-4 sm:px-8 py-5 text-blue-800">
                  <div className="flex items-center gap-2 font-medium">
                    <Video className="w-4 h-4 text-blue-500" />
                    {a.type}
                  </div>
                </td>

                <td className="px-4 sm:px-8 py-5">
                  <span className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm ${statusColors[a.status]}`}>
                    {a.status}
                  </span>
                </td>

                <td className="px-4 sm:px-8 py-5">
                  <div className="flex items-center justify-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onView(a)}
                      className="px-4 py-1.5 text-sm font-semibold rounded-full bg-white/60 border border-blue-200 text-blue-600 shadow-sm hover:bg-white transition-all"
                    >
                      View
                    </motion.button>

                    {/* Logic Fix: Use a.patientId here */}
                    {a.status === "Scheduled" && (
                      <motion.button
                        whileHover={{
                          scale: 1.08,
                          background: "linear-gradient(to right, #3b82f6, #2563eb)",
                          boxShadow: "0 0 20px rgba(59,130,246,0.5)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleStartCall(a.patientId)}
                        className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md transition-all"
                      >
                        <VideoIcon size={14} />
                        Start Call
                      </motion.button>
                    )}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </motion.div>
  );
}