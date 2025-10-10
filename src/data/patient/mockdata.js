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
    photo: "https://i.pravatar.cc/80?img=45",
    experience: "12 years",
    hospital: "City Skin Clinic",
    consultationTypes: ["Video Consultation", "In-person Consultation"],
    fee: { video: 500, inperson: 700 },
    availability: [
      { day: "Monday", slots: ["10:00 AM", "11:30 AM", "4:00 PM"] },
      { day: "Wednesday", slots: ["2:00 PM", "3:30 PM"] },
      { day: "Friday", slots: ["9:00 AM", "11:00 AM", "5:00 PM"] },
    ],
    patientsHandled: ["p1"], // John Doe (Skin rash & itching)
  },
  {
    id: "d2",
    name: "Dr. Arjun Mehta",
    specialization: "Dermatologist",
    photo: "https://i.pravatar.cc/80?img=46",
    experience: "15 years",
    hospital: "Metro Neuro Center",
    consultationTypes: ["In-person Consultation", "Video Consultation"],
    fee: { video: 600, inperson: 900 },
    availability: [
      { day: "Tuesday", slots: ["10:00 AM", "1:00 PM"] },
      { day: "Thursday", slots: ["3:00 PM", "5:30 PM"] },
    ],
    patientsHandled: ["p2"],
  },
  {
    id: "d3",
    name: "Dr. Neha Kapoor",
    specialization: "Neurologist",
    photo: "https://i.pravatar.cc/80?img=47",
    experience: "8 years",
    hospital: "HealthCare Clinic",
    consultationTypes: ["Video Consultation", "In-person Consultation"],
    fee: { video: 400, inperson: 600 },
    availability: [
      { day: "Monday", slots: ["9:00 AM", "11:00 AM", "6:00 PM"] },
      { day: "Wednesday", slots: ["10:30 AM", "1:00 PM"] },
      { day: "Saturday", slots: ["2:00 PM", "4:00 PM"] },
    ],
    patientsHandled: ["p3", "p5"], 
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
