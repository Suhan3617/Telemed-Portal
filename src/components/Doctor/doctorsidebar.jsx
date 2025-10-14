import {
  CalendarDays,
  MessageCircle,
  Home,
  LogOut,
  User,
  Users,
  FileText,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const DoctorSidebar = () => {
  const { pathname } = useLocation();

  const menuitems = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/" },
    {
      name: "Appointments",
      icon: <CalendarDays size={18} />,
      path: "/doctor/appointments",
    },
    { name: "Patients", icon: <Users size={18} />, path: "/doctor/patients" },
    {
      name: "Messages",
      icon: <MessageCircle size={18} />,
      path: "/doctor/messages",
    },
    { name: "Reports", icon: <FileText size={18} />, path: "/doctor/reports" },
    {
      name: "Profile & Settings",
      icon: <User size={18} />,
      path: "/doctor/settings",
    },
  ];

  return (
    <aside className="hidden md:flex flex-col w-72 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-700 text-white shadow-xl">
      {/* Header */}
      <div className="px-6 py-6 border-b border-blue-400/50">
        <h1 className="text-2xl font-bold tracking-wide">TeleMed Doctor</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuitems.map((it) => {
          const active = pathname === it.path;
          return (
            <Link
              key={it.name}
              to={it.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                active
                  ? "bg-white/25 shadow-inner"
                  : "hover:bg-white/10 hover:translate-x-1"
              }`}
            >
              <div className="text-white/90">{it.icon}</div>
              <span className="font-medium">{it.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-6 border-t border-blue-400/50">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition">
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default DoctorSidebar;
