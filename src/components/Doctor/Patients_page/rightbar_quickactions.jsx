import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // 👈 Import Link
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
  // Added a 'path' property to each action
  const actions = [
    {
      label: "Send Message",
      Icon: MessageCircle,
      glow: "from-blue-300 to-blue-500",
      iconColor: "text-blue-600",
      path: `/patient/${patient.id}/message`, // Example path
    },
    {
      label: "New Prescription",
      Icon: PlusCircle,
      glow: "from-emerald-300 to-green-500",
      iconColor: "text-emerald-600",
      path: `/doctor/prescription`, // Example path
    },
    {
      label: "Share Records",
      Icon: FileText,
      glow: "from-indigo-300 to-indigo-500",
      iconColor: "text-indigo-600",
      path: `/patient/${patient.id}/records/share`, // Example path
    },
    {
      label: "Print",
      Icon: Printer,
      glow: "from-sky-300 to-sky-500",
      iconColor: "text-sky-600",
      path: `/patient/${patient.id}/print`, // Example path
    },
    {
      label: "Add Flag / Alert",
      Icon: Flag,
      glow: "from-amber-300 to-amber-500",
      iconColor: "text-amber-600",
      path: `/patient/${patient.id}/flag`, // Example path
    },
  ];

  // Assuming you need the patient ID for dynamic routes, 
  // ensure the 'patient' prop is passed and has an 'id' property.
  const patientId = patient?.id || "default";

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
            // 💡 REPLACED motion.button with Link and wrapped in motion.div 
            // for Framer Motion effects on the Link
            <motion.div
              key={i}
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
              className="rounded-2xl shadow-lg transition-all duration-300 cursor-pointer"
              style={{
                background: "rgba(255, 255, 255, 0.55)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
              }}
            >
              <Link
                to={a.path} // 👈 The path property is used here
                className="relative overflow-hidden block w-full h-full rounded-2xl px-5 py-4 flex items-center justify-between font-semibold text-gray-900"
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
                    // Note: whileHover on inner elements will only work if the parent motion component doesn't steal the hover state.
                    // For the sake of a simpler refactor, I'm keeping the original hover here.
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
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* 📊 Analytics Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative overflow-hidden rounded-2xl p-5 shadow-lg"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        {/* Glow */}
        <div className="absolute -inset-10 bg-gradient-to-br from-blue-300 to-blue-500 opacity-40 blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/40 opacity-40"></div>

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
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h4 className="font-semibold text-lg border-b border-blue-200 pb-2 flex items-center gap-2 text-blue-800">
          <AlertTriangle size={18} className="text-blue-500" /> Admin Actions
        </h4>

        {/* Since these buttons perform an action and not a navigation, 
            they remain as motion.button. If they navigate, change them to Link. */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 10px 20px rgba(239,68,68,0.2), 0 0 10px rgba(239,68,68,0.4)",
          }}
          whileTap={{ scale: 0.96 }}
          className="relative overflow-hidden bg-gradient-to-br from-red-500 to-red-600 text-white font-semibold py-2.5 w-full rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          onClick={() => console.log(`Flagging patient ${patientId} for review`)} // Example action
        >
          <Flag size={18} />
          Flag for Review
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 10px 20px rgba(156,163,175,0.2), 0 0 10px rgba(255,255,255,0.3)",
          }}
          whileTap={{ scale: 0.96 }}
          className="relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-100 text-gray-800 font-semibold py-2.5 w-full rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          onClick={() => console.log(`Archiving patient ${patientId}`)} // Example action
        >
          <Archive size={18} /> Archive Patient
        </motion.button>
      </motion.div>
    </motion.aside>
  );
}