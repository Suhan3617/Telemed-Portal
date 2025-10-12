import React from "react";
import { Video, CheckCircle, XCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const PatientAppointmentCard = ({ appt }) => {
  const { date, time, doctor, specialization, type, status, id } = appt;

  const statusColor =
    status === "Upcoming"
      ? "text-yellow-600 bg-yellow-100"
      : status === "Scheduled"
      ? "text-blue-600 bg-blue-100"
      : status === "Completed"
      ? "text-green-600 bg-green-100"
      : "text-red-600 bg-red-100";

  const statusIcon =
    status === "Upcoming" ? (
      <Clock size={16} />
    ) : status === "Scheduled" ? (
      <Clock size={16} />
    ) : status === "Completed" ? (
      <CheckCircle size={16} />
    ) : (
      <XCircle size={16} />
    );

  return (
    <div className="backdrop-blur-sm bg-white/70 rounded-3xl p-6 shadow-2xl border border-blue-100 transition-transform transform hover:-translate-y-2 hover:shadow-3xl duration-300">
      {/* Date & Time */}
      <div className="flex justify-between items-center text-gray-500 text-sm font-medium mb-2">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-gray-400" /> {date}
        </div>
        <div>{time}</div>
      </div>

      {/* Doctor Info */}
      <div className="mt-2">
        <div className="font-extrabold text-2xl text-gray-900">{doctor}</div>
        <div className="text-blue-600 font-semibold">{specialization}</div>
      </div>

      {/* Status Badge */}
      <div
        className={`mt-4 inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-semibold ${statusColor} shadow-md`}
      >
        {statusIcon} {status}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end gap-3">
        {type === "Video Consultation" && status === "Upcoming" ? (
          <button
            className="flex items-center gap-2 px-5 py-2 font-semibold rounded-xl text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg hover:from-indigo-500 hover:to-blue-500 hover:scale-105 transition-all duration-300"
            onClick={() =>
              alert("Join call placeholder — integrate video call")
            }
          >
            <Video size={18} /> Join Call
          </button>
        ) : (
          <Link
            to={`/patient/appointmentdetails/${id}`}
            className="px-5 py-2 font-semibold rounded-xl text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg hover:from-indigo-500 hover:to-blue-500 hover:scale-105 transition-all duration-300"
          >
            View Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default PatientAppointmentCard;
