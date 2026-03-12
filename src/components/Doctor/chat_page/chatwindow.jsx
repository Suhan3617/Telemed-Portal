import React, { useState, useRef, useEffect } from 'react';
import { Send, Video, ChevronLeft, Paperclip, MoreVertical, User, Trash2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ChatWindow({ patient, messages, onSendMessage, onBack }) {
  const [text, setText] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const scrollRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Scroll to bottom logic
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSendMessage(text);
    setText("");
  };

  // 📎 Attachment Handler
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onSendMessage(`📁 Attachment: ${file.name}`);
      console.log("File selected:", file);
    }
  };

  // 📹 Video Call Navigation
  const startVideoConsultation = () => {
    navigate(`/doctor/consultation/${patient.id}`);
  };

  // 👤 View Profile Navigation (Specific Patient Page)
  const handleViewProfile = () => {
    setShowMenu(false); // Menu close karein
    navigate(`/doctor/patients/${patient.id}`); // URL update hote hi PatientOverviewPage use catch kar lega
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-transparent relative">
      
      {/* 🏝️ Floating Dynamic Island Header */}
      <div className="mx-6 mt-6 p-4 rounded-[1.5rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="md:hidden p-2 text-blue-600 hover:bg-white/80 rounded-full transition-all">
            <ChevronLeft />
          </button>
          
          <div className="relative">
            <motion.img 
              layoutId={`avatar-${patient.id}`}
              src={patient.avatar} 
              className="w-11 h-11 rounded-[1rem] object-cover border-2 border-white shadow-sm" 
            />
          </div>

          <div>
            <h3 className="font-bold text-slate-800 leading-none tracking-tight">{patient.name}</h3>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Consulting</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 relative">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startVideoConsultation}
            className="group flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200 transition-all hover:bg-blue-700"
          >
            <Video size={18} />
            <span className="text-xs font-bold hidden sm:block">Start Meeting</span>
          </motion.button>
          
          {/* 🔘 Three Dots Menu Toggle */}
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${showMenu ? 'bg-slate-100 text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}
          >
            {showMenu ? <X size={18} /> : <MoreVertical size={18} />}
          </button>

          {/* 📝 Dropdown Menu */}
          <AnimatePresence>
            {showMenu && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="absolute right-0 top-12 w-48 bg-white/90 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-xl p-2 z-50"
              >
                <button 
                  onClick={handleViewProfile}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all"
                >
                  <User size={16} /> View Profile
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl transition-all">
                  <Trash2 size={16} /> Clear History
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 💬 Messages Area */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4 custom-scrollbar">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${m.isMe ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[70%] px-5 py-3 rounded-[1.75rem] shadow-sm relative ${
                m.isMe 
                  ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-tr-none" 
                  : "bg-white/80 backdrop-blur-md border border-white/50 text-slate-800 rounded-tl-none"
              }`}>
                <p className="text-[14px] leading-relaxed font-medium">{m.text}</p>
                <div className={`text-[9px] mt-1.5 flex items-center gap-1 ${m.isMe ? "text-blue-100 justify-end" : "text-slate-400"}`}>
                  {m.time || "Just now"}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={scrollRef} className="h-2" />
      </div>

      {/* ✍️ Floating Input Bar */}
      <div className="p-6 pt-2">
        <form 
          onSubmit={handleSend} 
          className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-[2rem] p-2 flex items-center gap-2 shadow-2xl shadow-blue-900/5 focus-within:ring-2 ring-blue-400/20 transition-all"
        >
          {/* Functional File Input */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
          />
          <button 
            type="button" 
            onClick={() => fileInputRef.current.click()}
            className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-white rounded-full transition-all"
          >
            <Paperclip size={20} />
          </button>

          <input 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder={`Message ${patient.name.split(' ')[0]}...`} 
            className="flex-1 px-2 py-2 bg-transparent outline-none text-[14px] font-medium text-slate-700 placeholder:text-slate-400"
          />
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            type="submit" 
            className="w-11 h-11 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-200 transition-all"
          >
            <Send size={18} />
          </motion.button>
        </form>
      </div>
    </div>
  );
}