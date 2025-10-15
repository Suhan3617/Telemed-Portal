import React from "react";
import { PlusCircle, Trash2 } from "lucide-react";

const MedicineForm = ({ medicines, setMedicines }) => {
  const addMedicine = () => {
    setMedicines([
      ...medicines,
      { name: "", strength: "", dose: "", frequency: "", duration: "", instructions: "" },
    ]);
  };

  const removeMedicine = (index) => {
    const updated = medicines.filter((_, i) => i !== index);
    setMedicines(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...medicines];
    updated[index][field] = value;
    setMedicines(updated);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-blue-600">Medicines</h3>
      {medicines.map((med, index) => (
        <div
          key={index}
          className="grid grid-cols-2 md:grid-cols-6 gap-3 items-center bg-blue-50/50 p-3 rounded-lg shadow-sm"
        >
          <input
            type="text"
            placeholder="Medicine name"
            value={med.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
            className="col-span-2 border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Strength"
            value={med.strength}
            onChange={(e) => handleChange(index, "strength", e.target.value)}
            className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Dose"
            value={med.dose}
            onChange={(e) => handleChange(index, "dose", e.target.value)}
            className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Frequency"
            value={med.frequency}
            onChange={(e) => handleChange(index, "frequency", e.target.value)}
            className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Duration"
            value={med.duration}
            onChange={(e) => handleChange(index, "duration", e.target.value)}
            className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            onClick={() => removeMedicine(index)}
            className="p-2 text-red-500 hover:text-red-700 transition-all"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addMedicine}
        className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-all"
      >
        <PlusCircle className="w-5 h-5" /> Add Medicine
      </button>
    </div>
  );
};

export default MedicineForm;
