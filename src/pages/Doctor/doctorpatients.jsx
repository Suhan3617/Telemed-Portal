import React, { useState } from "react";
import { mockPatients } from "../../components/Doctor/Patients_page/mockdata";
// import Topbar from '../../components/Doctor/Patients_page/topbar';
import PremiumHeader from "../../components/Doctor/allpagesheader";

import Sidebar from "../../components/Doctor/Patients_page/sidebar";
import PatientSummary from "../../components/Doctor/Patients_page/patientsummary";
import Patientdetails from "../../components/Doctor/Patients_page/patientdetails";
import Rightbar_quickactions from "../../components/Doctor/Patients_page/rightbar_quickactions";

export default function PatientOverviewPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState(
    mockPatients[0]?.id
  );
  const selectedPatient = mockPatients.find((p) => p.id === selectedPatientId);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-blue-100 to-white overflow-hidden">
      <PremiumHeader
        breadcrumb="Dashboard / Overview"
        icon="📊"
        title="Patient Overview"
        subtitle="Quick glance of your patients, recent activity, and analytics — all in one place."
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          collapsed={sidebarCollapsed}
          patients={mockPatients}
          onSelectPatient={setSelectedPatientId}
          selectedPatientId={selectedPatientId}
        />
        <main className="flex-1 overflow-y-auto p-6">
          {selectedPatient ? (
            <>
              <PatientSummary patient={selectedPatient} />
              <Patientdetails patient={selectedPatient} />
            </>
          ) : (
            <p className="text-center text-gray-500 mt-20">
              Select a patient to view details
            </p>
          )}
        </main>
        <Rightbar_quickactions patient={selectedPatient} />
      </div>
    </div>
  );
}
