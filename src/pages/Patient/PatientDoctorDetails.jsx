import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "../../data/patient/mockdata";
import Pageheader from "../../components/Common/pageheader";
import DoctorInfoSection from "../../components/Patient/doctors/doctorinfosec";
import ReviewList from "../../components/Patient/doctors/reviewlist";
import AddReviewForm from "../../components/Patient/doctors/addreviewform";

const Patientdoctordetails = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 p-6">
      <Pageheader
        title={doctor.name}
        subtitle="Detailed Profile & Availability"
        breadcrumb={["Home", "Doctors", doctor.name]}
      />

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-1 transition-all"
      >
        ← Back to Doctors
      </button>

      {/* Main Card */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-10 border border-blue-100 animate-fadeIn">
        <DoctorInfoSection doctor={doctor} />

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate(`/book-appointment/${doctor.id}`)}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            💬 Book Appointment
          </button>
        </div>

        {/* Reviews */}
        <div className="mt-10 border-t border-blue-100 pt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            ⭐ Patient Reviews
          </h3>
          <ReviewList reviews={reviews} />
          <AddReviewForm onAddReview={handleAddReview} />
        </div>
      </div>
    </div>
  );
};

export default Patientdoctordetails;
