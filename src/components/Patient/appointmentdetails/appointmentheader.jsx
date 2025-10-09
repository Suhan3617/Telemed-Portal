import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AppointmentHeader = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center text-blue-600 mb-6 font-medium hover:underline"
    >
      <ArrowLeft className="w-5 h-5 mr-2" /> Back to Appointments
    </button>
  );
};

export default AppointmentHeader;
