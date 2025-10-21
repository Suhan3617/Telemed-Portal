import { motion } from 'framer-motion';
import GlowButton from '../../Common/glowbutton';
import { ClipboardList, Edit3 } from 'lucide-react';

const PrescriptionPanel = ({ setIsDraftingModalOpen, activeMeds }) => (
  <div className="h-[500px] p-6 flex flex-col items-center justify-center bg-blue-50/50 rounded-b-2xl">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center p-8 bg-white rounded-2xl shadow-2xl border-4 border-blue-300/50"
    >
      <ClipboardList size={64} className="mx-auto text-blue-500 mb-4" />
      <h3 className="text-2xl font-bold text-gray-800">Dedicated Prescription Drafter</h3>
      <p className="text-gray-600 mt-2 mb-6">Open the full-screen view for focused, secure medication entry.</p>
      <GlowButton Icon={Edit3} color="blue" onClick={() => setIsDraftingModalOpen(true)}>
        Open Drafting Interface
      </GlowButton>
    </motion.div>

    <div className="mt-8 text-sm text-gray-500">
      <p className="font-semibold">Patient Active Meds:</p>
      <ul className="list-disc list-inside mt-1 text-left">
        {activeMeds.map((med, index) => (
          <li key={index} className="text-blue-600/80">{med.name} ({med.dose})</li>
        ))}
      </ul>
    </div>
  </div>
);

export default PrescriptionPanel;
