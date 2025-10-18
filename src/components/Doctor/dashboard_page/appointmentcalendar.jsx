import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Assuming you use lucide-react or similar icons

// Data: Hardcoded for March 2024 as seen in the image
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MARCH_2024_DATES = [
  null, null, null, null, null, 1, 2, // Starts on Saturday
  3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30,
  31
];

const calendarVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 20 : -20,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
  exit: (direction) => ({
    x: direction < 0 ? 20 : -20,
    opacity: 0,
  }),
};
const appointmentcalendar = () => {
  const [selectedDate, setSelectedDate] = useState(12); // Mock: 12th is selected
  const [month, setMonth] = useState("March 2024");
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    // Logic to change month (mocked for this component)
    if (newDirection > 0) {
      setMonth("April 2024");
    } else {
      setMonth("February 2024");
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.0, duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-blue-700 mb-4">Appointment Calendar</h3>
      
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-4 text-gray-700">
        <motion.button
          onClick={() => paginate(-1)}
          className="p-1 rounded-full text-blue-500 hover:bg-blue-100 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
        
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={month}
            custom={direction}
            variants={calendarVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="absolute w-28 text-center font-semibold"
          >
            {month}
          </motion.div>
        </AnimatePresence>

        <motion.button
          onClick={() => paginate(1)}
          className="p-1 rounded-full text-blue-500 hover:bg-blue-100 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 pt-2">
        {/* Weekday Headers */}
        {WEEKDAYS.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500/80">
            {day}
          </div>
        ))}
        
        {/* Dates */}
        {MARCH_2024_DATES.map((date, index) => {
          if (!date) {
            return <div key={index} className="h-8"></div>; // Empty cell for alignment
          }

          const isSelected = date === selectedDate;

          return (
            <motion.div
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`h-8 w-full flex items-center justify-center text-sm font-semibold rounded-lg cursor-pointer transition-all duration-150 ${
                isSelected 
                  ? 'bg-blue-500 text-white shadow-md shadow-blue-500/50' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
              }`}
              whileHover={{ scale: isSelected ? 1.05 : 1.1 }}
              whileTap={{ scale: 0.95 }}
              layoutId={`date-marker-${date}`} // For a smooth date transition if needed
            >
              {date}
            </motion.div>
          );
        })}
      </div>
      
      {/* Mini-Chart / Summary Area */}
      <div className='mt-6 p-4 bg-blue-50/50 rounded-xl border border-blue-200/50'>
        <p className='text-sm font-semibold text-blue-700'>Appointments on {selectedDate} March:</p>
        <div className='flex items-center justify-center h-10'>
             {/* Mock mini-chart or stats for the selected date */}
             <div className='w-full h-2 bg-blue-200 rounded-full'>
                 <motion.div 
                    className='h-full bg-blue-500 rounded-full' 
                    initial={{ width: 0 }}
                    animate={{ width: `${(selectedDate % 7) * 10 + 30}%` }} // Mock growth based on date
                    transition={{ delay: 0.5, duration: 0.8 }}
                 />
             </div>
        </div>
      </div>
    </motion.div>
  );
}

export default appointmentcalendar
