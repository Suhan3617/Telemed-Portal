import React, { useState } from "react";

const DoctorProfileSettings = () => {
  const [doctor, setDoctor] = useState({
    name: "Dr.Smith",
    specialization: "Cardiologist",
    email: "dr.john@example.com",
    phone: "+91 9876543210",
    hospital: "City Hospital",
    bio: "Experienced cardiologist with 10+ years of practice in preventive cardiology and cardiac care.",
    photo: "https://i.pravatar.cc/150?img=12",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSave = () => {
    console.log("Updated doctor details:", doctor);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-white p-6">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Profile Settings
      </h1>

      {/* Doctor Profile Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center mb-8 transform transition duration-300 hover:scale-103">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-blue-700">{doctor.name}</h2>
          <p className="text-xl text-gray-600">{doctor.specialization}</p>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Personal Info */}
        <section className="bg-white p-6 rounded-xl shadow space-y-3 transform transition hover:scale-103">
          <h3 className="font-semibold text-lg text-blue-600">Personal Info</h3>
          <input
            name="name"
            value={doctor.name}
            onChange={handleChange}
            className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Name"
          />
          <input
            name="specialization"
            value={doctor.specialization}
            onChange={handleChange}
            className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Specialization"
          />
          <input
            name="hospital"
            value={doctor.hospital}
            onChange={handleChange}
            className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Hospital"
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Save
          </button>
        </section>

        {/* Consultation Hours */}
        <section className="bg-white p-6 rounded-xl shadow space-y-3 transform transition hover:scale-103">
          <h3 className="font-semibold text-lg text-blue-600">Consultation Hours</h3>
          <input
            className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Mon–Fri 10:00–18:00"
          />
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
            Save
          </button>
        </section>

        {/* Fees & Payment */}
        <section className="bg-white p-6 rounded-xl shadow space-y-3 transform transition hover:scale-103">
          <h3 className="font-semibold text-lg text-blue-600">Fees & Payment</h3>
          <div className="grid grid-cols-2 gap-2">
            <input
              className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="VC Fee"
              defaultValue="₹800"
            />
            <input
              className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="In-person Fee"
              defaultValue="₹1000"
            />
          </div>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
            Save
          </button>
        </section>

        {/* VC & Chat Settings */}
        <section className="bg-white p-6 rounded-xl shadow space-y-3 transform transition hover:scale-103">
          <h3 className="font-semibold text-lg text-blue-600">VC & Chat Settings</h3>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked /> Enable patient messaging
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked /> Default mic ON
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Default camera ON
          </label>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
            Save
          </button>
        </section>

        {/* Security */}
        <section className="bg-white p-6 rounded-xl shadow space-y-3 lg:col-span-2 transform transition hover:scale-103">
          <h3 className="font-semibold text-lg text-blue-600">Security</h3>
          <input
            className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Change password"
            type="password"
          />
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Enable 2FA
          </label>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
            Update Security
          </button>
        </section>
      </div>
    </div>
  );
};

export default DoctorProfileSettings;
