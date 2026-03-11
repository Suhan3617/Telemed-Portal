import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Navigation ke liye
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronDown, Zap, Clock, Search, X, UserPlus } from 'lucide-react';
import { patients } from '../../../data/doctor/mockdata';

const SmartNewAppointment = () => {
  const navigate = useNavigate(); // 👈 Hook initialize kiya
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Filter Patients based on Search
  const filteredPatients = useMemo(() => {
    if (!searchTerm.trim()) return patients.slice(0, 3);
    return patients.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.uhid.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // 2. Action Handlers
  const handleNewPatientRedirect = () => {
    setShowModal(false);
    // Maan lete hain tumhare appointments page par 'openModal=true' query handle hoti hai
    navigate('/doctor/appointments?action=new-patient');
  };

  const handleBookExisting = (patientName) => {
    setShowModal(false);
    // Uss patient ke saath appointments page par bhej rahe hain
    navigate(`/doctor/appointments?search=${encodeURIComponent(patientName)}&action=book`);
  };

  return (
    <div className="relative w-full">
      {/* 🔘 Split Button */}
      <div className="flex items-center w-full shadow-lg shadow-blue-500/10">
        <button 
          onClick={() => setShowModal(true)}
          className="flex-1 bg-blue-600 text-white px-4 py-3.5 rounded-l-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
        >
          <Plus size={18} strokeWidth={3} />
          New Appointment
        </button>
        
        <button 
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-blue-700 text-white px-3 py-3.5 rounded-r-2xl border-l border-blue-500/30 hover:bg-blue-800 transition-all"
        >
          <ChevronDown size={20} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* 🔽 Dropdown Menu */}
      <AnimatePresence>
        {showDropdown && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)} />
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden"
            >
              <div className="p-2 flex flex-col gap-1">
                <button 
                  onClick={() => { navigate('/doctor/appointments?type=Emergency'); setShowDropdown(false); }}
                  className="flex items-center gap-3 p-3 hover:bg-red-50 text-red-600 rounded-xl transition-colors group text-left w-full"
                >
                  <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Zap size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none">Emergency</p>
                    <p className="text-[10px] opacity-70 font-bold uppercase mt-1">Priority Slot</p>
                  </div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 🔍 Search Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />
            <motion.div 
              className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden relative"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-black text-slate-800">Quick Book</h3>
                  <button onClick={() => setShowModal(false)} className="p-2.5 bg-slate-100 rounded-full text-slate-400 hover:text-red-500 transition-all">
                    <X size={20} />
                  </button>
                </div>

                <div className="relative mb-8">
                  <Search className="absolute left-4 top-4 text-blue-500" size={18} />
                  <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // 👈 Search Fix
                    placeholder="Search Patient Name or UHID..." 
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none font-bold text-sm"
                  />
                </div>

                <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredPatients.map((p) => (
                    <button 
                      key={p.id} 
                      onClick={() => handleBookExisting(p.name)} // 👈 Select Patient Fix
                      className="w-full flex items-center justify-between p-4 bg-white hover:bg-blue-50 border border-slate-100 rounded-2xl transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <img src={p.avatar} alt="" className="w-10 h-10 rounded-xl object-cover" />
                        <div className="text-left leading-tight">
                          <p className="font-bold text-slate-700 text-sm">{p.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{p.uhid}</p>
                        </div>
                      </div>
                      <Plus size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>

                {/* ➕ Register New Patient Fix */}
                <button 
                  onClick={handleNewPatientRedirect}
                  className="w-full mt-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-xl"
                >
                  <UserPlus size={16} />
                  Register New Patient
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