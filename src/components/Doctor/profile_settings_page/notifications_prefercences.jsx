// src/pages/DoctorSettings/NotificationPreferences.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Settings } from "lucide-react";
import mockDoctor from "../../../data/doctor/mockdata";
import SaveBar from "../../Common/savebar";
import PremiumHeader from "../allpagesheader";

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

  const SectionCard = ({ children, icon: Icon, title }) => (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl bg-white/90 border border-blue-100 shadow-sm hover:shadow-lg hover:shadow-blue-200/50 transition-all"
    >
      <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
        <Icon size={20} className="text-blue-500" /> {title}
      </h3>
      {children}
    </motion.section>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-start py-10 px-4"
    >
      {/* Gradient container */}
      <div className="w-full max-w-5xl rounded-3xl bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 shadow-xl p-8 flex flex-col space-y-10">
        {/* Header */}
        <div className="mb-6">
          <PremiumHeader
            breadcrumb="Settings / Notification Preferences"
            icon={<Bell size={28} />}
            title="Notification Preferences"
            subtitle="Manage how you receive updates, alerts, and reminders across your devices and channels."
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Notification Types */}
          <SectionCard icon={Settings} title="Types of Notifications">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.keys(prefs.types).map((key, index) => (
                <motion.label
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-white/80 border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span className="capitalize font-medium text-slate-700">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>

                  {/* Toggle Switch */}
                  <motion.div
                    onClick={() => handleToggle("types", key)}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300 ${
                      prefs.types[key]
                        ? "bg-gradient-to-r from-blue-500 to-sky-400 shadow-inner"
                        : "bg-gray-300"
                    }`}
                  >
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 600, damping: 30 }}
                      className={`w-5 h-5 rounded-full shadow-lg ${
                        prefs.types[key]
                          ? "bg-white shadow-blue-400/40"
                          : "bg-white"
                      }`}
                      style={{ x: prefs.types[key] ? 28 : 0 }}
                    />
                  </motion.div>
                </motion.label>
              ))}
            </div>
          </SectionCard>

          {/* Notification Channels */}
          <SectionCard icon={Bell} title="Notification Channels">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.keys(prefs.channels).map((key, index) => (
                <motion.label
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-white/80 border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span className="capitalize font-medium text-slate-700">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>

                  {/* Toggle Switch */}
                  <motion.div
                    onClick={() => handleToggle("channels", key)}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300 ${
                      prefs.channels[key]
                        ? "bg-gradient-to-r from-blue-500 to-sky-400 shadow-inner"
                        : "bg-gray-300"
                    }`}
                  >
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 600, damping: 30 }}
                      className={`w-5 h-5 rounded-full shadow-lg ${
                        prefs.channels[key]
                          ? "bg-white shadow-blue-400/40"
                          : "bg-white"
                      }`}
                      style={{ x: prefs.channels[key] ? 28 : 0 }}
                    />
                  </motion.div>
                </motion.label>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>

      {/* Floating Save Bar */}
      {hasChanges && <SaveBar onSave={handleSave} />}
    </motion.div>
  );
};

export default NotificationPreferences;
