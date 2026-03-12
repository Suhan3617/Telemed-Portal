import React, { useState, useRef } from "react"; // useRef add kiya file input ke liye
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  MessageCircle,
  Flag,
  Activity,
  AlertTriangle,
  PlusCircle,
  CloudUpload,
  CheckCircle2,
  Loader2,
  FileUp, // File selection ke liye icon
} from "lucide-react";

export default function Rightbar_QuickActions({ patient }) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // File input ko access karne ke liye
  const [isSharing, setIsSharing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const patientId = patient?.id || "default";

  // --- File Selection Handler ---
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsSharing(true);
    console.log("Uploading file:", file.name);

    // Mock API Call (Backend integration ke liye placeholder)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Fake upload time
      setIsSharing(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Upload failed", error);
      setIsSharing(false);
    }
    
    // Input reset taaki same file dubara select ho sake
    event.target.value = null;
  };

  const triggerFileSelect = () => {
    // Hidden input ko click karwao
    fileInputRef.current.click();
  };

  const handleActionClick = (path, state = null) => {
    if (state) navigate(path, { state });
    else navigate(path);
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
      label: isSharing ? "Uploading..." : "Share Reports",
      Icon: isSharing ? Loader2 : FileUp, // Icon badal diya
      glow: "from-indigo-300 to-indigo-500",
      iconColor: "text-indigo-600",
      onClick: triggerFileSelect, // File picker trigger karega
      disabled: isSharing,
    },
    {
      label: "Add Flag / Alert",
      Icon: Flag,
      glow: "from-amber-300 to-amber-500",
      iconColor: "text-amber-600",
      onClick: () => console.log("Flagging..."),
    },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-72 sticky top-24 h-fit space-y-8"
    >
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" // Sirf reports allowed
      />

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute -top-12 left-0 right-0 bg-green-500 text-white text-[11px] py-2 px-3 rounded-xl flex items-center justify-center gap-2 shadow-lg z-50 font-bold"
          >
            <CheckCircle2 size={14} /> Report Shared Successfully!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center">
        <h2 className="font-extrabold text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Quick Actions
        </h2>
        <div className="h-[2px] w-16 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="flex flex-col gap-5">
        {actions.map((a, i) => {
          const Icon = a.Icon;
          return (
            <motion.div
              key={i}
              onClick={!a.disabled ? a.onClick : null}
              whileHover={!a.disabled ? { scale: 1.05, y: -2 } : {}}
              whileTap={!a.disabled ? { scale: 0.98 } : {}}
              className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 px-5 py-4 flex items-center justify-between font-semibold text-gray-900 ${
                a.disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"
              }`}
              style={{
                background: "rgba(255, 255, 255, 0.55)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
              }}
            >
              <div className={`absolute -inset-10 bg-gradient-to-br ${a.glow} opacity-40 blur-3xl`}></div>
              
              <div className="relative z-10 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/60 shadow-md">
                  <Icon 
                    size={22} 
                    className={`${a.iconColor} ${isSharing && a.label === "Uploading..." ? "animate-spin" : ""}`} 
                  />
                </div>
                <span className="text-[15px]">{a.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Analytics & Admin Section (Same as before) */}
      <div className="bg-white/50 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-lg">
        <h4 className="font-semibold text-blue-700 flex items-center gap-2 mb-3 text-sm">
          <Activity size={18} /> Patient Insights
        </h4>
        <div className="text-sm text-blue-900/80 space-y-1 font-medium">
          <p>Adherence Score: <span className="text-blue-600">87%</span></p>
          <p>Portal Status: <span className="text-indigo-600">Active</span></p>
        </div>
      </div>
    </motion.aside>
  );
}