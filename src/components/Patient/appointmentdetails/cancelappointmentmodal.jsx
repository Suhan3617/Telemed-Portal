import React from 'react';
import { AlertTriangle } from 'lucide-react';

const CancelAppointmentModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-xl border-t-4 border-red-500 animate-fadeIn">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-red-500 w-6 h-6" />
          <h2 className="text-xl font-semibold text-gray-800">
            Cancel Appointment
          </h2>
        </div>

        <p className="text-gray-600 mb-6">
          Are you sure you want to cancel this appointment? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100 transition"
          >
            No, Keep it
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition shadow-md"
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelAppointmentModal;
