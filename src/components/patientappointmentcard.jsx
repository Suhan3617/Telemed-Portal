import React from "react";
import { Video } from "lucide-react";
const patientappointmentcard = ({ appt }) => {
  const { date, time, doctor, specialization, type, status } = appt;
  const statusColor =
    status === "Upcoming"
      ? "bg-yellow-100 text-yellow-700"
      : status === "Completed"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <div>
          <div>
            {date} {time}
          </div>
          <div>{doctor}</div>
          <div>{specialization}</div>
          <div
            className={`inline-block mt-3 px-3 py-1 rounded-full text-sm ${statusColor}`}
          >
            {status}
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className="text-sm text-blue-500">{type}</div>
          {type === "Video Consultation" && status === "Upcoming" ? (
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
              onClick={(e) => {
                e.preventDefault();
                alert("Join call placeholder — integrate Jitsi/WebRTC here");
              }}
            >
              <Video size={16} /> Join Call
            </a>
          ) : (
            <button className="w-full bg-red-500 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800 my-2">
              Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default patientappointmentcard;
