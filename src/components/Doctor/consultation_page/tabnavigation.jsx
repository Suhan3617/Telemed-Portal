import React from "react";

const tabnavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b-4 border-blue-100/80 bg-white/70 backdrop-blur-sm rounded-t-3xl p-3 mb-4 sticky top-0 z-10 shadow-lg">
      {TABS.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 flex items-center justify-center p-3 text-base font-bold relative transition-all duration-300 rounded-xl
          ${
            activeTab === tab.id
              ? "text-blue-700"
              : "text-gray-500 hover:text-blue-500"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <tab.icon size={20} className="mr-2" />
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTabIndicator"
              className="absolute bottom-0 left-0 right-0 h-1.5 bg-blue-500 rounded-t-full shadow-lg shadow-blue-500/70"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default tabnavigation;
