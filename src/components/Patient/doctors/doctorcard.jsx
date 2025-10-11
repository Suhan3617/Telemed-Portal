import React from "react";
import { Info, Calendar } from "lucide-react";

const DoctorCard = ({ doctor, onBook, onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-2xl transition transform hover:-translate-y-1 border-t-4 border-blue-500">
      <img
        src={doctor.photo}
        alt={doctor.name}
        className="w-24 h-24 rounded-full mx-auto border-4 border-blue-300 shadow"
      />
      <h2 className="mt-4 text-center font-semibold text-gray-800 text-lg">
        {doctor.name}
      </h2>
      <p className="text-sm text-center text-gray-600">
        {doctor.specialization}
      </p>
      <p className="text-xs text-center text-gray-400">{doctor.hospital}</p>
      <p className="text-xs text-center text-gray-400">{doctor.experience}</p>

      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={onBook}
          className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition shadow"
        >
          <Calendar className="w-4 h-4" /> Book Appointment
        </button>

        <button
          onClick={onViewDetails}
          className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-100 transition"
        >
          <Info className="w-4 h-4" /> View Details
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
