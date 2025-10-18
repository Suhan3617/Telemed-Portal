import { motion } from "framer-motion";
import { FileText, Pill, Activity, X } from "lucide-react";

export default function AppointmentDetailsModal({ appointment, onClose }) {
  if (!appointment) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full relative overflow-y-auto max-h-[90vh]"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-blue-600"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 border-b pb-4 mb-4">
          <img
            src={appointment.patientPhoto}
            alt={appointment.patientName}
            className="w-16 h-16 rounded-full border-2 border-blue-200"
          />
          <div>
            <h2 className="text-xl font-semibold text-blue-700">
              {appointment.patientName}
            </h2>
            <p className="text-gray-500">{appointment.reason}</p>
          </div>
        </div>

        {/* History */}
        <div className="space-y-4">
          <Section title="Patient History" icon={<Activity className="text-blue-600" />}>
            {Object.entries(appointment.history).map(([key, val]) => (
              <div key={key}>
                <p className="font-medium text-gray-600 capitalize">{key}</p>
                <ul className="ml-4 list-disc text-gray-500 text-sm">
                  {val.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          {/* Prescriptions */}
          <Section title="Prescriptions" icon={<Pill className="text-blue-600" />}>
            {appointment.prescriptions.map((p, i) => (
              <div
                key={i}
                className="bg-blue-50/40 p-3 rounded-lg mb-2 border border-blue-100"
              >
                <p className="font-semibold text-blue-700">{p.medicine}</p>
                <p className="text-xs text-gray-500">{p.duration}</p>
                <p className="text-xs text-gray-500">{p.notes}</p>
              </div>
            ))}
          </Section>

          {/* Lab Reports */}
          <Section title="Lab Reports" icon={<FileText className="text-blue-600" />}>
            {appointment.labReports.map((r, i) => (
              <div key={i} className="text-sm text-gray-600">
                {r.title} – <span className="text-gray-400">{r.date}</span>
              </div>
            ))}
          </Section>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Section({ title, icon, children }) {
  return (
    <div className="p-4 rounded-xl bg-white/60 border border-blue-100 shadow-sm hover:shadow-blue-200/50 transition">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="font-semibold text-blue-700">{title}</h3>
      </div>
      {children}
    </div>
  );
}
