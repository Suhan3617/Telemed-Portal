import {
  CalendarDays,
  ClipboardList,
  FileText,
  Home,
  LogOut,
  MessageCircle,
  User,
  Users,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const doctorsidebar = () => {
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
    {
      name: "Write Prescription",
      icon: <FileText size={18} />,
      path: "/doctor/messages",
    },
    {
      name: "Medical Reports",
      icon: <ClipboardList size={18} />,
      path: "/doctor/records",
    },
    {
      name: "Profile & Settings",
      icon: <User size={18} />,
      path: "/doctor/settings",
    },
  ];

  return (
    <aside className="bg-blue-600 w-72 text-white hidden md:flex flex-col">
      <div className="px-6 py-6 border-b border-blue-500">
        <div className="text-2xl font-bold">TeleMed Doctor</div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuitems.map((it) => (
          <Link
            key={it.name}
            to={it.path}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-800 cursor-pointer transition"
          >
            <div className="text-white/90">{it.icon}</div>
            <div className="font-medium">{it.name}</div>
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

export default doctorsidebar;
