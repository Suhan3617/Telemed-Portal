import React from 'react'

const appointmentactions = ({ onEdit, onCancel, onJoin }) => {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        onClick={onCancel}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Cancel Appointment
      </button>
      <button
        onClick={onEdit}
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
      >
        Reschedule / Edit
      </button>
      <button
        onClick={onJoin}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Join Meeting
      </button>
    </div>
  )
}

export default appointmentactions
