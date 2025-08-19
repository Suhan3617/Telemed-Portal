import React, { useState, useMemo } from "react";
import Doctorlabrecords from "../../components/Doctor/doctorlabrecords";
import FiltersBar from "../../components/Doctor/doctorfilterbar";
import SearchInput from "../../components/Common/searchinput";
import { records } from "../../data/doctor/mockdata";

const DoctorReports = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-white p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Medical Reports
      </h1>

      {/* Filters Section */}
      <FiltersBar>
        <div className="flex flex-wrap gap-3 items-center w-full justify-center">
          <SearchInput
            value={q}
            onChange={setq}
            placeholder="🔍 Search records / patient..."
            className="w-full sm:w-64"
          />

          <select
            className="border border-blue-300 rounded-lg px-4 py-2 w-full sm:w-48 focus:ring-2 focus:ring-blue-500 outline-none"
            value={type}
            onChange={(e) => settype(e.target.value)}
          >
            <option>All</option>
            <option>Lab Result</option>
            <option>Imaging</option>
            <option>Prescription</option>
          </select>

          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition transform hover:scale-105">
            Upload
          </button>
        </div>
      </FiltersBar>

      {/* Reports Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {list.map((r) => (
          <div
            key={r.id}
            className="transform transition duration-300 hover:scale-105"
          >
            <Doctorlabrecords record={r} />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {list.length === 0 && (
        <div className="mt-12 text-center text-gray-500">
          <p className="text-lg">No records found 📄</p>
        </div>
      )}
    </div>
  );
};

export default DoctorReports;
