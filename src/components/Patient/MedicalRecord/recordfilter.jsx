import React from 'react'

const recordfilter = ({ filter, setFilter }) => {
  const types = ["All", "Lab Report", "Scan", "Prescription"];

  return (
    <div className="flex gap-3">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-4 py-2 rounded-xl border font-medium transition ${
            filter === type
              ? "bg-blue-500 text-white shadow-md"
              : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default recordfilter
