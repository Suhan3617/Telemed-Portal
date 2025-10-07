import React from 'react'

const doctorinfocard = ({doctor}) => {
  return (
    <div className="flex items-center gap-4 mb-6 border-b pb-4">
      <img
        src={doctor?.photo}
        alt={doctor?.name}
        className="w-16 h-16 rounded-full border"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-700">
          {doctor?.name}
        </h3>
        <p className="text-gray-500">{doctor?.specialization}</p>
        <p className="text-sm text-gray-400">{doctor?.hospital}</p>
      </div>
    </div>
  )
}

export default doctorinfocard
