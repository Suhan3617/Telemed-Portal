import React from 'react'
import GlowButton from '../../Common/glowbutton'
const actionfooter = () => {
  return (
    <motion.div
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
    className="fixed bottom-0 left-0 right-0 p-5 bg-white/90 backdrop-blur-md shadow-[0_-10px_30px_rgba(59,130,246,0.1)] z-50 border-t-2 border-blue-100"
  >
    <div className="max-w-7xl mx-auto flex justify-center space-x-8">
      <GlowButton Icon={Save} color="blue" onClick={() => console.log('Notes Saved!')}>
        Save & Finalize Visit
      </GlowButton>
      <GlowButton Icon={CheckCircle} color="emerald" onClick={() => console.log('Follow-Up Marked!')}>
        Mark for Follow-Up
      </GlowButton>
      <GlowButton Icon={Clock} color="purple" onClick={() => console.log('Scheduler Opened!')}>
        Schedule Next Appointment
      </GlowButton>
    </div>
  </motion.div>
  )
}

export default actionfooter
