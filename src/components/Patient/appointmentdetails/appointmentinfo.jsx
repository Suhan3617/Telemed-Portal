import React from "react";

const AppointmentInfo = ({ appointment }) => {
  if (!appointment)
    return <p className="text-red-500">No appointment data found.</p>;

  const statusColor =
    appointment.status === "Completed"
      ? "bg-green-500"
      : appointment.status === "Scheduled"
      ? "bg-blue-500"
      : "bg-red-500";

  return (
    <div className="space-y-3 text-gray-700">
      <p>
        <span className="font-semibold">Date:</span> {appointment.date}
      </p>
      <p>
        <span className="font-semibold">Time:</span> {appointment.time}
      </p>
      <p>
        <span className="font-semibold">Consultation Type:</span>{" "}
        {appointment.type}
      </p>
      <p>
        <span className="font-semibold">Status:</span>{" "}
        <span
          className={`px-3 py-1 rounded-full text-white text-sm ${statusColor}`}
        >
          {appointment.status}
        </span>
      </p>
      <p>
        <span className="font-semibold">Notes:</span>{" "}
        {appointment.notes || "—"}
      </p>
    </div>
  );
};

export default AppointmentInfo;
