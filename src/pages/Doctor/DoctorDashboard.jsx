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

          <section className="bg-white p-6 rounded-xl shadow">
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
