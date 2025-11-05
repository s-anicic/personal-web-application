"use client";

import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState<string>("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        // Use eval carefully for simple calculator
        setInput(String(eval(input)));
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C",
  ];

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="w-72 bg-gray-200 rounded-xl shadow-lg p-4">
        {/* Display */}
        <div className="bg-gray-100 rounded-lg p-3 text-right text-2xl mb-4 font-mono text-gray-900">
          {input || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              className={`py-3 rounded-lg text-lg font-semibold 
                ${
                  btn === "="
                    ? "bg-oklch(78.5% 0.115 274.713) text-white"
                    : btn === "C"
                    ? "bg-gray-400 text-gray-900"
                    : "bg-gray-300 text-gray-900"
                } hover:brightness-90 transition`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
