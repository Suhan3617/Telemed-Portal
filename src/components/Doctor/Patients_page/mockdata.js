export const mockPatients = [
  {
    id: 'p001',
    name: 'Rohit Sharma',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    age: 35,
    sex: 'M',
    dob: '1990-05-20',
    uhid: 'UH123456',
    primaryContact: '+91-9876543210',
    emergencyContact: { name: 'Kiran Sharma', relation: 'Wife', phone: '+91-9123456780' },
    location: 'Bhubaneswar',
    insurance: 'Arogya Plan Plus',
    statusPill: 'Diabetic',
    allergies: [{ substance: 'Penicillin', reaction: 'Rash', severity: 'Moderate', recordedDate: '2024-08-02' }],
    activeMeds: [
      { name: 'Metformin', dose: '500mg', frequency: 'Twice daily', startDate: '2023-06-01', prescriber: 'Dr. A' },
      { name: 'Atorvastatin', dose: '20mg', frequency: 'Once daily', startDate: '2024-01-15', prescriber: 'Dr. B' }
    ],
    lastVisit: '2025-09-15',
    lastVisitReason: 'Follow-up',
    nextAppointment: '2025-10-20',
    vitals: [
      { date: '2025-09-15', bp: '130/85', hr: 76, temp: 98.6, spo2: 98 },
      { date: '2025-09-01', bp: '128/80', hr: 75, temp: 98.4, spo2: 97 }
    ],
    problemList: [
      { name: 'Type 2 Diabetes', icd: 'E11', onset: '2018', status: 'Chronic' },
      { name: 'Hypertension', icd: 'I10', onset: '2020', status: 'Chronic' },
    ],
    immunizations: [
      { vaccine: 'Influenza', date: '2024-11-10' },
      { vaccine: 'COVID-19 Booster', date: '2025-01-15' }
    ],
    labResults: [
      { testName: 'HbA1c', value: '7.2%', refRange: '4-6%', flag: 'High', date: '2025-09-10', reportLink: '#' },
      { testName: 'Cholesterol', value: '190 mg/dL', refRange: '125-200', flag: 'Normal', date: '2025-09-10', reportLink: '#' }
    ],
    familyHistory: ['Father: Hypertension', 'Mother: Type 2 Diabetes'],
    socialHistory: { smoking: 'Never', alcohol: 'Occasionally', occupation: 'Engineer' },
    careTeam: [
      { name: 'Dr. Anjali', role: 'Primary Care', contact: 'anjali@hospital.com' },
      { name: 'Dr. Raj', role: 'Endocrinologist', contact: 'raj@hospital.com' }
    ],
    timelineVisits: [
      {
        date: '2025-09-15',
        encounterType: 'Follow-up',
        diagnosisCodes: ['E11'],
        provider: 'Dr. Anjali',
        attachments: [],
        notes: 'Patient stable with controlled blood sugar.'
      },
      {
        date: '2025-06-20',
        encounterType: 'Routine Checkup',
        diagnosisCodes: ['I10'],
        provider: 'Dr. Raj',
        attachments: [],
        notes: 'Blood pressure elevated, medication adjusted.'
      }
    ],
    adminInfo: {
      registrationDate: '2018-01-05',
      preferredPharmacy: 'Apollo Pharmacy'
    }
  },
];
