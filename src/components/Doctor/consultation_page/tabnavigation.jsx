// TabNavigation.jsx
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const TabNavigation = ({ activeTab, setActiveTab, tabs }) => {
  const containerRef = useRef(null);

  // Auto-scroll active tab into view
  useEffect(() => {
    const el = containerRef.current?.querySelector(`[data-tab="${activeTab}"]`);
    if (el && containerRef.current) {
      const container = containerRef.current;
      const left =
        el.offsetLeft - container.clientWidth / 2 + el.clientWidth / 2;
      container.scrollTo({ left, behavior: "smooth" });
    }
  }, [activeTab]);

  // Motion variants (with smooth fades)
  const variants = {
    default: {
      scale: 1,
      backgroundColor: "#ffffff",
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#F0F9FF",
      boxShadow: "0px 4px 12px rgba(59,130,246,0.12)",
      transition: { duration: 0.25, ease: "easeOut" },
    },
    tap: {
      scale: 0.97,
      backgroundColor: "#DBEAFE",
      boxShadow: "0px 2px 6px rgba(59,130,246,0.15)",
      transition: { duration: 0.15 },
    },
    active: {
      backgroundColor: "#EFF6FF",
      boxShadow: "0px 6px 20px rgba(59,130,246,0.08)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <div
      ref={containerRef}
      className="flex gap-3 px-3 py-3 items-center overflow-x-auto no-scrollbar snap-x scroll-smooth"
      style={{ borderBottom: "1px solid rgba(59,130,246,0.08)" }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <motion.button
            key={tab.id}
            data-tab={tab.id}
            onClick={() => setActiveTab(tab.id)}
            variants={variants}
            initial="default"
            animate={isActive ? "active" : "default"}
            whileHover="hover"
            whileTap="tap"
            className={`relative flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer select-none transition-all duration-300 ${
              isActive ? "text-blue-700" : "text-gray-600 hover:text-blue-600"
            }`}
          >
            <tab.icon
              size={18}
              className={`transition-colors duration-300 ${
                isActive ? "text-blue-600" : "text-gray-500"
              }`}
            />
            <span className="font-semibold text-md">{tab.label}</span>

            {isActive && (
              <motion.span
                layoutId="activeTabIndicator"
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 rounded-full bg-blue-500 shadow-lg"
                style={{ zIndex: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default TabNavigation;
