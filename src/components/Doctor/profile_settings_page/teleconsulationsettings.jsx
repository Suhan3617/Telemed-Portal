// src/pages/DoctorSettings/TeleconsultationSettings.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import SaveBar from "../../Common/savebar";
import mockDoctor from "../../../data/doctor/mockdata";
import { Video, SlidersHorizontal } from "lucide-react";
import PremiumHeader from "../allpagesheader";

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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-start py-10 px-4"
    >
      {/* Premium Gradient Container */}
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl rounded-3xl bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 shadow-2xl p-8 border border-white/20 backdrop-blur-lg"
      >
        {/* Header */}
        <div className="mb-6">
          <PremiumHeader
            breadcrumb="Settings / Teleconsultation"
            icon={<Video size={28} />}
            title="Teleconsultation Settings"
            subtitle="Customize your virtual consultation experience with branding, waiting room messages, and consent preferences."
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-10">
          {/* Virtual Waiting Room */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-white/80 border border-blue-100 shadow-sm hover:shadow-lg hover:shadow-blue-200/50 transition-all"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <SlidersHorizontal size={20} className="text-blue-500" /> Virtual Waiting Room
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <span className="block text-gray-700 mb-1 font-medium">
                  Estimated Wait Time Message
                </span>
                <input
                  type="text"
                  value={tele.waitMessage}
                  onChange={(e) => handleChange("waitMessage", e.target.value)}
                  className="w-full px-4 py-2 border rounded-xl bg-white/70 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                  placeholder="e.g. Your doctor will join in 5 minutes..."
                />
              </label>

              <label className="flex flex-col">
                <span className="block text-gray-700 mb-1 font-medium">
                  Branding Color
                </span>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={tele.brandColor}
                    onChange={(e) => handleChange("brandColor", e.target.value)}
                    className="w-16 h-10 rounded-xl cursor-pointer border border-blue-200 shadow-inner"
                  />
                  <span
                    className="px-3 py-1 rounded-xl text-sm font-medium"
                    style={{
                      backgroundColor: tele.brandColor + "20",
                      color: tele.brandColor,
                    }}
                  >
                    {tele.brandColor.toUpperCase()}
                  </span>
                </div>
              </label>
            </div>
          </motion.section>

          {/* Consent & Features */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-white/80 border border-blue-100 shadow-sm hover:shadow-lg hover:shadow-blue-200/50 transition-all"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <Video size={20} className="text-blue-500" /> Consent & Features
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {Object.keys(tele.features).map((key, index) => (
                <motion.label
                  key={key}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-white/70 border border-blue-100 rounded-xl shadow-sm hover:shadow-md hover:bg-blue-50/40 transition-all cursor-pointer"
                >
                  <span className="capitalize font-medium text-gray-700">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>

                  {/* Premium Toggle Switch */}
                  <motion.div
                    onClick={() =>
                      handleChange("features", {
                        ...tele.features,
                        [key]: !tele.features[key],
                      })
                    }
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300 ${
                      tele.features[key]
                        ? "bg-gradient-to-r from-blue-500 to-sky-400 shadow-inner"
                        : "bg-gray-300"
                    }`}
                  >
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 600, damping: 30 }}
                      className={`w-5 h-5 rounded-full shadow-lg ${
                        tele.features[key]
                          ? "bg-white shadow-blue-400/40"
                          : "bg-white"
                      }`}
                      style={{ x: tele.features[key] ? 28 : 0 }}
                    />
                  </motion.div>
                </motion.label>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>

      {/* Floating Save Bar */}
      {hasChanges && <SaveBar onSave={handleSave} />}
    </motion.div>
  );
};

export default TeleconsultationSettings;
