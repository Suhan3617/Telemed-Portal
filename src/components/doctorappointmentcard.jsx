import React from "react";

const doctorappointmentcard = ({ patient, onViewDetails }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">{patient.name}</h2>
        <p className="text-lg font-semibold">
          {patient.date} | {patient.time}
        </p>
      </div>
      <p className="text-lg font-semibold"> {patient.type}</p>
      <button
        onClick={() => onViewDetails(patient)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        View Details
      </button>
    </div>
  );
};

export default doctorappointmentcard;
