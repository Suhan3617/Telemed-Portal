// src/pages/DoctorSettings/SettingsContainer.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SettingsContainer = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200 p-10"
  >
    <h1 className="text-4xl font-bold text-blue-700 mb-10 drop-shadow-md">
      ⚙️ Profile & Account Settings
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <Link
        to="/doctor/settings/profile"
        className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-blue-100 hover:scale-[1.02] transition"
      >
        <h2 className="text-2xl font-semibold text-blue-600">Profile Settings</h2>
        <p className="text-gray-600 mt-2">Edit your professional and contact info.</p>
      </Link>

      <Link
        to="/doctor/settings/notificationspreferences"
        className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-blue-100 hover:scale-[1.02] transition"
      >
        <h2 className="text-2xl font-semibold text-blue-600">
          Notification Preferences
        </h2>
        <p className="text-gray-600 mt-2">
          Manage how and where you receive alerts.
        </p>
      </Link>

      <Link
        to="/doctor/settings/teleconsultation"
        className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-blue-100 hover:scale-[1.02] transition"
      >
        <h2 className="text-2xl font-semibold text-blue-600">
          Teleconsultation Settings
        </h2>
        <p className="text-gray-600 mt-2">
          Customize your virtual consultation experience.
        </p>
      </Link>

      <Link
        to="/doctor/settings/system"
        className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-blue-100 hover:scale-[1.02] transition"
      >
        <h2 className="text-2xl font-semibold text-blue-600">System Preferences</h2>
        <p className="text-gray-600 mt-2">
          Control default pages and language options.
        </p>
      </Link>
    </div>
  </motion.div>
);

export default SettingsContainer;
