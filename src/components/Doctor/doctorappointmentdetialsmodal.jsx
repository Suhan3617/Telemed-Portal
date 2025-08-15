import { X } from "lucide-react";
import React from "react";

const doctorappointmentdetialsmodal = ({ appointment, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-3xl overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">Appointment Details</h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="p-6 space-y-6">
          {/*Basic Info */}
          <div className="flex items-center gap-4">
            <img
              src={appointment.patientPhoto}
              alt={appointment.patientName}
              className="w-16 h-16 rounded-2xl border"
            />
            <div>
              <div className="font-semibold text-xl">{appointment.patientName}</div>
              <div className="text-gray-500">
                {appointment.date} • {appointment.time}
              </div>
              <div className="text-sm text-blue-500">{appointment.type}</div>
            </div>
          </div>
          {/*Reason */}
          <div>
            <h3 className="font-semibold mb-1">Reason for Visit</h3>
            <p className="text-gray-600">{appointment.reason}</p>
          </div>
          {/*History*/}
          <div>
            <h3 className="font-semibold mb-2">Patient Medical History</h3>
            <ul className="list-disc list-inside text-gray-800">
              <li>
                <b>Chronic Illnesses : </b> 
                {appointment.history.chronicIllnesses.join(", ")}
              </li>
              <li>
                <b>Allergies : </b> 
                {appointment.history.allergies.join(", ")}
              </li>
              <li>
                <b>Surgeries : </b>
                {appointment.history.surgeries.join(", ")}
              </li>
              <li>
                <b>Family History : </b>
                {appointment.history.familyHistory.join(", ")}
              </li>
            </ul>
          </div>
          {/*Prescription */}
          <div>
            <h3 className="font-semibold mb-2">Previous Prescriptions</h3>
            <div className="overflow-x-auto">
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 border">Date</th>
                    <th className="p-2 border">Medicine</th>
                    <th className="p-2 border">Duration</th>
                    <th className="p-2 border">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {appointment.prescriptions.map((p, i) => (
                    <tr key={i} className="text-sm">
                      <td className="p-3 border">{p.date}</td>
                      <td className="p-3 border">{p.medicine}</td>
                      <td className="p-3 border">{p.duration}</td>
                      <td className="p-3 border">{p.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/*Lab records */}
          <div>
            <h3 className="font-semibold mb-2">Lab Reports</h3>
            {appointment.labReports.map((r, i) => (
              <div key={i} className="p-3 bg-gray-100 rounded-lg border mb-2 ">
                {r.title} • {r.date}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default doctorappointmentdetialsmodal;
