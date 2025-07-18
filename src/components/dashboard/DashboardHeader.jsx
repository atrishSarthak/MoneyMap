import React from "react";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4">
      <div className="flex items-center gap-2 font-extrabold text-2xl text-blue-900">
        <span className="bg-blue-100 rounded-full p-1">💰</span>
        <span>Money</span><span className="text-blue-400">Map</span>
      </div>
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full max-w-xs px-4 py-2 rounded-lg bg-white bg-opacity-60 backdrop-blur-md border border-blue-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-white bg-opacity-60 rounded-full p-2 shadow hover:bg-opacity-80 transition">
          <span role="img" aria-label="notifications">🔔</span>
        </button>
        <button className="bg-white bg-opacity-60 rounded-full p-2 shadow hover:bg-opacity-80 transition">
          <span role="img" aria-label="profile">👤</span>
        </button>
      </div>
    </header>
  );
}
