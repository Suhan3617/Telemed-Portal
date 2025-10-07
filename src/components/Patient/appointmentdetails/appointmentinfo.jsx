import React from 'react'

const appointmentinfo = ({appointment}) => {
  return (
    <div className="space-y-3">
      <p>
        <span className="font-semibold text-gray-700">Date:</span> {appointment.date}
      </p>
      <p>
        <span className="font-semibold text-gray-700">Time:</span> {appointment.slot}
      </p>
      <p>
        <span className="font-semibold text-gray-700">Consultation Type:</span> {appointment.mode}
      </p>
      <p>
        <span className="font-semibold text-gray-700">Fees:</span> ₹{appointment.fee}
      </p>
      <p>
        <span className="font-semibold text-gray-700">Status:</span>{" "}
        <span
          className={`px-2 py-1 rounded text-white ${
            appointment.status === "Completed"
              ? "bg-green-500"
              : appointment.status === "Upcoming"
              ? "bg-blue-500"
              : "bg-red-500"
          }`}
        >
          {appointment.status}
        </span>
      </p>
      <p>
        <span className="font-semibold text-gray-700">Notes:</span>{" "}
        {appointment.notes || "—"}
      </p>
    </div>
  )
}

export default appointmentinfo
