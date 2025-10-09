import React from 'react';
import { Video, Edit3, XCircle } from 'lucide-react';

const AppointmentActions = ({ onEdit, onCancel, onJoin }) => {
  return (
    <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
      <button
        onClick={onCancel}
        className="flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-lg hover:bg-red-600 shadow-md hover:shadow-lg transition-all duration-300"
      >
        <XCircle className="w-5 h-5" /> Cancel
      </button>

      <button
        onClick={onEdit}
        className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2.5 rounded-lg hover:bg-yellow-600 shadow-md hover:shadow-lg transition-all duration-300"
      >
        <Edit3 className="w-5 h-5" /> Reschedule
      </button>

      <button
        onClick={onJoin}
        className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-lg hover:bg-blue-600 shadow-md hover:shadow-lg transition-all duration-300"
      >
        <Video className="w-5 h-5" /> Join Meeting
      </button>
    </div>
  );
};

export default AppointmentActions;
