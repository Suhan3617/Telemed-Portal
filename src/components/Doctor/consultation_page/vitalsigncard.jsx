import React from 'react'

const vitalsigncard = ({ label, value, trend, data }) => {
  const renderGraph = (data) => {
    if (data.length < 2) return '';
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;

    const points = data.map((val, index) => {
      const normalized = range > 0 ? (val - min) / range : 0.5;
      const y = 80 - (normalized * 70) + 10;
      const x = (index / (data.length - 1)) * 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg viewBox="0 0 100 100" className="w-full h-16">
        <polyline
          fill="none"
          stroke="#3b82f6" // blue-500
          strokeWidth="3"
          strokeLinecap="round"
          points={points}
          style={{
            filter: 'drop-shadow(0px 2px 2px rgba(59, 130, 246, 0.4))'
          }}
        />
      </svg>
    );
  };

  const trendColor = trend.includes('High') || trend.includes('Low') ? 'bg-red-100 text-red-700' :
                     trend.includes('Stable') ? 'bg-yellow-100 text-yellow-700' :
                     'bg-green-100 text-green-700';

  return (
    <motion.div
      initial={{ scale: 0.95 }}
      whileHover={{ scale: 1, boxShadow: '0 15px 30px -10px rgba(59, 130, 246, 0.2)' }}
      transition={{ duration: 0.4 }}
      className="p-5 bg-white rounded-2xl shadow-xl border border-blue-100 flex flex-col justify-between overflow-hidden relative transition-all"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-md font-semibold text-blue-600">{label}</p>
          <p className="text-3xl font-extrabold text-gray-900 leading-none mt-1">
            {value}
          </p>
        </div>
        <span className={`px-3 py-1 text-xs font-bold rounded-full ${trendColor}`}>
          {trend}
        </span>
      </div>
      <div className="relative h-16">
        {renderGraph(data)}
      </div>
      <p className="text-xs text-gray-400 mt-2">Last recorded: {new Date().toLocaleTimeString()}</p>
    </motion.div>
  );
}

export default vitalsigncard
