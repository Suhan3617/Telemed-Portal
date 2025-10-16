import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import DoctorFiltersBar from "../../components/Doctor/reports_page/doctorfilterbarreport";
import DoctorStatsBar from "../../components/Doctor/reports_page/reportsstats";
import DoctorReportsHeader from "../../components/Doctor/reports_page/reportsheader";
import DoctorLabCard from "../../components/Doctor/reports_page/doctorlabcard";
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

  const stats = {
    total: records.length,
    lab: records.filter((r) => r.type === "Lab Result").length,
    imaging: records.filter((r) => r.type === "Imaging").length,
    prescription: records.filter((r) => r.type === "Prescription").length,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 p-6"
    >
      <DoctorReportsHeader />
      <DoctorStatsBar stats={stats} />
      <DoctorFiltersBar q={q} setq={setq} type={type} settype={settype} />

      {/* Reports Grid */}
      <div className="container mx-auto mt-8">
        {list.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {list.map((r) => (
              <DoctorLabCard key={r.id} record={r} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12 text-gray-500"
          >
            <p className="text-xl">No records found 📄</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default DoctorReports;
