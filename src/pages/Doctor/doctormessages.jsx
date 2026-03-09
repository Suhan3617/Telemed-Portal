import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

import PremiumHeader from "../../components/Doctor/allpagesheader";
import ChatSidebar from "../../components/Doctor/chat_page/chatsidebar";
import ChatWindow from "../../components/Doctor/chat_page/chatwindow";
import { useChat } from "../../hooks/usechat";

// Mock Data
import { appointments as mockPatients } from "../../data/doctor/mockdata";

export default function DoctorMessagingPage() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  
  // Custom hook handles all Socket.io events
  const { messages, sendMessage } = useChat(selectedPatient?.id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 rounded-3xl text-slate-900 overflow-hidden"
    >
      <PremiumHeader
        breadcrumb="Doctor Dashboard / Messages"
        icon={<MessageSquare size={28} />}
        title="Telemedicine Chat"
        subtitle="Secure, real-time communication with your patients."
      />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex h-[78vh] mt-6 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
      >
        <ChatSidebar 
          patients={mockPatients} 
          onSelect={setSelectedPatient} 
          activeId={selectedPatient?.id} 
        />

        <div className={`flex-1 flex flex-col ${!selectedPatient ? "hidden md:flex items-center justify-center" : "flex"}`}>
          {selectedPatient ? (
            <ChatWindow 
              selectedPatient={selectedPatient} 
              messages={messages} 
              onSendMessage={sendMessage}
              onBack={() => setSelectedPatient(null)}
            />
          ) : (
            <div className="text-center p-10">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={40} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-700">Select a Conversation</h3>
              <p className="text-slate-500 max-w-xs mx-auto mt-2">Choose a patient from the list on the left to start your online consultation.</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}