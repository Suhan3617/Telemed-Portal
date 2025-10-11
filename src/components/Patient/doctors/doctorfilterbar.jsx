import React from "react";

const patientdoctorfilterbar = ({
  specializations,
  filters,
  setFilters,
  onClearFilters,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-wrap gap-4 justify-between items-center">
      {/* Specialization Filter */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Specialization
        </label>
        <select
          value={filters.specialization}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, specialization: e.target.value }))
          }
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          {specializations.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      {/* Experience Filter */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Experience
        </label>
        <select
          value={filters.experience}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, experience: e.target.value }))
          }
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          <option value="0-5">0–5 Years</option>
          <option value="6-10">6–10 Years</option>
          <option value="10+">10+ Years</option>
        </select>
      </div>

      {/* Visited Filter */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Visited Before
        </label>
        <select
          value={filters.visited}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, visited: e.target.value }))
          }
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Clear Filters */}
      <button
        onClick={onClearFilters}
        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default patientdoctorfilterbar;
