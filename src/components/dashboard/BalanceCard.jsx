import React from "react";
import NeumorphicButton from "../common/NeumorphicButton";

export default function BalanceCard() {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl shadow-lg p-6 flex flex-col gap-4 min-w-[240px] max-w-xs">
      <div className="text-gray-400 text-sm">Total Balance</div>
      <div className="text-3xl md:text-4xl font-bold text-blue-900">$31,180<span className="text-gray-300 text-lg align-super">.24</span></div>
      <div className="flex gap-3">
        <NeumorphicButton variant="primary" className="flex-1">Send</NeumorphicButton>
        <NeumorphicButton variant="secondary" className="flex-1">Receive</NeumorphicButton>
      </div>
    </div>
  );
}
