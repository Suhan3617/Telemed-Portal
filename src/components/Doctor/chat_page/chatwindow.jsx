import React, { useState, useRef, useEffect } from 'react';
import { Send, Phone, Video, ChevronLeft, Paperclip } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWindow({ patient, messages, onSendMessage, onBack }) {
  const [text, setText] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSendMessage(text);
    setText("");
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="md:hidden p-2 text-blue-600 hover:bg-blue-50 rounded-full"><ChevronLeft /></button>
          <img src={patient.avatar} className="w-10 h-10 rounded-full object-cover border-2 border-blue-100" alt="" />
          <div>
            <h3 className="font-bold text-slate-800 leading-none">{patient.name}</h3>
            <span className="text-[10px] text-green-600 font-bold tracking-tight">ACTIVE CONSULTATION</span>
          </div>
        </div>
        <div className="flex gap-1">
          <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><Phone size={18} /></button>
          <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><Video size={18} /></button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/40">
        <AnimatePresence>
          {messages.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: m.isMe ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex ${m.isMe ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[70%] px-4 py-2.5 rounded-2xl shadow-sm ${
                m.isMe ? "bg-blue-500 text-white rounded-tr-none" : "bg-white border border-slate-200 text-slate-800 rounded-tl-none"
              }`}>
                <p className="text-sm leading-relaxed">{m.text}</p>
                <p className={`text-[9px] mt-1 text-right ${m.isMe ? "text-blue-100" : "text-slate-400"}`}>{m.time || "Just now"}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={scrollRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-4 bg-white/80 border-t border-slate-200 flex items-center gap-3">
        <button type="button" className="p-2 text-slate-400 hover:text-blue-500"><Paperclip size={20} /></button>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder={`Reply to ${patient.name.split(' ')[0]}...`} 
          className="flex-1 px-4 py-3 bg-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none text-sm border-none"
        />
        <button type="submit" className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 shadow-lg shadow-blue-200 transition-all active:scale-90">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}