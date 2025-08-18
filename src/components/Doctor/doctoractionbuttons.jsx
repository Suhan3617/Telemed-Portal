import { ClipboardList, FileText, Video } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const actions = [
  {
    label: "Start Consultation",
    icon: <Video size={18} />,
    color: "bg-blue-500 hover:bg-blue-600",
    path: "/doctor/consultation", 
  },
  {
    label: "Write Prescription",
    icon: <FileText size={18} />,
    color: "bg-blue-500 hover:bg-blue-600",
    path: "/doctor/prescription",
  },
  {
    label: "View Medical Records",
    icon: <ClipboardList size={18} />,
    color: "bg-blue-500 hover:bg-blue-600",
    path: "/doctor/records",
  },
];

const doctoractionbuttons = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-wrap gap-4">
      {actions.map((a) => (
        <Link
          key={a.label}
          to={a.path}
          className={`flex items-center gap-2 text-white px-4 py-2 rounded-lg transition ${a.color}`}
        >
          {a.icon}
          {a.label}
        </Link>
      ))}
    </div>
  );
};

export default doctoractionbuttons;
