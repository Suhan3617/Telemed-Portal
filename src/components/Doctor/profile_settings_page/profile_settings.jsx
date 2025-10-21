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

const inputMotion = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: { scale: 1.02, boxShadow: "0px 0px 20px rgba(59,130,246,0.15)" },
};

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

  const InputField = ({ label, icon: Icon, type = "text", field }) => (
    <motion.div
      variants={inputMotion}
      initial="rest"
      whileHover="hover"
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
          className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white/80 border border-blue-100 focus:ring-4 focus:ring-blue-300/40 focus:border-blue-400 outline-none text-gray-700 font-medium shadow-sm hover:shadow-md transition-all duration-300"
        />
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 rounded-3xl p-6 flex flex-col items-center"
    >
      {/* Premium Header */}
      <div className="w-full max-w-5xl mb-6">
        <PremiumHeader
          breadcrumb="Settings / Profile Settings "
          icon={<User size={28} />}
          title="Profile Settings"
          subtitle="Edit your professional, contact, and account details for a personalized experience."
        />
      </div>

      {/* Sections container */}
      <div className="w-full max-w-5xl flex-1 space-y-10">
        {/* Basic Info */}
        <section>
          <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
            <Stethoscope size={20} className="text-blue-500" /> Basic
            Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField label="Full Name" icon={User} field="name" />
            <InputField
              label="Specialty"
              icon={GraduationCap}
              field="specialty"
            />
            <InputField
              label="Experience (Years)"
              icon={Clock}
              type="number"
              field="experience"
            />
            <InputField
              label="Qualifications"
              icon={Building2}
              field="qualifications"
            />
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
            <Mail size={20} className="text-blue-500" /> Contact Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField label="Email" icon={Mail} type="email" field="email" />
            <InputField label="Phone" icon={Phone} type="tel" field="phone" />
            <InputField
              label="Clinic Location"
              icon={MapPin}
              field="location"
            />
            <InputField
              label="Consultation Hours"
              icon={Clock}
              field="consultationHours"
            />
          </div>
        </section>

        {/* Professional Details */}
        <section>
          <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
            <Building2 size={20} className="text-blue-500" /> Professional
            Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField
              label="Hospital/Clinic"
              icon={Building2}
              field="hospital"
            />
            <InputField
              label="Consultation Fees (₹)"
              icon={Coins}
              type="number"
              field="fee"
            />
            <InputField label="Languages" icon={Languages} field="languages" />
          </div>
        </section>

        {/* Security Section */}
        <section>
          <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
            <Shield size={20} className="text-blue-500" /> Security
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-xl shadow-md hover:shadow-blue-300/50 transition-all"
            >
              <Shield size={18} /> Reset Password
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-blue-100 text-blue-700 py-2.5 rounded-xl border border-blue-200 hover:bg-blue-200/70 transition-all"
            >
              <User size={18} /> Manage Devices
            </motion.button>
          </div>
        </section>
      </div>

      {/* Floating Save Bar */}
      {hasChanges && <SaveBar onSave={handleSave} />}
    </motion.div>
  );
};

export default ProfileSettings;
