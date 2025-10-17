import React from 'react'

const patientsummary = ({patient}) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6 w-full max-w-full">
      <div className="flex items-center space-x-6">
        <img src={patient.avatar} alt={`${patient.name} avatar`} className="w-24 h-24 rounded-full shadow-lg" />
        <div className="flex-grow">
          <h2 className="text-3xl font-semibold text-blue-900">{patient.name}</h2>
          <p className="text-blue-600">{patient.age} years | {patient.sex} | DOB: {patient.dob}</p>
          <p className="text-gray-500">UHID / MRN: <strong>{patient.uhid}</strong></p>
          <p className="mt-1 text-sm text-gray-600">Primary: {patient.primaryContact} | Emergency: {patient.emergencyContact.name} ({patient.emergencyContact.relation})</p>
          <p className="text-gray-600 mt-1">{patient.location} | Insurance: <span className="bg-teal-200 px-2 rounded">{patient.insurance}</span></p>
          <div className="mt-3 flex space-x-3">
            {patient.statusPill && (
              <span className="bg-amber-300 text-amber-900 px-3 py-1 rounded font-semibold select-none">{patient.statusPill}</span>
            )}
          </div>
        </div>
        <div className="space-y-2 flex flex-col">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-2xl font-semibold shadow-lg transition hover:glow">
            New Prescription
          </button>
          <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-2xl font-semibold shadow-lg transition hover:glow">
            Schedule Visit
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-2xl font-semibold shadow-lg transition hover:glow">
            Start Teleconsult
          </button>
        </div>
      </div>
    </div>
  );
}

export default patientsummary


