import { Bell, ChevronDown } from "lucide-react";
import React from "react";

const DoctorTopbar = ({ name }) => {
  return (
    <header className="relative bg-gradient-to-r from-blue-500/90 via-blue-600/80 to-indigo-500/90
                       backdrop-blur-lg shadow-lg border-b border-white/20
                       px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      {/* Left Side */}
      <div>
        <h1 className="text-xl font-bold text-white drop-shadow-sm">
          Welcome back,&nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
            {name}
          </span>
        </h1>
        <p className="text-sm text-blue-100 mt-1">Here’s your schedule for today</p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="relative p-3 rounded-full bg-white/10 hover:bg-white/20
                           text-white shadow-inner transition duration-300">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full shadow-md animate-pulse"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full shadow-inner cursor-pointer hover:bg-white/20 transition">
          <img
            src="https://i.pravatar.cc/40?img=5"
            alt="Doctor Avatar"
            className="w-10 h-10 rounded-full border-2 border-white/60 shadow-md"
          />
          <ChevronDown size={18} className="text-white opacity-80" />
        </div>
      </div>
    </header>
  );
};

export default DoctorTopbar;
