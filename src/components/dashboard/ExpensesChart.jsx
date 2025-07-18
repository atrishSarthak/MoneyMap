import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "1 Dec", value: 2000 },
  { day: "2 Dec", value: 3200 },
  { day: "3 Dec", value: 4200 },
  { day: "4 Dec", value: 3600 },
  { day: "5 Dec", value: 5400 },
  { day: "6 Dec", value: 4800 },
  { day: "7 Dec", value: 6200 },
  { day: "8 Dec", value: 5000 },
  { day: "9 Dec", value: 4300 },
  { day: "10 Dec", value: 3900 },
];

export default function ExpensesChart() {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl shadow-lg p-4 flex flex-col items-center min-w-[220px]">
      <div className="w-full h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 12 }} />
            <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#60a5fa" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
