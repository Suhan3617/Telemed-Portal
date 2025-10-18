// Appointments
export const appointments = [
  {
    id: "ap1",
    patientId: "p1",
    patientName: "John Doe",
    patientPhoto: "https://i.pravatar.cc/80?img=1",
    gender: "Male",
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
    patientId: "p2",
    patientName: "Aisha Khan",
    patientPhoto: "https://i.pravatar.cc/80?img=5",
    gender: "Female",
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
    patientId: "p3",
    patientName: "Michael Smith",
    patientPhoto: "https://i.pravatar.cc/80?img=8",
    gender: "Male",
    date: "15 Aug 2025", // Already in 'DD Mon YYYY' format
    time: "9:30 AM", // Already in consistent format
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
        date: "14 Aug 2025", // Already in 'DD Mon YYYY' format
        medicine: "Paracetamol 500mg",
        duration: "5 days",
        notes: "Every 6 hours",
      },
    ],
    labReports: [{ title: "Chest X-ray", date: "12 Aug 2025" }], // Already in 'DD Mon YYYY' format
  },
  {
    id: "ap4",
    patientId: "p4",
    patientName: "Priya Sharma",
    patientPhoto: "https://i.pravatar.cc/80?img=15",
    gender: "Female",
    date: "16 Aug 2025", // Already in 'DD Mon YYYY' format
    time: "2:15 PM", // Already in consistent format
    type: "In-person Consultation",
    status: "Cancelled",
    reason: "Follow-up for knee pain",
    history: {
      chronicIllnesses: ["Arthritis"],
      allergies: ["Pollenn"],
      surgeries: ["Knee Arthroscopy - 2020"],
      familyHistory: ["Arthritis"],
    },
    prescriptions: [
      {
        date: "10 Aug 2025", // Already in 'DD Mon YYYY' format
        medicine: "Naproxen 250mg",
        duration: "7 days",
        notes: "After meals",
      },
    ],
    labReports: [{ title: "Knee MRI Scan", date: "09 Aug 2025" }], // Already in 'DD Mon YYYY' format
  },
  {
    id: "ap5",
    patientId: "p5",
    patientName: "David Johnson",
    patientPhoto: "https://i.pravatar.cc/80?img=20",
    gender: "Male",
    date: "17 Aug 2025", // Already in 'DD Mon YYYY' format
    time: "5:00 PM", // Already in consistent format
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
        date: "15 Aug 2025", // Already in 'DD Mon YYYY' format
        medicine: "Loratadine 10mg",
        duration: "10 days",
        notes: "Once daily",
      },
    ],
    labReports: [{ title: "Allergy Test", date: "14 Aug 2025" }], // Already in 'DD Mon YYYY' format
  },
  {
    id: "ap6",
    patientId: "p6",
    patientName: "Meera Patel",
    patientPhoto: "https://i.pravatar.cc/80?img=32",
    gender: "Female",
    date: "18 Aug 2025", // Already in 'DD Mon YYYY' format
    time: "10:00 AM", // Already in consistent format
    type: "In-person Consultation",
    status: "Completed",
    reason: "Routine health check-up",
    history: {
      chronicIllnesses: ["None"],
      allergies: ["Latex"],
      surgeries: ["None"],
      familyHistory: ["Diabetes"],
    },
    prescriptions: [
      {
        date: "18 Aug 2025", // Already in 'DD Mon YYYY' format
        medicine: "Multivitamin",
        duration: "30 days",
        notes: "Once daily in the morning",
      },
    ],
    labReports: [{ title: "Full Body Blood Test", date: "18 Aug 2025" }], // Already in 'DD Mon YYYY' format
  },
];
// Patients
// src/data/doctor/patients.js

export const patients = [
  {
    id: "p1",
    name: "John Doe",
    avatar: "https://i.pravatar.cc/80?img=1",
    age: 34,
    sex: "M",
    dob: "1991-03-15",
    uhid: "UH100001",
    primaryContact: "+91-9876500001",
    emergencyContact: { name: "Jane Doe", relation: "Wife", phone: "+91-9123400001" },
    location: "Mumbai, India",
    insurance: "MediCare Gold",
    statusPill: "Diabetic",
    lastVisit: "2025-07-12",
    lastVisitReason: "Routine Checkup",
    nextAppointment: "2025-10-25",
    vitals: [{ date: "2025-07-12", bp: "128/82", hr: 74, temp: 98.5, spo2: 98 }],
    history: {
      chronicIllnesses: ["Type 2 Diabetes"],
      allergies: ["Penicillin"],
      surgeries: ["Appendectomy - 2015"],
      familyHistory: ["Heart Disease"],
    },
    allergies: [
      { substance: "Penicillin", reaction: "Rash", severity: "Moderate", recordedDate: "2024-05-12" },
    ],
    activeMeds: [
      { name: "Metformin", dose: "500mg", frequency: "Twice daily", startDate: "2024-01-10" },
    ],
    problemList: [{ problem: "Type 2 Diabetes", status: "Chronic", onsetDate: "2020" }],
    immunizations: [
      { vaccine: "COVID-19 Booster", date: "2025-01-10" },
      { vaccine: "Influenza", date: "2024-12-01" },
    ],
    labResults: [
      {
        testName: "HbA1c",
        value: "7.0%",
        refRange: "4-6%",
        flag: "High",
        date: "2025-07-10",
        reportLink: "#",
      },
    ],
    socialHistory: { smoking: "Never", alcohol: "Occasionally", occupation: "Accountant" },
    careTeam: [{ name: "Dr. Sharma", role: "Primary Care", contact: "sharma@hospital.com" }],
    timelineVisits: [
      {
        date: "2025-07-12",
        encounterType: "Routine Checkup",
        provider: "Dr. Sharma",
        notes: "Patient stable. Continue current medication.",
      },
    ],
    adminInfo: { registrationDate: "2019-03-01", preferredPharmacy: "Apollo Pharmacy" },
  },

  {
    id: "p2",
    name: "Aisha Khan",
    avatar: "https://i.pravatar.cc/80?img=5",
    age: 29,
    sex: "F",
    dob: "1996-02-11",
    uhid: "UH100002",
    primaryContact: "+91-9876500002",
    emergencyContact: { name: "Rehan Khan", relation: "Brother", phone: "+91-9123400002" },
    location: "Delhi, India",
    insurance: "Care Plus Plan",
    statusPill: "Hypertension",
    lastVisit: "2025-06-20",
    lastVisitReason: "Follow-up for BP check",
    nextAppointment: "2025-11-01",
    vitals: [{ date: "2025-06-20", bp: "135/88", hr: 78, temp: 98.3, spo2: 99 }],
    history: {
      chronicIllnesses: ["Hypertension"],
      allergies: ["None"],
      surgeries: [],
      familyHistory: ["Migraine"],
    },
    allergies: [
      { substance: "None", reaction: "-", severity: "None", recordedDate: "2024-04-05" },
    ],
    activeMeds: [{ name: "Amlodipine", dose: "5mg", frequency: "Once daily", startDate: "2023-12-01" }],
    problemList: [{ problem: "Hypertension", status: "Chronic", onsetDate: "2022" }],
    immunizations: [{ vaccine: "Tetanus", date: "2023-09-12" }],
    labResults: [
      {
        testName: "Blood Pressure",
        value: "135/88",
        refRange: "120/80",
        flag: "Slightly High",
        date: "2025-06-20",
        reportLink: "#",
      },
    ],
    socialHistory: { smoking: "Never", alcohol: "No", occupation: "Teacher" },
    careTeam: [{ name: "Dr. Mehta", role: "Primary Physician", contact: "mehta@hospital.com" }],
    timelineVisits: [
      {
        date: "2025-06-20",
        encounterType: "Follow-up",
        provider: "Dr. Mehta",
        notes: "BP slightly elevated, continue Amlodipine.",
      },
    ],
    adminInfo: { registrationDate: "2021-02-15", preferredPharmacy: "MedLife Pharmacy" },
  },

  {
    id: "p3",
    name: "Michael Smith",
    avatar: "https://i.pravatar.cc/80?img=8",
    age: 45,
    sex: "M",
    dob: "1980-09-30",
    uhid: "UH100003",
    primaryContact: "+91-9876500003",
    emergencyContact: { name: "Laura Smith", relation: "Wife", phone: "+91-9123400003" },
    location: "Bangalore, India",
    insurance: "Health Secure",
    statusPill: "Asthmatic",
    lastVisit: "2025-08-05",
    lastVisitReason: "Asthma follow-up",
    nextAppointment: "2025-11-12",
    vitals: [{ date: "2025-08-05", bp: "120/78", hr: 80, temp: 98.7, spo2: 96 }],
    history: {
      chronicIllnesses: ["Asthma"],
      allergies: ["Dust"],
      surgeries: [],
      familyHistory: ["None"],
    },
    allergies: [
      { substance: "Dust", reaction: "Sneezing", severity: "Mild", recordedDate: "2024-03-05" },
    ],
    activeMeds: [
      { name: "Salbutamol Inhaler", dose: "100mcg", frequency: "As needed", startDate: "2024-01-10" },
    ],
    problemList: [{ problem: "Asthma", status: "Chronic", onsetDate: "2015" }],
    immunizations: [{ vaccine: "Influenza", date: "2024-10-01" }],
    labResults: [
      {
        testName: "Spirometry",
        value: "Normal",
        refRange: "-",
        flag: "Normal",
        date: "2025-08-05",
        reportLink: "#",
      },
    ],
    socialHistory: { smoking: "Former", alcohol: "Rarely", occupation: "Software Engineer" },
    careTeam: [{ name: "Dr. Raj", role: "Pulmonologist", contact: "raj@hospital.com" }],
    timelineVisits: [
      {
        date: "2025-08-05",
        encounterType: "Follow-up",
        provider: "Dr. Raj",
        notes: "Asthma well controlled with inhaler use.",
      },
    ],
    adminInfo: { registrationDate: "2017-05-20", preferredPharmacy: "Netmeds Pharmacy" },
  },

  {
    id: "p4",
    name: "Priya Sharma",
    avatar: "https://i.pravatar.cc/80?img=15",
    age: 38,
    sex: "F",
    dob: "1987-07-12",
    uhid: "UH100004",
    primaryContact: "+91-9876500004",
    emergencyContact: { name: "Arjun Sharma", relation: "Husband", phone: "+91-9123400004" },
    location: "Pune, India",
    insurance: "Care Health Prime",
    statusPill: "Arthritis",
    lastVisit: "2025-07-10",
    lastVisitReason: "Joint pain follow-up",
    nextAppointment: "2025-10-28",
    vitals: [{ date: "2025-07-10", bp: "125/80", hr: 72, temp: 98.4, spo2: 98 }],
    history: {
      chronicIllnesses: ["Arthritis"],
      allergies: ["Pollen"],
      surgeries: [],
      familyHistory: ["Arthritis"],
    },
    allergies: [
      { substance: "Pollen", reaction: "Sneezing", severity: "Mild", recordedDate: "2024-02-12" },
    ],
    activeMeds: [
      { name: "Ibuprofen", dose: "400mg", frequency: "Twice daily", startDate: "2024-06-01" },
    ],
    problemList: [{ problem: "Arthritis", status: "Chronic", onsetDate: "2019" }],
    immunizations: [{ vaccine: "Influenza", date: "2024-12-10" }],
    labResults: [
      {
        testName: "CRP",
        value: "6 mg/L",
        refRange: "<5",
        flag: "High",
        date: "2025-07-08",
        reportLink: "#",
      },
    ],
    socialHistory: { smoking: "Never", alcohol: "Occasionally", occupation: "Architect" },
    careTeam: [{ name: "Dr. Kaur", role: "Rheumatologist", contact: "kaur@hospital.com" }],
    timelineVisits: [
      {
        date: "2025-07-10",
        encounterType: "Follow-up",
        provider: "Dr. Kaur",
        notes: "Mild stiffness, advised physiotherapy and continue meds.",
      },
    ],
    adminInfo: { registrationDate: "2020-06-15", preferredPharmacy: "Apollo Pharmacy" },
  },

  {
    id: "p5",
    name: "David Johnson",
    avatar: "https://i.pravatar.cc/80?img=20",
    age: 52,
    sex: "M",
    dob: "1973-11-05",
    uhid: "UH100005",
    primaryContact: "+91-9876500005",
    emergencyContact: { name: "Sarah Johnson", relation: "Wife", phone: "+91-9123400005" },
    location: "Chennai, India",
    insurance: "Silver Shield Health",
    statusPill: "Allergies",
    lastVisit: "2025-05-28",
    lastVisitReason: "Allergy management",
    nextAppointment: "2025-10-30",
    vitals: [{ date: "2025-05-28", bp: "122/78", hr: 70, temp: 98.5, spo2: 98 }],
    history: {
      chronicIllnesses: ["Seasonal Allergies"],
      allergies: ["Pollen", "Peanuts"],
      surgeries: [],
      familyHistory: ["Allergies"],
    },
    allergies: [
      { substance: "Pollen", reaction: "Sneezing", severity: "Mild", recordedDate: "2024-05-10" },
      { substance: "Peanuts", reaction: "Swelling", severity: "Severe", recordedDate: "2024-05-10" },
    ],
    activeMeds: [
      { name: "Cetirizine", dose: "10mg", frequency: "Once daily", startDate: "2024-03-15" },
    ],
    problemList: [{ problem: "Seasonal Allergies", status: "Chronic", onsetDate: "2016" }],
    immunizations: [{ vaccine: "COVID-19 Booster", date: "2025-01-05" }],
    labResults: [
      {
        testName: "Allergy Test",
        value: "Positive for Pollen",
        refRange: "Negative",
        flag: "Abnormal",
        date: "2025-05-25",
        reportLink: "#",
      },
    ],
    socialHistory: { smoking: "Never", alcohol: "Occasionally", occupation: "Bank Manager" },
    careTeam: [{ name: "Dr. Thomas", role: "Allergist", contact: "thomas@hospital.com" }],
    timelineVisits: [
      {
        date: "2025-05-28",
        encounterType: "Consultation",
        provider: "Dr. Thomas",
        notes: "Prescribed antihistamines, avoid triggers.",
      },
    ],
    adminInfo: { registrationDate: "2015-10-10", preferredPharmacy: "Netmeds Pharmacy" },
  },

  {
    id: "p6",
    name: "Meera Patel",
    avatar: "https://i.pravatar.cc/80?img=32",
    age: 26,
    sex: "F",
    dob: "1999-04-17",
    uhid: "UH100006",
    primaryContact: "+91-9876500006",
    emergencyContact: { name: "Rina Patel", relation: "Mother", phone: "+91-9123400006" },
    location: "Ahmedabad, India",
    insurance: "Star Health Basic",
    statusPill: "Healthy",
    lastVisit: "2025-08-02",
    lastVisitReason: "Routine health check",
    nextAppointment: "2026-01-15",
    vitals: [{ date: "2025-08-02", bp: "118/76", hr: 72, temp: 98.3, spo2: 99 }],
    history: { chronicIllnesses: [], allergies: ["Latex"], surgeries: [], familyHistory: ["Diabetes"] },
    allergies: [
      { substance: "Latex", reaction: "Rash", severity: "Mild", recordedDate: "2024-06-12" },
    ],
    activeMeds: [],
    problemList: [],
    immunizations: [{ vaccine: "COVID-19 Booster", date: "2025-01-10" }],
    labResults: [
      { testName: "Blood Sugar", value: "90 mg/dL", refRange: "70-110", flag: "Normal", date: "2025-08-02", reportLink: "#" },
    ],
    socialHistory: { smoking: "Never", alcohol: "No", occupation: "Graphic Designer" },
    careTeam: [{ name: "Dr. Iyer", role: "General Physician", contact: "iyer@hospital.com" }],
    timelineVisits: [
      {
        date: "2025-08-02",
        encounterType: "Routine Checkup",
        provider: "Dr. Iyer",
        notes: "Healthy overall, no issues found.",
      },
    ],
    adminInfo: { registrationDate: "2022-09-10", preferredPharmacy: "1mg Pharmacy" },
  },
];





// Medical Records
export const records = [
  {
    id: "r1",
    patientId: "p1",
    patientName: "John Doe",
    age: 42,
    gender: "Male",
    title: "Blood Test Report",
    type: "Lab Result",
    date: "2025-07-10",
    uploadedBy: "Patient",
    summary: "Slightly elevated cholesterol levels, dietary adjustments recommended.",
    files: [{ id: "f1", name: "bloodtest-john.pdf", type: "pdf", url: "/reports/bloodtest-john.pdf" }],
    status: "Reviewed",
    source: "HealthPlus Diagnostics"
  },
  {
    id: "r2",
    patientId: "p2",
    patientName: "Aisha Khan",
    age: 31,
    gender: "Female",
    title: "MRI Brain Scan",
    type: "Imaging",
    date: "2025-08-05",
    uploadedBy: "Hospital",
    summary: "Possible mild lesion; requires radiologist confirmation.",
    files: [{ id: "f2", name: "mri-aisha.pdf", type: "pdf", url: "/reports/mri-aisha.pdf" }],
    status: "Pending",
    source: "NeuroCare Imaging Center"
  },
  {
    id: "r3",
    patientId: "p3",
    patientName: "Michael Smith",
    age: 47,
    gender: "Male",
    title: "Chest X-Ray",
    type: "Imaging",
    date: "2025-08-12",
    uploadedBy: "Hospital",
    summary: "Mild congestion detected, no major abnormalities present.",
    files: [{ id: "f3", name: "xray-michael.pdf", type: "pdf", url: "/reports/xray-michael.pdf" }],
    status: "Reviewed",
    source: "City Diagnostic Labs"
  },
  {
    id: "r4",
    patientId: "p4",
    patientName: "Priya Sharma",
    age: 36,
    gender: "Female",
    title: "Knee MRI Scan",
    type: "Imaging",
    date: "2025-08-09",
    uploadedBy: "Hospital",
    summary: "Minor ligament strain detected in right knee.",
    files: [{ id: "f4", name: "mri-priya.pdf", type: "pdf", url: "/reports/mri-priya.pdf" }],
    status: "Reviewed",
    source: "OrthoCare Radiology"
  },
  {
    id: "r5",
    patientId: "p5",
    patientName: "David Johnson",
    age: 40,
    gender: "Male",
    title: "Allergy Test Panel",
    type: "Lab Result",
    date: "2025-08-14",
    uploadedBy: "Patient",
    summary: "Possible reaction to pollen and dust mites; further testing suggested.",
    files: [{ id: "f5", name: "allergy-david.pdf", type: "pdf", url: "/reports/allergy-david.pdf" }],
    status: "Pending",
    source: "BioLife Diagnostics"
  },
  {
    id: "r6",
    patientId: "p6",
    patientName: "Meera Patel",
    age: 28,
    gender: "Female",
    title: "Full Body Blood Test",
    type: "Lab Result",
    date: "2025-08-18",
    uploadedBy: "Patient",
    summary: "All parameters within normal range; no issues detected.",
    files: [{ id: "f6", name: "fullbody-meera.pdf", type: "pdf", url: "/reports/fullbody-meera.pdf" }],
    status: "Reviewed",
    source: "MedLife Labs"
  }
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

// Doctors
export const doctors = [
  {
    id: "d1",
    name: "Dr. Rakesh Verma",
    specialization: "Dermatologist",
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
    name: "Dr. Kavita Rao",
    specialization: "Neurologist",
    photo: "https://i.pravatar.cc/80?img=46",
    experience: "15 years",
    hospital: "Metro Neuro Center",
    consultationTypes: ["In-person Consultation", "Video Consultation"],
    fee: { video: 600, inperson: 900 },
    availability: [
      { day: "Tuesday", slots: ["10:00 AM", "1:00 PM"] },
      { day: "Thursday", slots: ["3:00 PM", "5:30 PM"] },
    ],
    patientsHandled: ["p2"], // Aisha Khan (Migraines)
  },
  {
    id: "d3",
    name: "Dr. Rajesh Khanna",
    specialization: "General Physician",
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
    // Michael Smith (Cough/fever), David Johnson (Allergies)
  },
  {
    id: "d4",
    name: "Dr. Neha Sharma",
    specialization: "Orthopedic Specialist",
    photo: "https://i.pravatar.cc/80?img=48",
    experience: "10 years",
    hospital: "Bone & Joint Care Hospital",
    consultationTypes: ["In-person Consultation"],
    fee: { inperson: 1000 },
    availability: [
      { day: "Monday", slots: ["2:00 PM", "4:00 PM"] },
      { day: "Thursday", slots: ["11:00 AM", "1:00 PM"] },
    ],
    patientsHandled: ["p4"], // Priya Sharma (Knee pain follow-up)
  },
  {
    id: "d5",
    name: "Dr. Sameer Iqbal",
    specialization: "General Physician",
    photo: "https://i.pravatar.cc/80?img=49",
    experience: "11 years",
    hospital: "Lung & Chest Institute",
    consultationTypes: ["Video Consultation", "In-person Consultation"],
    fee: { video: 450, inperson: 650 },
    availability: [
      { day: "Tuesday", slots: ["10:00 AM", "12:00 PM"] },
      { day: "Friday", slots: ["3:00 PM", "5:00 PM"] },
    ],
    patientsHandled: ["p6"], // Meera Patel (Health check-up)
  },
];
