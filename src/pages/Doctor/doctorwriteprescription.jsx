import React from 'react'
import Doctorprescriptionform from '../../components/Doctor/doctorprescriptionform'
import { patients } from '../../data/doctor/mockdata'

const doctorprescription = () => {

  const onsubmit=(data)=>{
    console.log("PRESCRIPTION SUBMITTED"  , data );
    alert("Generate PDF & send to portal - integrate backend here")
  }

  return (
    <div className='space-y-4 flex flex-col items-center bg-gradient-to-b from-blue-200 to-white p-4'>
      <h1 className='text-3xl font-semibold text-blue-500 mb-6 text-center'>
        Write Prescription
      </h1>
      <Doctorprescriptionform patients={patients} onSubmit={onsubmit}/>
    </div>
  )
}

export default doctorprescription
