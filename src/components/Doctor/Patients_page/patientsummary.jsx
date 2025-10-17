import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Mars,
  Venus,
  Calendar,
  Heart,
  Stethoscope,
  MapPin,
  Phone,
} from "lucide-react";

// --- Helper Functions (No changes) ---

const getGenderIcon = (gender) => {
  if (!gender) return <User className="w-5 h-5 text-gray-500" />;
  if (gender.toLowerCase() === "male")
    return <Mars className="w-5 h-5 text-indigo-600" />;
  if (gender.toLowerCase() === "female")
    return <Venus className="w-5 h-5 text-pink-600" />;
  return <User className="w-5 h-5 text-gray-500" />;
};

const renderBadge = (text, color = "blue") => {
  const baseClasses = `inline-block px-4 py-1.5 rounded-full text-xs font-semibold shadow-md transition-all duration-300 transform hover:scale-105 cursor-default`;
  
  let colorClasses;
  switch (color) {
    case "red":
      colorClasses = "bg-red-500/90 text-white hover:bg-red-600 shadow-red-500/40";
      break;
    case "teal":
      colorClasses = "bg-teal-500/90 text-white hover:bg-teal-600 shadow-teal-500/40";
      break;
    case "amber":
      colorClasses = "bg-amber-500/90 text-white hover:bg-amber-600 shadow-amber-500/40";
      break;
    default:
      colorClasses = "bg-gray-300/90 text-gray-800 hover:bg-gray-400 shadow-gray-400/40";
  }

  return (
    <motion.span
      key={text}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`${baseClasses} ${colorClasses}`}
    >
      {text || "N/A"}
    </motion.span>
  );
};

const PatientCardPremium = ({ patient }) => {
  
  // --- Mini Card Component ---
  const MiniCard = ({ icon, label, value, iconColor }) => (
    <motion.div
      whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 30px rgba(52, 211, 163, 0.3)" }}
      className="flex items-center gap-3 p-4 rounded-2xl shadow-xl border border-white/50 backdrop-blur-md bg-white/30 transition-all duration-300 cursor-pointer w-full"
    >
      <div className={`p-2 rounded-full ${iconColor} bg-white/70 shadow-inner`}>
        {icon}
      </div>
      <div>
        <div className="text-xs font-medium text-gray-700 uppercase tracking-wider">{label}</div>
        <div className="text-xl font-bold text-gray-900">{value || "—"}</div>
      </div>
    </motion.div>
  );

  // --- Main Component Render ---
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="relative w-full rounded-3xl shadow-2xl overflow-hidden
                 bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200 p-8 md:p-10 border-4 border-white/50"
    >
      
      {/* --- 1. Top Section: AVATAR (Left) | NAME/INFO (Center) | REPORTS (Right) --- */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        
        {/* LEFT Block: Avatar (Order 1 on Desktop/Mobile) */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto md:order-1">
          <motion.img
            src={patient.avatar}
            alt={patient.name}
            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-2xl transition-all duration-500"
            style={{
                border: "5px solid #fff",
                boxShadow: "0 0 0 5px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.7)"
            }}
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* CENTER Block: Name, Basic Info, and Pills (Expands in the middle) */}
        <div className="flex-1 text-center md:text-left md:order-2">
          <h1 className="text-4xl font-extrabold text-indigo-700 drop-shadow-md">
            {patient.name}
          </h1>
          <div className="flex justify-center md:justify-start items-center gap-6 mt-3 flex-wrap">
            
            {/* Age */}
            <span className="flex items-center gap-2 font-bold text-lg text-teal-700">
              <Stethoscope className="w-5 h-5 text-teal-600" />
              {patient.age} yrs
            </span>
            
            {/* Gender */}
            <span className="flex items-center gap-2 font-bold text-lg">
              {getGenderIcon(patient.sex)}
              <span className={patient.sex?.toLowerCase() === 'female' ? 'text-pink-600' : 'text-indigo-600'}>
                  {patient.sex || "N/A"}
              </span>
            </span>
            
            {/* DOB */}
            <span className="flex items-center gap-2 text-gray-600 text-base">
              <Calendar className="w-5 h-5 text-blue-500" />
              {patient.dob}
            </span>
          </div>

          {/* Status & Insurance Pills */}
          <div className="mt-4 flex justify-center md:justify-start flex-wrap gap-3">
             {patient.uhid && (
                <span className="inline-block bg-teal-300/60 text-teal-900 px-3 py-1 rounded-full text-xs font-bold shadow-inner">
                    UHID: {patient.uhid}
                </span>
            )}
             {patient.statusPill && renderBadge(patient.statusPill, "amber")}
             {patient.insurance && renderBadge(patient.insurance, "teal")}
          </div>
        </div>

        {/* RIGHT Block: Stacked Mini Cards (Order 3 on Desktop) */}
        <div className="flex-shrink-0 flex flex-col items-center gap-3 w-full md:w-auto max-w-[250px] mx-auto md:mx-0 md:order-3">
            <MiniCard 
                icon={<Heart className="w-5 h-5 text-red-600" />}
                label="Total Reports"
                value={patient.reportsCount}
                iconColor="text-red-600"
            />
            <MiniCard
                icon={<Calendar className="w-5 h-5 text-blue-600" />}
                label="Last Visit"
                value={patient.lastVisit}
                iconColor="text-blue-600"
            />
        </div>
      </div>

      <hr className="my-8 border-t-2 border-white/70" />

      {/* --- 2. Footer: Contact + Location --- */}
      <div className="text-md text-gray-700 flex flex-col md:flex-row justify-between gap-6">
        
        {/* Contact Info */}
        <div className="flex items-start gap-3 p-4 bg-white/40 rounded-xl shadow-inner border border-white/70 flex-1">
            <Phone className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
                <strong className="text-gray-900 text-lg">Contact Details</strong>
                <span className="block mt-1 text-sm">
                    <span className="font-medium text-indigo-600">Primary:</span> {patient.primaryContact || "—"}
                </span>
                <span className="block text-sm">
                    <span className="font-medium text-indigo-600">Emergency: </span>
                    {patient.emergencyContact
                        ? `${patient.emergencyContact.name} (${patient.emergencyContact.relation})`
                        : "—"}
                </span>
            </div>
        </div>

        {/* Location Info */}
        <div className="flex items-start gap-3 p-4 bg-white/40 rounded-xl shadow-inner border border-white/70 flex-1">
            <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
                <strong className="text-gray-900 text-lg">Current Location</strong>
                <span className="block mt-1 font-semibold text-teal-800 text-sm">{patient.location || "N/A"}</span>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PatientCardPremium;