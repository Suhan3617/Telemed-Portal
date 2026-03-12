import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Calendar, Clock, Activity, ClipboardList, Search, Check } from "lucide-react";
import { patients } from "../../../data/doctor/mockdata"; // Path check kar lena

export default function NewAppointmentModal({ isOpen, onClose, onAdd }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    time: "10:00",
    type: "Video Consultation",
    reason: "",
    status: "Scheduled"
  });

  // Filter patients based on search
  const filteredPatients = useMemo(() => {
    return patients.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.uhid.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    setSearchTerm(patient.name);
    setShowDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPatient) {
      alert("Please select a patient first");
      return;
    }

    const newEntry = {
      ...formData,
      id: `ap-${Date.now()}`,
      patientId: selectedPatient.id,
      patientName: selectedPatient.name,
      patientPhoto: selectedPatient.avatar,
    };

    onAdd(newEntry);
    // Reset form
    setSelectedPatient(null);
    setSearchTerm("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden border border-blue-100"
      >
        {/* Header */}
        <div className="p-6 border-b border-blue-50 flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50">
          <h2 className="text-xl font-bold text-blue-900 flex items-center gap-2">
            <Calendar className="text-blue-500" size={22} /> New Appointment
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors">
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-7 space-y-4">
          
          {/* --- Patient Search Dropdown --- */}
          <div className="relative">
            <label className="text-sm font-bold text-slate-700 block mb-1.5 ml-1">Search Patient</label>
            <div className="relative group">
              <Search className="absolute left-4 top-3.5 text-blue-400" size={18} />
              <input 
                type="text"
                required
                value={searchTerm}
                onFocus={() => setShowDropdown(true)}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowDropdown(true);
                }}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Name or UHID..."
              />
            </div>

            {/* Dropdown List */}
            <AnimatePresence>
              {showDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-10 w-full mt-2 bg-white border border-blue-100 rounded-2xl shadow-xl max-h-48 overflow-y-auto"
                >
                  {filteredPatients.length > 0 ? (
                    filteredPatients.map(p => (
                      <div 
                        key={p.id}
                        onClick={() => handleSelectPatient(p)}
                        className="flex items-center gap-3 p-3 hover:bg-blue-50 cursor-pointer transition-colors border-b border-slate-50 last:border-0"
                      >
                        <img src={p.avatar} alt="" className="w-8 h-8 rounded-full border border-blue-200" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-slate-800">{p.name}</p>
                          <p className="text-[10px] text-slate-500">{p.uhid} | {p.location}</p>
                        </div>
                        {selectedPatient?.id === p.id && <Check size={16} className="text-blue-600" />}
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center text-sm text-slate-500">No patients found</div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-slate-700 block mb-1.5 ml-1">Date</label>
              <input 
                type="date" 
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 block mb-1.5 ml-1">Time</label>
              <input 
                type="time" 
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>
          </div>

          {/* Type */}
          <div>
            <label className="text-sm font-bold text-slate-700 block mb-1.5 ml-1">Type</label>
            <div className="relative">
              <Activity className="absolute left-4 top-3 text-blue-400" size={18} />
              <select 
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option value="Video Consultation">Video Consultation</option>
                <option value="Follow-up">Follow-up</option>
              </select>
            </div>
          </div>

          {/* Reason */}
          <div>
            <label className="text-sm font-bold text-slate-700 block mb-1.5 ml-1">Reason</label>
            <div className="relative">
              <ClipboardList className="absolute left-4 top-3 text-blue-400" size={18} />
              <input 
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Consultation reason..."
                value={formData.reason}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-blue-200 transition-all mt-4"
          >
            Create Appointment
          </button>
        </form>
      </motion.div>

      {/* Close dropdown on click outside */}
      {showDropdown && (
        <div className="fixed inset-0 z-0" onClick={() => setShowDropdown(false)} />
      )}
    </div>
  );
}