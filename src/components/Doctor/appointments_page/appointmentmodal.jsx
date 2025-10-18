import { motion } from "framer-motion";
import { FileText, Pill, Activity, X, User2 } from "lucide-react";

export default function AppointmentDetailsModal({ appointment, open, onClose }) {
  if (!open || !appointment) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-blue-200 via-sky-50 to-indigo-100 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] p-8 sm:p-10 max-w-2xl w-[92%] sm:w-full overflow-y-auto max-h-[88vh] border border-blue-100"
        initial={{ scale: 0.9, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* ❌ Close Button */}
        <motion.button
          onClick={onClose}
          whileHover={{ rotate: 90, scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 border border-gray-200 text-blue-500 hover:text-blue-700 shadow-sm transition-all"
        >
          <X size={20} />
        </motion.button>

        {/* 🧑‍⚕️ Header */}
        <div className="flex items-center gap-5 border-b border-blue-100 pb-5 mb-6">
          <motion.img
            src={appointment.patientPhoto}
            alt={appointment.patientName}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="w-16 h-16 rounded-full border-2 border-blue-200 shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">
              {appointment.patientName}
            </h2>
            <p className="text-gray-500">{appointment.reason}</p>
          </div>
        </div>

        {/* 🩺 Details */}
        <div className="space-y-8">
          {/* Patient Info */}
          <DetailSection
            title="Patient Info"
            icon={<User2 className="text-blue-600" />}
          >
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-blue-700">Age:</span>{" "}
                {appointment.age}
              </p>
              <p>
                <span className="font-semibold text-blue-700">Gender:</span>{" "}
                {appointment.gender}
              </p>
              <p>
                <span className="font-semibold text-blue-700">Date:</span>{" "}
                {appointment.date}
              </p>
              <p>
                <span className="font-semibold text-blue-700">Time:</span>{" "}
                {appointment.time}
              </p>
            </div>
          </DetailSection>

          {/* Patient History */}
          <DetailSection
            title="Patient History"
            icon={<Activity className="text-blue-600" />}
          >
            {Object.entries(appointment.history).map(([key, val]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-medium text-gray-700 capitalize">{key}</p>
                <ul className="ml-5 list-disc text-gray-500 text-sm">
                  {val.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </DetailSection>

          {/* Prescriptions */}
          <DetailSection
            title="Prescriptions"
            icon={<Pill className="text-blue-600" />}
          >
            <div className="grid gap-3">
              {appointment.prescriptions.map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4 rounded-xl border border-blue-100 shadow-inner hover:shadow-md transition-all"
                >
                  <p className="font-semibold text-blue-700 text-[15px]">
                    {p.medicine}
                  </p>
                  <p className="text-xs text-gray-600">{p.duration}</p>
                  <p className="text-xs text-gray-500 italic">{p.notes}</p>
                </motion.div>
              ))}
            </div>
          </DetailSection>

          {/* Lab Reports */}
          <DetailSection
            title="Lab Reports"
            icon={<FileText className="text-blue-600" />}
          >
            <div className="grid gap-2">
              {appointment.labReports.map((r, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between text-sm text-slate-600 border-b border-blue-50 pb-1"
                >
                  <span>{r.title}</span>
                  <span className="text-gray-400">{r.date}</span>
                </motion.div>
              ))}
            </div>
          </DetailSection>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DetailSection({ title, icon, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/30 via-blue-200/50 to-blue-50 border border-blue-100 shadow-sm transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="font-semibold text-blue-700 text-lg">{title}</h3>
      </div>
      <div className="pl-1">{children}</div>
    </motion.div>
  );
}
