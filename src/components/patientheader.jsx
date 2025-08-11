import React from "react";
import { Bell } from "lucide-react";

const patientheader = ({ name = "User" }) => {
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Welcome back , <span className="text-blue-700">{name}</span>
        </h1>
        <p className="text-sm text-gray-500">We're glad to see you again!</p>
      </div>
      <div className="flex items-center gap-4">
        <button>
          <Bell size={18} className="text-gray-600" />
        </button>
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="avatar"
            className="w-10 h-10 rounded-full border"
          />
        </div>
      </div>
    </header>
  );
};

export default patientheader;
