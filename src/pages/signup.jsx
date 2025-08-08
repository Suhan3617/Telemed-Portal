import React from 'react'
import Doctorform from "../components/doctorform.jsx";
import Patientform from "../components/patientform.jsx";
import RoleSelector from '../components/roleselector.jsx';
import { useState } from 'react';
const signup = () => {
  const [role, setrole] = useState(null)


  return (
    <div className='bg-white-50 flex items-center justify-center min-h-screen p-10'>
      <div className='bg-blue-400 shadow-2xl rounded-2xl p-10 w-full max-w-md'>
      {!role && <RoleSelector setrole = {setrole}/>}
      {role === "doctor" && <Doctorform/>}
      {role === "patient" && <Patientform/>}
      </div>
    </div>
  )
}

export default signup
