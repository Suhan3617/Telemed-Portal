import React from 'react';
import Pageheader from '../../components/Common/pageheader';
import Profilepageinfo from '../../components/Patient/profilepage/profilepageinfo';
import Emergencycontact from '../../components/Patient/profilepage/emergencycontact';
import Editprofileform from '../../components/Patient/profilepage/editprofileform';
import { currentPatient } from '../../data/patient/mockdata';

const PatientProfilepage = () => {
  return (
    <div className="p-6 space-y-8 bg-gradient-to-b from-blue-200 to-blue-50 min-h-screen">
      <Pageheader
        title="My Profile"
        subtitle="View, manage, and personalize your medical details"
      />

      <div className="grid md:grid-cols-2 gap-8">
        <Profilepageinfo patient={currentPatient} />
        <Emergencycontact contact={currentPatient.emergencyContact} />
      </div>

      <Editprofileform patient={currentPatient} />
    </div>
  );
};

export default PatientProfilepage;
