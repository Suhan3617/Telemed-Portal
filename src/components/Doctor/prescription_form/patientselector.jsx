import React, { useState } from "react";
import { Users } from "lucide-react";
import { patients } from "../../../data/doctor/mockdata";

const PatientSelector = ({ onSelect }) => {
  const [selectedPatientId, setSelectedPatientId] = useState("");

  const handleChange = (e) => {
    const id = e.target.value;
    setSelectedPatientId(id);
    const patient = patients.find((p) => p.id === id);
    onSelect(patient || null);
  };

  const selectedPatient = patients.find((p) => p.id === selectedPatientId);

  return (
    <div className="mb-4">
      <label className="text-sm font-medium text-blue-600 flex items-center gap-2 mb-1">
        <Users className="w-4 h-4" /> Select Patient
      </label>

      <select
        value={selectedPatientId}
        onChange={handleChange}
        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
      >
        <option value="" disabled>
          Choose patient
        </option>
        {patients.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name} ({p.age} yrs / {p.gender})
          </option>
        ))}
      </select>

      {selectedPatient && (
        <div className="mt-2 p-3 bg-blue-50 border-l-4 border-blue-400 rounded shadow-sm">
          <p><strong>Name:</strong> {selectedPatient.name}</p>
          <p><strong>Age:</strong> {selectedPatient.age}</p>
          <p><strong>Gender:</strong> {selectedPatient.gender}</p>
          <p><strong>Last Visit:</strong> {selectedPatient.lastVisit}</p>
          <p><strong>Chronic Illnesses:</strong> {selectedPatient.history.chronicIllnesses.join(", ") || "None"}</p>
          <p><strong>Allergies:</strong> {selectedPatient.history.allergies.join(", ") || "None"}</p>
          <p><strong>Surgeries:</strong> {selectedPatient.history.surgeries.join(", ") || "None"}</p>
          <p><strong>Family History:</strong> {selectedPatient.history.familyHistory.join(", ") || "None"}</p>
        </div>
      )}
    </div>
  );
};

export default PatientSelector;
