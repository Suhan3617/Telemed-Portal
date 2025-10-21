// src/pages/DoctorSettings/NotificationPreferences.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { mockDoctor } from "../../../data/doctor/mockdata";
// import mockDoctor from "./mockDoctor";
import SaveBar from "../../Common/savebar";

const NotificationPreferences = () => {
  const [prefs, setPrefs] = useState(mockDoctor.notifications);
  const [hasChanges, setHasChanges] = useState(false);

  const handleToggle = (section, key) => {
    setPrefs({
      ...prefs,
      [section]: { ...prefs[section], [key]: !prefs[section][key] },
    });
    setHasChanges(true);
  };

  const handleSave = () => {
    console.log("Saving notification prefs:", prefs);
    alert("✅ Notification settings saved!");
    setHasChanges(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200 p-10"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">
          🔔 Notification Preferences
        </h2>

        {/* Notification Types */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-500 mb-3">
            Types of Notifications
          </h3>
          {Object.keys(prefs.types).map((key) => (
            <label
              key={key}
              className="flex items-center justify-between p-3 rounded-xl border mb-2 hover:shadow-md transition"
            >
              <span className="capitalize text-gray-700">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <input
                type="checkbox"
                checked={prefs.types[key]}
                onChange={() => handleToggle("types", key)}
                className="w-5 h-5 accent-blue-500 cursor-pointer"
              />
            </label>
          ))}
        </div>

        {/* Channels */}
        <div>
          <h3 className="text-xl font-bold text-blue-500 mb-3">Channels</h3>
          {Object.keys(prefs.channels).map((key) => (
            <label
              key={key}
              className="flex items-center justify-between p-3 rounded-xl border mb-2 hover:shadow-md transition"
            >
              <span className="capitalize text-gray-700">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <input
                type="checkbox"
                checked={prefs.channels[key]}
                onChange={() => handleToggle("channels", key)}
                className="w-5 h-5 accent-blue-500 cursor-pointer"
              />
            </label>
          ))}
        </div>
      </div>

      {hasChanges && <SaveBar onSave={handleSave} />}
    </motion.div>
  );
};

export default NotificationPreferences;
