import React, { useState, useRef, useEffect } from 'react';
import { Phone, Video, ChevronLeft, Send, Paperclip, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWindow({ selectedPatient, messages, onSendMessage, onBack }) {
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50/50">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="md:hidden p-2 hover:bg-slate-100 rounded-full text-blue-600"><ChevronLeft /></button>
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
            {selectedPatient.patientName[0]}
          </div>
          <div>
            <h3 className="font-bold text-slate-800 leading-tight">{selectedPatient.patientName}</h3>
            <span className="flex items-center gap-1 text-[10px] text-green-600 font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online
            </span>
          </div>
        </div>
        <div className="flex gap-1">
          <button className="p-2.5 text-blue-500 hover:bg-blue-50 rounded-xl transition-all"><Phone size={20} /></button>
          <button className="p-2.5 text-blue-500 hover:bg-blue-50 rounded-xl transition-all"><Video size={20} /></button>
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl shadow-sm relative ${
                msg.isMe 
                ? "bg-blue-500 text-white rounded-tr-none" 
                : "bg-white border border-slate-200 text-slate-800 rounded-tl-none"
              }`}>
                <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                <p className={`text-[9px] mt-1 text-right ${msg.isMe ? "text-blue-100" : "text-slate-400"}`}>
                  {msg.time}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={scrollRef} />
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSubmit} className="p-4 bg-white/80 border-t border-slate-200 flex items-center gap-3">
        <button type="button" className="p-2 text-slate-400 hover:text-blue-500 transition-colors"><Paperclip size={20} /></button>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your medical advice..." 
          className="flex-1 px-5 py-3 bg-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all border border-transparent focus:bg-white"
        />
        <button type="button" className="p-2 text-slate-400 hover:text-blue-500 transition-colors"><Smile size={20} /></button>
        <button type="submit" className="p-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 shadow-lg shadow-blue-200 transition-all active:scale-90">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}