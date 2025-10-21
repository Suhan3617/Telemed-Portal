// src/pages/DoctorSettings/TeleconsultationSettings.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import SaveBar from "../../Common/savebar";
import mockDoctor from "../../../data/doctor/mockdata";


const TeleconsultationSettings = () => {
  const [tele, setTele] = useState(mockDoctor.teleconsultation);
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (key, value) => {
    setTele({ ...tele, [key]: value });
    setHasChanges(true);
  };

  const handleSave = () => {
    console.log("Saving teleconsultation settings:", tele);
    alert("✅ Teleconsultation settings saved!");
    setHasChanges(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200 p-10"
    >
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">
          💬 Teleconsultation Settings
        </h2>

        {/* Virtual Waiting Room */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-500 mb-3">
            Virtual Waiting Room
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label>
              <span className="block text-gray-600 mb-1">
                Estimated Wait Time Message
              </span>
              <input
                type="text"
                value={tele.waitMessage}
                onChange={(e) => handleChange("waitMessage", e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400"
              />
            </label>

            <label>
              <span className="block text-gray-600 mb-1">Branding Color</span>
              <input
                type="color"
                value={tele.brandColor}
                onChange={(e) => handleChange("brandColor", e.target.value)}
                className="w-full h-10 cursor-pointer rounded-xl"
              />
            </label>
          </div>
        </section>

        {/* Features */}
        <section>
          <h3 className="text-xl font-bold text-blue-500 mb-3">
            Consent & Features
          </h3>
          {Object.keys(tele.features).map((key) => (
            <label
              key={key}
              className="flex items-center justify-between p-3 rounded-xl border mb-2 hover:shadow-md transition"
            >
              <span className="capitalize text-gray-700">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <input
                type="checkbox"
                checked={tele.features[key]}
                onChange={() =>
                  handleChange("features", {
                    ...tele.features,
                    [key]: !tele.features[key],
                  })
                }
                className="w-5 h-5 accent-blue-500 cursor-pointer"
              />
            </label>
          ))}
        </section>
      </div>

      {hasChanges && <SaveBar onSave={handleSave} />}
    </motion.div>
  );
};

export default TeleconsultationSettings;
