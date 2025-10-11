import React, { useState } from "react";
import { XCircle, GraduationCap, Building2, User2 } from "lucide-react";
import ReviewList from "./ReviewList";
import AddReviewForm from "./AddReviewForm";

const DoctorDetailsModal = ({ doctor, onClose }) => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Ankit Sharma",
      rating: 5,
      comment: "Very professional and friendly. Highly recommend!",
    },
    {
      id: 2,
      name: "Meera Patel",
      rating: 4,
      comment: "Helped me understand my issue clearly.",
    },
  ]);

  const handleAddReview = (newReview) => {
    setReviews((prev) => [...prev, { id: prev.length + 1, ...newReview }]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 border-t-4 border-blue-500 relative animate-fadeIn overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
        >
          <XCircle className="w-6 h-6" />
        </button>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-5">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-24 h-24 rounded-full border-4 border-blue-400 shadow"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
            <p className="text-blue-500 font-medium">{doctor.specialization}</p>
            <p className="text-gray-600">{doctor.experience}</p>
            <p className="text-gray-500">{doctor.hospital}</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-3 text-gray-700">
          <p className="flex items-center gap-2">
            <User2 className="text-blue-500 w-5 h-5" />
            <span>
              <strong>Consultation Types:</strong>{" "}
              {doctor.consultationTypes.join(", ")}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Building2 className="text-blue-500 w-5 h-5" />
            <span>
              <strong>Fees:</strong> Video ₹{doctor.fee.video} | In-person ₹
              {doctor.fee.inperson}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <GraduationCap className="text-blue-500 w-5 h-5" />
            <span>
              <strong>Education:</strong> MBBS, MD (Internal Medicine)
            </span>
          </p>
          <div>
            <strong>Availability:</strong>
            <ul className="mt-1 ml-6 list-disc">
              {doctor.availability.map((slot, index) => (
                <li key={index}>
                  {slot.day}: {slot.slots.join(", ")}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">
            Patient Reviews
          </h3>
          <ReviewList reviews={reviews} />
          <AddReviewForm onAddReview={handleAddReview} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsModal;
