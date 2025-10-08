import React from 'react'
import { ChevronRight } from 'lucide-react'
import { motion , AnimatePresence} from 'framer-motion'

const Pageheader = ({ title, subtitle, breadcrumb }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg"
    >
      {/* Breadcrumb */}
      {breadcrumb && (
        <div className="flex items-center gap-2 text-sm text-blue-100 mb-3">
          {breadcrumb.map((crumb, index) => (
            <span key={index} className="flex items-center">
              {crumb}
              {index < breadcrumb.length - 1 && (
                <ChevronRight size={16} className="mx-1 text-blue-200" />
              )}
            </span>
          ))}
        </div>
      )}

      {/* Title + Subtitle */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-1 drop-shadow-sm">
        {title}
      </h1>
      {subtitle && (
        <p className="text-blue-100 text-sm md:text-base font-medium">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default Pageheader
