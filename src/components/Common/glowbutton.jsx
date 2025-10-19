import React from 'react'

const glowbutton = ({ children, color = 'blue', Icon, onClick, className = '', disabled = false }) => {
  return (
    <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.02, boxShadow: disabled ? 'none' : `0 8px 30px -5px rgba(59, 130, 246, 0.8)` }}
    whileTap={{ scale: disabled ? 1 : 0.98 }}
    disabled={disabled}
    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-${color}-500/50 
      ${disabled ? 'bg-gray-400 cursor-not-allowed shadow-gray-500/50' : `bg-${color}-600 shadow-${color}-500/50 hover:bg-${color}-700 ${className}`}
    `}
  >
    {Icon && <Icon size={20} />}
    <span>{children}</span>
  </motion.button>
  )
}

export default glowbutton


