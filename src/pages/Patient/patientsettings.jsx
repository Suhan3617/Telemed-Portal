import React from 'react'
import Pageheader from '../../components/Common/pageheader'
import ThemeSettings from '../../components/Patient/settings/themesettings'
import AccountSettings from '../../components/Patient/settings/accountsettings'
import NotificationSettings from '../../components/Patient/settings/notificationsettings'

const patientsettings = () => {
  return (
    <div className="p-6 space-y-6">
      <Pageheader title="Settings" subtitle="Customize your experience" />
      <ThemeSettings />
      <NotificationSettings />
      <AccountSettings />
    </div>
  )
}

export default patientsettings
