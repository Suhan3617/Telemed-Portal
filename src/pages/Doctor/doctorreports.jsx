import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
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

  // Reload animation controller
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [50, 0],
      transition: { duration: 1.4, ease: "easeOut" },
    });
  }, []);

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
      const freq = data.reduce(
        (acc, r) => ((acc[r.type] = (acc[r.type] || 0) + 1), acc),
        {}
      );
      return Object.keys(freq).sort((a, b) => freq[b] - freq[a])[0] || "—";
    })(),
  };

  const handleView = (r) => {
    setSelected(r);
    setModalOpen(true);
  };

  const markReviewed = (id) =>
    setData((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: "Reviewed" } : d))
    );

  return (
    <>
      {/* ✨ Main Container with Entry Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="relative min-h-screen overflow-hidden 
                   p-8 md:p-10 rounded-3xl 
                   bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 
                   backdrop-blur-2xl border border-blue-200/30 shadow-inner"
      >
        {/* 🌈 Animated Gradient Glows */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/40 rounded-full blur-[150px]"
            animate={{ y: [0, 40, 0], x: [0, 25, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-20%] right-[-15%] w-[600px] h-[600px] bg-indigo-400/40 rounded-full blur-[160px]"
            animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-cyan-300/40 rounded-full blur-[120px]"
            animate={{ y: [0, -25, 0], x: [0, 25, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* 🫧 Floating Oxygen Bubbles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/40 blur-[6px]"
            style={{
              width: `${10 + Math.random() * 15}px`,
              height: `${10 + Math.random() * 15}px`,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 40}%`,
            }}
            animate={{
              y: [0, -80 - Math.random() * 50, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}

        {/* 🩵 Header */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          <PR_PremiumHeader />
        </motion.div>

        {/* 📊 Stats */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <PR_PremiumStats stats={stats} />
        </motion.div>

        {/* 🔍 Filter */}
        <motion.div
          className="mt-8 rounded-3xl bg-white/50 backdrop-blur-2xl shadow-2xl 
                     border border-blue-200/60 hover:shadow-blue-200/40 transition-all duration-500"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
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
          />
        </motion.div>

        {/* 🧾 Cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {filtered.length === 0 ? (
            <motion.div
              className="col-span-full p-16 text-center text-blue-700 font-semibold
                         bg-white/70 rounded-2xl shadow-lg backdrop-blur-3xl text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              No reports found
            </motion.div>
          ) : (
            filtered.map((r, index) => (
              <motion.div
                key={r.id}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(59,130,246,0.25)",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + index * 0.05,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <PR_PremiumCard
                  r={r}
                  onView={handleView}
                  onPatient={() => {}}
                  onNote={() => {}}
                />
              </motion.div>
            ))
          )}
        </motion.div>

        {/* 🩺 Modal */}
        <AnimatePresence>
          {modalOpen && (
            <PR_PremiumModal
              open={modalOpen}
              setOpen={setModalOpen}
              record={selected}
              onMarkReviewed={markReviewed}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
