import React from 'react';
import PatientHeader from '../../components/Patient/patientheader';
import PatientSidebar from '../../components/Patient/patientsidebar';
import PatientDashboardStats from '../../components/Patient/patientDashboardStats';
import Patientupcomingappts from '../../components/Patient/patientupcomingappts';
import PatientMedicalRecordCard from '../../components/Patient/patientrecentrecords';
import PatientMessageCard from '../../components/Patient/patientMessageCard';

export default function PatientDashboard(){
  const patientId="p1";

  return (
    <div className='min-h-screen flex bg-gradient-to-b from-blue-300 to-white'>
      <PatientSidebar/>
      <div className='flex-1 flex flex-col'>
        <PatientHeader name='Suhan'/>
        <main className='p-6 space-y-6'>
          <PatientDashboardStats patientId={patientId}/>

          <div className='grid md:grid-cols-2 gap-6'>
            <Patientupcomingappts patientId={patientId}/>
            <PatientMedicalRecordCard patientId={patientId}/>
            <PatientMessageCard patientId={patientId}/>
          </div>
        </main>

      </div>
    </div>
  )
}