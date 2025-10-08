import React from 'react'

const Recordfilter = ({ filter, setFilter }) => {
  const types = ["All", "Lab Report", "Scan", "Prescription"]

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm 
            ${filter === type
              ? "bg-blue-500 text-white shadow-blue-300 shadow-md scale-105"
              : "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 hover:scale-105"
            }`}
        >
          {type}
        </button>
      ))}
    </div>
  )
}

export default Recordfilter
