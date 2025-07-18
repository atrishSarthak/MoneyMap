import React from "react";
import NeumorphicButton from "../common/NeumorphicButton";

export default function SavingsGoalsCard() {
  // Example static data
  const goals = [
    { name: "Vacation", saved: 5000, target: 10000 },
    { name: "Emergency Fund", saved: 3000, target: 5000 },
  ];
  return (
    <div className="bg-white border border-blue-100 rounded-2xl shadow p-6 flex flex-col gap-4 min-w-[220px]">
      <div className="font-bold text-blue-800 text-lg mb-2">Savings Goals</div>
      {goals.map(goal => (
        <div key={goal.name} className="mb-2">
          <div className="flex justify-between text-blue-700 font-semibold text-sm">
            <span>{goal.name}</span>
            <span>{`₹${goal.saved} / ₹${goal.target}`}</span>
          </div>
          <div className="w-full h-2 bg-blue-50 rounded-full overflow-hidden mt-1">
            <div className="h-2 rounded-full bg-blue-400" style={{width: `${Math.min(100, (goal.saved/goal.target)*100)}%`}} />
          </div>
        </div>
      ))}
      <NeumorphicButton variant="primary" className="w-full mt-2 text-sm">Add Goal</NeumorphicButton>
    </div>
  );
}
