import React, { useState, useEffect } from "react"; // Added useEffect
import { useParams } from "react-router-dom"; // Added useParams
import { patients } from "../../data/doctor/mockdata";
import Topbar from "../../components/Doctor/Patients_page/topbar";
import DoctorSidebar from "../../components/Doctor/Patients_page/sidebar";
import PatientSummary from "../../components/Doctor/Patients_page/patientsummary";
import Patientdetails from "../../components/Doctor/Patients_page/patientdetails";
import Rightbar_QuickActions from "../../components/Doctor/Patients_page/rightbar_quickactions";
import { motion } from "framer-motion";

export default function PatientOverviewPage() {
  const { patientId } = useParams(); // Get ID from URL /doctor/patient/:patientId
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Initialize state based on URL param or fallback to first patient
  const [selectedPatientId, setSelectedPatientId] = useState(
    patientId || patients[0]?.id
  );

  // Sync state if the URL patientId changes (e.g. clicking a link in the sidebar or table)
  useEffect(() => {
    if (patientId) {
      setSelectedPatientId(patientId);
    }
  }, [patientId]);

  const selectedPatient = patients.find((p) => p.id === selectedPatientId);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col min-h-screen w-full bg-blue-50 p-8 md:p-10 lg:p-8 rounded-3xl relative overflow-hidden  
                  bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 
                  backdrop-blur-2xl border border-blue-200/30 shadow-inner"
    >
      {/* ---------- Topbar ---------- */}
      <Topbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className="flex flex-1 overflow-hidden gap-4">
        {/* ---------- Sidebar ---------- */}
        <DoctorSidebar
          collapsed={sidebarCollapsed}
          patients={patients}
          onSelectPatient={setSelectedPatientId}
          selectedPatientId={selectedPatientId}
        />

        {/* ---------- Main Content ---------- */}
        <motion.main
          className="flex-1 overflow-y-auto flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-blue-100 via-blue-50 to-white shadow-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {selectedPatient ? (
            <>
              {/* --------- Patient Summary Card --------- */}
              <motion.div
                key={`summary-${selectedPatientId}`} // Added key to trigger re-animation on change
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full rounded-3xl shadow-2xl overflow-hidden relative bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200  hover:shadow-xl transition-all duration-300"
              >
                <PatientSummary patient={selectedPatient} />
              </motion.div>

              {/* --------- Patient Details --------- */}
              <motion.div
                key={`details-${selectedPatientId}`} // Added key to trigger re-animation on change
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full rounded-2xl shadow-2xl overflow-hidden relative bg-gradient-to-tr from-white/70 via-blue-50/60 to-blue-100/70 hover:shadow-xl transition-all duration-300"
              >
                <Patientdetails
                  patient={selectedPatient}
                  onViewReports={() => console.log("View reports clicked")}
                />
              </motion.div>
            </>
          ) : (
            <motion.div
              className="text-center text-gray-500 mt-20 text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Select a patient to view details
            </motion.div>
          )}
        </motion.main>

        {/* ---------- Rightbar / Quick Actions ---------- */}
        <motion.div
          className="w-full md:w-72 lg:w-80 flex-shrink-0 sticky top-24 h-fit px-2 md:px-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {selectedPatient && (
            <Rightbar_QuickActions key={`actions-${selectedPatientId}`} patient={selectedPatient} />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}