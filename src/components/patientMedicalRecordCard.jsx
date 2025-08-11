import React from "react";

const patientMedicalRecordCard = ({ record }) => {
  return (
    <div className="bg-white shadow rounded-2xl hover:shadow-lg transition">
      <div className="font-semibold text-2xl text-gray-800">{record.title}</div>
      <div className="font-semibold text-2xl text-gray-800">{record.date}</div>
      <div className=" mt-4 flex gap-2">
        <button className="w-full bg-red-500 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800 my-2">
          View
        </button>
        <button className="w-full bg-red-500 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800 my-2">
          Download
        </button>
      </div>
    </div>
  );
};

export default patientMedicalRecordCard;
