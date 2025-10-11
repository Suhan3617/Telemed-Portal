import React, { useState } from "react";
import {
  XCircle,
  CheckCircle2,
  Hospital,
  Clock,
  Video,
  User2,
  MessageSquare,
} from "lucide-react";
import ReviewList from "./ReviewList";
import AddReviewForm from "./AddReviewForm";

const DoctorDetailsModal = ({ doctor, onClose, currentPatientId = "p3" }) => {
  if (!doctor) return null;

  const [reviews, setReviews] = useState([
    { id: 1, name: "Ankit Sharma", rating: 5, comment: "Very helpful & kind doctor." },
    { id: 2, name: "Ritika S.", rating: 4, comment: "Explained everything clearly!" },
  ]);

  const handleAddReview = (newReview) =>
    setReviews((prev) => [...prev, { id: prev.length + 1, ...newReview }]);

  const hasVisited = doctor.patientsHandled.includes(currentPatientId);

  const formatSpecialization = (spec) => {
    const map = {
      Cardiologist: "Cardiologist – Heart Specialist",
      Dermatologist: "Dermatologist – Skin & Hair Specialist",
      Neurologist: "Neurologist – Brain & Nerve Specialist",
      GeneralPhysician: "General Physician – Family Doctor",
    };
    return map[spec] || spec;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-md bg-white/10 animate-fadeIn">
      {/* Modal Box */}
      <div className="relative bg-white/90 backdrop-blur-xl border border-blue-200 shadow-2xl rounded-2xl w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%] p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
        >
          <XCircle className="w-6 h-6" />
        </button>

        {/* Doctor Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-24 h-24 rounded-full border-4 border-blue-400 shadow"
          />
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
              {hasVisited && (
                <span className="flex items-center gap-1 text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Visited Earlier
                </span>
              )}
            </div>
            <p className="text-blue-600 font-medium mt-1">
              {formatSpecialization(doctor.specialization)}
            </p>
            <p className="text-gray-600">{doctor.experience} experience</p>
            <p className="text-gray-500">{doctor.hospital}</p>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="space-y-4 text-gray-700">
          <p className="flex items-center gap-2">
            <User2 className="text-blue-500 w-5 h-5" />
            <strong>Consultation Types:</strong>{" "}
            {doctor.consultationTypes.join(", ")}
          </p>

          <p className="flex items-center gap-2">
            <Video className="text-blue-500 w-5 h-5" />
            <strong>Fees:</strong> Video ₹{doctor.fee.video} | In-person ₹
            {doctor.fee.inperson}
          </p>

          <p className="flex items-center gap-2">
            <Hospital className="text-blue-500 w-5 h-5" />
            <strong>Hospital:</strong> {doctor.hospital}
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

        {/* Reviews Section */}
        <div className="mt-6 border-t pt-4">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="text-blue-500 w-5 h-5" />
            <h3 className="text-lg font-semibold text-gray-800">
              Patient Reviews
            </h3>
          </div>
          <ReviewList reviews={reviews} />
          <AddReviewForm onAddReview={handleAddReview} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsModal;
