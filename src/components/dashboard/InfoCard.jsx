import React from "react";
import NeumorphicButton from "../ui/NeumorphicButton";

export default function InfoCard() {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl shadow-lg p-4 flex flex-col gap-2 min-w-[200px]">
      <div className="font-bold text-blue-800 mb-1">How To Manage Money Well?</div>
      <div className="text-xs text-gray-600 mb-2">Learn how to budget, save, and invest for a secure financial future.</div>
      <NeumorphicButton variant="secondary" className="w-max">Learn More</NeumorphicButton>
    </div>
  );
}
