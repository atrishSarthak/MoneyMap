import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-blue-900 flex justify-center items-center min-h-[calc(100vh-80px)] py-8 md:py-0">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center px-4 md:px-10">
        {/* Left: Text and CTA */}
        <div className="flex flex-col items-start justify-center w-full max-w-xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Smart Finance Management <br /> with <span className="text-blue-300">MoneyMap</span>
          </h1>
          <p className="mb-8 text-lg md:text-xl text-blue-100 font-medium">
            Your <span className="text-blue-300 font-semibold">AI-powered</span> personal finance assistant for Indian users. Track expenses, manage budgets, and gain insights with ease.
          </p>
          <form className="flex w-full max-w-md mb-4" onSubmit={e => {e.preventDefault(); navigate("/dashboard")}}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-md bg-white text-blue-900 placeholder-blue-400 focus:outline-none border-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-bold rounded-r-md hover:bg-blue-400 transition"
            >
              Get Started Free
            </button>
          </form>
          {/* Avatar stack and user count */}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex -space-x-2">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user2" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="user3" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="user4" className="w-8 h-8 rounded-full border-2 border-white" />
            </div>
            <span className="text-sm text-blue-100 ml-2">Join <span className="text-blue-300 font-bold">10,000+</span> Indian users managing their finances</span>
          </div>
        </div>
        {/* Right: Product Preview Box */}
        <div className="flex justify-center items-center w-full">
          <div className="bg-white rounded-3xl shadow-2xl w-[320px] h-[320px] md:w-[400px] md:h-[400px] flex items-center justify-center">
            {/* Placeholder for product image/animation */}
            <span className="text-blue-900 text-2xl font-bold opacity-40">[Product Preview]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
