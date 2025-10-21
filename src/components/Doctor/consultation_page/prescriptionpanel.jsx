// PrescriptionPanel.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClipboardList, Edit3 } from 'lucide-react';
import GlowButton from '../../Common/glowbutton';

const PrescriptionPanel = ({ setIsDraftingModalOpen, activeMeds = [] }) => (
  <div className="h-[500px] p-6 flex flex-col items-center justify-start bg-gradient-to-b from-white to-blue-50 rounded-b-2xl">
    <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center p-6 bg-white/90 rounded-2xl shadow-2xl border border-blue-100 w-full max-w-xl">
      <ClipboardList size={52} className="mx-auto text-blue-500 mb-4" />
      <h3 className="text-2xl font-bold text-gray-800">Prescription Drafter</h3>
      <p className="text-gray-600 mt-2 mb-6">Open the full-screen writing interface for structured prescribing.</p>

      <div className="flex gap-3 justify-center">
        <Link to="/doctor/prescription" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition">
          <Edit3 size={16}/> Open Composer
        </Link>
      </div>
    </motion.div>

    <div className="mt-6 w-full max-w-xl text-sm text-gray-600">
      <p className="font-semibold">Active Meds</p>
      <ul className="list-disc list-inside mt-2">
        {activeMeds.length ? activeMeds.map((m, i) => <li key={i} className="text-blue-600">{m.name} ({m.dose})</li>) : <li className="text-gray-500">No active medications</li>}
      </ul>
    </div>
  </div>
);

export default PrescriptionPanel;
