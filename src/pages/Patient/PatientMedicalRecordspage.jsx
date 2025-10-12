import React from "react";
import { medicalRecords } from "../../data/patient/mockdata";
import Recordlist from "../../components/Patient/MedicalRecord/recordlist";
import Pageheader from "../../components/Common/pageheader";

const PatientMedicalRecordspage = () => {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white">
      <Pageheader
        title="My Medical Reports"
        subtitle="Access and manage your health records securely and conveniently"
      />
      <Recordlist records={medicalRecords} />
    </div>
  );
};

export default PatientMedicalRecordspage;
