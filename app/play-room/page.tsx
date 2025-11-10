"use client";
import React from "react";
export default function CollapsibleSection() {
  const [count, setcount] = React.useState<number>(5);

  const handleDecrement = () => {
    setcount(prev => prev - 1);
  }

  const handleIncrement = () => {
    setcount(prev => prev + 1);
  }

  return (
    <div className="flex min-h-screen justify-center bg-zinc-50">
      <main className="flex flex-col min-h-screen w-full max-w-5xl justify-center items-center bg-pink-50">
        
        <div className="flex flex-row items-center border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white">
          
          <button
            onClick={() => {handleDecrement()}}
            className="px-4 py-2 text-2xl font-semibold text-white bg-red-500 hover:bg-red-600 transition duration-150 ease-in-out border-r border-gray-300 disabled:opacity-50"
          >
            -
          </button>

          <div className="px-6 py-2 text-xl font-bold text-gray-800 w-fit text-center">
            {count}
          </div>

          <button
            onClick={() => {handleIncrement()}}
            className="px-4 py-2 text-2xl font-semibold text-white bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out border-l border-gray-300"
          >
            +
          </button>

        </div>
      </main>
    </div>
  );
}