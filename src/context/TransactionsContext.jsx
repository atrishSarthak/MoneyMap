import React, { createContext, useContext, useState } from "react";

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([
    // Example default transactions
    { id: "1", name: "Starbucks", date: "2025-07-12", status: "Completed", amount: -250 },
    { id: "2", name: "Salary", date: "2025-07-10", status: "Completed", amount: 25000 },
    { id: "3", name: "Amazon", date: "2025-07-08", status: "Completed", amount: -1200 },
    { id: "4", name: "Uber", date: "2025-07-07", status: "Completed", amount: -340 },
    { id: "5", name: "Netflix", date: "2025-07-05", status: "Completed", amount: -499 },
  ]);

  function addTransaction(tx) {
    setTransactions(prev => [tx, ...prev]);
  }

  // Calculate balance from transactions
  const balance = transactions.reduce((sum, tx) => sum + tx.amount, 0);

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction, balance }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
