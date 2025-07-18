import React from "react";

export default function BudgetCategoryCard({
  category = "Unknown",
  icon = "❓",
  limit = 0,
  spent = 0,
  percent = 0,
  alert = null,
  color = "#60a5fa",
  onEdit,
  onDelete
}) {
  return (
    <div
      className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 flex flex-col gap-5 relative group transition-transform duration-200 hover:scale-[1.025] hover:shadow-2xl border border-blue-100"
      aria-label={`Budget card for ${category}`}
    >
      <div className="flex items-center gap-4 mb-2">
        <span className={`w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 text-3xl shadow`} aria-label="Category icon">
          {icon}
        </span>
        <span className="font-extrabold text-lg text-blue-900 drop-shadow-sm tracking-tight" aria-label="Category name">{category}</span>
        {alert && (
          <span className="ml-2 px-2 py-0.5 rounded-full bg-red-100 text-red-500 text-xs font-bold animate-pulse" aria-label="Budget alert">{alert}</span>
        )}
      </div>
      <div className="flex items-center gap-6">
        <div className="relative w-20 h-20">
          <svg width="80" height="80" className="rotate-[-90deg]">
            <circle cx="40" cy="40" r="34" stroke="#e5e7eb" strokeWidth="10" fill="none" />
            <circle
              cx="40" cy="40" r="34"
              stroke={color}
              strokeWidth="10"
              fill="none"
              strokeDasharray={213.6}
              strokeDashoffset={213.6 - (Number(percent) || 0) * 2.136}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(.4,2,.6,1)' }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-bold text-blue-900 text-lg drop-shadow-sm">{percent}%</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-blue-400 font-semibold">Budget Limit</span>
          <span className="font-extrabold text-blue-900 text-lg">₹{limit}</span>
          <span className="text-xs text-blue-400 font-semibold mt-1">Spent</span>
          <span className="font-extrabold text-red-400 text-lg">₹{spent}</span>
        </div>
      </div>
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
        <button
          className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-900 text-xs font-semibold hover:bg-blue-100 shadow"
          aria-label="Edit budget"
          onClick={onEdit}
        >Edit</button>
        {onDelete && (
          <button
            className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-xs font-semibold hover:bg-red-100 shadow"
            aria-label="Delete budget"
            onClick={onDelete}
          >Delete</button>
        )}
        <button className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 text-xs font-semibold hover:bg-blue-200 shadow" aria-label="View budget">View</button>
      </div>
    </div>
  );
}
