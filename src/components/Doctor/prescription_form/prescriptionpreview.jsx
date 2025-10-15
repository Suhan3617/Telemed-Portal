import React from "react";

const PrescriptionPreview = ({ patient, medicines, notes }) => {
  if (!patient)
    return (
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 text-center text-blue-600 font-semibold shadow-lg border border-blue-100">
        👩‍⚕️ Select a patient to start prescription
      </div>
    );

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 p-6 sticky top-4">
      <h3 className="text-xl font-bold text-blue-700 mb-2">Prescription Preview</h3>
      <div className="text-sm text-gray-700 space-y-1 mb-3">
        <p>
          <strong>Patient:</strong> {patient.name}
        </p>
        <p>
          <strong>Age:</strong> {patient.age} | <strong>Gender:</strong> {patient.gender}
        </p>
        <p>
          <strong>Date:</strong> {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="border-t pt-3 space-y-3">
        {medicines.map((med, i) =>
          med.name ? (
            <div key={i} className="text-sm">
              <p className="font-semibold text-blue-600">{med.name}</p>
              <p>
                {med.strength} | {med.dose} | {med.frequency} | {med.duration}
              </p>
              {med.instructions && <p className="italic text-gray-600">{med.instructions}</p>}
            </div>
          ) : null
        )}
      </div>

      {notes && (
        <div className="mt-4 border-t pt-3">
          <h4 className="font-semibold text-blue-600">Notes:</h4>
          <p className="text-sm text-gray-700">{notes}</p>
        </div>
      )}

      <div className="mt-6 text-right text-blue-700 font-medium">
        — Dr. John (MBBS, MD)
      </div>
    </div>
  );
};

export default PrescriptionPreview;
