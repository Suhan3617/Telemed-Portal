import React from 'react'
import { useState } from 'react';
import { doctors } from '../../data/patient/mockdata'

const patientdoctor = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Doctors</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={doc.photo}
              alt={doc.name}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <h2 className="mt-3 text-center font-semibold text-gray-800">
              {doc.name}
            </h2>
            <p className="text-sm text-center text-gray-500">{doc.specialization}</p>
            <p className="text-xs text-center text-gray-400">{doc.experience}</p>
            <p className="text-xs text-center text-gray-400">{doc.hospital}</p>
            <button
              onClick={() => setSelectedDoc(doc)}
              className="mt-3 w-full bg-blue-500 text-white py-1 rounded-lg hover:bg-blue-600 transition"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
            <h2 className="font-bold text-lg mb-4">
              Book with {selectedDoc.name}
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              Fee: ₹{selectedDoc.fee?.video} (Video), ₹{selectedDoc.fee?.inperson} (In-person)
            </p>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Available Slots:</h3>
            {selectedDoc.availability.map((day, idx) => (
              <div key={idx} className="mb-3">
                <p className="text-xs font-medium">{day.day}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {day.slots.map((slot) => (
                    <button
                      key={slot}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200 text-sm"
                      onClick={() => alert(`Booked ${slot} on ${day.day}`)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button
              className="mt-4 w-full bg-red-500 text-white py-1 rounded-lg"
              onClick={() => setSelectedDoc(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );

}

export default patientdoctor
