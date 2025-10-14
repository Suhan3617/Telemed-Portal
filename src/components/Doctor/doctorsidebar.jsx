import {
  CalendarDays,
  MessageCircle,
  Home,
  Users,
  FileText,
  Menu,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DoctorSidebar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuitems = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/" },
    { name: "Appointments", icon: <CalendarDays size={18} />, path: "/doctor/appointments" },
    { name: "Patients", icon: <Users size={18} />, path: "/doctor/patients" },
    { name: "Messages", icon: <MessageCircle size={18} />, path: "/doctor/messages" },
    { name: "Reports", icon: <FileText size={18} />, path: "/doctor/reports" },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0  w-64 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-700 text-white shadow-xl
          transform transition-transform duration-300 z-40
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex md:flex-col`}
      >
        {/* Header */}
        <div className="px-6 py-6 border-b border-white/20 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">TeleMed Doctor</h1>
          {/* Close button only for mobile */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition"
            onClick={() => setMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuitems.map((it) => {
            const active = pathname === it.path;
            return (
              <Link
                key={it.name}
                to={it.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  active
                    ? "bg-white/25 shadow-inner font-semibold"
                    : "hover:bg-white/10 hover:translate-x-1"
                }`}
              >
                <div className={`text-white/90 ${active ? "text-white" : ""}`}>{it.icon}</div>
                <span className="font-medium">{it.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Optional Footer */}
        <div className="px-4 py-6 border-t border-white/20">
          <p className="text-sm text-white/80">TeleMed Doctor Panel</p>
        </div>
      </aside>

      {/* Mobile Hamburger now fixed inside Topbar (prevent overlap) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          className="p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </>
  );
};

export default DoctorSidebar;
