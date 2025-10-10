import React from "react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../../data/patient/mockdata";
import Pageheader from "../../components/Common/pageheader";

const PatientDoctor = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <Pageheader
        title="Our Doctors"
        subtitle="Book appointments with top specialists"
        breadcrumb={["Home", "Doctors"]}
      />

      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
          >
            <img
              src={doc.photo}
              alt={doc.name}
              className="w-20 h-20 rounded-full mx-auto border-2 border-blue-400"
            />
            <h2 className="mt-3 text-center font-bold text-gray-800 text-lg">
              {doc.name}
            </h2>
            <p className="text-sm text-center text-gray-500">
              {doc.specialization}
            </p>
            <p className="text-xs text-center text-gray-400">
              {doc.experience}
            </p>
            <p className="text-xs text-center text-gray-400">
              {doc.hospital}
            </p>
            <button
              onClick={() => navigate(`/book-appointment/${doc.id}`)}
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDoctor;
