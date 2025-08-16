import React from "react";
import { useState } from "react";
const doctorprescriptionform = () => {
  const [form, setform] = useState({
    patientId: "",
    date: new Date().toISOString().split("T")[0],
    medicine: "",
    duration: "",
    notes: "",
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.patientId || !form.medicine) {
      alert("Please Select Patient and Enter Medicine");
      return;
    }
    onSubmit(form);
    setform({
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
      className="bg-white shadow-md rounded-2xl p-6 space-y-4 w-full max-w-md"
    >
      <h2 className="text-xl font-bold text-gray-700 mb-2">New Prescription</h2>
      {/*Patient Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-600 ">
          Patient
        </label>
        <select
          name="patientId"
          value={form.patientId}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-xl focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Patient</option>
          {patients.map((p) => {
            <option value={p.id} key={p.id}>
              {p.name} ({p.age}y)
            </option>;
          })}
        </select>
      </div>
      {/*Date */}
      <div>
        <label className="block text-sm font-medium text-gray-600">Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-xl focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Medicine */}
      <div>
        <label className="block text-sm font-medium text-gray-600">
          Medicine
        </label>
        <input
          type="text"
          name="medicine"
          value={form.medicine}
          onChange={handleChange}
          placeholder="e.g., Cetirizine 10mg"
          className="w-full mt-1 p-2 border rounded-xl focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Duration */}
      <div>
        <label className="block text-sm font-medium text-gray-600">
          Duration
        </label>
        <input
          type="text"
          name="duration"
          value={form.duration}
          onChange={handleChange}
          placeholder="e.g., 5 days"
          className="w-full mt-1 p-2 border rounded-xl focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-600">Notes</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Additional instructions"
          className="w-full mt-1 p-2 border rounded-xl focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Save Prescription
      </button>
    </form>
  );
};

export default doctorprescriptionform;
