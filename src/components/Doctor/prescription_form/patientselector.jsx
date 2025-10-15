import React, { useState, useRef, useEffect } from "react";
import { Users, Calendar, User, Mars, Venus } from "lucide-react";
import { patients } from "../../../data/doctor/mockdata";
import { motion, AnimatePresence } from "framer-motion";

const PatientSelector = ({ onSelect }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (patient) => {
    setSelectedPatient(patient);
    onSelect(patient);
    setOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Return gender icon
  const getGenderIcon = (gender) => {
    if (gender.toLowerCase() === "male") return <Mars className="w-4 h-4 text-blue-500" />;
    if (gender.toLowerCase() === "female") return <Venus className="w-4 h-4 text-pink-500" />;
    return <User className="w-4 h-4 text-gray-500" />;
  };

  return (
    <div className="mb-6 relative" ref={dropdownRef}>
      {/* Label */}
      <label className="text-sm font-semibold text-blue-600 flex items-center gap-2 mb-2">
        <Users className="w-5 h-5" /> Select Patient
      </label>

      {/* Input / Selector */}
      <div
        className="w-full border border-blue-300 rounded-xl p-3 flex justify-between items-center cursor-pointer bg-white hover:shadow-xl transition-shadow"
        onClick={() => setOpen(!open)}
      >
        {selectedPatient ? (
          <span className="text-gray-700 font-medium">
            {selectedPatient.name} • {selectedPatient.age} yrs • {selectedPatient.gender}
          </span>
        ) : (
          <span className="text-gray-400">Choose patient</span>
        )}
        <span className={`transform transition-transform ${open ? "rotate-180" : "rotate-0"}`}>
          ▼
        </span>
      </div>

      {/* Dropdown List */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute z-50 mt-2 w-full bg-white border border-blue-200 rounded-2xl shadow-xl max-h-80 overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {patients.map((p) => (
              <div
                key={p.id}
                onClick={() => handleSelect(p)}
                className="p-4 border-b last:border-b-0 border-blue-100 cursor-pointer hover:bg-blue-50 rounded-xl mx-3 my-2"
              >
                <p className="font-semibold text-blue-700 text-base">{p.name}</p>
                <div className="flex items-center gap-4 mt-1 text-gray-600 text-sm">
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {p.age} yrs</span>
                  <span className="flex items-center gap-1">{getGenderIcon(p.gender)} {p.gender}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {p.lastVisit}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Patient Preview */}
      {selectedPatient && (
        <motion.div
          className="mt-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-400 rounded-3xl shadow-lg text-sm space-y-3 hover:shadow-xl transition-shadow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-blue-700 font-bold text-lg">{selectedPatient.name}</p>
          <div className="grid grid-cols-2 gap-3">
            <p className="flex items-center gap-2"><User className="w-5 h-5 text-blue-500" /> <strong>Age:</strong> {selectedPatient.age}</p>
            <p className="flex items-center gap-2">{getGenderIcon(selectedPatient.gender)} <strong>Gender:</strong> {selectedPatient.gender}</p>
            <p className="flex items-center gap-2 col-span-2"><Calendar className="w-5 h-5 text-blue-500" /> <strong>Last Visit:</strong> {selectedPatient.lastVisit}</p>
          </div>
          <div className="space-y-1 text-gray-700">
            <p><strong>Chronic Illnesses:</strong> {selectedPatient.history.chronicIllnesses.length ? selectedPatient.history.chronicIllnesses.join(", ") : "None"}</p>
            <p><strong>Allergies:</strong> {selectedPatient.history.allergies.length ? selectedPatient.history.allergies.join(", ") : "None"}</p>
            <p><strong>Surgeries:</strong> {selectedPatient.history.surgeries.length ? selectedPatient.history.surgeries.join(", ") : "None"}</p>
            <p><strong>Family History:</strong> {selectedPatient.history.familyHistory.length ? selectedPatient.history.familyHistory.join(", ") : "None"}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PatientSelector;
