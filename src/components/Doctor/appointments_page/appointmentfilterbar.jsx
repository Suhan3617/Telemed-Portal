import React from "react";
import { CalendarDays, Filter, Search, FileText, Plus } from "lucide-react";

export default function FiltersBar({ filters, setFilters }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
      <div className="flex gap-3 items-center flex-wrap">
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm">
          <CalendarDays size={18} className="text-blue-500" />
          <select
            value={filters.range}
            onChange={(e) =>
              setFilters((f) => ({ ...f, range: e.target.value }))
            }
            className="bg-transparent outline-none text-sm text-slate-700"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm">
          <Filter size={16} className="text-slate-500" />
          <select
            value={filters.status}
            onChange={(e) =>
              setFilters((f) => ({ ...f, status: e.target.value }))
            }
            className="bg-transparent outline-none text-sm text-slate-700"
          >
            <option value="all">All Statuses</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div className="relative flex items-center bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm">
          <Search size={16} className="text-slate-400 mr-2" />
          <input
            placeholder="Search patient or appointment ID"
            value={filters.q}
            onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
            className="outline-none text-sm bg-transparent placeholder:text-slate-400 text-slate-700 w-48 md:w-72"
          />
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <button className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 transition">
          <FileText size={16} /> Export
        </button>
        <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-xl text-white shadow-lg hover:shadow-xl transition transform active:scale-95">
          <Plus size={16} /> New
        </button>
      </div>
    </div>
  );
}
