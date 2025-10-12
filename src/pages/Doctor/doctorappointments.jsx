import React, { useState, useMemo } from "react";
import Pageheader from "../../components/Common/pageheader";
import FiltersBar from "../../components/Doctor/doctorfilterbar";
import SearchInput from "../../components/Common/searchinput";
import { appointments, patients } from "../../data/doctor/mockdata";
import Badge from "../../components/Common/Badge";
import Modal from "../../components/Common/Modal";
import Doctorappointmentcard from "../../components/Doctor/doctorappointmentcard";
import { Link } from "react-router-dom";

const DoctorAppointments = () => {
  const [q, setq] = useState("");
  const [type, settype] = useState("All");
  const [range, setrange] = useState("Upcoming");
  const [open, setopen] = useState(false);
  const [current, setcurrent] = useState(null);

  const list = useMemo(() => {
    return appointments.filter((a) => {
      const matchQ = a.patientName.toLowerCase().includes(q.toLowerCase());
      const matchtype = type === "All" || a.type === type;
      const matchrange = true; // stub for now
      return matchQ && matchtype && matchrange;
    });
  }, [q, type, range]);

  const openDetails = (appt) => {
    const patient = patients.find((p) => p.id === appt.patientId);
    const patientPrescriptions = appt.prescriptions.filter(
      (pr) => pr.patientId === appt.patientId
    );
    setcurrent({ appt, patient, patientPrescriptions });
    setopen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      {/* Page Header */}
      <Pageheader
        title="Appointments Records"
        subtitle="Manage and view your patient appointments"
        breadcrumb={["Dashboard", "Appointments"]}
      />

      {/* Filters */}
      <FiltersBar>
        <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
          {/* Search */}
          <div className="flex-1 min-w-[200px]">
            <SearchInput
              value={q}
              onChange={setq}
              placeholder="Search patient..."
              className="backdrop-blur-sm bg-white/70 shadow-md rounded-xl border border-blue-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Type Filter */}
          <select
            className="px-4 py-2 rounded-xl border border-blue-200 bg-white/70 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-700 font-medium transition"
            value={type}
            onChange={(e) => settype(e.target.value)}
          >
            <option>All</option>
            <option>Video Consultation</option>
            <option>In-person</option>
          </select>

          {/* Range Filter */}
          <select
            className="px-4 py-2 rounded-xl border border-blue-200 bg-white/70 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-700 font-medium transition"
            value={range}
            onChange={(e) => setrange(e.target.value)}
          >
            <option>Today</option>
            <option>Upcoming</option>
            <option>Past</option>
          </select>
        </div>
      </FiltersBar>

      {/* Appointments Grid */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <Doctorappointmentcard
            key={a.id}
            appt={a}
            onStartVC={() => alert("Start VC")}
            onViewDetails={() => openDetails(a)}
            onReschedule={() => alert("Reschedule")}
            onCancel={() => alert("Cancel")}
          />
        ))}
      </div>

      {/* Modal for Details */}
      <Modal open={open} onClose={() => setopen(false)} title="Appointment Details">
        {current && (
          <div className="space-y-6">
            {/* Patient Info */}
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl shadow-md">
              <img
                src={current.appt.patientPhoto}
                className="w-16 h-16 rounded-full border-4 border-blue-500 shadow-lg"
              />
              <div>
                <div className="font-extrabold text-xl text-blue-700">
                  {current.appt.patientName}
                </div>
                <div className="text-gray-600">{current.appt.date} • {current.appt.time}</div>
                <div className="mt-2 flex gap-2">
                  <Badge color="blue">{current.appt.type}</Badge>
                  <Badge color="yellow">{current.appt.status}</Badge>
                </div>
              </div>
            </div>

            {/* Reason for Visit */}
            <div>
              <h4 className="font-semibold text-lg text-blue-600 mb-2">
                Reason for Visit
              </h4>
              <p className="text-gray-700 bg-gray-50 p-3 rounded-xl shadow-sm">
                {current.appt.reason}
              </p>
            </div>

            {/* Patient Medical History */}
            <div>
              <h4 className="font-semibold text-lg text-blue-600 mb-2">
                Patient Medical History
              </h4>
              <ul className="list-disc list-inside text-gray-700 bg-gray-50 p-3 rounded-xl shadow-sm space-y-1">
                <li>
                  <b>Chronic: </b>
                  {current.patient?.history?.chronicIllnesses?.join(", ") || "-"}
                </li>
                <li>
                  <b>Allergies: </b>
                  {current.patient?.history?.allergies?.join(", ") || "-"}
                </li>
                <li>
                  <b>Surgeries: </b>
                  {current.patient?.history?.surgeries?.join(", ") || "-"}
                </li>
                <li>
                  <b>Family: </b>
                  {current.patient?.history?.familyHistory?.join(", ") || "-"}
                </li>
              </ul>
            </div>

            {/* Prescriptions */}
            <div>
              <h4 className="font-semibold text-lg text-blue-600 mb-2">
                Previous Prescriptions
              </h4>
              <div className="overflow-x-auto shadow-md rounded-xl">
                <table className="w-full border border-gray-200 text-sm rounded-xl overflow-hidden">
                  <thead className="bg-blue-100 text-blue-700">
                    <tr>
                      <th className="p-2 border">Date</th>
                      <th className="p-2 border">Medicine</th>
                      <th className="p-2 border">Duration</th>
                      <th className="p-2 border">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.appt.prescriptions.map((p, i) => (
                      <tr key={i} className="hover:bg-blue-50 transition">
                        <td className="p-2 border">{p.date}</td>
                        <td className="p-2 border">{p.medicine}</td>
                        <td className="p-2 border">{p.duration}</td>
                        <td className="p-2 border">{p.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-end">
              <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg hover:from-indigo-500 hover:to-blue-500 hover:scale-105 transition transform duration-300">
                Start VC
              </button>
              <button className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition">
                Add Notes
              </button>
              <Link
                to="/doctor/prescription"
                state={{ patientId: current.patient.id }}
                className="px-5 py-2 rounded-xl bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
              >
                Issue Prescription
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DoctorAppointments;
