import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PremiumHeader from "../../components/Doctor/allpagesheader";
import {
  UserCog,
  BellRing,
  Video,
  Settings2,
} from "lucide-react";

// ---------- Motion Variants ----------
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // 🌀 wave-in effect
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
  whileHover: {
    y: -8,
    scale: 1.04,
    boxShadow: "0 25px 45px rgba(0,0,0,0.15)",
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const SettingsContainer = () => {
  const settings = [
    {
      title: "Profile Settings",
      desc: "Edit your professional and contact info.",
      link: "/doctor/settings/profile",
      icon: <UserCog className="w-8 h-8 text-blue-600" />,
      gradient: "from-blue-100/70 to-indigo-100/70",
    },
    {
      title: "Notification Preferences",
      desc: "Manage how and where you receive alerts.",
      link: "/doctor/settings/notificationspreferences",
      icon: <BellRing className="w-8 h-8 text-amber-500" />,
      gradient: "from-amber-100/70 to-yellow-100/70",
    },
    {
      title: "Teleconsultation Settings",
      desc: "Customize your virtual consultation experience.",
      link: "/doctor/settings/teleconsultation",
      icon: <Video className="w-8 h-8 text-green-600" />,
      gradient: "from-green-100/70 to-emerald-100/70",
    },
    {
      title: "System Preferences",
      desc: "Control default pages and language options.",
      link: "/doctor/settings/system",
      icon: <Settings2 className="w-8 h-8 text-purple-600" />,
      gradient: "from-purple-100/70 to-violet-100/70",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen  bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 rounded-3xl px-6 sm:px-10 py-10 overflow-hidden"
    >
      {/* ---------- Premium Header ---------- */}
      <PremiumHeader
        breadcrumb="Dashboard / Settings"
        icon="⚙️"
        title="Profile & Account Settings"
        subtitle="Manage your profile, notifications, teleconsultation, and system preferences — all in one elegant dashboard."
      />

      {/* ---------- Settings Grid ---------- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {settings.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="whileHover"
          >
            <Link
              to={item.link}
              className={`relative block p-8 rounded-3xl bg-gradient-to-br ${item.gradient} 
                backdrop-blur-xl border border-white/60 shadow-lg hover:shadow-2xl
                transition-all duration-500 overflow-hidden group`}
            >
              {/* Glow aura */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl bg-gradient-to-r from-white/50 to-blue-200/40 rounded-3xl" />

              {/* Subtle floating light reflection */}
              <div className="absolute -top-1/2 left-1/2 w-[200%] h-[200%] rotate-45 opacity-0 group-hover:opacity-30 bg-gradient-to-tr from-white via-blue-100 to-transparent transition-all duration-700" />

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                {/* Icon bubble */}
                <motion.div
                  className="p-5 rounded-2xl bg-white/80 backdrop-blur-lg shadow-md group-hover:shadow-xl 
                    transition-all duration-500 flex items-center justify-center"
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  {item.icon}
                </motion.div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-1 tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-gray-600/90 leading-relaxed font-medium text-[15px]">
                    {item.desc}
                  </p>

                  {/* Animated underline */}
                  <motion.div
                    className="h-[2px] w-0 bg-gradient-to-r from-blue-600 to-indigo-500 mt-3 rounded-full"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SettingsContainer;
