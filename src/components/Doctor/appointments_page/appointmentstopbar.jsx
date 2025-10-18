import { Bell as FiBell, Search as FiSearch, X as FiX, Eye as FiEye, Edit as FiEdit, FileText as FiFileText, Calendar as FiCalendar, CheckCircle as FiCheckCircle, Clock as FiClock, XCircle as FiXCircle, Plus as FiPlus } from "lucide-react";

import { motion } from "framer-motion";

export default function Topbar({ stats }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-green-400 p-4 rounded-lg shadow-lg text-white font-semibold"
    >
      <div className="flex space-x-8 items-center">
        <div>
          <h4 className="text-sm uppercase opacity-75">Today’s Appointments</h4>
          <p className="text-2xl">{stats.today}</p>
        </div>
        <div>
          <h4 className="text-sm uppercase opacity-75">Upcoming (7 days)</h4>
          <p className="text-2xl">{stats.upcoming}</p>
        </div>
        <div>
          <h4 className="text-sm uppercase opacity-75">Completed</h4>
          <p className="text-2xl">{stats.completed}</p>
        </div>
        <div>
          <h4 className="text-sm uppercase opacity-75">Cancelled</h4>
          <p className="text-2xl">{stats.cancelled}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name / ID..."
            className="rounded-full py-1 px-4 pl-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300 transition shadow-md"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button className="relative p-2 rounded-full hover:bg-green-200 text-green-900 shadow-lg transition">
          <FiBell size={24} />
          {/* Notification count badge */}
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full animate-pulse">
            3
          </span>
        </button>
      </div>
    </motion.div>
  );
}
