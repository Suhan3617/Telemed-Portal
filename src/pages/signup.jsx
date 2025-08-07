import React from 'react'
import Doctorform from "../components/doctorform.jsx";
import Patientform from "../components/patientform.jsx";
import RoleSelector from '../components/roleselector.jsx';
const signup = () => {
  const [role, setrole] = useState(null)


  return (
    <div className='bg-blue-400 flex items-center justify-center min-h-screen p-10'>
      <div className='bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md'>
      {!role && <RoleSelector setrole = {setrole}/>}
      {role === "doctor" && <Doctorform/>}
      {role === "doctor" && <Patientform/>}
      </div>
    </div>
  )
}

export default signup
