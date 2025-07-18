import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts";

const data = [
  { month: "Jan", income: 50000, expenses: 32000 },
  { month: "Feb", income: 52000, expenses: 34000 },
  { month: "Mar", income: 48000, expenses: 36000 },
  { month: "Apr", income: 60000, expenses: 37000 },
  { month: "May", income: 58000, expenses: 40000 },
  { month: "Jun", income: 62000, expenses: 42000 },
  { month: "Jul", income: 61000, expenses: 41000 },
  { month: "Aug", income: 63000, expenses: 43000 },
];

export default function ExpenseChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center min-h-[260px]">
      <div className="w-full h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 13 }} />
            <YAxis tick={{ fill: '#64748b', fontSize: 13 }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} name="Income" />
            <Line type="monotone" dataKey="expenses" stroke="#f87171" strokeWidth={3} dot={{ r: 4 }} name="Expenses" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
