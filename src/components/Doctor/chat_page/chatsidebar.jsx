import React from 'react';
import { Search } from 'lucide-react';

export default function ChatSidebar({ patients, onSelect, activeId }) {
  return (
    <div className="w-full md:w-80 border-r border-slate-200 flex flex-col bg-white/40 backdrop-blur-md">
      <div className="p-4 border-b border-slate-200 bg-white/60">
        <h2 className="text-lg font-bold text-slate-800 mb-3">Consultations</h2>
        <div className="relative">
          <Search className="absolute left-3 top-3 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search patient..." 
            className="w-full pl-9 pr-4 py-2 bg-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm border-none"
          />
        </div>
      </div>
      <div className="overflow-y-auto flex-1">
        {patients.map((p) => (
          <div 
            key={p.id}
            onClick={() => onSelect(p)}
            className={`p-4 flex items-center gap-3 cursor-pointer transition-all border-b border-slate-50 ${
              activeId === p.id ? "bg-blue-500 text-white shadow-lg scale-[1.02] z-10" : "hover:bg-blue-50/50"
            }`}
          >
            <img src={p.avatar} alt={p.name} className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" />
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-center">
                <h4 className="font-bold truncate text-sm">{p.name}</h4>
                <span className={`text-[10px] ${activeId === p.id ? "text-blue-100" : "text-slate-400"}`}>
                  {p.lastVisit}
                </span>
              </div>
              <p className={`text-xs truncate font-medium ${activeId === p.id ? "text-blue-50" : "text-slate-500"}`}>
                {p.statusPill} • {p.age}y {p.sex}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}