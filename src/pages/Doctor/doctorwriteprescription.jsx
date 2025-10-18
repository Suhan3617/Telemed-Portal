import React, { useState } from "react";

import { motion } from "framer-motion";

import { FileText } from "lucide-react";

import PatientSelector from "../../components/Doctor/prescription_form/patientselector";

import PrescriptionPreview from "../../components/Doctor/prescription_form/prescriptionpreview";

import MedicineForm from "../../components/Doctor/prescription_form/medicineform";

import PrescriptionSummary from "../../components/Doctor/prescription_form/prescriptionsummary";

import PremiumHeader from "../../components/Doctor/allpagesheader";

const DoctorPrescription = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const [medicines, setMedicines] = useState([
    {
      name: "",

      strength: "",

      dose: "",

      frequency: "",

      duration: "",

      instructions: "",
    },
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
      {/* ✅ Added Page Header */}

      <motion.div
        className="flex flex-col lg:flex-row gap-6 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Form */}

        <motion.div
          className="flex-1 bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70  backdrop-blur-xl shadow-2xl rounded-3xl p-6 border border-blue-300"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <PremiumHeader
            breadcrumb="Doctor / Prescription"
            icon={<FileText className="w-6 h-6" />}
            title="Create Prescription"
            subtitle="Easily craft digital prescriptions, manage patient medications, and add follow-up instructions."
          />

          {/* Patient Selector */}
          {/* Selected Patient Info */}
          <PatientSelector onSelect={setSelectedPatient} />

          {selectedPatient && (
            <form onSubmit={handleGenerate} className="mt-6 space-y-6">
              {/* Medicines */}

              <MedicineForm medicines={medicines} setMedicines={setMedicines} />

              {/* Additional Notes */}

              <motion.div
                className="bg-gradient-to-r from-blue-100/80 to-blue-50/80 p-5 rounded-2xl border border-blue-200 shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.01 }}
              >
                <label className="block text-base md:text-lg font-semibold text-blue-700 mb-2">
                  Additional Notes / Instructions
                </label>

                <textarea
                  rows="5"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border border-blue-300 rounded-2xl p-4 text-base md:text-lg focus:ring-2 focus:ring-blue-400 transition-all hover:shadow-md bg-white/90 placeholder:text-blue-300"
                  placeholder="Add remarks, dietary advice, follow-up info..."
                />
              </motion.div>

              {/* Generate Button */}

              <div className="text-right mt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all text-lg"
                >
                  Generate Prescription
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Right: Preview */}

        <motion.div
          className="lg:w-1/3 mt-6 lg:mt-0 sticky top-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PrescriptionPreview
            patient={selectedPatient}
            medicines={medicines}
            notes={notes}
          />
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
