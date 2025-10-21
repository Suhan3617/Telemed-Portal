// Consultation.jsx
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare, ClipboardList, NotebookText, HeartPulse, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

import { patients, messages } from '../../data/doctor/mockdata';
import TabNavigation from '../../components/Doctor/consultation_page/tabnavigation';
import VideoPlaceholder from '../../components/Doctor/consultation_page/videoplaceholder';
import PatientInfoCard from '../../components/Doctor/consultation_page/patientinfocard';
import ChatPanel from '../../components/Doctor/consultation_page/chatpanel';
import PrescriptionPanel from '../../components/Doctor/consultation_page/prescriptionpanel';
import NotesPanel from '../../components/Doctor/consultation_page/notespanel';
import VitalsPanel from '../../components/Doctor/consultation_page/vitalspanel';
import PrescriptionDrafterModal from '../../components/Doctor/consultation_page/PrescriptionDraftmodal';
import PremiumHeader from '../../components/Doctor/allpagesheader';

// Variants for global page motion
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.4 } },
};

// Hover motion for panels
const cardHover = {
  whileHover: { scale: 1.03, boxShadow: '0 12px 35px -10px rgba(59,130,246,0.4)' },
  transition: { type: 'spring', stiffness: 250, damping: 18 },
};

const TABS = [
  { id: 'chat', label: 'Chat', icon: MessageSquare },
  { id: 'prescription', label: 'Prescription', icon: ClipboardList },
  { id: 'notes', label: 'Summary', icon: NotebookText },
  { id: 'vitals', label: 'Vitals', icon: HeartPulse },
];

const Consultation = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [notesContent, setNotesContent] = useState(
    'Patient confirms worsening rash on extremities. Subjective: Itching level 7/10. Objective: Rash is erythematous and vesicular. Plan: Review labs and adjust anti-histamine dosage.'
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
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22, type: 'tween', ease: 'easeInOut' }}
        className="h-full"
      >
        {activeTab === 'chat' && <ChatPanel messages={PATIENT_MESSAGES} patientId={ACTIVE_PATIENT_ID} />}
        {activeTab === 'prescription' && (
          <PrescriptionPanel
            setIsDraftingModalOpen={setIsDraftingModalOpen}
            activeMeds={PATIENT_DATA_RAW.activeMeds || []}
          />
        )}
        {activeTab === 'notes' && <NotesPanel content={notesContent} setContent={setNotesContent} />}
        {activeTab === 'vitals' && <VitalsPanel vitalsData={PATIENT_VITALS} />}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen p-4 md:p-10 pb-28 font-['Inter']  bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 rounded-3xl"
    >
      {/* Blue glowing border & enhanced scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.35); border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(37,99,235,0.6); }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      `}</style>

      {/* Header with video icon animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-8"
      >
        <PremiumHeader
          breadcrumb="Dashboard / TeleConsultation"
          icon={
            <motion.div
              initial={{ rotate: -30 }}
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <Video className="w-6 h-6 text-blue-600" />
            </motion.div>
          }
          title="TeleConsultation"
          subtitle="Live session — patient info, chat, vitals and prescriptions in one place."
        />
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Left: Video + Patient Card */}
        <motion.div
          {...cardHover}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-2 space-y-6"
        >
          <VideoPlaceholder patientName={PATIENT_DATA_RAW.name || '---'} />
          <PatientInfoCard
            summaryData={{
              id: PATIENT_DATA_RAW.id,
              name: PATIENT_DATA_RAW.name,
              dob: PATIENT_DATA_RAW.dob,
              condition: PATIENT_DATA_RAW.problemList?.[0]?.problem,
              lastVisit: PATIENT_DATA_RAW.lastVisit,
              avatar: PATIENT_DATA_RAW.avatar,
              activeMeds: PATIENT_DATA_RAW.activeMeds || [],
              allergies: PATIENT_DATA_RAW.allergies || [],
            }}
          />
        </motion.div>

        {/* Right: Tabs + Animated Entry */}
        <motion.div
          {...cardHover}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="lg:col-span-1 bg-white/90 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col max-h-[86vh]"
          style={{ backdropFilter: 'saturate(130%) blur(8px)' }}
        >
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
          <div className="flex-grow overflow-hidden">
            <TabContent />
          </div>
        </motion.div>
      </div>

      {/* Prescription Drawer (Modal Transition) */}
      <AnimatePresence>
        {isDraftingModalOpen && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-blue-900/25 backdrop-blur-sm z-40"
          >
            <PrescriptionDrafterModal
              isOpen={isDraftingModalOpen}
              onClose={() => setIsDraftingModalOpen(false)}
              patientName={PATIENT_DATA_RAW.name}
              activeMeds={PATIENT_DATA_RAW.activeMeds || []}
              patientAllergies={PATIENT_DATA_RAW.allergies || []}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Consultation;
