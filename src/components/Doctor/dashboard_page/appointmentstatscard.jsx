import React from 'react'

const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  hover: { scale: 1.03, boxShadow: "0 0 20px 0 var(--primary-glow)", transition: { duration: 0.3 } },
};

const appointmentstatscard = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={cardVariants}
      className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-blue-100/50 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white/50 opacity-50 z-0 rounded-2xl"></div>
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <p className="text-gray-600 font-medium">{label}</p>
          {Icon && <Icon className="w-6 h-6 text-blue-500/80" />}
        </div>
        <motion.h2
          className="text-5xl font-extrabold text-blue-800 mt-4 leading-none"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.4)' }} // Manual glow effect
        >
          {value}
        </motion.h2>
      </div>
    </motion.div>
  );
}

export default appointmentstatscard
