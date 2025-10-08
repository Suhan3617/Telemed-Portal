import React from 'react'
import { medicalRecords } from '../../data/patient/mockdata'
import Recordlist from '../../components/Patient/MedicalRecord/recordlist'
import Pageheader from '../../components/Common/pageheader'

const PatientMedicalRecordspage = () => {
  return (
    <div className="p-6">
      <Pageheader title="My Medical Reports" subtitle="View or download your past medical files" />
      <Recordlist records={medicalRecords} />
    </div>
  )
}

export default PatientMedicalRecordspage
