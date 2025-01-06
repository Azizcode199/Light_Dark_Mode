import { useState } from "react";

function LightDarkMode() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center text-center ${
        mode === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">Light & Dark Mode</h2>
      <button
        onClick={toggleMode}
        className="p-4 bg-gray-800 text-white rounded-full text-2xl"
      >
        {mode === "light" ? "🌙" : "🌞"}
      </button>
    </div>
  );
}

export default LightDarkMode;
