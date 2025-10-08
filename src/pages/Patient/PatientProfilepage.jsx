import React from 'react'
import Pageheader from '../../components/Common/pageheader'
import Profilepageinfo from '../../components/Patient/profilepage/profilepageinfo'
import Emergencycontact from '../../components/Patient/profilepage/emergencycontact'
import Editprofileform from '../../components/Patient/profilepage/editprofileform'
import { currentPatient } from '../../data/patient/mockdata'

const PatientProfilepage = () => {
  return (
    <div className="p-6 space-y-6">
      <Pageheader title="My Profile" subtitle="View and edit your personal details" />
      <div className="grid md:grid-cols-2 gap-6">
        <Profilepageinfo patient={currentPatient} />
        <Emergencycontact contact={currentPatient.emergencyContact} />
      </div>
      <Editprofileform patient={currentPatient} />
    </div>
  );
}

export default PatientProfilepage
