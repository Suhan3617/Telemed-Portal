import React from 'react'
import { useState } from 'react';
const editappointmentmodal = ({ show, appointment, onClose, onSave }) => {
  const [date, setdate] = useState(appointment.date);
  const [slot, setslot] = useState(appointment.slot);

  if(!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Reschedule Appointment
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Time Slot</label>
            <input
              type="text"
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              className="border rounded-lg p-2 w-full"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave({ date, slot })}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default editappointmentmodal
