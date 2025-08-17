import { CalendarClock, FileText, Video } from "lucide-react";
import React from "react";
import Badge from "../Common/Badge";
import Button from "../Common/Button";
const doctorappointmentcard = ({ appt, onViewDetails }) => {
  const statuscolor =
    appt.status === "Scheduled"
      ? "yellow"
      : appt.status === "Completed"
      ? "green"
      : appt.status === "Scheduled"
      ? "red"
      : "gray";

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 p-5 flex flex-col justify-between">
      <div className="flex items-center gap-3">
        <img
          src={appt.patientPhoto}
          alt={appt.patientname}
          className="w-12 h-12 rounded-full border"
        />
        <div>
          <div className="font-semibold">{appt.patientName}</div>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <CalendarClock size={14} />
            {appt.date} • {appt.time}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge color="blue">{appt.type}</Badge>
        <Badge color={statuscolor}>{appt.status}</Badge>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        {appt.type === "Video Consultation" && (
          <Button className="w-full" onClick={() => onStartVC?.(appt)}>
            <Video size={16} />
            &nbsp;Start VC
          </Button>
        )}
        <button
          onClick={onViewDetails}
          className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 flex items-center justify-center gap-1"
        >
          <FileText size={16} /> Details
        </button>
        <button
          onClick={() => onReschedule?.(appt)}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
        >
          Reschedule
        </button>
        <button
          onClick={() => onCancel?.(appt)}
          className="px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default doctorappointmentcard;
