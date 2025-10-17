import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { pop } from "./animation.js";
import { Menu } from "lucide-react";
export default function DoctorSidebar({
  collapsed,
  patients,
  onSelectPatient,
  selectedPatientId,
  onToggleCollapse,
}) {
  const [filter, setFilter] = useState("");

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <motion.aside
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${
        collapsed ? "w-20" : "w-80"
      } h-[90vh] flex flex-col
         bg-gradient-to-b from-blue-50/70 via-white/60 to-blue-100/50
         backdrop-blur-2xl border border-blue-200/60
         shadow-[0_8px_32px_rgba(0,0,0,0.08)]
         transition-all duration-500 overflow-hidden
         rounded-3xl`}
    >
      {/* Header and Toggle */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-br from-blue-100/80 to-white/60 backdrop-blur-xl border-b border-blue-100/60 sticky top-0 z-20 rounded-t-3xl">
        {!collapsed && (
          <h2 className="text-xl font-bold text-blue-900 tracking-tight">Patient Registry</h2>
        )}
        <button
          onClick={onToggleCollapse}
          className={`p-2 rounded-full transition-colors duration-300 ${
            collapsed ? 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20' : 'text-blue-500 hover:text-blue-700'
          } outline-none focus:ring-2 focus:ring-blue-300`}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* 🔍 Premium Search Bar */}
      {!collapsed && (
        <motion.div
          variants={pop}
          initial="initial"
          animate="animate"
          className="p-4 bg-gradient-to-br from-blue-50/80 to-white/60 backdrop-blur-xl border-b border-blue-100/60"
        >
          <div className="relative">
            <Search
              className="absolute left-4 top-3.5 text-blue-500/80"
              size={22}
            />
            <input
              type="text"
              placeholder="Search patients..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-2xl
                        bg-gradient-to-r from-white/80 via-blue-50/50 to-white/80
                        text-blue-900 border border-blue-100/60 shadow-inner font-medium
                        placeholder:text-blue-400 focus:ring-2 focus:ring-blue-300/70
                        focus:outline-none hover:bg-white/90 transition-all duration-300"
            />
            {filter && (
              <button
                onClick={() => setFilter("")}
                className="absolute right-4 top-3 text-blue-400 hover:text-blue-600 transition"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </motion.div>
      )}

      {/* 🧬 Patient List (Scrollable area) */}
      <motion.ul
        layout
        className="divide-y divide-blue-100 px-3 py-2 space-y-2 flex-grow overflow-y-auto"
      >
        {filteredPatients.map((patient) => (
          <motion.li
            key={patient.id}
            layout
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectPatient(patient.id)}
            tabIndex={0}
            className={`cursor-pointer group flex items-center gap-3 p-3 rounded-2xl transition-all
                         ${
                           patient.id === selectedPatientId
                             ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-300/50"
                             : "bg-gradient-to-br from-white/90 via-blue-50/50 to-white/90 hover:shadow-md border border-blue-100/60"
                         }`}
          >
            {/* Avatar */}
            <motion.img
              src={patient.avatar}
              alt={`${patient.name} avatar`}
              className={`w-12 h-12 rounded-full shadow-md object-cover border-2 shrink-0 ${
                patient.id === selectedPatientId
                  ? "border-white/70"
                  : "border-blue-100"
              }`}
            />

            {/* Patient Info */}
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <div
                  className={`font-semibold truncate ${
                    patient.id === selectedPatientId
                      ? "text-white"
                      : "text-blue-900"
                  }`}
                >
                  {patient.name}
                </div>
                <div
                  className={`text-sm ${
                    patient.id === selectedPatientId
                      ? "text-blue-100/90"
                      : "text-blue-700/90"
                  }`}
                >
                  {patient.age}/{patient.sex}
                </div>
              </div>
            )}

            {/* Status Pill */}
            {!collapsed && patient.statusPill && (
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-semibold shadow-sm select-none shrink-0 ${
                  patient.id === selectedPatientId
                    ? "bg-white/30 text-white"
                    : "bg-amber-200/80 text-amber-900"
                }`}
              >
                {patient.statusPill}
              </span>
            )}
          </motion.li>
        ))}

        {filteredPatients.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-blue-600/70 font-medium py-6"
          >
            No patients found 🩺
          </motion.div>
        )}
      </motion.ul>
    </motion.aside>
  );
}