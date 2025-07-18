import React from "react";
import Navbar from "../components/landing/Navbar";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-200 via-blue-50 to-cyan-100 flex flex-col">
      <Navbar />
      <main className="flex flex-col md:flex-row items-center justify-between flex-1 px-4 md:px-16 py-8 gap-8">
        {/* Left headline */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <span className="mb-4 px-3 py-1 bg-white bg-opacity-60 rounded-full text-xs font-semibold text-blue-700 shadow">#1 MoneyMap App in App Store</span>
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 leading-tight mb-4 relative">
            <span>Manage your<br />finance easily<br />with <span className="underline decoration-blue-400 decoration-4">MoneyMap</span></span>
            <svg className="absolute left-0 -bottom-6 hidden md:block" width="180" height="40" fill="none"><path d="M2 38c40-18 120-36 176-36" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round"/></svg>
          </h1>
          <p className="text-gray-700 text-lg mb-6">With MoneyMap you can buy, sell, and manage your finance in the easiest way and the fastest time.</p>
          <form className="flex w-full max-w-md mb-8">
            <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-3 rounded-l-full bg-white bg-opacity-80 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700" />
            <button
  type="button"
  className="px-6 py-3 rounded-r-full bg-blue-900 text-white font-bold hover:bg-blue-700 transition"
  onClick={() => navigate("/dashboard")}
>
  Get Started
</button>
          </form>
        </div>
        {/* Right: phone mockup */}
<div className="flex-1 flex items-center justify-center">
  <div className="relative w-[320px] h-[600px] bg-blue-100 rounded-3xl shadow-2xl border-8 border-white flex flex-col items-center pt-8 pb-6 px-4">
    {/* User greeting */}
    <div className="flex items-center gap-3 mb-4">
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-10 h-10 rounded-full border-2 border-blue-200" />
      <div>
        <div className="font-bold text-blue-900 text-lg">Hello Sarthak!</div>
        <div className="text-xs text-blue-400">Welcome to MoneyMap</div>
      </div>
    </div>
    {/* Card preview */}
    <div className="w-full flex gap-3 mb-6">
      <div className="flex-1 bg-blue-900 text-white rounded-xl p-4 flex flex-col items-start justify-between min-h-[120px] shadow">
        <div className="font-bold text-lg">₹2230.14</div>
        <div className="text-xs">Platinum Plus</div>
        <div className="text-xs mt-2">Valid Thru 12/24</div>
      </div>
      <div className="flex-1 bg-white text-blue-900 rounded-xl p-4 flex flex-col items-start justify-between min-h-[120px] shadow border border-blue-100">
        <div className="font-bold text-lg">₹2617.10</div>
        <div className="text-xs">Standard</div>
        <div className="text-xs mt-2">Valid Thru 12/22</div>
      </div>
    </div>
    {/* Payment buttons */}
    <div className="w-full flex gap-2 mb-6">
      <button className="flex-1 py-2 rounded-full bg-blue-900 text-white font-semibold hover:bg-blue-700 transition">Make a payment</button>
      <button className="flex-1 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition">Request payment</button>
    </div>
    {/* Transactions list */}
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-between items-center text-sm">
        <span className="font-bold text-blue-900">Transactions</span>
        <span className="text-xs text-gray-400">See All</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2"><span className="text-xl">🎬</span> Netflix</span>
        <span className="font-bold">₹18.99</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2"><span className="text-xl">☁️</span> Dropbox</span>
        <span className="font-bold">₹9.99</span>
      </div>
    </div>
    {/* Avatars and rating */}
    <div className="absolute bottom-4 right-6 flex items-center gap-2">
      <div className="flex -space-x-2">
        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/31.jpg" alt="User 1" />
        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 2" />
        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/45.jpg" alt="User 3" />
      </div>
      <div className="flex items-center bg-white rounded-full px-2 py-1 shadow text-xs font-bold gap-1">
        <span>⭐</span> 5.0
      </div>
    </div>
    {/* Decorative line */}
    <svg className="absolute left-0 top-0" width="100" height="40" fill="none"><path d="M2 38c30-18 80-36 96-36" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/></svg>
  </div>
</div>
      </main>
    </div>
  );
}
