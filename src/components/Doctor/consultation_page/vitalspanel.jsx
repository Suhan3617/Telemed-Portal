import React from 'react'

const vitalspanel = ({vitalsdata}) => {
  return (
    <div className="p-4 space-y-6 overflow-y-auto h-[500px] custom-scrollbar">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {vitalsData.map((vital, index) => (
        <motion.div key={index} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15 }}>
          <VitalSignCard {...vital} />
        </motion.div>
      ))}
    </div>
    <motion.div
      className="col-span-3 p-6 bg-blue-50/70 rounded-2xl border-4 border-dashed border-blue-300 text-center text-blue-700 font-extrabold cursor-pointer hover:bg-blue-100 transition-all shadow-inner"
      whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)' }}
      whileTap={{ scale: 0.99 }}
    >
      <Plus size={32} className="mx-auto mb-2 text-blue-500" />
      <p className="text-lg">Integrate New Wearable / Manual Entry</p>
    </motion.div>
  </div>
  )
}

export default vitalspanel
