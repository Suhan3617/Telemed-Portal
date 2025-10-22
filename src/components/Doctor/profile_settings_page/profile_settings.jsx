// src/pages/DoctorSettings/ProfileSettings.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  GraduationCap,
  Languages,
  Clock,
  Shield,
  Stethoscope,
  Coins,
} from "lucide-react";
import mockDoctor from "../../../data/doctor/mockdata";
import SaveBar from "../../Common/savebar";
import PremiumHeader from "../allpagesheader";

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

  // Input Field with inner glow
  const InputField = ({ label, icon: Icon, type = "text", field }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative group w-full"
    >
      <label className="block text-slate-600 font-medium mb-1">{label}</label>
      <div className="relative">
        <Icon
          className="absolute left-4 top-3 text-blue-400 group-hover:text-blue-500 transition-all duration-200"
          size={20}
        />
        <input
          type={type}
          value={doctor[field]}
          onChange={(e) => handleChange(field, e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-2xl border border-blue-100 bg-white text-gray-800 font-medium outline-none shadow-sm transition-all duration-300 hover:shadow-md focus:shadow-[0_0_12px_2px_rgba(59,130,246,0.35)] focus:border-blue-400"
        />
      </div>
    </motion.div>
  );

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
      className="min-h-screen flex flex-col items-center justify-start py-10 px-4 bg-slate-50"
      onKeyDown={(e) => {
        if (e.key === "Enter") e.preventDefault(); // Prevent page reload on Enter
      }}
    >
      {/* Gradient container */}
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl rounded-3xl bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 shadow-2xl p-8 border border-white/20 backdrop-blur-lg flex flex-col space-y-10"
      >
        {/* Header */}
        <div>
          <PremiumHeader
            breadcrumb="Settings / Profile Settings"
            icon={<User size={28} />}
            title="Profile Settings"
            subtitle="Edit your professional, contact, and account details for a personalized experience."
          />
        </div>

        {/* Sections */}
        <div className="flex flex-col space-y-8">
          {/* Basic Info */}
          <SectionCard icon={Stethoscope} title="Basic Information">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField label="Full Name" icon={User} field="name" />
              <InputField label="Specialty" icon={GraduationCap} field="specialty" />
              <InputField label="Experience (Years)" icon={Clock} type="number" field="experience" />
              <InputField label="Qualifications" icon={Building2} field="qualifications" />
            </div>
          </SectionCard>

          {/* Contact Info */}
          <SectionCard icon={Mail} title="Contact Information">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField label="Email" icon={Mail} type="email" field="email" />
              <InputField label="Phone" icon={Phone} type="tel" field="phone" />
              <InputField label="Clinic Location" icon={MapPin} field="location" />
              <InputField label="Consultation Hours" icon={Clock} field="consultationHours" />
            </div>
          </SectionCard>

          {/* Professional Details */}
          <SectionCard icon={Building2} title="Professional Details">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField label="Hospital/Clinic" icon={Building2} field="hospital" />
              <InputField label="Consultation Fees (₹)" icon={Coins} type="number" field="fee" />
              <InputField label="Languages" icon={Languages} field="languages" />
            </div>
          </SectionCard>

          {/* Security */}
          <SectionCard icon={Shield} title="Security">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.button
                type="button" // Prevent reload
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-2xl shadow-md hover:shadow-blue-300/50 transition-all"
              >
                <Shield size={18} /> Reset Password
              </motion.button>
              <motion.button
                type="button" // Prevent reload
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-blue-100 text-blue-700 py-3 rounded-2xl border border-blue-200 hover:bg-blue-200/70 transition-all"
              >
                <User size={18} /> Manage Devices
              </motion.button>
            </div>
          </SectionCard>
        </div>
      </motion.div>

      {/* Floating Save Bar */}
      {hasChanges && <SaveBar onSave={handleSave} />}
    </motion.div>
  );
};

export default ProfileSettings;
