import React from 'react'
import Doctorlogin from '../components/doctorlogin.jsx'
import Patientlogin from '../components/patientlogin.jsx'
import LoginRoleSelector from '../components/LoginRoleSelector.jsx'
import { useState } from 'react'
const login = () => {
  const [role, setrole] = useState(null);
  return (
    <div className='bg-white-50 flex items-center justify-center min-h-screen p-10 text-center'>
      <div className='bg-blue-500  shadow-2xl rounded-2xl p-10 w-full max-w-md'>
        <h1 className="text-3xl font-bold">Welcome Back !</h1>
        {!role && <LoginRoleSelector setrole = {setrole}/>}
        {role==="doctor" && <Doctorlogin/>}
        {role==="patient" && <Patientlogin/>}
      </div>
    </div>
  )
}

export default login
