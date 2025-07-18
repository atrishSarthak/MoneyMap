import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

import { useFinance } from "../../context/FinanceContext";

function getWeekOfMonth(date) {
  // Returns 1-based week number in month
  const d = new Date(date);
  const firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
  return Math.ceil((d.getDate() + firstDay.getDay()) / 7);
}

function getWeeklySpend(transactions) {
  // Group debits by week number in current month
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  const weeks = [0, 0, 0, 0, 0];
  transactions.forEach(tx => {
    const d = new Date(tx.date);
    if (d.getMonth() === month && d.getFullYear() === year && tx.type === "Debit") {
      const week = getWeekOfMonth(tx.date) - 1;
      if (week >= 0 && week < weeks.length) weeks[week] += Math.abs(Number(tx.amount));
    }
  });
  return weeks.map((spend, idx) => ({ week: `Week ${idx + 1}`, spend }));
}

export default function BudgetBarChart() {
  const { transactions } = useFinance();
  const data = getWeeklySpend(transactions);

  const hasData = data.some(d => d.spend > 0);
  if (!hasData) {
    return (
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 flex flex-col items-center w-full max-w-xs border border-blue-100 min-h-[260px] justify-center">
        <div className="text-blue-400 text-3xl mb-2">📊</div>
        <div className="text-blue-900 font-bold mb-1">No weekly spend yet</div>
        <div className="text-blue-400 text-sm">Add debit transactions to see your weekly spend.</div>
      </div>
    );
  }
  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 flex flex-col items-center w-full max-w-xs border border-blue-100">
      <div className="font-extrabold text-blue-900 mb-3 text-lg tracking-tight">Weekly Spend</div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" tick={{ fill: '#64748b', fontSize: 12 }} />
          <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="spend" fill="#60a5fa" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
