import React from 'react'
import { LayoutDashboard, CalendarDays, ClipboardList, MessageSquare, User, LogOut } from "lucide-react";

const items = [
  { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { label: "My Appointments", icon: <CalendarDays size={18} /> },
  { label: "Medical Records", icon: <ClipboardList size={18} /> },
  { label: "Messages", icon: <MessageSquare size={18} /> },
  { label: "Profile", icon: <User size={18} /> },
];

const patientsidebar = () => {
  return (
    <aside className="w-72 bg-blue-500 text-white hidden md:flex flex-col">
      <div className="px-6 py-6 border-b border-b-blue-400">
        <div className="text-2xl font-bold">TeleMed</div>
        <div className="text-sm text-blue-100 mt-1">Rural Health Portal</div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-600 cursor-pointer transition"
          >
            <div className="text-white/90">{it.icon}</div>
            <div className="font-medium">{it.label}</div>
          </div>
        ))}
      </nav>
      <div className="px-4 py-6 border-t border-blue-400">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-600">
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default patientsidebar
