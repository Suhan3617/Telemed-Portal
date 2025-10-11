import React from "react";
import { Stethoscope, Briefcase, Clock, RotateCcw } from "lucide-react";

const PatientDoctorFilterBar = ({
  specializations,
  filters,
  setFilters,
  onClearFilters,
}) => {
  const dropdownClass =
    "border border-blue-300 bg-white text-gray-700 rounded-xl px-4 py-2 shadow-sm w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 cursor-pointer";

  const labelClass = "flex items-center gap-2 text-sm font-semibold text-blue-700 mb-1";

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl shadow-lg p-6 mb-6 flex flex-wrap gap-6 justify-between items-end transition-all duration-300">
      {/* Specialization Filter */}
      <div className="flex flex-col w-56">
        <label className={labelClass}>
          <Stethoscope size={18} className="text-blue-500" />
          Specialization
        </label>
        <div className="relative">
          <select
            value={filters.specialization}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, specialization: e.target.value }))
            }
            className={dropdownClass}
          >
            <option value="">All</option>
            {specializations.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Experience Filter */}
      <div className="flex flex-col w-56">
        <label className={labelClass}>
          <Briefcase size={18} className="text-blue-500" />
          Experience
        </label>
        <div className="relative">
          <select
            value={filters.experience}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, experience: e.target.value }))
            }
            className={dropdownClass}
          >
            <option value="">All</option>
            <option value="0-5">0–5 Years</option>
            <option value="6-10">6–10 Years</option>
            <option value="10+">10+ Years</option>
          </select>
        </div>
      </div>

      {/* Visited Filter */}
      <div className="flex flex-col w-56">
        <label className={labelClass}>
          <Clock size={18} className="text-blue-500" />
          Visited Before
        </label>
        <div className="relative">
          <select
            value={filters.visited}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, visited: e.target.value }))
            }
            className={dropdownClass}
          >
            <option value="">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={onClearFilters}
        className="flex items-center gap-2 bg-blue-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl 
                   hover:bg-blue-600 active:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200"
      >
        <RotateCcw size={16} />
        Clear Filters
      </button>
    </div>
  );
};

export default PatientDoctorFilterBar;
