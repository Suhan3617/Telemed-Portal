import React from "react";

const doctorlabrecords = ({ record }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-2xl transition flex items-center gap-4">
      <div>
        <div className="font-semibold">{record.title}</div>
        <div className="text-sm text-gray-500">
          {record.patientName} • {record.date} • {record.type}
        </div>
      </div>
      <div>
        <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 flex items-center justify-center gap-1">View</button>
        <button className="px-3 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Download</button>
      </div>
    </div>
  );
};

export default doctorlabrecords;
