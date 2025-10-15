import React from "react";
import { PlusCircle, Trash2, Info } from "lucide-react";
import { motion } from "framer-motion";

const MedicineForm = ({ medicines, setMedicines }) => {
  const addMedicine = () => {
    setMedicines([
      ...medicines,
      { name: "", strength: "", dose: "", frequency: "", duration: "" },
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

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-blue-600 mb-2">💊 Medicines</h3>

      {medicines.map((med, index) => (
        <motion.div
          key={index}
          className="grid grid-cols-2 md:grid-cols-6 gap-3 items-center p-4 rounded-3xl shadow-lg bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 border border-blue-300 hover:shadow-2xl transition-all"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          {/* Medicine Name */}
          <div className="relative col-span-2">
            <input
              type="text"
              placeholder="Paracetamol, Ibuprofen..."
              value={med.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className="w-full border border-blue-300 rounded-2xl p-3 pr-10 focus:ring-2 focus:ring-blue-400 transition-all hover:shadow-lg"
              required
            />
            <div className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-400 group">
              <Info className="w-5 h-5 cursor-pointer" />
              <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 w-48 p-2 text-xs bg-blue-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Enter the medicine name, e.g., Paracetamol
              </span>
            </div>
          </div>

          {/* Strength */}
          <div className="relative">
            <input
              type="text"
              placeholder="500mg, 250mg"
              value={med.strength}
              onChange={(e) => handleChange(index, "strength", e.target.value)}
              className="w-full border border-blue-300 rounded-2xl p-3 pr-10 focus:ring-2 focus:ring-blue-400 transition-all hover:shadow-lg"
            />
            <div className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-400 group">
              <Info className="w-5 h-5 cursor-pointer" />
              <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 w-40 p-2 text-xs bg-blue-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Strength, e.g., 500mg tablet
              </span>
            </div>
          </div>

          {/* Dose */}
          <div className="relative">
            <input
              type="number"
              min="0"
              placeholder="1"
              value={med.dose}
              onChange={(e) => handleChange(index, "dose", e.target.value)}
              className="w-full border border-blue-300 rounded-2xl p-3 pr-10 focus:ring-2 focus:ring-blue-400 transition-all hover:shadow-lg"
            />
            <div className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-400 group">
              <Info className="w-5 h-5 cursor-pointer" />
              <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 w-40 p-2 text-xs bg-blue-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Dose must be a number, e.g., 1 tablet
              </span>
            </div>
          </div>

          {/* Frequency */}
          <div className="relative">
            <input
              type="text"
              placeholder="2 times/day"
              value={med.frequency}
              onChange={(e) => handleChange(index, "frequency", e.target.value)}
              className="w-full border border-blue-300 rounded-2xl p-3 pr-10 focus:ring-2 focus:ring-blue-400 transition-all hover:shadow-lg"
            />
            <div className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-400 group">
              <Info className="w-5 h-5 cursor-pointer" />
              <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 w-44 p-2 text-xs bg-blue-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                How often to take, e.g., 2 times/day
              </span>
            </div>
          </div>

          {/* Duration */}
          <div className="relative">
            <input
              type="text"
              placeholder="5 days"
              value={med.duration}
              onChange={(e) => handleChange(index, "duration", e.target.value)}
              className="w-full border border-blue-300 rounded-2xl p-3 pr-10 focus:ring-2 focus:ring-blue-400 transition-all hover:shadow-lg"
            />
            <div className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-400 group">
              <Info className="w-5 h-5 cursor-pointer" />
              <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 w-40 p-2 text-xs bg-blue-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Duration for medication, e.g., 5 days
              </span>
            </div>
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

      {/* Add Medicine Button */}
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
