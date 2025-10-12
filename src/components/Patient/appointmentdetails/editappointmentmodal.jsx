import React, { useState } from 'react';
import { CalendarDays, Clock, Save } from 'lucide-react';

const EditAppointmentModal = ({ show, appointment, onClose, onSave }) => {
  const [date, setDate] = useState(appointment?.date || '');
  const [slot, setSlot] = useState(appointment?.slot || '');

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl animate-fadeIn">
        <h2 className="text-xl font-semibold text-gray-800 mb-5 flex items-center gap-2">
          <CalendarDays className="text-blue-500 w-6 h-6" /> Reschedule Appointment
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Select New Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Time Slot
            </label>
            <div className="flex items-center border rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-400">
              <Clock className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="text"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                placeholder="e.g., 10:30 AM"
                className="w-full outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave({ date, slot })}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition shadow-md"
          >
            <Save className="w-5 h-5" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAppointmentModal;
