import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "../Common/Badge";
import { Link } from "react-router-dom";

const DoctorDetailsModal = ({ open, onClose, current }) => {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-3xl overflow-y-auto max-h-[90vh] border border-blue-200"
        >
          <div className="flex justify-between items-center border-b border-blue-100 p-5">
            <h3 className="text-lg font-bold text-blue-700">
              Appointment Details
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-blue-600 text-xl"
            >
              ✕
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Patient Info */}
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl shadow-md">
              <img
                src={current.appt.patientPhoto}
                className="w-16 h-16 rounded-full border-4 border-blue-400 shadow-lg"
              />
              <div>
                <div className="font-extrabold text-xl text-blue-700">
                  {current.appt.patientName}
                </div>
                <div className="text-gray-600">
                  {current.appt.date} • {current.appt.time}
                </div>
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
                  <b>Chronic:</b>{" "}
                  {current.patient?.history?.chronicIllnesses?.join(", ") || "-"}
                </li>
                <li>
                  <b>Allergies:</b>{" "}
                  {current.patient?.history?.allergies?.join(", ") || "-"}
                </li>
                <li>
                  <b>Surgeries:</b>{" "}
                  {current.patient?.history?.surgeries?.join(", ") || "-"}
                </li>
                <li>
                  <b>Family:</b>{" "}
                  {current.patient?.history?.familyHistory?.join(", ") || "-"}
                </li>
              </ul>
            </div>

            {/* Prescriptions */}
            <div>
              <h4 className="font-semibold text-lg text-blue-600 mb-2">
                Previous Prescriptions
              </h4>
              <div className="overflow-x-auto shadow-md rounded-xl border border-blue-100">
                <table className="w-full text-sm">
                  <thead className="bg-blue-100 text-blue-700">
                    <tr>
                      <th className="p-2">Date</th>
                      <th className="p-2">Medicine</th>
                      <th className="p-2">Duration</th>
                      <th className="p-2">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.appt.prescriptions.map((p, i) => (
                      <tr key={i} className="hover:bg-blue-50 transition">
                        <td className="p-2 border-t">{p.date}</td>
                        <td className="p-2 border-t">{p.medicine}</td>
                        <td className="p-2 border-t">{p.duration}</td>
                        <td className="p-2 border-t">{p.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 justify-end pt-2">
              <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg hover:scale-105 transition-transform">
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DoctorDetailsModal;
