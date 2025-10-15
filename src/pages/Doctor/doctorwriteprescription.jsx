import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import DoctorLayout from "../../layout/doctorlayout";
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
        className="flex flex-col md:flex-row gap-6 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left side: form */}
        <div className="flex-1 bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" /> Create Prescription
          </h2>

          {/* Patient selector */}
          <PatientSelector onSelect={setSelectedPatient} />

          {selectedPatient && (
            <form onSubmit={handleGenerate} className="mt-4 space-y-6">
              {/* Medicines */}
              <MedicineForm medicines={medicines} setMedicines={setMedicines} />

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-1">
                  Additional Notes / Instructions
                </label>
                <textarea
                  rows="3"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
                  placeholder="Add remarks, dietary advice, follow-up info..."
                />
              </div>

              {/* Submit button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
                >
                  Generate Prescription
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right side: live preview */}
        <div className="md:w-1/3">
          <PrescriptionPreview patient={selectedPatient} medicines={medicines} notes={notes} />
        </div>
      </motion.div>

      {/* Summary modal */}
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
