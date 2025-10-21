import { useState } from 'react';
import { motion } from 'framer-motion';
import IconWrapper from '../../Common/iconwrapper';
import GlowButton from '../../Common/glowbutton';
import { ClipboardList, Clock, Edit3, Trash2, Save, X } from 'lucide-react';
import InputField from '../../Common/inputfield';

const PrescriptionDrafterModal = ({ isOpen, onClose, patientName, activeMeds, patientAllergies }) => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [newRx, setNewRx] = useState({ medicine: '', dosage: '', duration: '' });
  const [isSaving, setIsSaving] = useState(false);

  const handleAddRx = () => {
    if (newRx.medicine && newRx.dosage && newRx.duration) {
      setPrescriptions([...prescriptions, { ...newRx, id: Date.now() }]);
      setNewRx({ medicine: '', dosage: '', duration: '' });
    }
  };

  const handleRemoveRx = (id) => {
    setPrescriptions(prescriptions.filter(p => p.id !== id));
  };

  const handleFinalize = () => {
    setIsSaving(true);
    setTimeout(() => {
      console.log("Prescription Finalized:", prescriptions);
      setIsSaving(false);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-gray-50/95 backdrop-blur-xl p-4 md:p-10 overflow-y-auto custom-scrollbar"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-3xl p-6 md:p-10 border-4 border-blue-200"
        style={{ boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.4)' }}
      >
        <div className="flex justify-between items-center mb-8 border-b border-blue-100 pb-4">
          <h1 className="text-4xl font-extrabold text-blue-800 flex items-center">
            <ClipboardList size={36} className="mr-3 text-blue-500" />
            Prescription Drafting for {patientName}
          </h1>
          <IconWrapper className="ring-red-200/50 hover:bg-red-50" onClick={onClose}>
            <X size={24} className="text-red-600" />
          </IconWrapper>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 shadow-inner">
              <h3 className="text-xl font-bold text-blue-700 mb-4 border-b border-blue-300 pb-2 flex items-center">
                <Clock size={20} className="mr-2" /> Active Medications
              </h3>
              {activeMeds.length > 0 ? (
                <ul className="space-y-3">
                  {activeMeds.map((med, index) => (
                    <li key={index} className="p-3 bg-white rounded-lg shadow-md border-l-4 border-blue-400">
                      <p className="font-semibold text-gray-900">{med.name}</p>
                      <p className="text-sm text-gray-600">{med.dose} - {med.frequency}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">No active maintenance medications.</p>
              )}
            </div>
            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200 shadow-inner">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                <X size={20} className="mr-2" /> Known Allergies
              </h3>
              {patientAllergies.length > 0 ? (
                patientAllergies.map((allergy, index) => (
                  <p key={index} className="font-semibold text-red-800">{allergy.substance} ({allergy.reaction})</p>
                ))
              ) : (
                <p className="text-green-700 font-semibold">No known allergies.</p>
              )}
              <p className="text-sm text-red-600 mt-1">Caution Advised.</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-white border-4 border-blue-300/50 shadow-2xl"
            >
              <h3 className="text-2xl font-extrabold text-blue-700 mb-6 border-b border-blue-300 pb-3">New Rx Entry</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InputField label="Medicine Name" value={newRx.medicine} onChange={(e) => setNewRx({ ...newRx, medicine: e.target.value })} placeholder="Dermatological Cream" />
                <InputField label="Dosage / Frequency" value={newRx.dosage} onChange={(e) => setNewRx({ ...newRx, dosage: e.target.value })} placeholder="Apply twice daily" />
                <InputField label="Duration (Days)" value={newRx.duration} onChange={(e) => setNewRx({ ...newRx, duration: e.target.value })} placeholder="10 days" />
              </div>
              <GlowButton Icon={Plus} color="blue" onClick={handleAddRx} className="mt-8">Add to Prescription List</GlowButton>
            </motion.div>

            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-gray-800 border-b border-gray-200 pb-2">Drafted Items ({prescriptions.length})</h3>
              {prescriptions.length > 0 ? (
                <div className="space-y-4">
                  {prescriptions.map((rx, index) => (
                    <motion.div
                      key={rx.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                      className="flex justify-between items-center p-5 bg-white rounded-xl shadow-xl border-l-8 border-blue-600 hover:shadow-2xl transition-shadow"
                    >
                      <div>
                        <p className="font-extrabold text-xl text-gray-900">{rx.medicine}</p>
                        <p className="text-md text-gray-600 mt-1">{rx.dosage} for <span className="text-blue-700 font-bold">{rx.duration}</span></p>
                      </div>
                      <div className="flex space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="text-gray-500 hover:text-blue-500 p-2 rounded-full transition-all"
                          onClick={() => console.log('Edit clicked')}
                        >
                          <Edit3 size={20} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          onClick={() => handleRemoveRx(rx.id)}
                          className="text-red-500 hover:text-red-700 p-2 rounded-full transition-all"
                        >
                          <Trash2 size={20} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 italic p-6 border-4 border-dashed border-blue-200 rounded-xl text-center">
                  <ClipboardList size={40} className="mx-auto text-blue-400 mb-3" />
                  <p className="text-lg font-semibold">Start drafting medications here to populate the list.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-100 flex justify-end space-x-4">
          <GlowButton onClick={onClose} color="gray" className="bg-gray-400 hover:bg-gray-500">Cancel / Back to Session</GlowButton>
          <GlowButton
            Icon={Save}
            color="blue"
            onClick={handleFinalize}
            className={`min-w-[200px] ${isSaving ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isSaving}
          >
            {isSaving ? 'Finalizing...' : 'Finalize & Send Prescription'}
          </GlowButton>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrescriptionDrafterModal;
