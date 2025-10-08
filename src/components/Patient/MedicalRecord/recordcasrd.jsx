import React from 'react'
import { FileText } from 'lucide-react'

const Recordcard = ({ record }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-4 mb-3">
        <div className="bg-blue-100 p-3 rounded-full shadow-inner">
          <FileText className="text-blue-500" size={22} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-lg">{record.title}</h3>
          <p className="text-sm text-gray-500">{record.type}</p>
        </div>
      </div>

      <div className="text-sm text-gray-400 mb-4">{record.date}</div>

      <a
        href={record.fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-blue-300"
      >
        View / Download
      </a>
    </div>
  )
}

export default Recordcard
