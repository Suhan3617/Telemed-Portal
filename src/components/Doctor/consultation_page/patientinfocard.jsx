import React from 'react'

const patientinfocard = ({ summaryData }) => {
  return (
    <motion.div
    initial={{ x: -30, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="p-6 bg-white rounded-3xl shadow-2xl border border-blue-100/80 w-full"
    style={{
      boxShadow: '0 10px 30px -5px rgba(59, 130, 246, 0.15)',
    }}
  >
    <div className="flex items-center space-x-4 mb-4 border-b border-blue-100 pb-4">
      <motion.img
        src={summaryData.avatar}
        alt={summaryData.name}
        className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-500/50"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      />
      <div>
        <h2 className="text-2xl font-extrabold text-gray-900">{summaryData.name}</h2>
        <p className="text-sm font-semibold text-blue-600">{summaryData.condition}</p>
      </div>
    </div>
    <div className="space-y-2 text-sm">
      <div className="text-gray-700 flex items-center">
        <Calendar size={16} className="mr-3 text-blue-400" />
        DOB: <span className="font-medium ml-1">{summaryData.dob}</span>
      </div>
      <div className="text-gray-700 flex items-center">
        <Clock size={16} className="mr-3 text-blue-400" />
        Last Visit: <span className="font-medium ml-1">{summaryData.lastVisit}</span>
      </div>
    </div>
    <GlowButton Icon={Search} color="blue" className="w-full mt-4 text-sm font-semibold py-2" onClick={() => console.log('View Full Record')}>
      View Full Patient Record
    </GlowButton>
  </motion.div>
  )
}

export default patientinfocard
