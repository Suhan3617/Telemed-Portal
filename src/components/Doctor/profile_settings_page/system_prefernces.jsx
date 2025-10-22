// src/pages/DoctorSettings/SystemPreferences.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import mockDoctor from "../../../data/doctor/mockdata";
import SaveBar from "../../Common/savebar";
import { Settings, Globe2, LayoutDashboard } from "lucide-react";
import PremiumHeader from "../allpagesheader";

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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-start py-10 px-4"
    >
      {/* Premium Gradient Card */}
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl rounded-3xl bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 shadow-2xl p-8 border border-white/20 backdrop-blur-lg"
      >
        {/* Header */}
        <div className="mb-6">
          <PremiumHeader
            breadcrumb="Settings / System Preferences"
            icon={<Settings size={28} />}
            title="System Preferences"
            subtitle="Customize your dashboard behavior, default pages, and language preferences for a smooth workflow."
          />
        </div>

        {/* Main Content */}
        <div className="space-y-10">
          {/* Default Landing Page */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-white/80 border border-blue-100 shadow-sm hover:shadow-lg hover:shadow-blue-200/50 transition-all"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <LayoutDashboard size={20} className="text-blue-500" /> Default Landing Page
            </h3>

            <div className="relative">
              <motion.select
                whileFocus={{ scale: 1.02 }}
                value={prefs.defaultPage}
                onChange={(e) => handleChange("defaultPage", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white/80 focus:ring-4 focus:ring-blue-300/40 focus:border-blue-400 outline-none font-medium text-gray-700 shadow-sm hover:shadow-md transition-all"
              >
                <option>Dashboard</option>
                <option>Appointments</option>
                <option>Patients</option>
                <option>Reports</option>
              </motion.select>
            </div>
          </motion.section>

          {/* Language Preference */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-white/80 border border-blue-100 shadow-sm hover:shadow-lg hover:shadow-blue-200/50 transition-all"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <Globe2 size={20} className="text-blue-500" /> Language Preference
            </h3>

            <motion.select
              whileFocus={{ scale: 1.02 }}
              value={prefs.language}
              onChange={(e) => handleChange("language", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white/80 focus:ring-4 focus:ring-blue-300/40 focus:border-blue-400 outline-none font-medium text-gray-700 shadow-sm hover:shadow-md transition-all"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
              <option>Marathi</option>
            </motion.select>
          </motion.section>
        </div>
      </motion.div>

      {/* Floating Save Bar */}
      {hasChanges && <SaveBar onSave={handleSave} />}
    </motion.div>
  );
};

export default SystemPreferences;
