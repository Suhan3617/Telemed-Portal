import React, { useState } from "react";

const ThemeSettings = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="bg-white p-6 shadow-md rounded-xl">
      <h3 className="text-lg font-semibold text-blue-600 mb-4">Theme Settings</h3>
      <div className="flex gap-4">
        {["light", "dark"].map((mode) => (
          <label key={mode} className="flex items-center gap-2">
            <input
              type="radio"
              name="theme"
              value={mode}
              checked={theme === mode}
              onChange={() => setTheme(mode)}
            />
            {mode.charAt(0).toUpperCase() + mode.slice(1)} Mode
          </label>
        ))}
      </div>
    </div>
  );
};

export default ThemeSettings;
