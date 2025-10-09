import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Save } from 'lucide-react';

const Editprofileform = ({ patient }) => {
  const [form, setForm] = useState(patient);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl p-8 max-w-3xl mx-auto border border-blue-100"
    >
      <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        ✏️ Edit Profile
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1 font-medium">Full Name</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
            <User size={18} className="text-blue-500 mr-2" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
              placeholder="Enter your name"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1 font-medium">Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
            <Mail size={18} className="text-blue-500 mr-2" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1 font-medium">Phone Number</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
            <Phone size={18} className="text-blue-500 mr-2" />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1 font-medium">Address</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
            <MapPin size={18} className="text-blue-500 mr-2" />
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
              placeholder="Enter your address"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all w-full md:w-auto mx-auto"
      >
        <Save size={20} /> Save Changes
      </motion.button>
    </motion.form>
  );
};

export default Editprofileform;
