import {
  CalendarDays,
  MessageCircle,
  Home,
  Users,
  FileText,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const DoctorSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation();

  const menuitems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/doctor/overview" },
    { name: "Appointments", icon: <CalendarDays size={20} />, path: "/doctor/appointments" },
    { name: "Patients", icon: <Users size={20} />, path: "/doctor/patients" },
    { name: "Messages", icon: <MessageCircle size={20} />, path: "/doctor/messages" },
    { name: "Reports", icon: <FileText size={20} />, path: "/doctor/reports" },
  ];

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-700 text-white shadow-2xl
          transform transition-transform duration-300 z-40
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:flex md:flex-col`}
      >
        {/* Header */}
        <div className="px-6 py-6 border-b border-white/20 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-lg">
            TeleMed Doctor
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-white/30">
          {menuitems.map((it) => {
            const active = pathname === it.path;
            return (
              <Link
                key={it.name}
                to={it.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                  ${active
                    ? "bg-white/25 shadow-inner font-semibold text-white"
                    : "hover:bg-white/10 hover:translate-x-1 hover:shadow-md text-white/90"
                  }`}
              >
                <div className={`${active ? "text-white" : "text-white/80"}`}>{it.icon}</div>
                <span className="font-medium">{it.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-6 border-t border-white/20">
          <p className="text-sm text-white/80 font-light">TeleMed Doctor Panel</p>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default DoctorSidebar;
