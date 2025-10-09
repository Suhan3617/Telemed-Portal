import React from "react";
import { appointments, doctors } from "../../data/patient/mockdata";
import { Link } from "react-router-dom";
import Pageheader from "../../components/Common/pageheader";

const PatientAppointments = () => {
  const getDoctor = (id) => doctors.find((d) => d.id === id);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Pageheader
        title="Appointments"
        subtitle="View and manage your booked consultation"
        breadcrumb={["Dashboard", "Appointments"]}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {appointments.map((appt) => {
          const doc = getDoctor(appt.doctorId);
          return (
            <div
              key={appt.id}
              className="relative group bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col space-y-4 hover:shadow-2xl transition-all duration-300 border border-blue-100"
            >
              {/* Blue glow hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>

              {/* Doctor Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-14 h-14 rounded-full border-2 border-blue-500 shadow-md"
                />
                <div>
                  <h2 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition">
                    {doc.name}
                  </h2>
                  <p className="text-sm text-gray-500">{doc.specialization}</p>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="bg-blue-50 rounded-lg p-3 shadow-inner">
                <p className="text-gray-700 font-medium">
                  {appt.date} <span className="text-blue-600">•</span>{" "}
                  {appt.time}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {appt.type} <span className="text-blue-600">•</span>{" "}
                  {appt.status}
                </p>
              </div>

              {/* Button */}

              <Link
                to={`/patient/appointmentdetails/${appt.id}`}
                className="self-start mt-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PatientAppointments;
