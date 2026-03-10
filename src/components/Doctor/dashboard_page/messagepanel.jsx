import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Users } from 'lucide-react';
import { patients } from '../../../data/doctor/mockdata';

const patientMessages = [
  { pid: 'p4', text: 'Follow-up for knee pain', name: 'Priya Sharma', avatar: patients.find(p => p.id === 'p4')?.avatar, time: '2m ago' },
  { pid: 'p2', text: 'Persistent migraine headaches', name: 'Aisha Khan', avatar: patients.find(p => p.id === 'p2')?.avatar, time: '1h ago' },
  { pid: 'p1', text: 'Skin rash and itching', name: 'John Doe', avatar: patients.find(p => p.id === 'p1')?.avatar, time: '3h ago' },
];

const MessagePanel = () => {
  const navigate = useNavigate();

  const handleChatClick = (patientId) => {
    navigate('/doctor/messages', { state: { selectedPatientId: patientId } });
  };

  return (
    <motion.div 
      className="bg-white/60 backdrop-blur-3xl rounded-[2.5rem] shadow-xl border border-white/60 overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      {/* 🚀 Header Section - Matching Sidebar Style */}
      <div className="p-5 bg-gradient-to-br from-white/60 via-blue-50/40 to-white/60 border-b border-white/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-800">
            <MessageSquare size={20} className="text-blue-600" />
            <h2 className="text-lg font-bold tracking-tight">Recent Messages</h2>
          </div>
          <span className="text-[10px] font-bold bg-blue-500/10 text-blue-600 px-2 py-1 rounded-full border border-blue-200/50">
            {patientMessages.length} NEW
          </span>
        </div>
      </div>

      {/* 🧾 Messages List - Matching ChatSidebar Card Style */}
      <div className="overflow-y-auto flex-1 py-4 px-4 space-y-3 custom-scrollbar">
        <AnimatePresence>
          {patientMessages.map((msg, index) => (
            <motion.div
              key={msg.pid}
              onClick={() => handleChatClick(msg.pid)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-3.5 flex items-center gap-4 cursor-pointer transition-all rounded-[1.5rem] bg-white/40 hover:bg-white/80 border border-white/60 shadow-sm group"
            >
              {/* Avatar section */}
              <div className="relative">
                <img 
                  src={msg.avatar} 
                  alt={msg.name} 
                  className="w-12 h-12 rounded-2xl border-2 border-white object-cover shadow-md group-hover:border-blue-400 transition-colors" 
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white bg-green-500" />
              </div>
              
              {/* Info section */}
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-center mb-0.5">
                  <h4 className="font-bold truncate text-[14px] text-slate-800 tracking-tight">
                    {msg.name}
                  </h4>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-blue-500/60">
                    {msg.time}
                  </span>
                </div>
                <p className="text-[11px] truncate font-semibold text-slate-500 opacity-80">
                  {msg.text}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View All Button */}
      <div className="p-4 bg-white/20 border-t border-white/40">
        <button 
          onClick={() => navigate('/doctor/messages')}
          className="w-full py-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          View All Consultations
        </button>
      </div>
    </motion.div>
  );
}

export default MessagePanel;