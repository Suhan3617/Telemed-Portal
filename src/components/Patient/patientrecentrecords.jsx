import React from "react";
import { FileDown, Eye } from "lucide-react";

const PatientMedicalRecordCard = ({ record }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl border border-blue-100 transition duration-300">
      <div className="font-semibold text-lg text-gray-800 mb-1">
        {record?.title || "Untitled Record"}
      </div>
      <div className="text-gray-500 text-sm mb-3">{record?.date || "No date"}</div>

      <div className="flex gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition">
          <Eye size={16} /> View
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition">
          <FileDown size={16} /> Download
        </button>
      </div>
    </div>
  );
};

export default PatientMedicalRecordCard;
