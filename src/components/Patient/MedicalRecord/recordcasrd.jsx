import React from "react";
import { FileText } from "lucide-react";

const Recordcard = ({ record }) => {
  return (
    <div className="group relative bg-white/70 backdrop-blur-xl border border-blue-200 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-blue-200 transition-all duration-300 hover:-translate-y-2 w-full max-w-md">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-white/10 opacity-0 group-hover:opacity-100 rounded-2xl blur-md transition duration-300"></div>

      <div className="relative z-10 flex items-center gap-4 mb-4">
        <div className="bg-blue-100 p-3 rounded-full shadow-inner group-hover:scale-110 transition-all duration-300">
          <FileText className="text-blue-500" size={24} />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-700 transition-all">
            {record.title}
          </h3>
          <p className="text-sm text-blue-400 font-medium">{record.type}</p>
        </div>
      </div>

      <div className="relative z-10 text-sm text-gray-500 mb-5">
        📅 {record.date}
      </div>

      <a
        href={record.fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2.5 rounded-xl font-medium tracking-wide hover:shadow-blue-400 hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
      >
        View / Download
      </a>
    </div>
  );
};

export default Recordcard;
