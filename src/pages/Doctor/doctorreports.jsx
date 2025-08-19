import React from "react";
import { useState, useMemo } from "react";
import Doctorlabrecords from "../../components/Doctor/doctorlabrecords";
import FiltersBar from "../../components/Doctor/doctorfilterbar";
import SearchInput from "../../components/Common/searchinput";
import { records } from "../../data/doctor/mockdata";

const doctorreports = () => {
  const [q, setq] = useState("");
  const [type, settype] = useState("All");

  const list = useMemo(() => {
    return records.filter((r) => {
      const matchQ = (r.title + r.patientName)
        .toLowerCase()
        .includes(q.toLowerCase());
      const matchType = type === "All" || r.type === type;
      return matchQ && matchType;
    });
  }, [q, type]);

  return (
    <>
      <FiltersBar>
        <div>
          <SearchInput
            value={q}
            onChange={{ setq }}
            placeholder="Search records / patient..."
          />
          <select className="border rounded-lg px-3 py-2" value={type} onChange={(e)=>settype(e.target.value)}>
            <option>All</option>
            <option>Lab Result</option>
            <option>Imaging</option>
            <option>Prescription</option>
          </select>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Upload</button>
        </div>
      </FiltersBar>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map(r=> <Doctorlabrecords key={r.id} record={r} />)}
      </div>
    </>
  );
};

export default doctorreports;
