import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { appointments } from '../../data/patient/mockdata'
import { doctors } from '../../data/patient/mockdata'


import Appointmentheader from '../../components/Patient/appointmentdetails/appointmentheader'
import Doctorinfocard from '../../components/Patient/appointmentdetails/doctorinfocard'
import Appointmentinfo from '../../components/Patient/appointmentdetails/appointmentinfo'
import Appointmentactions from '../../components/Patient/appointmentdetails/appointmentactions'
import Cancelappointmentmodal from '../../components/Patient/appointmentdetails/cancelappointmentmodal'
import Editappointmentmodal from '../../components/Patient/appointmentdetails/editappointmentmodal'

const PatientAppointmentDetails = () => {

  const { id } = useParams();
  const [showCancel, setshowCancel] = useState(false)
  const [showedit, setshowedit] = useState(false)

  const handlecancel = ()=> setshowCancel(true);
  const handleedit = () => setshowedit(true);
  const handlejoin = () => alert("Joining Meeting...");

  const appointment = appointments.find((a)=>a.id===id);
  const doctor = doctors.find((d)=>d.id===appointment?.doctorId)

  const handleConfirmCancel = () => {
    alert("Appointment Cancelled");
    setshowCancel(false);
  };

  const handlesavechanges = (updated) =>{
    alert(`Updated Date: ${updated.date}, Slot:${updated.slot}`)
    setshowedit(false);
  }

  return (
    <div className="p-6">
      <Appointmentheader />

      <div className="bg-white shadow-lg rounded-xl p-6 max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Appointment Details
        </h2>

        <Doctorinfocard doctor={doctor} />
        <Appointmentinfo appointment={appointment} />
        <Appointmentactions
          onCancel={handlecancel}
          onEdit={handleedit}
          onJoin={handlejoin}
        />
      </div>

      {/* Modals */}
      <Cancelappointmentmodal
        show={showCancel}
        onClose={() => setshowCancel(false)}
        onConfirm={handleConfirmCancel}
      />

      <Editappointmentmodal
        show={showedit}
        appointment={appointment}
        onClose={() => setshowedit(false)}
        onSave={handlesavechanges}
      />
    </div>
  )
}

export default PatientAppointmentDetails
