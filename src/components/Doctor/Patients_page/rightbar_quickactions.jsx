import React from 'react'
import { MessageCircle , FileText , Printer , Flag} from "lucide-react";

const rightbar_quickactions = ({patient}) => {
  return (
    <aside className="w-64 bg-gradient-to-t from-blue-50 to-white p-4 rounded-2xl shadow-lg text-blue-900 sticky top-20 h-fit space-y-5">
      <h4 className="font-semibold text-lg border-b border-blue-300 pb-2">Quick Actions</h4>
      <button className="flex items-center space-x-2 hover:glow bg-blue-100 px-3 py-2 rounded-lg w-full font-semibold transition">
        <MessageCircle size={20} />
        <span>Send Message</span>
      </button>
      <button className="flex items-center space-x-2 hover:glow bg-blue-100 px-3 py-2 rounded-lg w-full font-semibold transition">
        <FileText size={20} />
        <span>Share Records</span>
      </button>
      <button className="flex items-center space-x-2 hover:glow bg-blue-100 px-3 py-2 rounded-lg w-full font-semibold transition">
        <Printer size={20} />
        <span>Print</span>
      </button>
      <button className="flex items-center space-x-2 hover:glow bg-amber-100 px-3 py-2 rounded-lg w-full font-semibold text-amber-800 transition">
        <Flag size={20} />
        <span>Add Flag / Alert</span>
      </button>

      <h4 className="font-semibold text-lg border-b border-blue-300 pb-2">Short Analytics</h4>
      <p>Adherence Score: 87%</p>
      <p>Upcoming Meds Due: 2</p>
      <p>Last Medication Sync: 2025-10-10</p>

      {/* Only if doctor has privileges */}
      <h4 className="font-semibold text-lg border-b border-blue-300 pb-2">Admin Actions</h4>
      <button className="bg-red-400 hover:bg-red-500 text-white rounded-lg w-full py-2 font-semibold transition">
        Flag for Review
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 rounded-lg w-full py-2 font-semibold transition">
        Archive Patient
      </button>
    </aside>
  );
}

export default rightbar_quickactions



