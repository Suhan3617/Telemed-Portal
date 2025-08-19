import React from "react";

const DoctorLabRecords = ({ record }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-2xl transition flex flex-col justify-between w-full h-40 mx-4">
      {/* Record Info */}
      <div className="flex-1">
        <div className="font-semibold truncate">{record.title}</div>
        <div className="text-sm text-gray-500 truncate">
          {record.patientName} • {record.date} • {record.type}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 flex items-center justify-center gap-1">
          View
        </button>
        <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          Download
        </button>
      </div>
    </div>
  );
};

export default DoctorLabRecords;
