import React from "react";

export default function SummaryCard({ title, value, icon, color }) {
  return (
    <div className={`flex flex-col items-start bg-white rounded-xl shadow-md p-6 min-w-[160px] hover:shadow-lg transition border-t-4 ${color}`}>
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-gray-500 font-semibold text-sm mb-1">{title}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  );
}
