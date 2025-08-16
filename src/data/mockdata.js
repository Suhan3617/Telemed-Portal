// Appointments
export const appointments = [
  {
    id: "ap1",
    patientName: "John Doe",
    patientPhoto: "https://i.pravatar.cc/50?img=1",
    date: "13 Aug 2025",
    time: "11.00 AM",
    type: "Video Consultation",
    status: "Scheduled",
    reason: "Skin rash and itching",
    history: {
      chronicIllnesses: ["Diabetes"],
      allergies: ["Penicillin"],
      surgeries: ["Appendectomy - 2015"],
      familyHistory: ["Heart Disease"],
    },
    prescriptions: [
      {
        date: "12 Jul 2025",
        medicine: "Cetirizine 10mg",
        duration: "5 days",
        notes: "Take after food",
      },
      {
        date: "20 Jun 2025",
        medicine: "Amoxicillin",
        duration: "7 days",
        notes: "Take with water",
      },
    ],
    labReports: [{ title: "Blood Test Report", date: "10 Jul 2025" }],
  },
  {
    id: "ap2",
    patientName: "Jane Smith",
    patientPhoto: "https://i.pravatar.cc/50?img=2",
    date: "14 Aug 2025",
    time: "3:00 PM",
    type: "In-person Consultation",
    status: "Completed",
    reason: "Persistent migraine headaches",
    history: {
      chronicIllnesses: ["Hypertension"],
      allergies: ["None"],
      surgeries: ["None"],
      familyHistory: ["Migraine"],
    },
    prescriptions: [
      {
        date: "10 Aug 2025",
        medicine: "Ibuprofen 400mg",
        duration: "3 days",
        notes: "After meals",
      },
    ],
    labReports: [{ title: "MRI Brain Scan", date: "05 Aug 2025" }],
  },
  {
    id: "ap3",
    patientName: "Michael Brown",
    patientPhoto: "https://i.pravatar.cc/50?img=3",
    date: "15 Aug 2025",
    time: "9:30 AM",
    type: "Video Consultation",
    status: "Scheduled",
    reason: "Cough and mild fever",
    history: {
      chronicIllnesses: ["Asthma"],
      allergies: ["Dust"],
      surgeries: ["Tonsillectomy - 2018"],
      familyHistory: ["None"],
    },
    prescriptions: [
      {
        date: "14 Aug 2025",
        medicine: "Paracetamol 500mg",
        duration: "5 days",
        notes: "Every 6 hours",
      },
    ],
    labReports: [{ title: "Chest X-ray", date: "12 Aug 2025" }],
  },
  {
    id: "ap4",
    patientName: "Emily Johnson",
    patientPhoto: "https://i.pravatar.cc/50?img=4",
    date: "16 Aug 2025",
    time: "2:15 PM",
    type: "In-person Consultation",
    status: "Cancelled",
    reason: "Follow-up for knee pain",
    history: {
      chronicIllnesses: ["Arthritis"],
      allergies: ["Pollen"],
      surgeries: ["Knee Arthroscopy - 2020"],
      familyHistory: ["Arthritis"],
    },
    prescriptions: [
      {
        date: "10 Aug 2025",
        medicine: "Naproxen 250mg",
        duration: "7 days",
        notes: "After meals",
      },
    ],
    labReports: [{ title: "Knee MRI Scan", date: "09 Aug 2025" }],
  },
  {
    id: "ap5",
    patientName: "David Wilson",
    patientPhoto: "https://i.pravatar.cc/50?img=5",
    date: "17 Aug 2025",
    time: "5:00 PM",
    type: "Video Consultation",
    status: "Scheduled",
    reason: "Seasonal allergies",
    history: {
      chronicIllnesses: ["None"],
      allergies: ["Pollen", "Peanuts"],
      surgeries: ["None"],
      familyHistory: ["Allergies"],
    },
    prescriptions: [
      {
        date: "15 Aug 2025",
        medicine: "Loratadine 10mg",
        duration: "10 days",
        notes: "Once daily",
      },
    ],
    labReports: [{ title: "Allergy Test", date: "14 Aug 2025" }],
  },
  {
    id: "ap6",
    patientName: "Sophia Martinez",
    patientPhoto: "https://i.pravatar.cc/50?img=6",
    date: "18 Aug 2025",
    time: "10:00 AM",
    type: "In-person Consultation",
    status: "Completed",
    reason: "Routine health check-up",
    history: {
      chronicIllnesses: ["None"],
      allergies: ["None"],
      surgeries: ["None"],
      familyHistory: ["Diabetes"],
    },
    prescriptions: [
      {
        date: "18 Aug 2025",
        medicine: "Multivitamin",
        duration: "30 days",
        notes: "Once daily in the morning",
      },
    ],
    labReports: [{ title: "Full Body Blood Test", date: "18 Aug 2025" }],
  },
];

// Patients
export const patients = [
  {
    id: "p1",
    name: "John Doe",
    age: 34,
    gender: "Male",
    lastVisit: "12 Jul 2025",
    photo: "https://i.pravatar.cc/80?img=1",
    history: {
      chronicIllnesses: ["Diabetes"],
      allergies: ["Penicillin"],
      surgeries: ["Appendectomy (2015)"],
      familyHistory: ["Heart Disease"],
    },
  },
  {
    id: "p2",
    name: "Aisha Khan",
    age: 29,
    gender: "Female",
    lastVisit: "20 Jun 2025",
    photo: "https://i.pravatar.cc/80?img=5",
    history: {
      chronicIllnesses: ["Hypertension"],
      allergies: ["None"],
      surgeries: [],
      familyHistory: ["Hypertension"],
    },
  },
];

// Prescriptions
export const prescriptions = [
  {
    patientId: "p1",
    date: "12 Jul 2025",
    medicine: "Cetirizine 10mg",
    duration: "5 days",
    notes: "After food",
  },
  {
    patientId: "p1",
    date: "20 Jun 2025",
    medicine: "Amoxicillin 500mg",
    duration: "7 days",
    notes: "With water",
  },
  {
    patientId: "p2",
    date: "18 Jun 2025",
    medicine: "Amlodipine 5mg",
    duration: "30 days",
    notes: "Morning",
  },
];

// Medical Records
export const records = [
  {
    id: "r1",
    patientId: "p1",
    patientName: "John Doe",
    title: "Blood Test Report",
    type: "Lab Result",
    date: "10 Jul 2025",
  },
  {
    id: "r2",
    patientId: "p2",
    patientName: "Aisha Khan",
    title: "X-Ray Scan",
    type: "Imaging",
    date: "15 Jun 2025",
  },
];

// Messages
export const messages = {
  p1: [
    { from: "patient", text: "Hi doc!", time: "10:00" },
    {
      from: "doctor",
      text: "Hello John, how are you feeling today?",
      time: "10:01",
    },
  ],
  p2: [{ from: "patient", text: "Can I upload my report?", time: "09:20" }],
};
