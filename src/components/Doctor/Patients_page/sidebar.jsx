

import React from 'react'

const sidebar = ({ collapsed, patients, onSelectPatient, selectedPatientId }) => {
  const [filter, setFilter] = React.useState('');
  const filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <aside className={`bg-gradient-to-b from-blue-50 to-white text-blue-900 overflow-y-auto transition-width duration-300 ${collapsed ? 'w-16' : 'w-80'}`}>
      {!collapsed && (
        <div className="p-4 sticky top-0 bg-blue-50">
          <input
            type="text"
            placeholder="Search patients"
            className="w-full p-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-teal-300 focus:outline-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Filter patient list"
          />
        </div>
      )}
      <ul className="divide-y divide-blue-200">
        {filteredPatients.map(patient => (
          <li
            key={patient.id}
            tabIndex={0}
            onClick={() => onSelectPatient(patient.id)}
            onKeyDown={e => (e.key === 'Enter' ? onSelectPatient(patient.id) : null)}
            className={`cursor-pointer flex items-center space-x-3 p-3 hover:bg-blue-100 transition rounded-md ${
              patient.id === selectedPatientId ? 'bg-teal-200 font-semibold' : ''
            }`}
          >
            <img alt={`${patient.name} avatar`} src={patient.avatar} className="w-10 h-10 rounded-full shadow-md" />
            {!collapsed && (
              <div className="flex-1">
                <div>{patient.name}</div>
                <div className="text-sm text-blue-700">
                  {patient.age}/{patient.sex} • Last: {patient.lastVisit}
                </div>
              </div>
            )}
            {!collapsed && patient.statusPill && (
              <span className="text-xs bg-amber-300 text-amber-900 rounded px-2 py-0.5 select-none">{patient.statusPill}</span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default sidebar
