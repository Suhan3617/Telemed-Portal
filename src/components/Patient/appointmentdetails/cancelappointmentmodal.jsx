import React, { useState } from "react";
import { AlertTriangle } from "lucide-react";

const CancelAppointmentModal = ({ show, onClose, onConfirm }) => {
  const [reason, setReason] = useState("");

  if (!show) return null;

  const handleConfirm = () => {
    if (!reason.trim()) {
      alert("Please provide a reason for cancellation.");
      return;
    }
    onConfirm(reason); // pass the reason to parent for record
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-xl animate-fadeIn">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-red-500 w-6 h-6" />
          <h2 className="text-xl font-semibold text-gray-800">
            Cancel Appointment
          </h2>
        </div>

        <p className="text-gray-600 mb-4">
          Are you sure you want to cancel this appointment? This action cannot
          be undone.
        </p>

        {/* Reason input */}
        <div className="mb-6">
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Reason for cancellation <span className="text-red-500">*</span>
          </label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={3}
            placeholder="Type your reason here..."
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-400 focus:outline-none text-gray-700 resize-none"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100 transition"
          >
            No, Keep it
          </button>
          <button
            onClick={handleConfirm}
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
