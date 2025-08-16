import React from 'react'
import { useState } from 'react'
const doctorprescriptionform = () => {

    const [form, setform] = useState({
        patientId:"",
        date: new Date().toISOString().split("T")[0],
        medicine:"",
        duration:"",
        notes:"",
    })

    const handleChange = (e) =>{
        setform({...form , [e.target.name]:e.target.value})
    }
    
  return (
    <div>
      
    </div>
  )
}

export default doctorprescriptionform
