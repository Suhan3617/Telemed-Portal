import React from 'react'
import { useState } from 'react';

const editprofileform = ({patient}) => {
  const [form, setForm] = useState(patient);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 max-w-2xl mx-auto"
    >
      <h3 className="text-lg font-semibold text-blue-600 mb-4">
        Edit Profile
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded-md"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded-md"
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="border p-2 rounded-md"
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="border p-2 rounded-md"
          placeholder="Address"
        />
      </div>

      <button
        type="submit"
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Save Changes
      </button>
    </form>
  );
}

export default editprofileform
