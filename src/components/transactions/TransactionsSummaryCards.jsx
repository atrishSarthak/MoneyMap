import React from "react";

export default function TransactionsSummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white bg-opacity-90 rounded-2xl shadow p-6 flex flex-col items-start">
        <div className="text-blue-400 text-xs font-semibold mb-1">Total Transactions This Month</div>
        <div className="text-2xl font-bold text-blue-900 mb-1">$125,430</div>
        <div className="text-green-500 text-xs">+9.2% compared to last month</div>
      </div>
      <div className="bg-white bg-opacity-90 rounded-2xl shadow p-6 flex flex-col items-start">
        <div className="text-blue-400 text-xs font-semibold mb-1">Total Income</div>
        <div className="text-2xl font-bold text-blue-900 mb-1">$92,000</div>
        <div className="text-green-500 text-xs">+6.5% compared to last month</div>
      </div>
      <div className="bg-white bg-opacity-90 rounded-2xl shadow p-6 flex flex-col items-start">
        <div className="text-blue-400 text-xs font-semibold mb-1">Total Expenses</div>
        <div className="text-2xl font-bold text-blue-900 mb-1">$58,500</div>
        <div className="text-green-500 text-xs">+8.3% compared to last month</div>
      </div>
    </div>
  );
}
