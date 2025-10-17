import React from 'react'

const patientdetails = ({patient}) => {
  return (
    <div className="grid grid-cols-2 gap-8 text-blue-900 bg-white rounded-2xl p-6 shadow-xl mb-8">
      {/* Clinical Left */}
      <section>
        <h3 className="font-semibold text-xl mb-3">Problem List</h3>
        <ul className="mb-6 space-y-1">
          {patient.problemList.map((p, idx) => (
            <li key={idx} className="flex justify-between bg-blue-50 px-3 py-1 rounded-md">
              <span>{p.name}</span>
              <span className="text-sm italic text-gray-500">{p.status}</span>
            </li>
          ))}
        </ul>

        <h3 className="font-semibold text-xl mb-3">Allergies</h3>
        <ul className="mb-6 space-y-1">
          {patient.allergies.map((a, idx) => (
            <li key={idx} className="flex justify-between bg-blue-50 px-3 py-1 rounded-md">
              <span>{a.substance}</span>
              <span>{a.reaction} ({a.severity})</span>
            </li>
          ))}
        </ul>

        <h3 className="font-semibold text-xl mb-3">Active Medications</h3>
        <ul className="mb-6 space-y-1">
          {patient.activeMeds.map((m, idx) => (
            <li key={idx} className="flex justify-between bg-blue-50 px-3 py-1 rounded-md">
              <span>{m.name} - {m.dose} ({m.frequency})</span>
              <span className="italic">{m.prescriber}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Right Documents */}
      <section>
        <h3 className="font-semibold text-xl mb-3">Lab Results</h3>
        <ul className="mb-6 space-y-1">
          {patient.labResults.map((lab, idx) => (
            <li key={idx} className={`flex justify-between px-3 py-1 rounded-md ${lab.flag === 'High' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              <span>{lab.testName}: {lab.value} (Ref: {lab.refRange})</span>
              <a href={lab.reportLink} target="_blank" rel="noopener noreferrer" className="underline">Report</a>
            </li>
          ))}
        </ul>

        <h3 className="font-semibold text-xl mb-3">Social & Family History</h3>
        <p className="mb-2"><strong>Family:</strong> {patient.familyHistory.join(', ')}</p>
        <p><strong>Social:</strong> Smoking: {patient.socialHistory.smoking}, Alcohol: {patient.socialHistory.alcohol}, Occupation: {patient.socialHistory.occupation}</p>
      </section>
    </div>
  );
}

export default patientdetails
