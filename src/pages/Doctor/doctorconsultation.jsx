import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare, ClipboardList, NotebookText, HeartPulse, Video } from 'lucide-react';

import { patients, messages } from '../../data/doctor/mockdata';
import TabNavigation from '../../components/Doctor/consultation_page/tabnavigation';
import VideoPlaceholder from '../../components/Doctor/consultation_page/videoplaceholder';
import PatientInfoCard from '../../components/Doctor/consultation_page/patientinfocard';
import ActionFooter from '../../components/Doctor/consultation_page/actionfooter';

import ChatPanel from '../../components/Doctor/consultation_page/chatpanel';
import PrescriptionPanel from '../../components/Doctor/consultation_page/prescriptionpanel';
import NotesPanel from '../../components/Doctor/consultation_page/notespanel';
import VitalsPanel from '../../components/Doctor/consultation_page/vitalspanel';
import PrescriptionDrafterModal from '../../components/Doctor/consultation_page/PrescriptionDraftmodal';

// ✅ Import the standard PremiumHeader
import PremiumHeader from '../../components/Doctor/allpagesheader';

const TABS = [
  { id: 'chat', label: 'Chat', icon: MessageSquare },
  { id: 'prescription', label: 'Prescription', icon: ClipboardList },
  { id: 'notes', label: 'Summary', icon: NotebookText },
  { id: 'vitals', label: 'Vitals', icon: HeartPulse },
];

const Consultation = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [notesContent, setNotesContent] = useState(
    'Patient confirms worsening rash on extremities. Subjective: Itching level 7/10. Objective: Rash is erythematous and vesicular. Plan: Review recent labs and adjust anti-histamine dosage.'
  );
  const [isDraftingModalOpen, setIsDraftingModalOpen] = useState(false);

  const ACTIVE_PATIENT_ID = 'p1';
  const PATIENT_DATA_RAW = patients.find((p) => p.id === ACTIVE_PATIENT_ID) || {};
  const PATIENT_MESSAGES = messages[ACTIVE_PATIENT_ID] || [];

  const latestVitals = PATIENT_DATA_RAW.vitals?.[0];
  const PATIENT_VITALS = latestVitals
    ? [
        {
          label: 'Blood Pressure',
          value: latestVitals.bp,
          trend: 'Slightly High',
          unit: 'mmHg',
          data: [118, 122, 128, 130, 128],
        },
        {
          label: 'Heart Rate',
          value: `${latestVitals.hr} bpm`,
          trend: 'Stable',
          unit: 'bpm',
          data: [70, 75, 74, 71, 74],
        },
        {
          label: 'SpO2',
          value: `${latestVitals.spo2}%`,
          trend: 'Good',
          unit: '%',
          data: [97, 98, 98, 99, 98],
        },
      ]
    : [];

  const TabContent = () => (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        {activeTab === 'chat' && <ChatPanel messages={PATIENT_MESSAGES} />}
        {activeTab === 'prescription' && (
          <PrescriptionPanel
            setIsDraftingModalOpen={setIsDraftingModalOpen}
            activeMeds={PATIENT_DATA_RAW.activeMeds || []}
          />
        )}
        {activeTab === 'notes' && (
          <NotesPanel content={notesContent} setContent={setNotesContent} />
        )}
        {activeTab === 'vitals' && <VitalsPanel vitalsData={PATIENT_VITALS} />}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 rounded-3xl p-4 md:p-10 pb-24 font-['Inter']">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #93c5fd;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #60a5fa;
        }
      `}</style>

      {/* ✅ Integrated PremiumHeader here */}
      <PremiumHeader
        breadcrumb=" Dashboard / TeleConsultation"
        icon={<Video className="w-6 h-6 text-blue-600" />}
        title="TeleConsultation Live Session"
        subtitle="Review patient details, communicate in real-time, and manage prescriptions seamlessly."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <VideoPlaceholder patientName={PATIENT_DATA_RAW.name || 'Loading...'} />
          <PatientInfoCard
            summaryData={{
              name: PATIENT_DATA_RAW.name,
              dob: PATIENT_DATA_RAW.dob,
              condition: PATIENT_DATA_RAW.problemList?.[0]?.problem,
              lastVisit: PATIENT_DATA_RAW.lastVisit,
              avatar: PATIENT_DATA_RAW.avatar,
              activeMeds: PATIENT_DATA_RAW.activeMeds || [],
              allergies: PATIENT_DATA_RAW.allergies || [],
            }}
          />
        </div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1 bg-white rounded-3xl shadow-2xl border border-blue-100/80 overflow-hidden h-full flex flex-col"
        >
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
          <div className="flex-grow overflow-hidden">
            <TabContent />
          </div>
        </motion.div>
      </div>

      {/* <ActionFooter /> */}

      <AnimatePresence>
        {isDraftingModalOpen && (
          <PrescriptionDrafterModal
            isOpen={isDraftingModalOpen}
            onClose={() => setIsDraftingModalOpen(false)}
            patientName={PATIENT_DATA_RAW.name}
            activeMeds={PATIENT_DATA_RAW.activeMeds || []}
            patientAllergies={PATIENT_DATA_RAW.allergies || []}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Consultation;
