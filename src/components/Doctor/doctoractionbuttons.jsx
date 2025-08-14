import { ClipboardList, FileText, Video } from "lucide-react";
import React from "react";

const actions = [
  {
    label: "Start Consultation",
    icon: <Video size={18} />,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    label: "Write Prescription",
    icon: <FileText size={18} />,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    label: "View Medical Records",
    icon: <ClipboardList size={18} />,
    color: "bg-blue-500 hover:bg-blue-600",
  },
];

const doctoractionbuttons = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-wrap gap-4">
      {actions.map((a) => (
        <button
          key={a.label}
          className={`flex items-center gap-2 text-white px-4 py-2 rounded-lg transition ${a.color}`}
        >
          {a.icon}
          {a.label}
        </button>
      ))}
    </div>
  );
};

export default doctoractionbuttons;
