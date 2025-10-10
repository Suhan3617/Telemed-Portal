import React from "react";
import Pageheader from "../../components/Common/pageheader";
import ThemeSettings from "../../components/Patient/settings/themesettings";
import AccountSettings from "../../components/Patient/settings/accountsettings";
import NotificationSettings from "../../components/Patient/settings/notificationsettings";

const PatientSettings = () => {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-8">
      <Pageheader title="Settings" subtitle="Customize your experience" />

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <ThemeSettings />
        <NotificationSettings />
        <AccountSettings />
      </div>
    </div>
  );
};

export default PatientSettings;
