import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User, Video, MapPin, Clock } from 'lucide-react';
// Yaha aap apne file path se import karein
import { appointments } from '../../../data/doctor/mockdata';
import { CalendarIcon } from 'lucide-react';

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const AppointmentCalendar = () => {
  const [currDate, setCurrDate] = useState(new Date()); 
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [direction, setDirection] = useState(0);

  const viewMonth = currDate.getMonth();
  const viewYear = currDate.getFullYear();

  // 1. Calendar Grid Logic
  const { daysInMonth, startDay } = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const totalDays = new Date(viewYear, viewMonth + 1, 0).getDate();
    return { daysInMonth: totalDays, startDay: firstDay };
  }, [viewMonth, viewYear]);

  // 2. Filter Appointments for selected date
  const selectedDateAppointments = useMemo(() => {
    const formattedSelected = selectedDate.toISOString().split('T')[0];
    return appointments.filter(app => app.date === formattedSelected);
  }, [selectedDate]);

  // 3. Helper to get appointments for any date (for heatmap)
  const getDayStatus = (day) => {
    const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const count = appointments.filter(app => app.date === dateStr).length;

    if (count >= 3) return "bg-blue-600 text-white"; // High
    if (count === 2) return "bg-blue-400 text-white"; // Medium
    if (count === 1) return "bg-blue-100 text-blue-800 border border-blue-200"; // Low
    return "text-gray-700 hover:bg-gray-100"; // No appointments
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrDate(new Date(viewYear, viewMonth + newDirection, 1));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-6xl mx-auto">
      {/* LEFT: CALENDAR CARD */}
      <motion.div 
        className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 flex-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">{MONTHS[viewMonth]} {viewYear}</h3>
          <div className="flex gap-2">
            <button onClick={() => paginate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition"><ChevronLeft size={20}/></button>
            <button onClick={() => paginate(1)} className="p-2 hover:bg-gray-100 rounded-full transition"><ChevronRight size={20}/></button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {WEEKDAYS.map(d => <div key={d} className="text-center text-xs font-bold text-gray-400 mb-2">{d}</div>)}
          
          {Array.from({ length: startDay }).map((_, i) => <div key={`empty-${i}`} />)}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const statusClass = getDayStatus(day);
            const isSelected = selectedDate.getDate() === day && selectedDate.getMonth() === viewMonth && selectedDate.getFullYear() === viewYear;

            return (
              <motion.button
                key={day}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDate(new Date(viewYear, viewMonth, day))}
                className={`h-10 w-10 sm:h-12 sm:w-12 rounded-2xl flex items-center justify-center text-sm font-semibold transition-all relative
                  ${statusClass}
                  ${isSelected ? 'ring-4 ring-blue-500/30 scale-105 z-10' : ''}
                `}
              >
                {day}
                {/* Visual indicator dot if appointments exist */}
                {getDayStatus(day).includes('blue') && !isSelected && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-orange-400 rounded-full border-2 border-white"></span>
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* RIGHT: APPOINTMENT DETAILS */}
      <motion.div 
        className="lg:w-96 space-y-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="flex items-center justify-between px-2">
          <h4 className="font-bold text-gray-700 flex items-center gap-2">
            <Clock size={18} className="text-blue-500" />
            Schedule for {selectedDate.getDate()} {MONTHS[viewMonth].slice(0, 3)}
          </h4>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 font-bold">
            {selectedDateAppointments.length} Found
          </span>
        </div>

        <AnimatePresence mode="wait">
          {selectedDateAppointments.length > 0 ? (
            <div className="space-y-3">
              {selectedDateAppointments.map((app) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img src={app.patientPhoto} alt={app.patientName} className="w-10 h-10 rounded-full border border-blue-100" />
                    <div>
                      <h5 className="font-bold text-gray-800 text-sm">{app.patientName}</h5>
                      <span className="text-xs text-gray-500 font-medium">{app.time} • {app.gender}</span>
                    </div>
                    <div className={`ml-auto px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${
                      app.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                      app.status === 'Cancelled' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {app.status}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                    {app.type === "Video Consultation" ? <Video size={14} className="text-blue-500"/> : <MapPin size={14} className="text-orange-500"/>}
                    <span className="truncate">{app.reason}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="h-48 flex flex-col items-center justify-center text-gray-400 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200"
            >
              <CalendarIcon size={40} className="mb-2 opacity-20" />
              <p className="text-sm font-medium">No appointments for this day</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <div className="flex justify-around p-3 bg-white rounded-2xl border border-gray-100 text-[10px] font-bold text-gray-500">
           <div className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-100 rounded-full"></span> 1 Appt</div>
           <div className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-400 rounded-full"></span> 2 Appts</div>
           <div className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-600 rounded-full"></span> 3+ Appts</div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppointmentCalendar;