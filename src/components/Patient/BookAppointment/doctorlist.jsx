import React from "react";

const DoctorList = ({ doctors, selectedDoctor, setSelectedDoctor }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">Select Doctor</h3>
      <div className="space-y-4">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            onClick={() => setSelectedDoctor(doc)}
            className={`p-4 rounded-lg cursor-pointer shadow transition ${
              selectedDoctor?.id === doc.id
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <div className="flex items-center gap-4">
              <img
                src={doc.photo}
                alt={doc.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-lg">{doc.name}</p>
                <p className="text-sm">{doc.specialization}</p>
                <p className="text-xs">{doc.experience}</p>
                <p className="text-xs">{doc.hospital}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
