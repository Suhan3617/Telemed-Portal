import { Bell, ChevronDown, LogOut, Settings, User, Menu, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const DoctorTopbar = ({ name, onToggleSidebar, isSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative bg-gradient-to-r from-blue-500/90 via-blue-600/80 to-indigo-500/90
                       backdrop-blur-xl shadow-lg border-b border-white/20
                       px-6 py-4 flex items-center justify-between sticky top-0 z-30">

      {/* Left: Hamburger + Title */}
      <div className="flex items-center gap-4">
        <button
          className="p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition duration-300"
          onClick={onToggleSidebar}
        >
          {isSidebarOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div>
          <h1 className="text-xl font-bold text-white drop-shadow-sm">
            Welcome back,&nbsp;
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
              {name}
            </span>
          </h1>
          <p className="text-sm text-blue-100 mt-1 font-medium">
            Here is your schedule for today
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 relative">
        <button className="relative p-3 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-inner transition duration-300">
          <Bell size={22} />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full shadow-md animate-pulse"></span>
        </button>

        {/* Profile Dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full shadow-inner cursor-pointer hover:bg-white/20 transition duration-300"
          >
            <img
              src="https://i.pravatar.cc/40?img=5"
              alt="Doctor Avatar"
              className="w-10 h-10 rounded-full border-2 border-white/60 shadow-md"
            />
            <ChevronDown size={18} className="text-white opacity-80" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl shadow-2xl border border-blue-200 overflow-hidden z-50 animate-fade-in">
              <Link
                to="/doctor/settings"
                className="w-full flex items-center gap-2 px-4 py-3 hover:bg-blue-200 transition text-blue-700 font-medium"
              >
                <User size={18} /> Profile
              </Link>
              <Link
                to=""
                className="w-full flex items-center gap-2 px-4 py-3 hover:bg-blue-200 transition text-blue-700 font-medium"
              >
                <Settings size={18} /> Settings
              </Link>
              <button className="w-full flex items-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold transition">
                <LogOut size={18} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DoctorTopbar;
