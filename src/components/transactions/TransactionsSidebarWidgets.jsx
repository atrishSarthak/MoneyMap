import React from "react";

export default function TransactionsSidebarWidgets() {
  return (
    <div className="w-full lg:w-72 flex flex-col gap-6 mt-8 lg:mt-0">
      <div className="bg-white bg-opacity-90 rounded-2xl shadow p-6 flex flex-col items-center">
        <div className="text-blue-400 text-xs font-semibold mb-1">Category Breakdown</div>
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-200 via-blue-100 to-blue-50 flex items-center justify-center mb-2">
          <span className="text-2xl font-bold text-blue-900">125K</span>
        </div>
        <div className="flex justify-between w-full mt-2">
          <span className="text-blue-500 text-xs">Income</span>
          <span className="text-blue-500 text-xs">Expense</span>
        </div>
      </div>
      <div className="bg-white bg-opacity-90 rounded-2xl shadow p-6 flex flex-col gap-2">
        <div className="font-bold text-blue-700 mb-1">AI Insight</div>
        <div className="text-xs text-blue-500 mb-2">Your dining expense increased by 20% compared to last month. Track your food budget for savings!</div>
        <button className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 text-xs font-semibold w-max self-end">See Details</button>
      </div>
      <div className="bg-white bg-opacity-90 rounded-2xl shadow p-6 flex flex-col gap-2">
        <div className="font-bold text-blue-700 mb-1">Subscriptions List</div>
        <div className="flex flex-col gap-1 text-xs">
          <div className="flex justify-between"><span>Youtube</span><span>$12</span></div>
          <div className="flex justify-between"><span>Spotify</span><span>$9</span></div>
          <div className="flex justify-between"><span>Dribbble Pro</span><span>$20</span></div>
        </div>
        <button className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 text-xs font-semibold w-max self-end mt-2">Manage Subscriptions</button>
      </div>
    </div>
  );
}
