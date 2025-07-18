import React from "react";
import NeumorphicButton from "../common/NeumorphicButton";

export default function TransactionsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
      <div className="text-2xl md:text-3xl font-bold text-blue-900">Transactions</div>
      <div className="flex gap-2">
        <input type="text" placeholder="Search anything..." className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white bg-opacity-90 placeholder:text-blue-400 min-w-[220px]" />
        <NeumorphicButton variant="primary">Add Income</NeumorphicButton>
        <NeumorphicButton variant="secondary">Export</NeumorphicButton>
      </div>
    </div>
  );
}
