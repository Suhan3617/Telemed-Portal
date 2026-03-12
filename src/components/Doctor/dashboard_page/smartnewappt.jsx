import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  ChevronDown,
  Zap,
  Search,
  X,
  UserPlus,
  CheckCircle2,
} from "lucide-react";
import { patients } from "../../../data/doctor/mockdata";

const SmartNewAppointment = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = useMemo(() => {
    if (!searchTerm.trim()) return patients.slice(0, 4);
    return patients.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.uhid.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  // Ye function handle karega redirection
  const handleQuickBook = (patient) => {
    setShowModal(false);
    // Hum navigate kar rahe hain aur saath mein 'state' mein patient data bhej rahe hain
    navigate(`/doctor/appointments?triggerModal=true`, {
      state: { preSelectedPatient: patient },
    });
  };

  const handleNewPatientRedirect = () => {
    setShowModal(false);
    navigate("/doctor/appointments?triggerModal=true");
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center w-full shadow-lg shadow-blue-500/10 group">
        <button
          onClick={() => setShowModal(true)}
          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3.5 rounded-l-2xl font-bold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-indigo-700 transition-all active:scale-95"
        >
          <Plus size={18} strokeWidth={3} />
          New Appointment
        </button>

        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-indigo-700 text-white px-3 py-3.5 rounded-r-2xl border-l border-white/10 hover:bg-indigo-800 transition-all"
        >
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Quick Dropdown (Emergency) */}
      <AnimatePresence>
        {showDropdown && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowDropdown(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden"
            >
              <div className="p-2">
                <button
                  onClick={() => {
                    navigate(
                      "/doctor/appointments?type=Emergency&triggerModal=true",
                    );
                    setShowDropdown(false);
                  }}
                  className="flex items-center gap-3 p-3 hover:bg-red-50 text-red-600 rounded-xl transition-all group w-full text-left"
                >
                  <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Zap size={16} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Emergency Slot</p>
                    <p className="text-[10px] opacity-70 uppercase font-black">
                      Book Instant Priority
                    </p>
                  </div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Patient Selection Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl z-[1001] overflow-hidden relative border border-white/20"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-800">
                      Quick Selection
                    </h3>
                    <p className="text-sm text-slate-400 font-medium">
                      Select a patient to schedule
                    </p>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2.5 bg-slate-100 rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="relative mb-6">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500"
                    size={18}
                  />
                  <input
                    type="text"
                    autoFocus
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by Name or UHID..."
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none font-bold text-sm transition-all"
                  />
                </div>

                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredPatients.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleQuickBook(p)}
                      className="w-full flex items-center justify-between p-4 bg-slate-50/50 hover:bg-blue-600 hover:text-white border border-slate-100 rounded-2xl transition-all group active:scale-[0.98]"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={p.avatar}
                          alt=""
                          className="w-10 h-10 rounded-xl object-cover ring-2 ring-white"
                        />
                        <div className="text-left">
                          <p className="font-bold text-sm group-hover:text-white">
                            {p.name}
                          </p>
                          <p className="text-[10px] font-bold text-slate-400 group-hover:text-blue-100 uppercase">
                            {p.uhid}
                          </p>
                        </div>
                      </div>
                      <CheckCircle2
                        size={18}
                        className="text-blue-500 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all"
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNewPatientRedirect}
                  className="w-full mt-6 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
                >
                  <UserPlus size={16} />
                  New Registration
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SmartNewAppointment;
