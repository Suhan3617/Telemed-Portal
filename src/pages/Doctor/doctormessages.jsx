import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

import PremiumHeader from "../../components/Doctor/allpagesheader";
import ChatSidebar from "../../components/Doctor/chat_page/chatsidebar";
import ChatWindow from "../../components/Doctor/chat_page/chatwindow";
import { useChat } from "../../hooks/usechat";

// Importing your mock data
import { patients } from "../../data/doctor/mockdata";

export default function DoctorMessagingPage() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const { chatMessages, sendMessage } = useChat(selectedPatient?.id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 rounded-3xl text-slate-900 overflow-hidden"
    >
      <PremiumHeader
        breadcrumb="Doctor Dashboard / Messaging"
        icon={<MessageSquare size={28} />}
        title="Consultation Chat"
        subtitle="Manage patient inquiries and provide medical advice in real-time."
      />

      <div className="flex h-[78vh] mt-6 bg-white/30 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden">
        <ChatSidebar 
          patients={patients} 
          onSelect={setSelectedPatient} 
          activeId={selectedPatient?.id} 
        />

        <div className={`flex-1 flex flex-col ${!selectedPatient ? "hidden md:flex items-center justify-center" : "flex"}`}>
          {selectedPatient ? (
            <ChatWindow 
              patient={selectedPatient} 
              messages={chatMessages} 
              onSendMessage={sendMessage}
              onBack={() => setSelectedPatient(null)}
            />
          ) : (
            <div className="text-center">
              <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                <MessageSquare size={48} className="text-blue-500/50" />
              </div>
              <h3 className="text-xl font-bold text-slate-700">Open a Consultation</h3>
              <p className="text-slate-500 mt-2">Select a patient from the list to view their history and chat.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}