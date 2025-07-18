import React from "react";

export default function BudgetTopBar() {
  return (
    <div className="sticky top-0 z-20 bg-white bg-opacity-80 backdrop-blur flex flex-wrap items-center justify-between gap-4 px-6 py-4 rounded-t-2xl shadow-md border-b">
      <div className="flex gap-2 items-center">
        <select className="px-3 py-2 rounded-lg border border-blue-200 text-blue-900 bg-white focus:outline-none">
          <option>July 2025</option>
          <option>June 2025</option>
        </select>
        <span className="text-gray-400 text-sm ml-2">Monthly Budgets</span>
      </div>
      <div className="flex gap-8 items-center">
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500">Total Budget</span>
          <span className="font-bold text-blue-900 text-lg">₹80,000</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500">Total Spent</span>
          <span className="font-bold text-red-400 text-lg">₹52,000</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500">Remaining</span>
          <span className="font-bold text-green-500 text-lg">₹28,000</span>
        </div>
      </div>
    </div>
  );
}
