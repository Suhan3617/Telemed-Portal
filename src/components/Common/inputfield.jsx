const InputField = ({ label, value, onChange, placeholder = '', className = '' }) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm font-medium text-blue-700">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`p-3 border border-blue-300 rounded-xl focus:ring-4 focus:ring-blue-500/30 transition-all shadow-inner text-gray-700 ${className}`}
    />
  </div>
);
