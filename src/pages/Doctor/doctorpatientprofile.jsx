import React from "react";
import { useParams } from "react-router-dom";
import { patients, records, appointments } from "../../data/doctor/mockdata";

const doctorpatientprofile = () => {
  const { patientId } = useParams();
  const patient = patients.find((p) => p.id === patientId);
 const prescriptions = appointments
  .filter((a) => a.patientId === patientId)
  .flatMap((a) => a.prescriptions || []);
  const Records = records.filter((r) => r.patientId === patientId);

  if (!patient) {
    return (
      <div className="mt-12 text-center text-gray-500">
        <p className="text-lg">No patients found 🚑</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white">
        <img src={patient.photo} className="w-16 h-16 rounded-2xl border" />
        <div className="flex-1">
          <div className="text-xl font-semibold">{patient.name}</div>
          <div className="text-gray-500 text-sm">
            {patient.gender} • {patient.age}
          </div>
        </div>
        <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          Message
        </button>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Medical History</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <b>Chronic : </b>
              {(patient.history.chronicIllnesses || []).join(" , ") || "-"}
            </li>
            <li>
              <b>Allergies : </b>
              {(patient.history.allergies || []).join(" , ") || "-"}
            </li>
            <li>
              <b>Surgeries : </b>
              {(patient.history.surgeries || []).join(" , ") || "-"}
            </li>
            <li>
              <b>Family : </b>
              {(patient.history.familyHistory || []).join(" , ") || "-"}
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Previous Prescriptions</h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border"> Medicine</th>
                  <th className="p-2 border"> Duration</th>
                  <th className="p-2 border"> Notes</th>
                </tr>
              </thead>
              <tbody>
                {prescriptions.map((p, i) => (
                  <tr key={i} className="text-sm">
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
        <div className="bg-white p-6 rounded-xl shadow lg:col-span-2">
          <h3 className="font-semibold mb-3">Lab Reports</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Records.map((r) => (
              <div key={r.id} className="p-4 rounded-xl border bg-gray-50">
                <div className="font-semibold">{r.title}</div>
                <div className="text-sm text-gray-500">
                  {r.date} • {r.type}
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                    View
                  </button>
                  <button className="px-3 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow lg:col-span-2">
          <h3 className="font-semibold mb-3">Doctor Notes</h3>
          <textarea
            className="w-full border rounded-lg px-3 py-2 min-h-[120px]"
            placeholder="Add private notes..."
          />
          <div className="mt-3">
            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
              Save Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default doctorpatientprofile;
