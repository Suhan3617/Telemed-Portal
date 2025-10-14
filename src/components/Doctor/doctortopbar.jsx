import { Bell } from "lucide-react";
import React from "react";

const DoctorTopbar = ({ name }) => {
  return (
    <header className="bg-white/70 backdrop-blur-md shadow px-6 py-4 flex items-center justify-between sticky top-0 z-20 border-b border-blue-100">
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Welcome back, <span className="text-blue-600">{name}</span>
        </h1>
        <p className="text-sm text-gray-500">Here’s your schedule for today</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-blue-50 transition">
          <Bell size={20} className="text-blue-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <img
          src="https://i.pravatar.cc/40?img=5"
          alt="avatar"
          className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-sm"
        />
      </div>
    </header>
  );
};

export default DoctorTopbar;
