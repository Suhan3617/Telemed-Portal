import React from "react";
import { motion } from "framer-motion";

const TeleconsultationSettings = () => {
  const sections = [
    { title: "Video Settings", items: ["Choose Video provider", "Resolution", "Device preferences", "Recording"] },
    { title: "Virtual Waiting Room", items: ["Patient queue", "ETA messages", "Personalized branding"] },
    { title: "Consent & Features", items: ["Enable chat", "File sharing", "Prescription tab", "Auto patient record view"] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    >
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Teleconsultation Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <h3 className="font-bold text-blue-500">{section.title}</h3>
            {section.items.map((item) => (
              <p key={item} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeleconsultationSettings;
