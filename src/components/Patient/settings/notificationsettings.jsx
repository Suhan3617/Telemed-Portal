import React, { useState } from "react";
import { Bell } from "lucide-react";

const NotificationSettings = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
        <Bell className="w-6 h-6 text-blue-500" /> Notification Preferences
      </h3>

      <div className="space-y-4">
        <label className="flex items-center justify-between bg-blue-50 px-4 py-3 rounded-lg hover:bg-blue-100 transition">
          <span className="font-medium text-gray-700">Email Notifications</span>
          <input
            type="checkbox"
            checked={emailNotif}
            onChange={() => setEmailNotif(!emailNotif)}
            className="w-5 h-5 accent-blue-500 cursor-pointer"
          />
        </label>

        <label className="flex items-center justify-between bg-blue-50 px-4 py-3 rounded-lg hover:bg-blue-100 transition">
          <span className="font-medium text-gray-700">SMS Notifications</span>
          <input
            type="checkbox"
            checked={smsNotif}
            onChange={() => setSmsNotif(!smsNotif)}
            className="w-5 h-5 accent-blue-500 cursor-pointer"
          />
        </label>
      </div>
    </div>
  );
};

export default NotificationSettings;
