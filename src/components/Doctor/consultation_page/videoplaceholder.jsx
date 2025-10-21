import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  VideoOff,
  PhoneOff,
  Plus,
  Mic,
  MicOff,
  ScreenShare,
  Monitor,
  MoreHorizontal,
  X,
} from "lucide-react";
import IconWrapper from "../../Common/iconwrapper";

const VideoPlaceholder = ({
  patientName = "John Doe",
  onCallEnd = () => {},
}) => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isSharing, setIsSharing] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isLive, setIsLive] = useState(true);

  // 📱 Responsive & control states
  const [isMobile, setIsMobile] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // ⏱️ Call timer
  useEffect(() => {
    let interval;
    if (isLive) interval = setInterval(() => setCallDuration((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [isLive]);

  // 📐 Screen width tracking
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <motion.div
      initial={{ scale: 0.97, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full aspect-[16/9] max-h-[85vh] rounded-3xl overflow-hidden border border-blue-400/30 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 shadow-[0_0_60px_rgba(59,130,246,0.3)] flex items-center justify-center"
    >
      {/* ✨ Animated gradient overlay */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(96,165,250,0.25),transparent_70%)] mix-blend-overlay"
      />

      {/* 🧑‍⚕️ Top info bar with timer */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-wrap items-center gap-3">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600/40 to-blue-800/30 backdrop-blur-md px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-blue-100 shadow-[0_0_12px_rgba(59,130,246,0.4)] border border-blue-400/30"
        >
          Dr. Elara Vance (You)
        </motion.div>

        {isLive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="flex items-center gap-2 bg-red-600/40 border border-red-400/40 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-medium text-red-100 shadow-[0_0_12px_rgba(239,68,68,0.4)]"
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2.5 h-2.5 rounded-full bg-red-400"
            />
            LIVE
            <span className="ml-2 text-red-200 font-semibold">
              {formatTime(callDuration)}
            </span>
          </motion.div>
        )}
      </div>

      {/* 🎥 Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6 backdrop-blur-md bg-black/25">
        <motion.div
          animate={{
            y: [0, -4, 0],
            scale: [1, 1.08, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
        >
          {isCameraOn ? (
            <Video size={80} className="text-blue-400 drop-shadow-[0_0_25px_#3B82F6]" />
          ) : (
            <VideoOff size={80} className="text-blue-500/60 drop-shadow-[0_0_10px_#3B82F6]" />
          )}
        </motion.div>
        <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight mt-4 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent text-center">
          {isCameraOn ? "Live Feed Ready" : "Camera Disabled"}
        </h3>
        <p className="text-xs sm:text-sm text-blue-200/70 mt-2 text-center max-w-[90%]">
          Integration point for WebRTC / Twilio / Zoom API
        </p>
      </div>

      {/* 🧑‍💻 Patient preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-32 sm:w-44 h-20 sm:h-28 bg-gradient-to-br from-blue-950 via-blue-900 to-gray-900 border border-blue-500/40 rounded-xl p-2 flex flex-col justify-center items-center shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:scale-[1.03] hover:shadow-blue-400/50 transition-all duration-300"
      >
        <p className="text-[10px] sm:text-xs text-blue-300 font-medium">Patient View</p>
        <p className="text-xs sm:text-sm font-bold text-white mt-1 truncate">{patientName}</p>
        <motion.div
          className="mt-2 w-12 sm:w-16 h-[2px] bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500"
          animate={{ opacity: [0.5, 1, 0.5], scaleX: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>

      {/* 🎛️ Control bar */}
      {!isMobile ? (
        // 💻 Desktop inline controls
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-4 sm:gap-6 bg-blue-950/40 backdrop-blur-xl px-4 sm:px-8 py-3 sm:py-4 rounded-full border border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.3)]"
        >
          <IconWrapper
            hover
            glow={isMicOn}
            color={isMicOn ? "blue" : "gray"}
            onClick={() => setIsMicOn(!isMicOn)}
          >
            {isMicOn ? <Mic size={22} /> : <MicOff size={22} />}
          </IconWrapper>

          <IconWrapper
            hover
            glow={isSharing}
            color={isSharing ? "blue" : "gray"}
            onClick={() => setIsSharing(!isSharing)}
          >
            {isSharing ? <Monitor size={22} /> : <ScreenShare size={22} />}
          </IconWrapper>

          <IconWrapper
            hover
            glow={isCameraOn}
            color={isCameraOn ? "blue" : "gray"}
            onClick={() => setIsCameraOn(!isCameraOn)}
          >
            {isCameraOn ? <Video size={22} /> : <VideoOff size={22} />}
          </IconWrapper>

          <IconWrapper
            hover
            glow
            color="red"
            onClick={() => {
              setIsLive(false);
              onCallEnd();
              alert("Call Ended ❌");
            }}
          >
            <PhoneOff size={22} className="text-red-500" />
          </IconWrapper>

        </motion.div>
      ) : (
        // 📱 Mobile - floating + expanding horizontally
        <>
          {/* + Button (bottom-left) */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-5 left-5 z-50"
          >
            <button
              onClick={() => setShowControls((v) => !v)}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600/80 text-white shadow-[0_0_25px_rgba(59,130,246,0.5)] border border-blue-400/40 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
            >
              {showControls ? <X size={26} /> : <MoreHorizontal size={26} />}
            </button>
          </motion.div>

          {/* Horizontal expanded bar */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -30 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-24 left-5 flex flex-row gap-3 p-4 bg-blue-950/60 backdrop-blur-2xl border border-blue-500/30 rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.3)]"
              >
                <IconWrapper
                  hover
                  glow={isMicOn}
                  color={isMicOn ? "blue" : "gray"}
                  onClick={() => setIsMicOn(!isMicOn)}
                >
                  {isMicOn ? <Mic size={22} /> : <MicOff size={22} />}
                </IconWrapper>

                <IconWrapper
                  hover
                  glow={isSharing}
                  color={isSharing ? "blue" : "gray"}
                  onClick={() => setIsSharing(!isSharing)}
                >
                  {isSharing ? <Monitor size={22} /> : <ScreenShare size={22} />}
                </IconWrapper>

                <IconWrapper
                  hover
                  glow={isCameraOn}
                  color={isCameraOn ? "blue" : "gray"}
                  onClick={() => setIsCameraOn(!isCameraOn)}
                >
                  {isCameraOn ? <Video size={22} /> : <VideoOff size={22} />}
                </IconWrapper>

                <IconWrapper
                  hover
                  glow
                  color="red"
                  onClick={() => {
                    setIsLive(false);
                    onCallEnd();
                    alert("Call Ended ❌");
                  }}
                >
                  <PhoneOff size={22} className="text-red-500" />
                </IconWrapper>

              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {/* 💫 Ambient animated glow border */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 40px rgba(37,99,235,0.5)",
            "0 0 90px rgba(96,165,250,0.6)",
            "0 0 40px rgba(37,99,235,0.5)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute inset-0 rounded-3xl pointer-events-none border border-blue-400/10"
      />
    </motion.div>
  );
};

export default VideoPlaceholder;
