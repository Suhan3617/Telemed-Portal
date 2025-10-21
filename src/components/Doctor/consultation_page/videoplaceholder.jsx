import { motion } from 'framer-motion';
import { Video, PhoneOff, Plus, Mic, MicOff, ScreenShare } from 'lucide-react';
import IconWrapper from '../../Common/iconwrapper';

const VideoPlaceholder = ({ patientName }) => (
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="relative w-full aspect-[16/9] rounded-3xl shadow-2xl overflow-hidden border border-blue-400/70 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900"
    style={{
      boxShadow:
        '0 0 40px rgba(59,130,246,0.4), inset 0 0 40px rgba(37,99,235,0.3)',
    }}
  >
    {/* Animated gradient overlay */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.2),transparent_70%)] mix-blend-overlay"
    />

    {/* Main content overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 backdrop-blur-md bg-black/40">
      <motion.div
        animate={{
          y: [0, -5, 0],
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        <Video size={80} className="text-blue-400 drop-shadow-[0_0_15px_#3B82F6]" />
      </motion.div>
      <h3 className="text-2xl font-extrabold tracking-tight mt-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
        Live Feed Ready
      </h3>
      <p className="text-sm text-blue-200/80 mt-2">
        Integration point for WebRTC / Twilio / Zoom API
      </p>
    </div>

    {/* Floating control bar */}
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-6 bg-blue-950/50 backdrop-blur-md px-6 py-3 rounded-full border border-blue-500/30 shadow-lg shadow-blue-900/40"
    >
      <IconWrapper hover glow color="blue">
        <Mic size={22} />
      </IconWrapper>
      <IconWrapper hover glow color="blue">
        <ScreenShare size={22} />
      </IconWrapper>
      <IconWrapper hover glow color="blue">
        <Video size={22} />
      </IconWrapper>
      <IconWrapper hover glow color="blue">
        <PhoneOff size={22} className="text-red-500" />
      </IconWrapper>
      <IconWrapper hover glow color="blue">
        <Plus size={22} />
      </IconWrapper>
    </motion.div>

    {/* Doctor label */}
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="absolute top-5 left-5 bg-blue-600/30 backdrop-blur-md px-5 py-2 rounded-xl text-sm font-semibold text-blue-100 shadow-lg border border-blue-400/40"
    >
      Dr. Elara Vance (You)
    </motion.div>

    {/* Patient mini-preview */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute bottom-5 right-5 w-44 h-28 bg-gradient-to-br from-gray-800 via-blue-950 to-gray-900 border border-blue-500/40 rounded-xl p-2 flex flex-col justify-center items-center shadow-xl hover:scale-[1.03] hover:shadow-blue-500/50 transition-all duration-300"
    >
      <p className="text-xs text-blue-300 font-medium">Patient View</p>
      <p className="text-sm font-bold text-white mt-1">{patientName}</p>
      <motion.div
        className="mt-2 w-16 h-[2px] bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500"
        animate={{ opacity: [0.5, 1, 0.5], scaleX: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </motion.div>

    {/* Blue ambient glow ring */}
    <motion.div
      animate={{
        boxShadow: [
          '0 0 40px rgba(37,99,235,0.5)',
          '0 0 80px rgba(59,130,246,0.6)',
          '0 0 40px rgba(37,99,235,0.5)',
        ],
      }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      className="absolute inset-0 rounded-3xl pointer-events-none border border-blue-400/20"
    />
  </motion.div>
);

export default VideoPlaceholder;
