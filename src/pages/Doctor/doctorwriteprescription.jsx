import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import PatientSelector from "../../components/Doctor/prescription_form/patientselector";
import PrescriptionPreview from "../../components/Doctor/prescription_form/prescriptionpreview";
import MedicineForm from "../../components/Doctor/prescription_form/medicineform";
import PrescriptionSummary from "../../components/Doctor/prescription_form/prescriptionsummary";

const DoctorPrescription = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [medicines, setMedicines] = useState([
    { name: "", strength: "", dose: "", frequency: "", duration: "", instructions: "" },
  ]);
  const [notes, setNotes] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!selectedPatient) {
      alert("Please select a patient first!");
      return;
    }
    setShowSummary(true);
  };

  return (
    <>
      <motion.div
        className="flex flex-col lg:flex-row gap-6 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Form */}
        <motion.div
          className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 backdrop-blur-xl shadow-2xl rounded-3xl p-6 border border-blue-200"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-3">
            <FileText className="w-7 h-7 text-blue-600" /> Create Prescription
          </h2>

          {/* Patient Selector */}
          <PatientSelector onSelect={setSelectedPatient} />

          {selectedPatient && (
            <form onSubmit={handleGenerate} className="mt-6 space-y-6">
              {/* Medicines */}
              <MedicineForm medicines={medicines} setMedicines={setMedicines} />

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-1">
                  Additional Notes / Instructions
                </label>
                <textarea
                  rows="4"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border border-blue-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 transition-all hover:shadow-md"
                  placeholder="Add remarks, dietary advice, follow-up info..."
                />
              </div>

              {/* Generate Button */}
              <div className="text-right">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-7 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all"
                >
                  Generate Prescription
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Right: Preview */}
        <motion.div
          className="lg:w-1/3 mt-4 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PrescriptionPreview patient={selectedPatient} medicines={medicines} notes={notes} />
        </motion.div>
      </motion.div>

      {/* Summary Modal */}
      {showSummary && (
        <PrescriptionSummary
          patient={selectedPatient}
          medicines={medicines}
          notes={notes}
          onClose={() => setShowSummary(false)}
        />
      )}
    </>
  );
};

export default DoctorPrescription;
