import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react"; // optional icons for modern look

const DoctorPatientCard = ({ patient }) => {
  return (
    <Link
      to={`/doctor/patients/${patient.id}`}
      className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 flex items-center gap-4 border border-blue-100"
    >
      {/* Patient Photo */}
      <img
        src={patient.photo}
        alt={patient.name}
        className="w-14 h-14 rounded-full border-2 border-blue-400 object-cover"
      />

      {/* Patient Info */}
      <div className="flex-1">
        <div className="font-semibold text-lg text-blue-700 flex items-center gap-2">
          <User className="w-4 h-4 text-blue-500" />
          {patient.name}
        </div>
        <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
          <Calendar className="w-4 h-4 text-blue-400" />
          Last Visit: <span className="font-medium">{patient.lastvisit}</span>
        </div>
      </div>

      {/* Age Badge */}
      <div className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full shadow-sm">
        {patient.age} yrs
      </div>
    </Link>
  );
};

export default DoctorPatientCard;
