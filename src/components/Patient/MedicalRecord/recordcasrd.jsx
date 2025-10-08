import React from 'react'
import { FileText } from 'lucide-react';

const recordcasrd = ({record}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-blue-100 p-3 rounded-full">
          <FileText className="text-blue-500" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{record.title}</h3>
          <p className="text-sm text-gray-500">{record.type}</p>
        </div>
      </div>
      <div className="text-sm text-gray-400 mb-3">{record.date}</div>
      <a
        href={record.fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition"
      >
        View / Download
      </a>
    </div>
  );
}

export default recordcasrd
