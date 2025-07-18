import React from "react";
import NeumorphicButton from "../ui/NeumorphicButton";

export default function CreditScoreCard() {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl shadow-lg p-4 flex flex-col items-center min-w-[200px]">
      <div className="font-bold text-blue-800 mb-2">Credit Score</div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-200 via-green-200 to-blue-100 flex items-center justify-center mb-2">
          <span className="text-3xl font-bold text-blue-900">1620</span>
        </div>
        <div className="text-green-600 font-bold">Excellent</div>
        <NeumorphicButton variant="primary" className="mt-2 w-max text-xs">Explore Benefits</NeumorphicButton>
      </div>
    </div>
  );
}
