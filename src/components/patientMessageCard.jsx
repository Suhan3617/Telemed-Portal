import React from 'react'

const patientMessageCard = ({msg}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-gray-800">{msg.doctor}</div>
          <div className="text-sm text-gray-600 mt-1">{msg.message}</div>
        </div>
        <div className="text-xs text-gray-400">{msg.time}</div>
      </div>
    </div>
  )
}

export default patientMessageCard
