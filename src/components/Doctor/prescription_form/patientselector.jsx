import React, { useState, useRef, useEffect } from "react";
import { Users, Calendar, User, Mars, Venus, MapPin, Phone } from "lucide-react";
import { patients } from "../../../data/doctor/mockdata";
import { motion, AnimatePresence } from "framer-motion";
import SelectedPatientCard from "./selectedpatientcard";

const PatientSelector = ({ onSelect }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (patient) => {
    setSelectedPatient(patient);
    onSelect(patient);
    setOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Gender Icon
  const getGenderIcon = (sex) => {
    if (sex?.toLowerCase() === "m") return <Mars className="w-4 h-4 text-blue-500" />;
    if (sex?.toLowerCase() === "f") return <Venus className="w-4 h-4 text-pink-500" />;
    return <User className="w-4 h-4 text-gray-500" />;
  };

  return (
    <div className="mb-6 relative" ref={dropdownRef}>
      {/* Label */}
      <label className="text-sm font-semibold text-blue-600 flex items-center gap-2 mb-2">
        <Users className="w-5 h-5" />
        <p className="text-2xl font-bold">Select Patient</p>
      </label>

      {/* Selector */}
      <div
        className="w-full border border-blue-300 rounded-xl p-3 flex justify-between items-center cursor-pointer bg-white hover:shadow-lg transition-shadow"
        onClick={() => setOpen(!open)}
      >
        {selectedPatient ? (
          <div className="flex items-center gap-2">
            <img
              src={selectedPatient.avatar}
              alt={selectedPatient.name}
              className="w-8 h-8 rounded-full object-cover border"
            />
            <span className="text-gray-700 font-medium">
              {selectedPatient.name} • {selectedPatient.age} yrs • {selectedPatient.sex}
            </span>
          </div>
        ) : (
          <span className="text-gray-400">Choose a patient</span>
        )}
        <span
          className={`transform transition-transform text-gray-600 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
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
            transition={{ duration: 0.25 }}
          >
            {patients.map((p) => (
              <div
                key={p.id}
                onClick={() => handleSelect(p)}
                className="p-3 border-b last:border-b-0 border-blue-100 cursor-pointer hover:bg-blue-50 transition-colors flex items-center gap-3"
              >
                <img
                  src={p.avatar}
                  alt={p.name}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-blue-700 text-base">{p.name}</p>
                  <div className="flex flex-wrap items-center gap-3 text-gray-600 text-sm mt-0.5">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" /> {p.age} yrs
                    </span>
                    <span className="flex items-center gap-1">
                      {getGenderIcon(p.sex)} {p.sex}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {p.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {p.lastVisit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Patient Preview */}
      {selectedPatient && <SelectedPatientCard selectedPatient={selectedPatient} />}
    </div>
  );
};

export default PatientSelector;
