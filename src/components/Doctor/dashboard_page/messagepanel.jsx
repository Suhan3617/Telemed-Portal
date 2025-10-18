import React from 'react'

import { motion } from 'framer-motion';
// Assume you've imported the messages and patient data
import { patients } from '../../../data/doctor/mockdata';

const patientMessages = [
  { pid: 'p4', text: 'Follow-up for knee pain', name: 'Priya Sharma', avatar: patients.find(p => p.id === 'p4')?.avatar },
  { pid: 'p2', text: 'Persistent migraine headaches', name: 'Aisha Khan', avatar: patients.find(p => p.id === 'p2')?.avatar },
  { pid: 'p1', text: 'Skin rash and itching', name: 'John Doe', avatar: patients.find(p => p.id === 'p1')?.avatar },
];

const messagepanel = () => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-blue-700 mb-4">Messages</h3>
      <div className="flex flex-col gap-3">
        {patientMessages.map((msg, index) => (
          <motion.div
            key={msg.pid}
            className="flex items-center gap-3 p-3 -mx-3 rounded-xl cursor-pointer hover:bg-blue-50/50 transition-colors duration-200"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.img
              src={msg.avatar}
              alt={msg.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/80"
              whileHover={{ rotate: 10 }}
            />
            <div>
              <p className="font-semibold text-gray-800">{msg.name}</p>
              <p className="text-gray-500 text-sm truncate w-full">{msg.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default messagepanel
