import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Droplet } from "lucide-react";

const Profilepageinfo = ({ patient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Gradient Circle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-transparent rounded-2xl opacity-50 pointer-events-none" />

      {/* Profile Image */}
      <div className="relative z-10">
        <img
          src={patient.photo}
          alt={patient.name}
          className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md object-cover mb-4"
        />
      </div>

      {/* Profile Info */}
      <div className="relative z-10 space-y-2">
        <h2 className="text-2xl font-bold text-blue-700">{patient.name}</h2>
        <p className="text-gray-600">
          {patient.gender}, {patient.age} yrs
        </p>

        <div className="mt-4 space-y-2 text-gray-700">
          <p className="flex items-center justify-center gap-2">
            <MapPin size={18} className="text-blue-500" /> {patient.address}
          </p>
          <p className="flex items-center justify-center gap-2">
            <Mail size={18} className="text-blue-500" /> {patient.email}
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone size={18} className="text-blue-500" /> {patient.phone}
          </p>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
          <Droplet size={18} /> Blood Group: {patient.bloodGroup}
        </div>
      </div>
    </motion.div>
  );
};

export default Profilepageinfo;
