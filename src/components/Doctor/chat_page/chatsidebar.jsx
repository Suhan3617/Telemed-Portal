import React, { useState, useMemo } from 'react'; // Added useState and useMemo
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatSidebar({ patients, onSelect, activeId }) {
  // 1. Search state banaya
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Filter logic (Memoized for performance)
  const filteredPatients = useMemo(() => {
    return patients.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.statusPill.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [patients, searchTerm]);

  return (
    <div className="w-full h-full flex flex-col bg-transparent">
      {/* Header section with Glassmorphism */}
      <div className="p-5 bg-white/40 backdrop-blur-md border-b border-white/20">
        <h2 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">Consultations</h2>
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
          
          {/* 3. Input connected to state */}
          <input 
            type="text" 
            placeholder="Search patients..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/50 backdrop-blur-sm rounded-2xl focus:ring-2 focus:ring-blue-400/30 outline-none text-sm border border-white/40 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Patients List */}
      <div className="overflow-y-auto flex-1 py-3 custom-scrollbar">
        <AnimatePresence>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((p) => (
              <motion.div 
                key={p.id}
                layout // Smooth transition when items re-order/filter
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.01, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(p)}
                className={`mx-3 mb-2 p-3.5 flex items-center gap-3 cursor-pointer transition-all rounded-[1.25rem] relative ${
                  activeId === p.id 
                    ? "bg-blue-500 text-white shadow-[0_10px_20px_-5px_rgba(59,130,246,0.3)]" 
                    : "hover:bg-white/40 text-slate-700"
                }`}
              >
                <div className="relative">
                  <img src={p.avatar} alt={p.name} className="w-12 h-12 rounded-2xl border-2 border-white/50 object-cover shadow-sm" />
                  <span className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white ${p.id === 'p1' ? 'bg-green-500' : 'bg-slate-300'}`} />
                </div>
                
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-center mb-0.5">
                    <h4 className="font-bold truncate text-sm tracking-tight">{p.name}</h4>
                    <span className={`text-[10px] font-medium ${activeId === p.id ? "text-blue-100" : "text-slate-400"}`}>
                      {p.lastVisit}
                    </span>
                  </div>
                  <p className={`text-[11px] truncate font-medium opacity-80 ${activeId === p.id ? "text-blue-50" : "text-slate-500"}`}>
                    {p.statusPill} • {p.age}y {p.sex}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            // 4. No Results View
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center p-10 text-slate-400 text-sm italic"
            >
              No patients found matching "{searchTerm}"
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}