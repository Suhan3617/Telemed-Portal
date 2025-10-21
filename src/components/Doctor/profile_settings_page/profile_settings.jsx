// src/pages/DoctorSettings/ProfileSettings.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Save } from "lucide-react";
import { mockDoctor } from "../../../data/doctor/mockdata";
// import mockDoctor from "./mockDoctor";
import SaveBar from "../../Common/savebar";

const ProfileSettings = () => {
  const [doctor, setDoctor] = useState(mockDoctor);
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (field, value) => {
    setDoctor({ ...doctor, [field]: value });
    setHasChanges(true);
  };

  const handleSave = () => {
    console.log("Saving profile data:", doctor);
    alert("✅ Changes saved successfully! (ready for backend)");
    setHasChanges(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200 p-10"
    >
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6 drop-shadow">
          👨‍⚕️ Profile Settings
        </h2>

        {/* Basic Info */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-500 mb-3">Basic Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                value={doctor.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Specialty</label>
              <input
                type="text"
                value={doctor.specialty}
                onChange={(e) => handleChange("specialty", e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Experience (Years)</label>
              <input
                type="number"
                value={doctor.experience}
                onChange={(e) => handleChange("experience", e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Qualifications</label>
              <input
                type="text"
                value={doctor.qualifications}
                onChange={(e) => handleChange("qualifications", e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-500 mb-3">Contact Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={doctor.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Phone</label>
              <input
                type="tel"
                value={doctor.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Clinic Location</label>
              <input
                type="text"
                value={doctor.location}
                onChange={(e) => handleChange("location", e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Consultation Hours</label>
              <input
                type="text"
                value={doctor.consultationHours}
                onChange={(e) => handleChange("consultationHours", e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </section>

        {/* Professional Details */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-500 mb-3">Professional Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-1">Hospital/Clinic</label>
              <input
                type="text"
                value={doctor.hospital}
                onChange={(e) => handleChange("hospital", e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Consultation Fees (₹)</label>
              <input
                type="number"
                value={doctor.fee}
                onChange={(e) => handleChange("fee", e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Languages</label>
              <input
                type="text"
                value={doctor.languages}
                onChange={(e) => handleChange("languages", e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </section>

        {/* Security */}
        <section>
          <h3 className="text-xl font-bold text-blue-500 mb-3">Security</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button className="bg-blue-500 text-white rounded-xl py-2 hover:bg-blue-600 transition">
              Reset Password
            </button>
            <button className="bg-blue-100 text-blue-600 rounded-xl py-2 hover:bg-blue-200 transition">
              Manage Devices
            </button>
          </div>
        </section>
      </div>

      {/* Floating Save Bar */}
      {hasChanges && <SaveBar onSave={handleSave} />}
    </motion.div>
  );
};

export default ProfileSettings;
