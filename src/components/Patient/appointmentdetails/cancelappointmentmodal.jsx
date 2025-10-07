import React from 'react'

const cancelappointmentmodal = ({ show, onClose, onConfirm }) => {
  if(!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Cancel Appointment
        </h2>
        <p className="text-gray-600 mb-4">
          Are you sure you want to cancel this appointment?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border hover:bg-gray-100"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default cancelappointmentmodal
