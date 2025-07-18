import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

import { useFinance } from "../../context/FinanceContext";

export default function BudgetPieChart() {
  const { categories, categorySpend } = useFinance();
  const data = categories.map(cat => ({
    name: cat.key,
    value: categorySpend[cat.key] || 0,
    color: cat.color
  })).filter(d => d.value > 0);

  if (!data.length) {
    return (
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 flex flex-col items-center w-full max-w-xs border border-blue-100 min-h-[260px] justify-center">
        <div className="text-blue-400 text-3xl mb-2">🧩</div>
        <div className="text-blue-900 font-bold mb-1">No category spend data yet</div>
        <div className="text-blue-400 text-sm">Add transactions to see your spending breakdown.</div>
      </div>
    );
  }
  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 flex flex-col items-center w-full max-w-xs border border-blue-100">
      <div className="font-extrabold text-blue-900 mb-3 text-lg tracking-tight">Spend by Category</div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} innerRadius={45}>
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-3 mt-4 justify-center">
        {data.map((entry, idx) => (
          <span key={entry.name} className="flex items-center gap-2 text-xs font-semibold text-blue-900" aria-label={`Legend for ${entry.name}`}>
            <span className="inline-block w-4 h-4 rounded-full shadow-sm border border-blue-100" style={{ background: entry.color }}></span>
            {entry.name}
          </span>
        ))}
      </div>
    </div>
  );
}
