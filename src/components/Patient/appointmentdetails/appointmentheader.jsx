import React from 'react'
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const appointmentheader = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center text-blue-600 mb-4 hover:underline"
    >
      <ArrowLeft className="w-5 h-5 mr-2" /> Back to Appointments
    </button>
  );
}

export default appointmentheader
