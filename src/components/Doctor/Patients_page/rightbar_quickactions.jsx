import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Change Link to useNavigate
import {
  MessageCircle,
  FileText,
  Printer,
  Flag,
  Activity,
  AlertTriangle,
  Archive,
  PlusCircle,
} from "lucide-react";

export default function Rightbar_QuickActions({ patient }) {
  const navigate = useNavigate();
  const patientId = patient?.id || "default";

  // Navigation handler to pass state exactly like the Message Panel
  const handleActionClick = (path, state = null) => {
    if (state) {
      navigate(path, { state });
    } else {
      navigate(path);
    }
  };

  const actions = [
    {
      label: "Send Message",
      Icon: MessageCircle,
      glow: "from-blue-300 to-blue-500",
      iconColor: "text-blue-600",
      onClick: () =>
        handleActionClick("/doctor/messages", { selectedPatientId: patientId }),
    },
    {
      label: "New Prescription",
      Icon: PlusCircle,
      glow: "from-emerald-300 to-green-500",
      iconColor: "text-emerald-600",
      onClick: () => handleActionClick("/doctor/prescription"),
    },
    {
      label: "Share Records",
      Icon: FileText,
      glow: "from-indigo-300 to-indigo-500",
      iconColor: "text-indigo-600",
      onClick: () =>
        handleActionClick(`/doctor/patients/${patientId}/records/share`),
    },
    {
      label: "Print",
      Icon: Printer,
      glow: "from-sky-300 to-sky-500",
      iconColor: "text-sky-600",
      onClick: () => window.print(), // Direct action
    },
    {
      label: "Add Flag / Alert",
      Icon: Flag,
      glow: "from-amber-300 to-amber-500",
      iconColor: "text-amber-600",
      onClick: () => console.log("Flagged"),
    },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-72 sticky top-24 h-fit space-y-8"
    >
      {/* ✨ Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="font-extrabold text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Quick Actions
        </h2>
        <div className="h-[2px] w-16 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mt-2 rounded-full"></div>
      </motion.div>

      {/* ⚡ Action Buttons */}
      <div className="flex flex-col gap-5">
        {actions.map((a, i) => {
          const Icon = a.Icon;
          return (
            <motion.div
              key={i}
              onClick={a.onClick} // Use onClick instead of Link
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 220 }}
              whileHover={{
                scale: 1.06,
                y: -3,
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.15), 0 0 20px rgba(255,255,255,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 cursor-pointer px-5 py-4 flex items-center justify-between font-semibold text-gray-900"
              style={{
                background: "rgba(255, 255, 255, 0.55)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
              }}
            >
              {/* Glow background */}
              <div
                className={`absolute -inset-10 bg-gradient-to-br ${a.glow} opacity-40 blur-3xl`}
              ></div>

              {/* Reflection layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/40 opacity-40"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center gap-3 text-left">
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  className="p-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-md"
                >
                  <Icon size={22} className={a.iconColor} />
                </motion.div>
                <span>{a.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 📊 Analytics Section */}
      <motion.div
        className="relative overflow-hidden rounded-2xl p-5 shadow-lg"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        <div className="relative z-10">
          <h4 className="font-semibold text-blue-700 flex items-center gap-2 mb-3">
            <Activity size={18} className="text-blue-500" /> Short Analytics
          </h4>
          <div className="text-sm text-blue-800/90 font-medium space-y-1">
            <p>
              Adherence Score:{" "}
              <span className="font-semibold text-blue-600">87%</span>
            </p>
            <p>
              Upcoming Meds Due:{" "}
              <span className="font-semibold text-indigo-600">2</span>
            </p>
            <p>
              Last Sync:{" "}
              <span className="font-semibold text-blue-500">Oct 10, 2025</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* 🔐 Admin Actions */}
      <div className="space-y-4">
        <h4 className="font-semibold text-lg border-b border-blue-200 pb-2 flex items-center gap-2 text-blue-800">
          <AlertTriangle size={18} className="text-blue-500" /> Admin Actions
        </h4>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="bg-gradient-to-br from-red-500 to-red-600 text-white font-semibold py-2.5 w-full rounded-2xl shadow-lg flex items-center justify-center gap-2"
        >
          <Flag size={18} /> Flag for Review
        </motion.button>
      </div>
    </motion.aside>
  );
}
