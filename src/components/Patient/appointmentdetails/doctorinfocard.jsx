import React from "react";

const DoctorInfoCard = ({ doctor }) => {
  if (!doctor) return null;

  return (
    <div className="flex items-center gap-5 bg-blue-50 p-4 rounded-xl shadow-sm">
      <img
        src={doctor.photo}
        alt={doctor.name}
        className="w-20 h-20 rounded-full border-4 border-blue-100 shadow-md"
      />
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-blue-700">{doctor.name}</h3>
        <p className="text-gray-600">{doctor.specialization}</p>
        <p className="text-sm text-gray-400">{doctor.hospital}</p>
        <p className="text-sm text-gray-500 mt-1">
          Experience: <span className="font-medium">{doctor.experience}</span>
        </p>
      </div>
    </div>
  );
};

export default DoctorInfoCard;
