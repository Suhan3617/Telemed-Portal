import { FileText, Video } from "lucide-react";
import React from "react";

const doctorappointmentcard = ({ appt, onViewDetails }) => {
  return (
    <div className="bg-white hover:shadow-2xl rounded-xl p-5 flex flex-col justify-between">
      <div className="flex items-center gap-3">
        <img src={appt.patientPhoto} alt={appt.patientname} className="w-12 h-12 rounded-full border" />
        <div>
          <div>{appt.patientname}</div>
          <div>{appt.date} • {appt.time}</div>
        </div>
      </div>
      <div className="mt-3 text-sm text-blue-500">{appt.type}</div>
      <div className={`mt-2 px-3 py-1 rounded-full text-sm w-fit ${
        appt.status==="Scheduled" ? "bg-yellow-100 text-yellow-700":
        appt.status==="Completed" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"       }`}>
        {appt.status}
      </div>

      <div className="mt-4 flex gap-2">
        {appt.type === "Video Consultaion" && (
          <button className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-1">
            <Video size={16}/> Start VC
          </button>
        )}
          <button
            onClick={onViewDetails}
            className="flex-1 bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 flex items-center justify-center gap-1"
          >
            <FileText size={16}/> Details
          </button>
      </div>
    </div>
  );
};

export default doctorappointmentcard;
