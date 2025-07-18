import React from "react";

export default function MonthlySpendingChart() {
  // Example static data
  const data = [
    { category: "Food", amount: 3500 },
    { category: "Rent", amount: 12000 },
    { category: "Shopping", amount: 2200 },
    { category: "Bills", amount: 1800 },
    { category: "Travel", amount: 900 },
  ];
  const total = data.reduce((sum, d) => sum + d.amount, 0);
  return (
    <div className="bg-white border border-blue-100 rounded-2xl shadow p-6 flex flex-col gap-4 min-w-[220px]">
      <div className="font-bold text-blue-800 text-lg mb-2">Monthly Spending</div>
      <div className="flex flex-col gap-2">
        {data.map(d => (
          <div key={d.category} className="flex justify-between text-blue-700 text-sm">
            <span>{d.category}</span>
            <span>₹{d.amount}</span>
            <div className="w-24 h-2 bg-blue-50 rounded-full overflow-hidden ml-2">
              <div className="h-2 rounded-full bg-blue-400" style={{width: `${Math.round((d.amount/total)*100)}%`}} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
