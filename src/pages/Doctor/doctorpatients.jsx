import React, { useState, useMemo } from "react";
import FiltersBar from "../../components/Doctor/doctorfilterbar";
import SearchInput from "../../components/Common/searchinput";
import Doctorpatientcard from "../../components/Doctor/doctorpatientcard";
import { patients } from "../../data/doctor/mockdata";

const DoctorPatients = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-white p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Patient Records
      </h1>

      {/* Filters Section */}
      <FiltersBar>
        <div className="flex flex-wrap gap-3 items-center w-full justify-center">
          <SearchInput
            value={q}
            onChange={setq}
            placeholder="🔍 Search by name..."
            className="w-full sm:w-64"
          />
          <input
            className="border border-blue-300 rounded-lg px-4 py-2 w-full sm:w-64 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Filter by condition/diagnosis"
            value={diagnosis === "All" ? "" : diagnosis}
            onChange={(e) => setdiagnosis(e.target.value || "All")}
          />
          <select
            className="border border-blue-300 rounded-lg px-4 py-2 w-full sm:w-48 focus:ring-2 focus:ring-blue-500 outline-none"
            value={visit}
            onChange={(e) => setvisit(e.target.value)}
          >
            <option>Any</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
      </FiltersBar>

      {/* Patients Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {list.map((p) => (
          <div
            key={p.id}
            className="transform transition duration-300 hover:scale-105"
          >
            <Doctorpatientcard patient={p} />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {list.length === 0 && (
        <div className="mt-12 text-center text-gray-500">
          <p className="text-lg">No patients found 🚑</p>
        </div>
      )}
    </div>
  );
};

export default DoctorPatients;
