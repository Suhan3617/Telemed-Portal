import React from "react";
import { Bell } from "lucide-react";

const PatientHeader = ({ name = "User" }) => {
  return (
    <header className="bg-white/70 backdrop-blur-lg shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-20">
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Welcome back, <span className="text-blue-600">{name}</span> 👋
        </h1>
        <p className="text-sm text-gray-500">Have a great and healthy day ahead!</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-blue-100 transition">
          <Bell size={18} className="text-blue-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="avatar"
          className="w-10 h-10 rounded-full border-2 border-blue-500"
        />
      </div>
    </header>
  );
};

export default PatientHeader;
