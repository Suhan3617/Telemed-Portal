import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../../data/patient/mockdata";
import Pageheader from "../../components/Common/pageheader";
import DoctorList from "../../components/Patient/BookAppointment/doctorlist";
import AppointmentForm from "../../components/Patient/BookAppointment/appointmentform";

const BookAppointment = () => {
  const { doctorId } = useParams();
  const preSelectedDoctor = doctors.find(
    (doc) => doc.id.toString() === doctorId
  );

  const [selectedDoctor, setSelectedDoctor] = useState(preSelectedDoctor || null);
  const [consultationType, setConsultationType] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDoctor || !consultationType || !selectedDay || !selectedSlot) {
      alert("⚠️ Please select all required fields!");
      return;
    }

    alert(
      `✅ Appointment booked with ${selectedDoctor.name} 
       📅 Day: ${selectedDay} 
       🕑 Slot: ${selectedSlot} 
       💻 Type: ${consultationType} 
       💰 Fee: ₹${
         consultationType === "Video Consultation"
           ? selectedDoctor.fee.video
           : selectedDoctor.fee.inperson
       }`
    );
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      <Pageheader
        title="Book Appointment"
        subtitle="Select doctor, consultation type, and slot"
        breadcrumb={["Home", "Doctors", "Book Appointment"]}
      />

      <div className="grid lg:grid-cols-2 gap-6">
        <DoctorList
          doctors={doctors}
          selectedDoctor={selectedDoctor}
          setSelectedDoctor={(doc) => {
            setSelectedDoctor(doc);
            setConsultationType("");
            setSelectedDay("");
            setSelectedSlot("");
          }}
        />

        <AppointmentForm
          selectedDoctor={selectedDoctor}
          consultationType={consultationType}
          setConsultationType={setConsultationType}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default BookAppointment;
