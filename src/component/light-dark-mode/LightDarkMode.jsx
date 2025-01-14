import React from "react";
import UseLocalStorage from "./UseLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");
  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gray-100 transition duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className={`${theme === "dark" ? "text-white " : "text-gray-950"}`}>
        Helloworld
      </h1>
      <button
        className="mx-2 my-2 px-2 py-1 bg-red-600 text-gray-50"
        onClick={handleChangeTheme}
      >
        ChangeTheme
      </button>
    </div>
  );
};

export default LightDarkMode;
