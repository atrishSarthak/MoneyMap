import React from "react";
import { useNavigate } from "react-router-dom";
import { useTransactions } from "../../context/TransactionsContext";

export default function RecentTransactionsCard() {
  const { transactions } = useTransactions();
  const navigate = useNavigate();
  return (
    <div className="bg-white border border-blue-100 rounded-2xl shadow p-6 flex flex-col gap-3 min-w-[220px]">
      <div className="font-bold text-blue-800 text-lg mb-2 flex justify-between items-center">
        <span>Recent Transactions</span>
        <button className="text-blue-500 text-xs underline hover:text-blue-700" onClick={() => navigate("/transactions")}>See More</button>
      </div>
      {transactions.slice(0, 5).map((tx, idx) => (
        <div key={tx.id || idx} className="flex justify-between text-blue-700 text-sm">
          <span>{tx.name}</span>
          <span className={tx.amount < 0 ? "text-red-500" : "text-green-500"}>{tx.amount < 0 ? "-" : "+"}₹{Math.abs(tx.amount)}</span>
          <span className="text-gray-400">{tx.date}</span>
        </div>
      ))}
    </div>
  );
}
