import React from "react";
import { useNavigate } from "react-router-dom";
import NeumorphicButton from "../common/NeumorphicButton";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="w-screen bg-blue-900 text-white border-b border-blue-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 font-extrabold text-2xl">
          <span className="bg-white rounded-full p-1"><span role="img" aria-label="logo">💰</span></span>
          <span className="text-white">Money</span><span className="text-blue-300">Map</span>
        </div>
        {/* Center: Nav Links */}
        <ul className="hidden lg:flex gap-7 text-base font-semibold">
          <li><a href="#" className="hover:text-blue-300 transition">Dashboard</a></li>
          <li><a href="#" className="hover:text-blue-300 transition">Transactions</a></li>
          <li><a href="#" className="hover:text-blue-300 transition">Budgets</a></li>
          <li><a href="#" className="hover:text-blue-300 transition">Reports</a></li>
          <li className="relative flex items-center">
            <a href="#" className="hover:text-blue-300 transition">Finance AI</a>
            <span className="ml-2 text-xs bg-blue-300 text-blue-900 font-bold px-2 py-0.5 rounded-full animate-pulse">New</span>
          </li>
          <li><a href="#" className="hover:text-blue-300 transition">About</a></li>
          <li><a href="#" className="hover:text-blue-300 transition">Contact</a></li>
        </ul>
        {/* Right: Buttons */}
        <div className="flex gap-2">
          <NeumorphicButton
            variant="secondary"
            className="px-5 py-2 text-base"
            onClick={() => navigate("/dashboard")}
          >
            Log In
          </NeumorphicButton>
          <NeumorphicButton
            variant="primary"
            className="px-5 py-2 text-base"
            onClick={() => navigate("/dashboard")}
          >
            Sign Up
          </NeumorphicButton>
        </div>
        {/* Hamburger for mobile */}
        <div className="lg:hidden flex items-center">
          {/* Hamburger menu icon (not functional in this starter) */}
          <button className="text-white focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
