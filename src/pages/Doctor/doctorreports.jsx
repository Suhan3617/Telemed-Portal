import React from 'react'
import { useState , useMemo } from 'react'
import Doctorlabrecords from '../../components/Doctor/doctorlabrecords'
import FiltersBar from '../../components/Doctor/doctorfilterbar'
import SearchInput from '../../components/Common/searchinput'
import { records } from '../../data/doctor/mockdata'

const doctorreports = () => {

  const [q, setq] = useState("");
  const [type, settype] = useState("All");

  const list = useMemo(()=>{
    return records.filter(r=>{
      const matchQ = (r.title + r.patientName).toLowerCase().includes(q.toLowerCase());
      const matchType = type==="All" || r.type===type;
      return matchQ && matchType;
    })
  } , [q.type])

  return (
    <div>
      
    </div>
  )
}

export default doctorreports
