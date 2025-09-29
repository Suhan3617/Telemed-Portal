import React from "react";

const PatientMedicalRecordCard = ({ record }) => {
  return (
    <div className="bg-white shadow rounded-xl hover:shadow-lg transition p-4 flex flex-col justify-between">
      <div>
        <div className="font-semibold text-lg text-gray-800">{record?.title || "No title available"}</div>
        <div className="text-gray-500">{record?.date || "No date available"}</div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600">
          View
        </button>
        <button className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600">
          Download
        </button>
      </div>
    </div>
  );
};

export default PatientMedicalRecordCard;
