import React from "react";

export default function Header({ userName }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full mb-6 mt-2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Welcome back, <span className="text-blue-600">{userName}</span> <span role="img" aria-label="wave">👋</span>
      </h2>
      <div className="mt-2 md:mt-0 text-gray-600 text-sm font-medium">
        Today is {new Date().toLocaleDateString()}
      </div>
    </div>
  );
}
