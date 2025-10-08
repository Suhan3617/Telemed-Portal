import React from 'react'
import { medicalRecords } from '../../data/patient/mockdata'
import Recordlist from '../../components/Patient/MedicalRecord/recordlist'
import Pageheader from '../../components/Common/pageheader'

const PatientMedicalRecordspage = () => {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Pageheader 
        title="My Medical Reports" 
        subtitle="Access and download your past medical files easily" 
      />
      <Recordlist records={medicalRecords} />
    </div>
  )
}

export default PatientMedicalRecordspage
