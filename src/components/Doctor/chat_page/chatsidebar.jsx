import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronDown, Users } from 'lucide-react';
import { pop } from './animation';

export default function ChatSidebar({ patients, onSelect, activeId }) {
  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // 🔄 Sorting & Filtering Logic
  const filteredPatients = useMemo(() => {
    let result = patients.filter((p) => {
      const matchQ = p.name.toLowerCase().includes(q.toLowerCase()) || 
                     p.statusPill.toLowerCase().includes(q.toLowerCase());
      const matchStatus = statusFilter === "All" || p.statusPill === statusFilter;
      return matchQ && matchStatus;
    });

    // Recent message/activity ko top par laane ke liye sort logic
    // Note: Agar aapke paas 'timestamp' field hai toh p2.timestamp - p1.timestamp use karein
    return result.sort((a, b) => {
      // Basic sorting: Active patient hamesha top par ya custom logic
      if (a.id === activeId) return -1;
      if (b.id === activeId) return 1;
      return 0;
    });
  }, [patients, q, statusFilter, activeId]);

  return (
    <div className="w-full h-full flex flex-col bg-transparent">
      
      {/* 🚀 Premium Header & Filter Section */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={pop}
        className="p-5 bg-gradient-to-br from-white/60 via-blue-50/40 to-white/60 
                   backdrop-blur-3xl border-b border-white/40 shadow-sm flex flex-col gap-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-800">
            <Users size={20} className="text-blue-600" />
            <h2 className="text-lg font-bold tracking-tight">Consultations</h2>
          </div>
          <span className="text-[10px] font-bold bg-blue-500/10 text-blue-600 px-2 py-1 rounded-full border border-blue-200/50">
            {filteredPatients.length} ACTIVE
          </span>
        </div>

        {/* 🔍 Search Bar */}
        <div className="relative group">
          <Search className="absolute left-3 top-3 text-blue-500/70 transition-colors group-focus-within:text-blue-600" size={18} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search patient..."
            className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)] font-medium focus:ring-2 focus:ring-blue-300/50 focus:outline-none transition-all"
          />
          {q && (
            <button onClick={() => setQ("")} className="absolute right-3 top-2.5 text-blue-400">
              <X size={16} />
            </button>
          )}
        </div>

        {/* 🔽 Filter Dropdown */}
        <div className="relative w-full group">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="appearance-none w-full px-4 py-2 pr-10 rounded-xl bg-gradient-to-br from-white/80 via-blue-50/60 to-white/80 text-blue-800 text-xs font-bold border border-blue-200/50 focus:outline-none cursor-pointer"
          >
            <option value="All">All Status</option>
            <option value="Diabetic">Diabetic</option>
            <option value="Hypertension">Hypertension</option>
            <option value="Asthmatic">Asthmatic</option>
            <option value="Healthy">Healthy</option>
          </select>
          <ChevronDown className="absolute right-3 top-2.5 text-blue-500 pointer-events-none" size={14} />
        </div>
      </motion.div>

      {/* 🧾 Patients List */}
      <div className="overflow-y-auto flex-1 py-4 px-3 space-y-2 custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {filteredPatients.map((p, index) => (
            <motion.div
              key={p.id}
              layout // ✨ Smooth layout transition for sorting
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 30,
                mass: 1
              }}
              onClick={() => onSelect(p)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`p-3.5 flex items-center gap-4 cursor-pointer transition-all rounded-[1.5rem] relative border ${
                activeId === p.id 
                  ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg border-blue-400" 
                  : "bg-white/40 hover:bg-white/60 text-slate-700 border-white/60 shadow-sm"
              }`}
            >
              <div className="relative">
                <img src={p.avatar} alt={p.name} className="w-12 h-12 rounded-2xl border-2 border-white/50 object-cover" />
                {/* Active Indicator */}
                <span className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white ${p.id === 'p1' || p.id === 'p3' ? 'bg-green-500' : 'bg-slate-300'}`} />
              </div>
              
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-center mb-0.5">
                  <h4 className="font-bold truncate text-[14px] tracking-tight">{p.name}</h4>
                  <span className={`text-[9px] font-black uppercase ${activeId === p.id ? "text-blue-100" : "text-blue-500/60"}`}>
                    {p.lastVisit}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className={`text-[11px] truncate font-medium opacity-80 ${activeId === p.id ? "text-blue-50" : "text-slate-500"}`}>
                    {p.statusPill}
                  </p>
                  {/* Optional: Unread indicator agar active nahi hai */}
                  {activeId !== p.id && p.unread && (
                    <span className="w-2 h-2 bg-blue-500 rounded-full shadow-sm shadow-blue-400" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}