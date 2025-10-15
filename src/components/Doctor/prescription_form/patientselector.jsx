import React from "react";
import { Users } from "lucide-react";

// 💡 Replace this with your mock data (imported from file if needed)
const mockPatients = [
  { id: 1, name: "Rahul Mehta", age: 32, gender: "Male" },
  { id: 2, name: "Priya Sharma", age: 28, gender: "Female" },
  { id: 3, name: "Amit Patel", age: 45, gender: "Male" },
];

const PatientSelector = ({ onSelect }) => {
  return (
    <div className="mb-4">
      <label className="text-sm font-medium text-blue-600 flex items-center gap-2 mb-1">
        <Users className="w-4 h-4" /> Select Patient
      </label>
      <select
        onChange={(e) => {
          const p = mockPatients.find((p) => p.id === Number(e.target.value));
          onSelect(p || null);
        }}
        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
        defaultValue=""
      >
        <option value="" disabled>
          Choose patient
        </option>
        {mockPatients.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name} ({p.age} yrs / {p.gender})
          </option>
        ))}
      </select>

      {/* Patient quick info */}
      {/* Optionally display below */}
    </div>
  );
};

export default PatientSelector;
