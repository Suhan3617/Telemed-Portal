import React, { useState } from "react";
import DoctorSidebar from "../../components/Doctor/doctorsidebar.jsx";
import DoctorTopbar from "../../components/Doctor/doctortopbar.jsx";
import Doctorstats from "../../components/Doctor/doctorstats.jsx";
import DoctorAppointmentCard from "../../components/Doctor/doctorappointmentcard.jsx";
import Doctoractionbuttons from "../../components/Doctor/doctoractionbuttons.jsx";
import Doctorappointmentdetialsmodal from "../../components/Doctor/doctorappointmentdetialsmodal.jsx";
import { appointments } from "../../data/doctor/mockdata.js";


const DoctorDashboard = () => {
  const [SelectedAppointment, setSelectedAppointment] = useState(null);

  const openDetails = (patient) => {
    setselectedpatient(patient);
    setisModalOpen(true);
  };

  return ( 
    <div className="flex min-h-screen bg-gradient-to-bl from-blue-300 to-white">
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
