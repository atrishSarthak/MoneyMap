import React, { useState } from "react";
import NeumorphicButton from "../ui/NeumorphicButton";
import AddTransactionModal from "./AddTransactionModal";
import BankingLinksModal from "./modals/BankingLinksModal";
import { useTransactions } from "../../context/TransactionsContext";

export default function BalanceQuickActionsCard() {
  const { balance, addTransaction } = useTransactions();
  const [addTxOpen, setAddTxOpen] = useState(false);
  const [bankingOpen, setBankingOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-400 mb-2">
      <div className="flex flex-col items-start">
        <span className="text-white text-lg font-semibold mb-1">Total Balance</span>
        <span className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">₹{balance.toLocaleString()}</span>
      </div>
      <div className="flex gap-3 flex-wrap justify-center">
        <NeumorphicButton variant="grey" className="px-6 py-3 text-base" onClick={() => setAddTxOpen(true)}>Add Transaction</NeumorphicButton>
        <NeumorphicButton variant="grey" className="px-6 py-3 text-base" onClick={() => setBankingOpen(true)}>Banking</NeumorphicButton>
      </div>
      <AddTransactionModal open={addTxOpen} onClose={() => setAddTxOpen(false)} onAdd={addTransaction} />
      <BankingLinksModal open={bankingOpen} onClose={() => setBankingOpen(false)} />
    </div>
  );
}
