// ===================== PATIENT PROFILE =====================
export const currentPatient = {
  id: "p1",
  name: "Rahul Verma",
  age: 27,
  gender: "Male",
  photo: "https://i.pravatar.cc/100?img=52",
  email: "rahul.verma@example.com",
  phone: "+91 9876543210",
  address: "C-102, Palm Residency, Pune",
  bloodGroup: "B+",
  emergencyContact: {
    name: "Anil Verma",
    relation: "Father",
    phone: "+91 9876501234",
  },
  history: {
    chronicIllnesses: ["Asthma"],
    allergies: ["Dust", "Peanuts"],
    surgeries: [],
    familyHistory: ["Diabetes"],
  },
};

// ===================== DOCTORS =====================
export const doctors = [
  {
    id: "d1",
    name: "Dr. Priya Sharma",
    specialization: "Cardiologist",
    photo: "https://i.pravatar.cc/100?img=32",
    experience: "12 years",
    hospital: "Apollo Hospital, Delhi",
  },
  {
    id: "d2",
    name: "Dr. Arjun Mehta",
    specialization: "Dermatologist",
    photo: "https://i.pravatar.cc/100?img=45",
    experience: "8 years",
    hospital: "Fortis Hospital, Mumbai",
  },
  {
    id: "d3",
    name: "Dr. Neha Kapoor",
    specialization: "Neurologist",
    photo: "https://i.pravatar.cc/100?img=56",
    experience: "10 years",
    hospital: "AIIMS, Delhi",
  },
];

// ===================== APPOINTMENTS =====================
export const appointments = [
  {
    id: "a1",
    patientId: "p1",
    doctorId: "d1",
    date: "2025-08-25",
    time: "10:30 AM",
    type: "Video",
    status: "Scheduled",
  },
  {
    id: "a2",
    patientId: "p1",
    doctorId: "d2",
    date: "2025-08-15",
    time: "03:00 PM",
    type: "In-person",
    status: "Completed",
  },
  {
    id: "a3",
    patientId: "p1",
    doctorId: "d3",
    date: "2025-08-10",
    time: "11:00 AM",
    type: "Video",
    status: "Cancelled",
  },
];

// ===================== PRESCRIPTIONS =====================
export const prescriptions = [
  {
    id: "pr1",
    patientId: "p1",
    doctorId: "d1",
    date: "2025-08-15",
    diagnosis: "Mild Hypertension",
    medicines: [
      { name: "Amlodipine", dosage: "5mg", duration: "30 days" },
      { name: "Aspirin", dosage: "75mg", duration: "30 days" },
    ],
    notes: "Regular exercise and low salt diet recommended.",
    labTests: ["Blood Pressure Test", "ECG"],
  },
  {
    id: "pr2",
    patientId: "p1",
    doctorId: "d2",
    date: "2025-08-10",
    diagnosis: "Skin Allergy",
    medicines: [
      { name: "Cetirizine", dosage: "10mg", duration: "7 days" },
      { name: "Calamine Lotion", dosage: "Apply twice daily", duration: "10 days" },
    ],
    notes: "Avoid exposure to dust.",
    labTests: ["Skin Patch Test"],
  },
];

// ===================== MEDICAL RECORDS =====================
export const medicalRecords = [
  {
    id: "r1",
    patientId: "p1",
    type: "Lab Report",
    title: "Blood Test Report",
    date: "2025-08-05",
    fileUrl: "/files/blood-test.pdf",
  },
  {
    id: "r2",
    patientId: "p1",
    type: "Scan",
    title: "MRI Brain Scan",
    date: "2025-08-02",
    fileUrl: "/files/mri-brain.pdf",
  },
  {
    id: "r3",
    patientId: "p1",
    type: "Prescription",
    title: "Hypertension Prescription",
    date: "2025-08-15",
    fileUrl: "/files/hypertension-prescription.pdf",
  },
];

// ===================== MESSAGES (CHAT) =====================
export const messages = [
  {
    id: "m1",
    patientId: "p1",
    doctorId: "d1",
    sender: "patient",
    text: "Hello Doctor, I have been feeling chest pain lately.",
    timestamp: "2025-08-18T10:00:00Z",
  },
  {
    id: "m2",
    patientId: "p1",
    doctorId: "d1",
    sender: "doctor",
    text: "Please schedule an appointment so we can run some tests.",
    timestamp: "2025-08-18T10:05:00Z",
  },
  {
    id: "m3",
    patientId: "p1",
    doctorId: "d2",
    sender: "patient",
    text: "I need help with skin rashes.",
    timestamp: "2025-08-17T09:30:00Z",
  },
];
