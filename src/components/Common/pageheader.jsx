import React from 'react'
import { ChevronRight } from 'lucide-react'

const pageheader = ({title,subtitle,breadcrumb}) => {
  return (
    <div className="mb-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-md">
      {/* Breadcrumb */}
      {breadcrumb && (
        <div className="flex items-center gap-2 text-sm text-blue-100 mb-2">
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
      <h1 className="text-2xl md:text-3xl font-bold mb-1">{title}</h1>
      {subtitle && <p className="text-blue-100 text-sm md:text-base">{subtitle}</p>}
    </div>
  )
}

export default pageheader
