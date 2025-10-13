import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AppointmentHeader = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ x: -5 }}
      onClick={() => navigate(-1)}
      className="flex items-center text-blue-600 mb-8 font-semibold hover:text-blue-700 transition-all"
    >
      <ArrowLeft className="w-5 h-5 mr-2" /> Back to Appointments
    </motion.button>
  );
};

export default AppointmentHeader;
