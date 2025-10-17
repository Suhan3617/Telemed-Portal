import React from 'react'
import { Bell, PlusCircle, UserCircle } from 'lucide-react';

const topbar = ({onToggleSidebar }) => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg flex items-center justify-between px-6 py-3 text-white">
      <div className="flex items-center space-x-4">
        <button onClick={onToggleSidebar} aria-label="Toggle sidebar" className="focus:outline-none">
          <svg className="w-6 h-6 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div className="font-semibold text-lg flex items-center space-x-2">
          <span role="img" aria-label="document">📄</span>
          <span>Patient — Overview</span>
        </div>
      </div>
      <div className="flex-1 max-w-lg mx-6">
        <input
          type="search"
          placeholder="Search by name / UHID / phone / email"
          className="w-full rounded-xl px-4 py-2 text-blue-900 placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          aria-label="Global patient search"
        />
      </div>
      <div className="flex items-center space-x-5">
        <button aria-label="Notifications" className="relative group focus:outline-none">
          <Bell className="w-6 h-6 text-white hover:text-teal-300 transition" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>
        <div className="relative group">
          <button aria-label="Quick new actions" className="flex items-center space-x-1 px-3 py-1 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:shadow-lg transition">
            <PlusCircle className="w-5 h-5" />
            <span>New</span>
          </button>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer group">
          <UserCircle className="w-8 h-8 text-white" />
          <div className="hidden group-hover:block text-sm absolute top-full right-0 bg-blue-700 rounded-lg shadow p-2">Dr. Smith (Online)</div>
        </div>
      </div>
    </header>
  );
}

export default topbar
