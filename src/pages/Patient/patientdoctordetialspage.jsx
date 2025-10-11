import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "../../data/patient/mockdata";
import Pageheader from "../../components/Common/pageheader";
import DoctorInfoSection from "../../components/Patient/doctors/DoctorInfoSection";
import ReviewList from "../../components/Patient/doctors/reviewlist";
import AddReviewForm from "../../components/Patient/doctors/addreviewform";

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((doc) => doc.id === id);
  const [reviews, setReviews] = useState([
    { id: 1, name: "Riya Patel", rating: 5, comment: "Amazing doctor! Very caring." },
    { id: 2, name: "Karan S.", rating: 4, comment: "Good experience overall." },
  ]);

  const handleAddReview = (newReview) =>
    setReviews((prev) => [...prev, { id: prev.length + 1, ...newReview }]);

  if (!doctor) {
    return <p className="p-6 text-center text-gray-600">Doctor not found.</p>;
  }

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <Pageheader
        title={doctor.name}
        subtitle="Detailed Profile & Availability"
        breadcrumb={["Home", "Doctors", doctor.name]}
      />

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
      >
        ← Back to Doctors
      </button>

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <DoctorInfoSection doctor={doctor} />

        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button
            onClick={() => navigate(`/book-appointment/${doctor.id}`)}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Book Appointment
          </button>
        </div>

        {/* Reviews */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Patient Reviews
          </h3>
          <ReviewList reviews={reviews} />
          <AddReviewForm onAddReview={handleAddReview} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
