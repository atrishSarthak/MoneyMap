import React from "react";

export default function BudgetHealthCard() {
  // Example static data
  const budgets = [
    { name: "Food", used: 3500, limit: 5000 },
    { name: "Shopping", used: 2000, limit: 2500 },
    { name: "Travel", used: 800, limit: 1500 },
  ];
  return (
    <div className="bg-white border border-blue-100 rounded-2xl shadow p-6 flex flex-col gap-4 min-w-[220px]">
      <div className="font-bold text-blue-800 text-lg mb-2">Budget Health</div>
      {budgets.map(budget => {
        const percent = Math.min(100, (budget.used / budget.limit) * 100);
        let color = "bg-green-400";
        if (percent > 90) color = "bg-red-400";
        else if (percent > 70) color = "bg-yellow-400";
        return (
          <div key={budget.name} className="mb-2">
            <div className="flex justify-between text-blue-700 font-semibold text-sm">
              <span>{budget.name}</span>
              <span>{`₹${budget.used} / ₹${budget.limit}`}</span>
            </div>
            <div className="w-full h-2 bg-blue-50 rounded-full overflow-hidden mt-1">
              <div className={`h-2 rounded-full ${color}`} style={{width: `${percent}%`}} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
