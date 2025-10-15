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
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-800 text-white
        shadow-[0_0_25px_rgba(37,99,235,0.4)] backdrop-blur-2xl border-r border-white/20
        transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${sidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
        z-40 rounded-r-3xl`}
      >
        {/* Header */}
        <div className="px-6 py-6 border-b border-white/20 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-lg">
            TeleMed<span className="text-blue-200">+</span>
          </h1>
          <button
            className="p-2 rounded-full hover:bg-white/10 transition"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-white/30">
          {menuitems.map((it) => {
            const active = pathname === it.path;
            return (
              <Link
                key={it.name}
                to={it.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 
                  ${
                    active
                      ? "bg-gradient-to-r from-blue-400/40 to-blue-500/30 shadow-inner backdrop-blur-md border border-white/20 text-white"
                      : "hover:bg-white/10 hover:translate-x-1 hover:shadow-lg text-white/90"
                  }`}
              >
                <div className={`${active ? "text-white" : "text-blue-100"}`}>
                  {it.icon}
                </div>
                <span className="font-medium">{it.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-6 border-t border-white/20 text-center text-sm text-blue-100/80">
          <p>TeleMed Doctor Panel</p>
        </div>
      </aside>

      {/* Overlay (when open) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-500"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default DoctorSidebar;
