import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Dashboard", icon: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><path d="M3 13l9-9 9 9"/><path d="M4 10v10a1 1 0 001 1h4a1 1 0 001-1v-4h2v4a1 1 0 001 1h4a1 1 0 001-1V10"/></svg>
  ), to: "/dashboard" },
  { name: "Transactions", icon: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>
  ), to: "/transactions" },
  { name: "Budgets", icon: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
  ), to: "/budgets" },
  { name: "Documents", icon: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h2"/></svg>
  ), to: "/documents" },
  { name: "Accounts", icon: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 014-4h0a4 4 0 014 4v2"/></svg>
  ), to: "/accounts" },
  { name: "Analytics", icon: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><path d="M4 19v-6m4 6V5m4 14v-4m4 4v-8m4 8V9"/></svg>
  ), to: "/analytics" },
  { name: "Finance AI", icon: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M9 9h.01M15 9h.01"/></svg>
  ), to: "/ai", badge: "New" },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-20 md:w-64 bg-white/70 border-r border-blue-100 flex flex-col justify-between shadow-2xl z-40 font-sans backdrop-blur-lg">
      <div>
        <div className="flex items-center gap-3 px-4 py-8 font-extrabold text-2xl text-blue-900 tracking-tight select-none">
          <span className="bg-gradient-to-tr from-blue-400 via-blue-200 to-white rounded-full p-2 shadow-md border border-blue-100">💰</span>
          <span className="hidden md:inline">Money</span><span className="text-blue-400 hidden md:inline">Map</span>
        </div>
        <div className="px-4 pt-2 pb-1 text-xs font-semibold text-blue-300 tracking-wide uppercase">Menu</div>
        <nav className="flex flex-col gap-1 mt-2">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 group ` +
                (isActive
                  ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold shadow-lg hover:from-blue-600"
                  : "text-blue-800 hover:bg-blue-50 hover:text-blue-600")
              }
              style={{ marginBottom: 2 }}
            >
              {({ isActive }) => (
                <>
                  <span className={`text-xl ${isActive ? 'text-white drop-shadow' : 'text-blue-400 group-hover:text-blue-500'}`}>{link.icon}</span>
                  <span className={`hidden md:inline text-base ${isActive ? 'text-white' : 'text-blue-900 group-hover:text-blue-600'}`}>{link.name}</span>
                  {link.badge && (
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-300 to-blue-200 text-xs text-blue-900 font-bold shadow-sm">{link.badge}</span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-3 px-4 pb-6">
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900 font-semibold shadow hover:from-blue-200 hover:to-blue-100 transition-all">
          <span className="text-xl">👤</span>
          <span className="hidden md:inline">Account</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900 font-semibold shadow hover:from-blue-200 hover:to-blue-100 transition-all">
          <span className="text-xl">⚙️</span>
          <span className="hidden md:inline">Settings</span>
        </button>
      </div>
    </aside>
  );
}
