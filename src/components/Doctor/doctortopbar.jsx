import { Bell } from "lucide-react";
import React from "react";

const doctortopbar = ({ name }) => {
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between sticky top-0 z-10">
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Welcome back, <span className="text-blue-600">{name}</span>
        </h1>
        <p className="text-sm text-gray-500">Here's your schedule for today</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <Bell size={18} className="text-gray-600" />
        </button>
        <img
          src="https://i.pravatar.cc/40?img=5"
          alt="avatar"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </header>
  );
};

export default doctortopbar;
