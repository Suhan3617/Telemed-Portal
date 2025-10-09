import React from 'react';
import { motion } from 'framer-motion';
import { Phone, User } from 'lucide-react';

const Emergencycontact = ({ contact }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
    >
      {/* Title */}
      <h3 className="font-semibold text-xl text-blue-600 mb-6 flex items-center gap-2">
        <User size={22} /> Emergency Contact
      </h3>

      {/* Contact Details */}
      <div className="space-y-3 text-gray-700">
        <p>
          <strong>Name:</strong> {contact.name}
        </p>
        <p>
          <strong>Relation:</strong> {contact.relation}
        </p>
        <p className="flex items-center justify-center gap-2">
          <Phone size={18} className="text-blue-500" /> {contact.phone}
        </p>
      </div>
    </motion.div>
  );
};

export default Emergencycontact;
