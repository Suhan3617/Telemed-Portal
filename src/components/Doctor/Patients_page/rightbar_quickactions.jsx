import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  MessageCircle,
  Flag,
  Activity,
  AlertTriangle,
  PlusCircle,
  FileUp,
  CheckCircle2,
  Loader2,
  X,
} from "lucide-react";

export default function Rightbar_QuickActions({ patient }) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [isSharing, setIsSharing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isFlagModalOpen, setIsFlagModalOpen] = useState(false);
  const [activeAlert, setActiveAlert] = useState(null);

  const patientId = patient?.id || "default";

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setIsSharing(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSharing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    event.target.value = null;
  };

  const handleSaveFlag = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const alertData = {
      type: formData.get("type"),
      note: formData.get("note"),
    };
    
    setActiveAlert(alertData);
    setIsFlagModalOpen(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <motion.aside className="w-72 sticky top-24 h-fit space-y-8">
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

      {/* --- Success Notification --- */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // Changed z-index here to stay on top
            className="absolute -top-12 left-0 right-0 bg-green-500 text-white text-[11px] py-2 px-3 rounded-xl flex items-center justify-center gap-2 shadow-lg z-[101] font-bold"
          >
            <CheckCircle2 size={14} /> Action Completed Successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Active Alert Badge --- */}
      <AnimatePresence>
        {activeAlert && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-amber-100 border border-amber-300 p-3 rounded-2xl flex items-start gap-3 relative"
          >
            <AlertTriangle className="text-amber-600 shrink-0" size={18} />
            <div>
              <p className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">{activeAlert.type}</p>
              <p className="text-xs text-amber-900 font-medium">{activeAlert.note}</p>
            </div>
            <button onClick={() => setActiveAlert(null)} className="absolute top-2 right-2 text-amber-500 hover:text-amber-700">
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center">
        <h2 className="font-extrabold text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">
          Quick Actions
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        <ActionButton label="Send Message" Icon={MessageCircle} glow="from-blue-300 to-blue-500" color="text-blue-600" onClick={() => navigate("/doctor/messages")} />
        <ActionButton label="New Prescription" Icon={PlusCircle} glow="from-emerald-300 to-green-500" color="text-emerald-600" onClick={() => navigate("/doctor/prescription")} />
        <ActionButton label={isSharing ? "Uploading..." : "Share Reports"} Icon={isSharing ? Loader2 : FileUp} glow="from-indigo-300 to-indigo-500" color="text-indigo-600" onClick={() => fileInputRef.current.click()} disabled={isSharing} />
        <ActionButton label="Add Flag / Alert" Icon={Flag} glow="from-amber-300 to-amber-500" color="text-amber-600" onClick={() => setIsFlagModalOpen(true)} />
      </div>

      {/* --- Flag Modal (Updated for proper overlay) --- */}
      <AnimatePresence>
        {isFlagModalOpen && (
          // Fixed container added to ensure it sits on top of everything
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsFlagModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl relative z-[1001]"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <Flag className="text-amber-500" size={20} /> Add Patient Alert
                </h3>
                <X className="cursor-pointer text-gray-400" onClick={() => setIsFlagModalOpen(false)} />
              </div>
              
              <form onSubmit={handleSaveFlag} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 block mb-1 uppercase">Alert Type</label>
                  <select name="type" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-sm focus:ring-2 focus:ring-amber-500 outline-none">
                    <option value="Allergy">Allergy</option>
                    <option value="High Risk">High Risk Condition</option>
                    <option value="Behavioral">Behavioral / Staff Note</option>
                    <option value="Admin">Admin / Payment</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 block mb-1 uppercase">Notes</label>
                  <textarea name="note" required placeholder="e.g. Allergic to Penicillin" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-sm h-24 resize-none outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-amber-200">
                  Set Alert
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}

function ActionButton({ label, Icon, glow, color, onClick, disabled }) {
  return (
    <motion.div
      onClick={!disabled ? onClick : null}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`relative overflow-hidden rounded-2xl shadow-lg px-5 py-4 flex items-center justify-between font-semibold text-gray-900 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={{ background: "rgba(255, 255, 255, 0.55)", backdropFilter: "blur(14px)", border: "1px solid rgba(255, 255, 255, 0.25)" }}
    >
      <div className={`absolute -inset-10 bg-gradient-to-br ${glow} opacity-30 blur-3xl`}></div>
      <div className="relative z-10 flex items-center gap-3">
        <div className="p-2 rounded-xl bg-white/60 shadow-md">
          <Icon size={22} className={`${color} ${label === "Uploading..." ? "animate-spin" : ""}`} />
        </div>
        <span className="text-[14px]">{label}</span>
      </div>
    </motion.div>
  );
}