import { X } from "lucide-react";
import React from "react";

const doctorappointmentdetialsmodal = ({ appointment, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-3xl overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">Appointment Details</h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Patient Info */}
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
            <img
              src={appointment.patientPhoto}
              alt={appointment.patientName}
              className="w-16 h-16 rounded-full border-4 border-blue-500 shadow-md"
            />
            <div>
              <div className="font-semibold text-xl text-blue-700">
                {appointment.patientName}
              </div>
              <div className="text-gray-600">
                {appointment.date} • {appointment.time}
              </div>
              <div className="mt-2 flex gap-2">
                <span className="px-2 py-1 text-xs rounded-lg bg-blue-100 text-blue-700">
                  {appointment.type}
                </span>
                {appointment.status && (
                  <span className="px-2 py-1 text-xs rounded-lg bg-yellow-100 text-yellow-700">
                    {appointment.status}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Reason */}
          <div>
            <h4 className="font-semibold text-lg text-blue-600 mb-2">
              Reason for Visit
            </h4>
            <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
              {appointment.reason}
            </p>
          </div>

          {/* History */}
          <div>
            <h4 className="font-semibold text-lg text-blue-600 mb-2">
              Patient Medical History
            </h4>
            <ul className="list-disc list-inside text-gray-700 bg-gray-50 p-3 rounded-lg space-y-1">
              <li>
                <b>Chronic : </b>
                {appointment.history?.chronicIllnesses?.join(", ") || "-"}
              </li>
              <li>
                <b>Allergies : </b>
                {appointment.history?.allergies?.join(", ") || "-"}
              </li>
              <li>
                <b>Surgeries : </b>
                {appointment.history?.surgeries?.join(", ") || "-"}
              </li>
              <li>
                <b>Family : </b>
                {appointment.history?.familyHistory?.join(", ") || "-"}
              </li>
            </ul>
          </div>

          {/* Prescriptions */}
          <div>
            <h4 className="font-semibold text-lg text-blue-600 mb-2">
              Previous Prescriptions
            </h4>
            <div className="overflow-x-auto shadow">
              <table className="w-full border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-blue-100 text-blue-700">
                    <th className="p-2 border">Date</th>
                    <th className="p-2 border">Medicine</th>
                    <th className="p-2 border">Duration</th>
                    <th className="p-2 border">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {appointment.prescriptions?.map((p, i) => (
                    <tr key={i} className="hover:bg-blue-50 transition">
                      <td className="p-2 border">{p.date}</td>
                      <td className="p-2 border">{p.medicine}</td>
                      <td className="p-2 border">{p.duration}</td>
                      <td className="p-2 border">{p.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Lab Reports */}
          <div>
            <h4 className="font-semibold text-lg text-blue-600 mb-2">
              Lab Reports
            </h4>
            {appointment.labReports?.map((r, i) => (
              <div
                key={i}
                className="p-3 bg-gray-100 rounded-lg border mb-2 text-gray-700"
              >
                {r.title} • {r.date}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-end">
            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white shadow hover:bg-blue-600 transition">
              Start VC
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition">
              Add Notes
            </button>
            <button className="px-4 py-2 rounded-lg bg-green-500 text-white shadow hover:bg-green-600 transition">
              Issue Prescription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default doctorappointmentdetialsmodal;
