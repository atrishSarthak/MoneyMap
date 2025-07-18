import React from "react";
import NeumorphicButton from "../ui/NeumorphicButton";

const transactions = [
  { name: "Apple Inc", date: "30 min ago", amount: -45, icon: "🍏" },
  { name: "Jerry Hofer", date: "12 Dec 2024", amount: 120, icon: "👤" },
  { name: "Dribbble", date: "11 Dec 2024", amount: -350, icon: "🏀" },
  { name: "Ekta Food", date: "10 Dec 2024", amount: -452, icon: "🍔" },
  { name: "Paypal Payment", date: "04 Dec 2024", amount: 102, icon: "💸" },
];

export default function TransactionsList() {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl shadow-lg p-4 flex flex-col gap-2 min-w-[220px]">
      <div className="font-bold text-blue-800 mb-2">Transactions</div>
      <ul className="flex flex-col gap-2">
        {transactions.map((tx, idx) => (
          <li key={idx} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="text-lg">{tx.icon}</span>
              <div>
                <div className="font-semibold text-gray-700">{tx.name}</div>
                <div className="text-gray-400 text-xs">{tx.date}</div>
              </div>
            </div>
            <div className={`font-bold ${tx.amount < 0 ? "text-red-500" : "text-green-600"}`}>
              {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount)}.00
            </div>
          </li>
        ))}
      </ul>
      <NeumorphicButton variant="primary" className="mt-2 w-max self-end text-xs">See All</NeumorphicButton>
    </div>
  );
}
