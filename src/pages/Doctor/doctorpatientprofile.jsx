import React from "react";
import { useParams } from "react-router-dom";
import { patients, records, appointments } from "../../data/doctor/mockdata";

const doctorpatientprofile = () => {
  const { patientId } = useParams();
  const patient = patients.find((p) => p.id === patientId);
  const prescriptions = appointments.prescriptions.filter(
    (pr) => pr.patients === patientId
  );
  const records = records.filter((r) => r.patientId === patientId);

  if (!patient) {
    return (
      <div className="mt-12 text-center text-gray-500">
        <p className="text-lg">No patients found 🚑</p>
      </div>
    );
  }

  return(
    <div className="space-y-6">
        <div className="bg-white">
            <img src={patient.photo} className="w-16 h-16 rounded-2xl border" />
            <div className="flex-1">
                <div className="text-xl font-semibold">{patient.name}</div>
                <div className="text-gray-500 text-sm">{patient.gender} • {patient.age}</div>
            </div>
            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Message</button>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-3">Medical History</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><b>Chronic : </b>{(patient.history.chronicIllnesses||[]).join(" , ")||"-"}</li>
                    <li><b>Allergies : </b>{(patient.history.allergies||[]).join(" , ")||"-"}</li>
                    <li><b>Surgeries : </b>{(patient.history.surgeries||[]).join(" , ")||"-"}</li>
                    <li><b>Family : </b>{(patient.history.familyHistory||[]).join(" , ")||"-"}</li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default doctorpatientprofile;
