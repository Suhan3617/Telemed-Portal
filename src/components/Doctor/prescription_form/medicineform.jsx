import React from "react";
import { PlusCircle, Trash2, Info } from "lucide-react";
import { motion } from "framer-motion";

const MEDICINE_TYPES = ["Tablet", "Syrup", "Injection", "Ointment", "Other"];

const MedicineForm = ({ medicines, setMedicines }) => {
  const addMedicine = () => {
    setMedicines([
      ...medicines,
      { name: "", type: "Tablet", strength: "", dose: "", frequency: "", duration: "" },
    ]);
  };

  const removeMedicine = (index) => {
    setMedicines(medicines.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...medicines];
    updated[index][field] = value;
    setMedicines(updated);
  };

  const renderInfoTooltip = (text) => (
    <span className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-400 group">
      <Info className="w-5 h-5 cursor-pointer" />
      <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 w-48 p-2 text-xs bg-blue-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-50">
        {text}
      </span>
    </span>
  );

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-blue-600 mb-2">💊 Medicines</h3>

      {medicines.map((med, index) => (
        <motion.div
          key={index}
          className="grid grid-cols-1 md:grid-cols-7 gap-3 items-center p-4 rounded-3xl shadow-lg bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 border border-blue-300 hover:shadow-2xl transition-all"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          {/* Medicine Name */}
          <div className="relative md:col-span-2 flex items-center">
            <input
              type="text"
              placeholder="Paracetamol, Ibuprofen..."
              value={med.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className="w-full border border-blue-300 rounded-2xl p-3 pr-10 focus:ring-2 focus:ring-blue-400 transition-all hover:shadow-lg"
              required
            />
            {renderInfoTooltip("Enter the medicine name, e.g., Paracetamol")}
          </div>

          {/* Medicine Type */}
          <div className="relative flex items-center">
            <select
              value={med.type}
              onChange={(e) => handleChange(index, "type", e.target.value)}
              className="w-full border border-blue-300 rounded-2xl p-3 focus:ring-2 focus:ring-blue-400 transition-all hover:shadow-lg"
            >
              {MEDICINE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {renderInfoTooltip("Select the type of medicine: Tablet, Syrup, Injection, etc.")}
          </div>

          {/* Strength */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="500mg, 250mg"
              value={med.strength}
              onChange={(e) => handleChange(index, "strength", e.target.value)}
              className="w-full border border-blue-300 rounded-2xl p-3 pr-10 focus:ring-2 focus:ring-blue-400 transition-all hover:shadow-lg"
            />
            {renderInfoTooltip("Enter the strength of the medicine, e.g., 500mg")}
          </div>

          {/* Dose */}
          <div className="relative flex items-center">
            <input
              type="number"
              min="0"
              placeholder="1"
              value={med.dose}
              onChange={(e) => handleChange(index, "dose", e.target.value)}
              className="w-full border border-blue-300 rounded-2xl p-3 pr-10 focus:ring-2 focus:ring-blue-400 transition-all hover:shadow-lg"
            />
            {renderInfoTooltip("Enter the dose (number only), e.g., 1, 2")}
          </div>

          {/* Frequency */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="2 times/day"
              value={med.frequency}
              onChange={(e) => handleChange(index, "frequency", e.target.value)}
              className="w-full border border-blue-300 rounded-2xl p-3 pr-10 focus:ring-2 focus:ring-blue-400 transition-all hover:shadow-lg"
            />
            {renderInfoTooltip("Enter how many times per day, e.g., 2 times/day")}
          </div>

          {/* Duration */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="5 days"
              value={med.duration}
              onChange={(e) => handleChange(index, "duration", e.target.value)}
              className="w-full border border-blue-300 rounded-2xl p-3 pr-10 focus:ring-2 focus:ring-blue-400 transition-all hover:shadow-lg"
            />
            {renderInfoTooltip("Enter the duration, e.g., 5 days")}
          </div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => removeMedicine(index)}
            className="p-2 text-red-600 hover:text-red-800 transition-all"
          >
            <Trash2 className="w-6 h-6" />
          </button>
        </motion.div>
      ))}

      <motion.button
        type="button"
        onClick={addMedicine}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 text-blue-600 font-bold hover:text-blue-800 transition-all mt-2"
      >
        <PlusCircle className="w-6 h-6" /> Add Medicine
      </motion.button>
    </div>
  );
};

export default MedicineForm;
