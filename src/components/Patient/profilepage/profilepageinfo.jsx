import React from 'react'

const Profilepageinfo = ({ patient }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
      <img
        src={patient.photo}
        alt={patient.name}
        className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
      />
      <h2 className="text-xl font-semibold">{patient.name}</h2>
      <p className="text-gray-600">{patient.gender}, {patient.age} yrs</p>
      <p className="text-gray-500 mt-2">{patient.address}</p>
      <p className="text-gray-500">{patient.email}</p>
      <p className="text-gray-500">{patient.phone}</p>
      <p className="mt-3 font-medium text-blue-600">Blood Group: {patient.bloodGroup}</p>
    </div>
  );
}

export default Profilepageinfo;
