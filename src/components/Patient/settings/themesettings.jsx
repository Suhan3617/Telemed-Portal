import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSettings = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
        <Sun className="w-6 h-6 text-blue-500" /> Theme Settings
      </h3>

      <div className="flex gap-6 mt-3">
        {["light", "dark"].map((mode) => (
          <label
            key={mode}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition border 
              ${
                theme === mode
                  ? "bg-blue-500 text-white border-blue-600"
                  : "bg-blue-50 hover:bg-blue-100 border-blue-200"
              }`}
          >
            <input
              type="radio"
              name="theme"
              value={mode}
              checked={theme === mode}
              onChange={() => setTheme(mode)}
              className="hidden"
            />
            {mode === "light" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            <span className="capitalize font-medium">{mode} Mode</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ThemeSettings;
