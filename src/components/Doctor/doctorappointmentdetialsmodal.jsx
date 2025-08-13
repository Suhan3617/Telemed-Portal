import React from 'react'
import Doctorpatienthistory from './doctorpatienthistory';
import Doctorprescriptionlist from './doctorprescriptionlist';
import Doctorlabrecords from './doctorlabrecords';
import doctoractionbuttons from './doctoractionbuttons';

const doctorappointmentdetialsmodal = ({isOpen , patient , onClose}) => {
  if(!isOpen || !patient) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4'>
      <div className='bg-white rounded-lg w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh]'>
        <h2 className='text-2xl font-bold mb-4'>Appointment Details</h2>
          <div className="mb-4">
            <h3>{patient.name}</h3>
            <p>{patient.date} | {patient.time} </p>
            <p>Type : {patient.type}</p>
          </div>
          <Doctorpatienthistory history={patient.history}/>
          <Doctorprescriptionlist prescriptions={patient.prescriptions}/>
          <Doctorlabrecords reports={patient.labrecords}/>
          <Doctoractionbuttons/>
          <button
            onClick={onClose}
            className='mt-4 bg-red-500 text-white px-4 py-2 rounded-lg'
          >
            Close
          </button>
      </div>
    </div>
  )
}

export default doctorappointmentdetialsmodal
