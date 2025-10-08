import React, { useState } from 'react'
import Recordfilter from './recordfilter'
import Recordcard from './recordcasrd'
import { motion, AnimatePresence } from 'framer-motion'

const Recordlist = ({ records }) => {
  const [filter, setFilter] = useState("All")

  const filteredRecords =
    filter === "All" ? records : records.filter((r) => r.type === filter)

  return (
    <div className="mt-6">
      <Recordfilter filter={filter} setFilter={setFilter} />

      <motion.div 
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
      >
        <AnimatePresence>
          {filteredRecords.map((record) => (
            <motion.div
              key={record.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Recordcard record={record} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Recordlist
