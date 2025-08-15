import React from "react";
import { Link } from "react-router-dom";
const doctorpatientcard = ({ patient }) => {
  return (
    <Link
      to={`/doctor/patients/${patient.id}`}
      className="bg-white p-4 rounded-xl shadow hover:shadow-2xl transition flex items-center gap-4"
    >
      <img
        src="{patient.photo}"
        alt="{patient.name}"
        className="w-12 h-12 rounded-full border"
      />
      <div>
        <div className="font-semibold">{patient.name}</div>
        <div className="text-sm text-gray-500">
          Last Visit: {patient.lastvisit}
        </div>
      </div>
      <div className="text-sm text-gray-400">{patient.age}</div>
    </Link>
  );
};

export default doctorpatientcard;
