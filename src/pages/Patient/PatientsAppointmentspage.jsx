import React from "react";
import { appointments , doctors } from "../../data/patient/mockdata";

const PatientAppointments = () => {
  const getDoctor = (id) => doctors.find((d) => d.id === id);

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">My Appointments</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {appointments.map((appt) => {
          const doc = getDoctor(appt.doctorId);
          return (
            <div
              key={appt.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col space-y-2 hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="font-semibold text-gray-800">{doc.name}</h2>
                  <p className="text-sm text-gray-500">{doc.specialization}</p>
                </div>
              </div>
              <p className="text-gray-600">
                {appt.date} at {appt.time}
              </p>
              <p className="text-sm text-gray-500">
                {appt.type} • {appt.status}
              </p>
              <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition">
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PatientAppointments;
