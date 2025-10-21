import { motion } from "framer-motion";

const VitalSignCard = ({ label, value, trend, data }) => {
  const renderGraph = (data) => {
    if (data.length < 2) return "";
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    const points = data
      .map((val, index) => {
        const normalized = range > 0 ? (val - min) / range : 0.5;
        const y = 80 - normalized * 70 + 10;
        const x = (index / (data.length - 1)) * 100;
        return `${x},${y}`;
      })
      .join(" ");
    return (
      <svg viewBox="0 0 100 100" className="w-full h-20">
        <polyline
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
          points={points}
          style={{
            filter: "drop-shadow(0 3px 4px rgba(59,130,246,0.45))",
          }}
        />
      </svg>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 230,
        damping: 18,
      }}
      whileHover={{
        scale: 1.07,
        y: -6,
        boxShadow:
          "0 16px 32px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255,255,255,0.4)",
        transition: { type: "spring", stiffness: 340, damping: 20 },
      }}
      whileTap={{
        scale: 0.97,
        transition: { duration: 0.1 },
      }}
      className="relative overflow-hidden rounded-2xl p-6 shadow-lg flex flex-col justify-between transition-all duration-200"
      style={{
        background: "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255, 255, 255, 0.25)",
      }}
    >
      {/* Gradient glow background same as PR cards */}
      <div className="absolute -inset-12 bg-gradient-to-br from-blue-300 to-blue-500 opacity-40 blur-3xl"></div>

      {/* Light reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/40 opacity-40"></div>

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold text-gray-600 uppercase">
              {label}
            </p>
            <p className="text-4xl font-bold mt-1 text-gray-900 drop-shadow">
              {value}
            </p>
          </div>
          <span
            className={`px-3 py-1 text-xs font-bold rounded-full ${
              trend.includes("High") || trend.includes("Low")
                ? "bg-red-100 text-red-700"
                : trend.includes("Stable")
                ? "bg-yellow-100 text-yellow-700"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            {trend}
          </span>
        </div>

        <div className="mt-6">{renderGraph(data)}</div>

        <p className="text-xs mt-3 text-gray-500">
          Last recorded: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </motion.div>
  );
};

export default VitalSignCard;
