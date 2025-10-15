import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Trash2, FileText } from "lucide-react";
import DoctorLayout from "../../layout/doctorlayout";
import Patientselector from "../../components/Doctor/prescription_form/patientselector";
import Prescriptionpreview from "../../components/Doctor/prescription_form/prescriptionpreview";

const DoctorPrescription = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [medicines, setMedicines] = useState([
    { name: "", strength: "", dose: "", frequency: "", duration: "", instructions: "" },
  ]);
  const [notes, setNotes] = useState("");

  const addMedicine = () => {
    setMedicines([
      ...medicines,
      { name: "", strength: "", dose: "", frequency: "", duration: "", instructions: "" },
    ]);
  };

  const removeMedicine = (index) => {
    const updated = medicines.filter((_, i) => i !== index);
    setMedicines(updated);
  };

  const handleMedicineChange = (index, field, value) => {
    const updated = [...medicines];
    updated[index][field] = value;
    setMedicines(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      patient: selectedPatient,
      medicines,
      notes,
      doctor: "Dr. John",
      date: new Date().toLocaleDateString(),
    });
    alert("✅ Prescription generated successfully!");
  };

  return (
    <DoctorLayout doctorName="Dr. John">
      <motion.div
        className="flex flex-col md:flex-row gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left side: Form */}
        <div className="flex-1 bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" /> Create Prescription
          </h2>

          {/* Patient selector */}
          <Patientselector onSelect={setSelectedPatient} />

          {selectedPatient && (
            <form onSubmit={handleSubmit} className="mt-4 space-y-6">
              {/* Medicines section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">Medicines</h3>
                {medicines.map((med, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 md:grid-cols-6 gap-3 items-center bg-blue-50/60 p-3 rounded-lg"
                  >
                    <input
                      type="text"
                      placeholder="Medicine name"
                      value={med.name}
                      onChange={(e) => handleMedicineChange(index, "name", e.target.value)}
                      className="col-span-2 border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Strength"
                      value={med.strength}
                      onChange={(e) => handleMedicineChange(index, "strength", e.target.value)}
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                      type="text"
                      placeholder="Dose"
                      value={med.dose}
                      onChange={(e) => handleMedicineChange(index, "dose", e.target.value)}
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                      type="text"
                      placeholder="Frequency"
                      value={med.frequency}
                      onChange={(e) => handleMedicineChange(index, "frequency", e.target.value)}
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                      type="text"
                      placeholder="Duration"
                      value={med.duration}
                      onChange={(e) => handleMedicineChange(index, "duration", e.target.value)}
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                      type="button"
                      onClick={() => removeMedicine(index)}
                      className="p-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addMedicine}
                  className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
                >
                  <PlusCircle className="w-5 h-5" /> Add Medicine
                </button>
              </div>

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
                ></textarea>
              </div>

              {/* Submit */}
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

        {/* Right side: Preview */}
        <div className="md:w-1/3">
          <Prescriptionpreview patient={selectedPatient} medicines={medicines} notes={notes} />
        </div>
      </motion.div>
    </DoctorLayout>
  );
};

export default DoctorPrescription;
