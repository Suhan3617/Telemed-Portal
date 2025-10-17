import React from "react";
import { motion } from "framer-motion";
import { HeartCrack, Dna, Pill, Users, Eye } from "lucide-react";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
  hover: {
    scale: 1.03,
    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.2)",
    transition: { duration: 0.25 },
  },
};

// Animated badge component
const AnimatedBadge = ({ text, bgColor, textColor }) => (
  <motion.span
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.1, y: -2 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`px-3 py-1 rounded-full font-medium shadow-sm ${bgColor} ${textColor} text-sm`}
  >
    {text}
  </motion.span>
);

// Helper for list items
const renderListItem = (content, subContent, key, bgColor = "bg-blue-50", textColor = "text-blue-900") => (
  <motion.li
    key={key}
    variants={itemVariants}
    whileHover="hover"
    className={`flex flex-col sm:flex-row sm:justify-between items-start sm:items-center px-4 py-2 rounded-xl
                ${bgColor} ${textColor} shadow-sm transition-all duration-300 cursor-pointer`}
    style={{
      borderLeft: `4px solid ${
        textColor.includes("blue")
          ? "#3B82F6"
          : textColor.includes("red")
          ? "#EF4444"
          : "#10B981"
      }`,
    }}
  >
    <span className="font-medium text-lg mb-1 sm:mb-0">{content}</span>
    <span className="text-sm italic text-gray-600 sm:text-right">{subContent}</span>
  </motion.li>
);

const PatientDetailsPremium = ({ patient, onViewReports }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-blue-900 p-8 rounded-3xl shadow-2xl border border-blue-100 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ffffff, #bfdbfe, #93c5fd)",
      }}
    >
      {/* Gradient background animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          background: "linear-gradient(135deg, #ffffff, #bfdbfe, #93c5fd)",
          backgroundSize: "400% 400%",
          borderRadius: "1.5rem",
        }}
      />

      {/* Left Column */}
      <section className="flex flex-col gap-8 relative z-10">
        {/* Problem List */}
        <motion.div
          variants={sectionVariants}
          className="bg-white/70 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100 backdrop-blur-sm"
        >
          <h3 className="font-extrabold text-2xl mb-4 flex items-center gap-3 text-indigo-700">
            <HeartCrack className="w-7 h-7 text-red-500" /> Problem List
          </h3>
          <ul className="space-y-3">
            {patient.problemList && patient.problemList.length > 0 ? (
              patient.problemList.map((p, idx) =>
                renderListItem(p.name, p.status, idx, "bg-blue-50", "text-blue-900")
              )
            ) : (
              <li className="text-gray-500 italic">No known problems.</li>
            )}
          </ul>
        </motion.div>

        {/* Allergies */}
        <motion.div
          variants={sectionVariants}
          className="bg-white/70 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100 backdrop-blur-sm"
        >
          <h3 className="font-extrabold text-2xl mb-4 flex items-center gap-3 text-indigo-700">
            <Dna className="w-7 h-7 text-orange-500" /> Allergies
          </h3>
          <div className="flex flex-wrap gap-2">
            {patient.allergies && patient.allergies.length > 0 ? (
              patient.allergies.map((a, idx) => (
                <AnimatedBadge
                  key={idx}
                  text={`${a.substance} (${a.severity})`}
                  bgColor="bg-orange-50"
                  textColor="text-orange-900"
                />
              ))
            ) : (
              <span className="text-gray-500 italic">No known allergies.</span>
            )}
          </div>
        </motion.div>

        {/* Active Medications */}
        <motion.div
          variants={sectionVariants}
          className="bg-white/70 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100 backdrop-blur-sm"
        >
          <h3 className="font-extrabold text-2xl mb-4 flex items-center gap-3 text-indigo-700">
            <Pill className="w-7 h-7 text-green-500" /> Active Medications
          </h3>
          <div className="flex flex-wrap gap-2">
            {patient.activeMeds && patient.activeMeds.length > 0 ? (
              patient.activeMeds.map((m, idx) => (
                <AnimatedBadge
                  key={idx}
                  text={`${m.name} - ${m.dose} (${m.frequency})`}
                  bgColor="bg-green-50"
                  textColor="text-green-900"
                />
              ))
            ) : (
              <span className="text-gray-500 italic">No active medications.</span>
            )}
          </div>
        </motion.div>
      </section>

      {/* Right Column */}
      <section className="flex flex-col gap-8 relative z-10">

        {/* Social & Family History */}
        <motion.div
          variants={sectionVariants}
          className="bg-white/70 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100 backdrop-blur-sm"
        >
          <h3 className="font-extrabold text-2xl mb-4 flex items-center gap-3 text-indigo-700">
            <Users className="w-7 h-7 text-purple-500" /> Social & Family History
          </h3>
          <div className="flex flex-wrap gap-2">
            {patient.familyHistory && patient.familyHistory.length > 0
              ? patient.familyHistory.map((item, idx) => (
                  <AnimatedBadge key={idx} text={item} bgColor="bg-blue-100" textColor="text-blue-800" />
                ))
              : null}

            {patient.socialHistory &&
              Object.entries(patient.socialHistory).map(([key, value], idx) => (
                <AnimatedBadge key={idx} text={`${key}: ${value}`} bgColor="bg-gray-100" textColor="text-gray-800" />
              ))}

            {!patient.familyHistory?.length && !patient.socialHistory && (
              <span className="text-gray-500 italic">No social or family history recorded.</span>
            )}
          </div>
        </motion.div>
        
        {/* View Reports Button */}
       <motion.div
          variants={sectionVariants}
          className="flex justify-center mt-8"
        >
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)", // Intense blue glow
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onViewReports} // This handler needs to be passed down or implemented to navigate
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white 
                       font-extrabold text-lg uppercase tracking-wide shadow-xl-custom-blue 
                       transition-all duration-300 ease-in-out hover:bg-blue-700
                       relative overflow-hidden group"
            style={{
              "--tw-shadow-color": "rgba(59, 130, 246, 0.5)",
              "--tw-shadow":
                "var(--tw-shadow-ring-inset) 0 4px 15px var(--tw-shadow-color), 0 0 25px var(--tw-shadow-color)",
              boxShadow:
                "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            }}
          >
            <Eye className="w-6 h-6 group-hover:animate-pulse" />
            View All Medical Reports
            <span
              className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 
                           transition-all duration-500 ease-out transform scale-0 group-hover:scale-100 
                           rounded-full"
            ></span>{" "}
            {/* Sparkle effect */}
          </motion.button>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default PatientDetailsPremium;
