import React from 'react';
import { Search, Circle } from 'lucide-react';

export default function ChatSidebar({ patients, onSelect, activeId }) {
  return (
    <div className="w-full md:w-80 border-r border-slate-200 flex flex-col bg-white/50 backdrop-blur-md">
      <div className="p-4 border-b border-slate-200">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search patients..." 
            className="w-full pl-10 pr-4 py-2 bg-white/80 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none border border-slate-200 transition-all"
          />
        </div>
      </div>
      <div className="overflow-y-auto flex-1 custom-scrollbar">
        {patients.map((patient) => (
          <div 
            key={patient.id}
            onClick={() => onSelect(patient)}
            className={`p-4 flex items-center gap-3 cursor-pointer transition-all border-b border-slate-50 ${
              activeId === patient.id ? "bg-blue-500 text-white" : "hover:bg-blue-50 text-slate-700"
            }`}
          >
            <div className="relative">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-sm ${activeId === patient.id ? "bg-white text-blue-500" : "bg-blue-500 text-white"}`}>
                {patient.patientName[0]}
              </div>
              {patient.status === "online" && (
                <Circle className="absolute bottom-0 right-0 text-green-500 fill-green-500 border-2 border-white rounded-full" size={12} />
              )}
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold truncate">{patient.patientName}</h4>
                <span className={`text-[10px] ${activeId === patient.id ? "text-blue-100" : "text-slate-400"}`}>10:15 AM</span>
              </div>
              <p className={`text-xs truncate ${activeId === patient.id ? "text-blue-50" : "text-slate-500"}`}>
                {patient.lastMessage || "Click to start chat"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}