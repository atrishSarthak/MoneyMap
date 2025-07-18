import React from "react";

export default function SuggestionsBox() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-6 flex flex-col gap-3">
      <div className="text-blue-700 font-bold text-lg mb-1">💡 Smart Suggestion</div>
      <div className="text-gray-700 text-sm">You’ve overspent <span className="font-semibold text-red-500">20%</span> on food this month. Set a budget goal?</div>
      <NeumorphicButton variant="primary" className="mt-2 w-max">Set Goal</NeumorphicButton>
    </div>
  );
}
