import React, { useState } from "react";
import DoctorSidebar from "../../components/Doctor/doctorsidebar.jsx";
import DoctorTopbar from "../../components/Doctor/doctortopbar.jsx";
import Doctorstats from "../../components/Doctor/doctorstats.jsx";
import DoctorAppointmentCard from "../../components/Doctor/doctorappointmentcard.jsx";
import Doctoractionbuttons from "../../components/Doctor/doctoractionbuttons.jsx";
import Doctorappointmentdetialsmodal from "../../components/Doctor/doctorappointmentdetialsmodal.jsx";

const appointments = [
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
  }
];


const DoctorDashboard = () => {
  const [SelectedAppointment, setSelectedAppointment] = useState(null);

  const openDetails = (patient) => {
    setselectedpatient(patient);
    setisModalOpen(true);
  };

  return ( 
    <div className="flex min-h-screen bg-gray-50">
      <DoctorSidebar />
      <div className="flex flex-col flex-1">
        <DoctorTopbar name="Dr. Smith" />

        <main className="p-6 space-y-8">
          <Doctorstats />

          <Doctoractionbuttons />

          <section className="bg-blue-100 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Today's Appointments
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {appointments.map((a) => (
                <DoctorAppointmentCard
                  key={a.id}
                  appt={a}
                  onViewDetails={() => setSelectedAppointment(a)}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
      {SelectedAppointment && (
        <Doctorappointmentdetialsmodal
          appointment={SelectedAppointment}
          onClose={() => setSelectedAppointment(null)}
        />
      )}
    </div>
  );
};

export default DoctorDashboard;
