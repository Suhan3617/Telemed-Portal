import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import DoctorLayout from "../../components/Doctor/doctorsidebar";
import PR_PremiumCard from "../../components/Doctor/reports_page/doctorlabcard";
import PR_PremiumModal from "../../components/Doctor/reports_page/doctorcardmodal";
import PR_PremiumHeader from "../../components/Doctor/reports_page/reportsheader";
import PR_PremiumFilters from "../../components/Doctor/reports_page/doctorfilterbarreport";
import PR_PremiumStats from "../../components/Doctor/reports_page/reportsstats";
import { records as mockRecords } from "../../data/doctor/mockdata";

export default function DoctorReports() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");
  const [dateRange, setDateRange] = useState("Any");
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(mockRecords);

  const filtered = useMemo(() => {
    return data.filter((r) => {
      const matchQ = (r.patientName + r.title + r.type)
        .toLowerCase()
        .includes(q.toLowerCase());
      const matchType = type === "All" || r.type === type;
      const matchStatus = status === "All" || r.status === status;
      return matchQ && matchType && matchStatus;
    });
  }, [data, q, type, status]);

  const stats = {
    total: data.length,
    reviewed: data.filter((d) => d.status === "Reviewed").length,
    pending: data.filter((d) => d.status === "Pending").length,
    common: (() => {
      const freq = data.reduce((acc, r) => ((acc[r.type] = (acc[r.type] || 0) + 1), acc), {});
      return Object.keys(freq).sort((a, b) => freq[b] - freq[a])[0] || "—";
    })(),
  };

  const handleView = (r) => {
    setSelected(r);
    setModalOpen(true);
  };
  const markReviewed = (id) => setData((prev) => prev.map((d) => (d.id === id ? { ...d, status: "Reviewed" } : d)));

  return (
    <>
      <motion.div
        className="min-h-screen p-8 bg-gradient-to-br from-blue-300/60 via-blue100/60 rounded-3xl to-indigo-100 blur-0 shadow-inner premium-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 110 }}
        >
          <PR_PremiumHeader />
        </motion.div>

        <PR_PremiumStats stats={stats} />

        <motion.div
          className="p-4 rounded-3xl bg-white/40 backdrop-blur-lg shadow-md mb-8 border border-blue-200"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <PR_PremiumFilters
            q={q}
            setQ={setQ}
            type={type}
            setType={setType}
            status={status}
            setStatus={setStatus}
            dateRange={dateRange}
            setDateRange={setDateRange}
            resultsCount={filtered.length}
            onClear={() => {
              setQ("");
              setType("All");
              setStatus("All");
              setDateRange("Any");
            }}
            onApply={() => {}}
          />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filtered.length === 0 ? (
              <motion.div
                className="col-span-full p-14 text-center text-blue-400 rounded-2xl bg-white/75 font-semibold shadow-lg backdrop-blur-3xl border border-blue-100 text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                No reports found
              </motion.div>
            ) : (
              filtered.map((r, i) => (
                <PR_PremiumCard
                  key={r.id}
                  r={r}
                  onView={handleView}
                  onPatient={() => {}}
                  onNote={() => {}}
                />
              ))
            )}
          </div>
          <aside className="space-y-4">{/* Future: AI summary, etc. */}</aside>
        </div>

        <PR_PremiumModal
          open={modalOpen}
          setOpen={setModalOpen}
          record={selected}
          onMarkReviewed={markReviewed}
        />
      </motion.div>
    </>
  );
}
