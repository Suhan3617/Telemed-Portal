import React from "react";
import SearchInput from "../Common/searchinput";

const patientbookappointments = () => {
  const [form, setform] = useState({
    doctor: "",
    specialization: "",
    date: "",
    time: "",
    ty,
  });
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Booked:", form);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-blue-600 mb-4">Book Appointment</h2>
      <form onSubmit={handlesubmit} className="space-y-4">
        <SearchInput placeholder="Search Doctor..." />
        <input
          type="text"
          name="specialization"
          value={form.specialization}
          onChange={handleChange}
          placeholder="Specialization (e.g. Cardiology)"
          className="w-full border p-2 rounded-lg"
        />

        <div className="flex gap-4">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="flex-1 border p-2 rounded-lg"
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="flex-1 border p-2 rounded-lg"
          />
        </div>

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg"
        >
          <option>Video Consultation</option>
          <option>In-Person</option>
        </select>

        <Button type="submit" className="w-full">
          Confirm Appointment
        </Button>
      </form>
    </div>
  );
};

export default patientbookappointments;
