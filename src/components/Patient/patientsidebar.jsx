import React from "react";
import { LayoutDashboard, CalendarDays, ClipboardList, MessageSquare, User, LogOut, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  { label: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/" },
  { label: "My Appointments", icon: <CalendarDays size={18} />, path: "/patient/appointments" },
  { label: "Doctors", icon: <HeartPulse size={18} />, path: "/patient/doctors" },
  { label: "Messages", icon: <MessageSquare size={18} />, path: "/patient/messages" },
  { label: "Medical Records", icon: <ClipboardList size={18} />, path: "/patient/medicalrecords" },
  { label: "Profile", icon: <User size={18} />, path: "/patient/profile" },
  { label: "Settings", icon: <User size={18} />, path: "/patient/settings" },
];

const PatientSidebar = () => {
  return (
    <aside className="w-72 bg-blue-600 text-white hidden md:flex flex-col backdrop-blur-xl shadow-xl">
      <div className="px-6 py-6 border-b border-blue-500">
        <div className="text-2xl font-bold tracking-wide">TeleMed Patient</div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {items.map((it) => (
          <Link
            key={it.label}
            to={it.path}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <div className="text-white/90">{it.icon}</div>
            <div className="font-medium">{it.label}</div>
          </Link>
        ))}
      </nav>

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
