import React from "react";
import { CheckCircle2, Hospital, Clock, Video } from "lucide-react";

const DoctorInfoSection = ({ doctor, currentPatientId = "p3" }) => {
  const hasVisited = doctor.patientsHandled.includes(currentPatientId);

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <img
        src={doctor.photo}
        alt={doctor.name}
        className="w-28 h-28 rounded-full border-4 border-blue-400 shadow-md"
      />
      <div>
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          {doctor.name}
          {hasVisited && (
            <span className="flex items-center gap-1 text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" /> Visited Earlier
            </span>
          )}
        </h2>
        <p className="text-blue-600 font-medium mt-1">
          {doctor.specialization}
        </p>
        <p className="text-gray-600">{doctor.experience} experience</p>
        <p className="text-gray-500">{doctor.hospital}</p>

        <div className="mt-4 space-y-2 text-gray-700">
          <p className="flex items-center gap-2">
            <Video className="text-blue-500 w-5 h-5" />
            <strong>Consultation:</strong>{" "}
            {doctor.consultationTypes.join(", ")}
          </p>
          <p className="flex items-center gap-2">
            <Hospital className="text-blue-500 w-5 h-5" />
            <strong>Fees:</strong> ₹{doctor.fee.video} (Video) | ₹
            {doctor.fee.inperson} (In-person)
          </p>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Clock className="text-blue-500 w-5 h-5" />
              <strong>Availability:</strong>
            </div>
            <ul className="ml-6 list-disc text-gray-600">
              {doctor.availability.map((slot, i) => (
                <li key={i}>
                  <span className="font-medium">{slot.day}</span>:{" "}
                  {slot.slots.join(", ")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfoSection;
