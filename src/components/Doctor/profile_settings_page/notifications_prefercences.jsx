import React from "react";
import { motion } from "framer-motion";

const NotificationPreferences = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    >
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Notification Preferences</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-bold text-blue-500 mb-2">Types of Notifications</h3>
          <ul className="space-y-1 text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Appointment changes</li>
            <li className="hover:text-blue-600 cursor-pointer">Prescription updates</li>
            <li className="hover:text-blue-600 cursor-pointer">Teleconsultation alerts</li>
            <li className="hover:text-blue-600 cursor-pointer">Admin messages</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-blue-500 mb-2">Channels</h3>
          <ul className="space-y-1 text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Web app</li>
            <li className="hover:text-blue-600 cursor-pointer">Email</li>
            <li className="hover:text-blue-600 cursor-pointer">SMS</li>
            <li className="hover:text-blue-600 cursor-pointer">Push notifications</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-blue-500 mb-2">Extras</h3>
          <ul className="space-y-1 text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Quiet hours</li>
            <li className="hover:text-blue-600 cursor-pointer">Daily digest</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default NotificationPreferences;
