import React, { useState } from "react";

const Doctorprescriptionform = ({ patients, onSubmit , defaultPatientId}) => {
  const [form, setForm] = useState({
    patientId: defaultPatientId || "",
    date: new Date().toISOString().split("T")[0],
    medicine: "",
    duration: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.patientId || !form.medicine) {
      alert("Please Select Patient and Enter Medicine");
      return;
    }
    onSubmit(form);
    setForm({
      patientId: "",
      date: new Date().toISOString().split("T")[0],
      medicine: "",
      duration: "",
      notes: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 space-y-6 border border-blue-100"
    >
      <h2 className="text-3xl font-semibold text-blue-600 mb-2 text-center">
        New Prescription
      </h2>

      {/* Patient Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Patient
        </label>
        <select
          name="patientId"
          value={form.patientId}
          onChange={handleChange}
          className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          required
        >
          <option value="">Select Patient</option>
          {patients.map((p) => (
            <option value={p.id} key={p.id}>
              {p.name} ({p.age}y)
            </option>
          ))}
        </select>
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Medicine */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Medicine
        </label>
        <input
          type="text"
          name="medicine"
          value={form.medicine}
          onChange={handleChange}
          placeholder="e.g., Cetirizine 10mg"
          className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          required
        />
      </div>

      {/* Duration */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Duration
        </label>
        <input
          type="text"
          name="duration"
          value={form.duration}
          onChange={handleChange}
          placeholder="e.g., 5 days"
          className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Notes</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Additional instructions"
          rows={3}
          className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg shadow-md transition transform hover:scale-[1.02]"
      >
        Save Prescription
      </button>
    </form>
  );
};

export default Doctorprescriptionform;
