import React from 'react'
import Doctorsidebar from '../components/doctorsidebar'
import Doctortopbar from '../components/doctortopbar'
import Doctorappointmentcard from '../components/doctorappointmentcard'
import Doctorappointmentdetialsmodal from '../components/doctorappointmentdetialsmodal'

const DoctorDashboard = () => {
  const [selectedpatient, setselectedpatient] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false);

  const patients=[
    {
      name:"Jonny Lever",
      date:"12 Aug 2025",
      time:"11:00 PM",
      type:"Video Consultation",
      history:[
        "Diabetes-2021" , 
        "Hypertension-2020"
      ],
      labReports: [{ name: "Blood Sugar Test", date: "05 Jan 2025" }]
    },
    {
      name: "Jane Smith",
      date: "13 Aug 2025",
      time: "11:00 AM",
      type: "In-person",
      history: ["Asthma - 2019"],
      prescriptions: [],
      labReports: []
    }
  ]

  const openDetails = (patient)=>{
    setselectedpatient(patient);
    setisModalOpen(true);
  }

  return (
    <div className='flex h-screen'>
      <Doctorsidebar/>
      <div className='flex flex-col flex-1'>
        <Doctortopbar/>
        <div className='p-6 grid gap-5'>
          {patients.map((p,idx)=>(
              <Doctorappointmentcard
              key={idx}
              patient={p}
              onViewDetails={openDetails}
              />
          ))}
        </div>
        <Doctorappointmentdetialsmodal
        isOpen={isModalOpen}
        patient={selectedpatient}
        onClose={()=>setisModalOpen(false)}
        />
      </div>
    </div>
  )
}

export default DoctorDashboard
