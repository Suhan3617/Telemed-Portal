import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../../data/patient/mockdata";
import Pageheader from "../../components/Common/pageheader";
import DoctorCard from "../../components/Patient/doctors/doctorcard";
import DoctorDetailsModal from "../../components/Patient/doctors/doctordetailsmodal";

const PatientDoctor = () => {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <Pageheader
        title="Our Doctors"
        subtitle="Book appointments with trusted specialists"
        breadcrumb={["Home", "Doctors"]}
      />

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-4">
        {doctors.map((doc) => (
          <DoctorCard
            key={doc.id}
            doctor={doc}
            onBook={() => navigate(`/book-appointment/${doc.id}`)}
            onViewDetails={() => setSelectedDoctor(doc)}
          />
        ))}
      </div>

      {selectedDoctor && (
        <DoctorDetailsModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </div>
  );
};

export default PatientDoctor;
