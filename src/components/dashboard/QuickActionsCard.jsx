import React from "react";
import NeumorphicButton from "../ui/NeumorphicButton";

export default function QuickActionsCard() {
  return (
    <div className="bg-white border border-blue-100 rounded-2xl shadow p-6 flex flex-col gap-4 min-w-[220px] items-center">
      <div className="font-bold text-blue-800 text-lg mb-2">Quick Actions</div>
      <div className="flex gap-2 flex-wrap justify-center">
        <NeumorphicButton variant="primary" className="px-4 py-2 text-sm">Add Transaction</NeumorphicButton>
        <NeumorphicButton variant="primary" className="px-4 py-2 text-sm">Transfer</NeumorphicButton>
        <NeumorphicButton variant="primary" className="px-4 py-2 text-sm">Request Payment</NeumorphicButton>
      </div>
    </div>
  );
}
