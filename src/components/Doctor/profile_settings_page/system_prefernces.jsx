// src/pages/DoctorSettings/SystemPreferences.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { mockDoctor } from "../../../data/doctor/mockdata";
// import mockDoctor from "./mockDoctor";
import SaveBar from "../../Common/savebar";

const SystemPreferences = () => {
  const [prefs, setPrefs] = useState(mockDoctor.systemPrefs);
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (key, value) => {
    setPrefs({ ...prefs, [key]: value });
    setHasChanges(true);
  };

  const handleSave = () => {
    console.log("Saving system preferences:", prefs);
    alert("✅ System preferences saved!");
    setHasChanges(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200 p-10"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">
          ⚙️ System Preferences
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-600 mb-1">
              Default Landing Page
            </label>
            <select
              value={prefs.defaultPage}
              onChange={(e) => handleChange("defaultPage", e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400"
            >
              <option>Dashboard</option>
              <option>Appointments</option>
              <option>Patients</option>
              <option>Reports</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 mb-1">
              Language Preference
            </label>
            <select
              value={prefs.language}
              onChange={(e) => handleChange("language", e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
              <option>Marathi</option>
            </select>
          </div>
        </div>
      </div>

      {hasChanges && <SaveBar onSave={handleSave} />}
    </motion.div>
  );
};

export default SystemPreferences;
