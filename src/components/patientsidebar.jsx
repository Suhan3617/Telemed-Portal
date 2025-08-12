import React from 'react';
import { LayoutDashboard, CalendarDays, ClipboardList, MessageSquare, User, LogOut , BookUser } from "lucide-react";

const items = [
  { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { label: "Book Appointment", icon: <BookUser size={18} /> },
  { label: "My Appointments", icon: <CalendarDays size={18} /> },
  { label: "Messages", icon: <MessageSquare size={18} /> },
  { label: "Medical Records", icon: <ClipboardList size={18} /> },
  { label: "Profile", icon: <User size={18} /> },
];

const PatientSidebar = () => {
  return (
    <aside className="w-72 bg-blue-600 text-white hidden md:flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-blue-500">
        <div className="text-2xl font-bold">TeleMed Patient</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-700 cursor-pointer transition"
          >
            <div className="text-white/90">{it.icon}</div>
            <div className="font-medium">{it.label}</div>
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-4 py-6 border-t border-blue-500">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-700 transition">
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default PatientSidebar;
