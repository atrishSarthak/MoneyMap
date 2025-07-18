import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

import { useFinance } from "../../context/FinanceContext";

function getDailySpend(transactions) {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => ({
    day: `${i + 1} ${now.toLocaleString('default', { month: 'short' })}`,
    value: 0
  }));
  transactions.forEach(tx => {
    const d = new Date(tx.date);
    if (d.getMonth() === month && d.getFullYear() === year && tx.type === "Debit") {
      days[d.getDate() - 1].value += Math.abs(Number(tx.amount));
    }
  });
  return days;
}

export default function BudgetLineChart() {
  const { transactions } = useFinance();
  const data = getDailySpend(transactions);

  const hasData = data.some(d => d.value > 0);
  if (!hasData) {
    return (
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 flex flex-col items-center w-full max-w-xs border border-blue-100 min-h-[260px] justify-center">
        <div className="text-blue-400 text-3xl mb-2">📈</div>
        <div className="text-blue-900 font-bold mb-1">No spending trend yet</div>
        <div className="text-blue-400 text-sm">Add debit transactions to see your daily spend trend.</div>
      </div>
    );
  }
  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 flex flex-col items-center w-full max-w-xs border border-blue-100">
      <div className="font-extrabold text-blue-900 mb-3 text-lg tracking-tight">Spending Trend</div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 12 }} />
          <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#60a5fa" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
