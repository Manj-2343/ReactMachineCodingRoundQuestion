import React, { useEffect, useState } from "react";

const utilityRandom = (length) => {
  return Math.floor(Math.random() * length);
};
const RandomColorGenerator = () => {
  const [color, setColor] = useState("#000000");

  const generateRandomHexCol = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[utilityRandom(hex.length)];
    }
    setColor(hexColor);
  };
  const generateRandomRgbColor = () => {
    const r = utilityRandom(256);
    const g = utilityRandom(256);
    const b = utilityRandom(256);
    setColor(`rgb(${r} ${g} ${b})`);
  };
  return (
    <div
      className="text-center h-screen w-screen "
      style={{ background: color }}
    >
      <button
        onClick={generateRandomRgbColor}
        className="bg-red-900 text-gray-50 my-3 py-3 px-3 rounded-md me-2"
      >
        GENERATE RANDOM RGBColor
      </button>
      <button
        onClick={generateRandomHexCol}
        className="bg-pink-900 text-gray-50 my-3 py-3 px-3 rounded-md me-2"
      >
        GENERATE RANDOM HexColor
      </button>
      <h1>{color}</h1>
    </div>
  );
};

export default RandomColorGenerator;
