import { motion } from 'framer-motion';
import { Video, PhoneOff, Plus } from 'lucide-react';
import IconWrapper from '../Utility/IconWrapper';

const VideoPlaceholder = ({ patientName }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="relative w-full aspect-[16/9] bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-500"
    style={{ boxShadow: '0 0 50px rgba(59, 130, 246, 0.6)' }}
  >
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 backdrop-blur-sm bg-gray-900/70">
      <Video size={72} className="text-blue-400 mb-4 animate-pulse" />
      <h3 className="text-2xl font-bold">Video Feed Ready</h3>
      <p className="text-md text-gray-300 mt-1">Integration point for your WebRTC / Twilio / Zoom API</p>
    </div>
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-6"
    >
      <IconWrapper><Video size={22} /></IconWrapper>
      <IconWrapper><PhoneOff size={22} className="text-red-500" /></IconWrapper>
      <IconWrapper><Plus size={22} /></IconWrapper>
    </motion.div>
    <div className="absolute top-4 left-4 bg-blue-600/70 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-medium text-white shadow-lg">
      Dr. Elara Vance (You)
    </div>
    <div className="absolute bottom-4 right-4 w-36 h-24 bg-gray-800 rounded-xl border-2 border-blue-400 p-1 flex flex-col justify-center items-center">
      <p className="text-xs text-blue-200">Patient View</p>
      <p className="text-sm font-bold text-white">{patientName}</p>
    </div>
  </motion.div>
);

export default VideoPlaceholder;
