import React from "react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../../data/patient/mockdata";
import Pageheader from "../../components/Common/pageheader";
import Patientdoctorcard from "../../components/Patient/patientdoctorcard";

const PatientDoctor = () => {
  const navigate = useNavigate();

  const handleBook = (id) => {
    navigate(`/patient/book-appointment/${id}`);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      <Pageheader
        title="Find Your Doctor"
        subtitle="Book appointments with trusted healthcare professionals"
        breadcrumb={["Home", "Doctors"]}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doc) => (
          <Patientdoctorcard key={doc.id} doc={doc} onBook={() => handleBook(doc.id)} />
        ))}
      </div>
    </div>
  );
};

export default PatientDoctor;
