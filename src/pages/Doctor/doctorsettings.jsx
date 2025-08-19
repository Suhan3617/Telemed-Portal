import React, { useState } from "react";

const DoctorProfileSettings = () => {
  const [doctor, setDoctor] = useState({
    name: "Dr. John Doe",
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
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Doctor Profile Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 flex gap-6 items-center">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-blue-700">{doctor.name}</h2>
          <p className="text-gray-600">{doctor.specialization}</p>
          <p className="text-sm text-gray-500">{doctor.hospital}</p>
        </div>
      </div>

      {/* Settings Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Personal Info */}
        <section className="bg-white p-6 rounded-xl shadow space-y-3">
          <h3 className="font-semibold">Personal Info</h3>
          <input
            name="name"
            value={doctor.name}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full"
            placeholder="Name"
          />
          <input
            name="specialization"
            value={doctor.specialization}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full"
            placeholder="Specialization"
          />
          <input
            name="hospital"
            value={doctor.hospital}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full"
            placeholder="Hospital"
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            Save
          </button>
        </section>

        {/* Consultation Hours */}
        <section className="bg-white p-6 rounded-xl shadow space-y-3">
          <h3 className="font-semibold">Consultation Hours</h3>
          <input
            className="border rounded-lg px-3 py-2 w-full"
            placeholder="Mon–Fri 10:00–18:00"
          />
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
            Save
          </button>
        </section>

        {/* Fees & Payment */}
        <section className="bg-white p-6 rounded-xl shadow space-y-3">
          <h3 className="font-semibold">Fees & Payment</h3>
          <div className="grid grid-cols-2 gap-2">
            <input
              className="border rounded-lg px-3 py-2 w-full"
              placeholder="VC Fee"
              defaultValue="₹800"
            />
            <input
              className="border rounded-lg px-3 py-2 w-full"
              placeholder="In-person Fee"
              defaultValue="₹1000"
            />
          </div>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
            Save
          </button>
        </section>

        {/* VC & Chat Settings */}
        <section className="bg-white p-6 rounded-xl shadow space-y-3">
          <h3 className="font-semibold">VC & Chat Settings</h3>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked /> Enable patient messaging
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked /> Default mic ON
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Default camera ON
          </label>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
            Save
          </button>
        </section>

        {/* Security */}
        <section className="bg-white p-6 rounded-xl shadow space-y-3 lg:col-span-2">
          <h3 className="font-semibold">Security</h3>
          <input
            className="border rounded-lg px-3 py-2 w-full"
            placeholder="Change password"
            type="password"
          />
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Enable 2FA
          </label>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
            Update Security
          </button>
        </section>
      </div>
    </div>
  );
};

export default DoctorProfileSettings;
