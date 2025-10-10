import React, { useState } from "react";

const NotificationSettings = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  return (
    <div className="bg-white p-6 shadow-md rounded-xl">
      <h3 className="text-lg font-semibold text-blue-600 mb-4">
        Notification Preferences
      </h3>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={emailNotif}
            onChange={() => setEmailNotif(!emailNotif)}
          />
          Email Notifications
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={smsNotif}
            onChange={() => setSmsNotif(!smsNotif)}
          />
          SMS Notifications
        </label>
      </div>
    </div>
  );
};

export default NotificationSettings;
