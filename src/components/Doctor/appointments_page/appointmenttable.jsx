import { Video, User, FileText, Clock } from "lucide-react";

export default function AppointmentsTable({ appointments, onView }) {
  const statusColors = {
    Scheduled: "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
    Pending: "bg-orange-100 text-orange-700",
  };

  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg backdrop-blur-lg bg-white/60 border border-blue-100">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="bg-blue-50 text-blue-700 uppercase text-xs">
          <tr>
            <th className="px-6 py-3 text-left">Patient</th>
            <th className="px-6 py-3 text-left">Date & Time</th>
            <th className="px-6 py-3 text-left">Type</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr
              key={a.id}
              className="border-b border-blue-50 hover:bg-blue-50/40 transition-all duration-200"
            >
              <td className="px-6 py-4 flex items-center gap-3">
                <img
                  src={a.patientPhoto}
                  alt={a.patientName}
                  className="w-10 h-10 rounded-full border-2 border-blue-200"
                />
                <div>
                  <p className="font-medium text-blue-700">{a.patientName}</p>
                  <p className="text-xs text-gray-500">{a.reason}</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>{a.time}</span>
                </div>
                <p className="text-xs text-gray-500">{a.date}</p>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-blue-500" />
                  {a.type}
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[a.status]}`}
                >
                  {a.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onView(a)}
                  className="text-blue-600 hover:text-blue-800 transition-all"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
