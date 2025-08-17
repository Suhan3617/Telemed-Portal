import React from "react";
import { useState, useMemo } from "react";
import FiltersBar from "../../components/Doctor/doctorfilterbar";
import SearchInput from "../../components/Common/searchinput";
import Doctorpatientcard from "../../components/Doctor/doctorpatientcard";
import { patients } from "../../data/doctor/mockdata";

const doctorpatients = () => {
  const [q, setq] = useState("");
  const [diagnosis, setdiagnosis] = useState("All");
  const [visit, setvisit] = useState("Any");

  const list = useMemo(() => {
    return patients.filter((p) => {
      const matchQ = p.name.toLowerCase().includes(q.toLowerCase());
      const matchdiag =
        diagnosis === "All" ||
        (p.history?.chronicIllnesses || [])
          .join(",")
          .toLowerCase()
          .includes(diagnosis.toLowerCase());
      const matchvisit = true;
      return matchQ && matchdiag && matchvisit;
    });
  }, [q, diagnosis, visit]);

  return (
    <>
      <FiltersBar>
        <div className="flex gap-2 flex-wrap">
          <SearchInput
            value={q}
            onChange={setq}
            placeholder="Search by name..."
          />
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Filter by condition/diagnosis"
            value={diagnosis === "All" ? "" : diagnosis}
            onChange={(e) => setdiagnosis(e.target.value || "All")}
          />
          <select
            className="border rounded-lg px-3 py-2 "
            value={visit}
            onChange={(e) => setVisit(e.target.value)}
          >
            <option>Any</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
      </FiltersBar>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <Doctorpatientcard key={p.id} patient={p} />
        ))}
      </div>
    </>
  );
};

export default doctorpatients;
