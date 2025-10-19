import React from "react";
import { motion } from "framer-motion";

const ProfileSettings = () => {
  const items = [
    { title: "Basic Info", data: ["Name", "Photo", "Specialty", "Experience", "Qualifications"] },
    { title: "Contact Info", data: ["Email", "Phone", "Locations", "Consultation Hours"] },
    { title: "Professional Details", data: ["Hospital/Clinic", "Consultation Fees", "Languages"] },
    { title: "Security", data: ["Password Reset", "2FA", "Login/Device Management"] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    >
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Profile Settings</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.title} className="space-y-2">
            <h3 className="font-bold text-blue-500">{item.title}</h3>
            {item.data.map((d) => (
              <p key={d} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                {d}
              </p>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProfileSettings;
