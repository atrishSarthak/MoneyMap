import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jul", spending: 320 },
  { month: "Aug", spending: 400 },
  { month: "Sep", spending: 300 },
  { month: "Oct", spending: 500 },
  { month: "Nov", spending: 420 },
  { month: "Dec", spending: 600 },
];

export default function SpendingChart() {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl shadow-lg p-4 flex flex-col items-center min-w-[220px]">
      <div className="w-full h-32">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 13 }} />
            <YAxis tick={{ fill: '#64748b', fontSize: 13 }} />
            <Tooltip />
            <Bar dataKey="spending" fill="#60a5fa" radius={[8,8,0,0]} barSize={24} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
