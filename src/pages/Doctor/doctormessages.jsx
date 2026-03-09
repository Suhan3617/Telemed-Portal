import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { MessageSquare } from "lucide-react";

import PremiumHeader from "../../components/Doctor/allpagesheader";
import ChatSidebar from "../../components/Doctor/chat_page/chatsidebar";
import ChatWindow from "../../components/Doctor/chat_page/chatwindow";
import { useChat } from "../../hooks/usechat";
import { patients as mockPatients } from "../../data/doctor/mockdata";

export default function DoctorMessagingPage() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const { chatMessages, sendMessage } = useChat(selectedPatient?.id);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [50, 0],
      transition: { duration: 1.2, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="relative min-h-screen p-6 md:p-8 rounded-[2.5rem] overflow-hidden
                 bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 
                 backdrop-blur-2xl border border-blue-200/30 shadow-inner"
    >
      {/* 🌈 Animated Gradient Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/40 rounded-full blur-[150px]"
          animate={{ y: [0, 40, 0], x: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-15%] w-[600px] h-[600px] bg-indigo-400/40 rounded-full blur-[160px]"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🫧 Floating Oxygen Bubbles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/40 blur-[6px]"
          style={{
            width: `${12 + Math.random() * 10}px`,
            height: `${12 + Math.random() * 10}px`,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 20}%`,
          }}
          animate={{ y: [0, -100, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: i * 1.2 }}
        />
      ))}

      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        <PremiumHeader
          breadcrumb="Doctor Dashboard / Messaging"
          icon={<MessageSquare size={28} className="text-blue-600" />}
          title="Consultation Hub"
          subtitle="End-to-end encrypted medical consultations in real-time."
        />
      </motion.div>

      {/* 📱 FIXED: Gap removed here for Seamless Glass look */}
      <motion.div 
        className="mt-8 flex h-[75vh] bg-white/30 backdrop-blur-3xl rounded-[2.5rem] 
                   border border-white/60 shadow-2xl overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
      >
        {/* Sidebar with border-r instead of gap */}
        <div className={`w-full md:w-[380px] border-r border-white/20 flex flex-col ${selectedPatient ? "hidden md:flex" : "flex"}`}>
          <ChatSidebar 
            patients={mockPatients} 
            onSelect={setSelectedPatient} 
            activeId={selectedPatient?.id} 
          />
        </div>

        {/* Chat Area Container */}
        <div className={`flex-1 flex flex-col relative ${!selectedPatient ? "hidden md:flex items-center justify-center" : "flex"}`}>
          <AnimatePresence mode="wait">
            {selectedPatient ? (
              <motion.div 
                key={selectedPatient.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full h-full flex flex-col bg-transparent"
              >
                <ChatWindow 
                  patient={selectedPatient} 
                  messages={chatMessages} 
                  onSendMessage={sendMessage}
                  onBack={() => setSelectedPatient(null)}
                />
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center p-12"
              >
                <div className="w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/60 shadow-xl">
                  <MessageSquare size={44} className="text-blue-600/60" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Select a Consultation</h3>
                <p className="text-slate-500 mt-2 max-w-xs mx-auto">Pick a patient from the list to begin your digital consultation.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}