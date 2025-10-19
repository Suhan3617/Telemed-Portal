import React from "react";
import TeleconsultationSettings from "../../components/Doctor/profile_settings_page/teleconsulationsettings";
import SystemPreferences from "../../components/Doctor/profile_settings_page/system_prefernces";
import ProfileSettings from "../../components/Doctor/profile_settings_page/profile_settings";
import NotificationPreferences from "../../components/Doctor/profile_settings_page/notifications_prefercences";

const SettingsContainer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200 p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 drop-shadow-md">
        Profile & Account Settings
      </h1>
      <div className="space-y-12">
        <ProfileSettings />
        <NotificationPreferences />
        <TeleconsultationSettings />
        <SystemPreferences />
      </div>
    </div>
  );
};

export default SettingsContainer;
