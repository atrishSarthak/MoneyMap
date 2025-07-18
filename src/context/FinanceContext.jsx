import React, { createContext, useContext, useState, useMemo } from "react";

// Initial demo categories (can be edited by user)
const DEFAULT_CATEGORIES = [
  { key: "Groceries", icon: "🛒", color: "#60a5fa" },
  { key: "Rent", icon: "🏠", color: "#f59e42" },
  { key: "Entertainment", icon: "🎬", color: "#a78bfa" },
  { key: "Medical", icon: "💊", color: "#f87171" },
  { key: "Coffee", icon: "☕", color: "#6b7280" },
  { key: "Subscriptions", icon: "📚", color: "#34d399" }
];

const FinanceContext = createContext();

export function FinanceProvider({ children }) {
  // Transactions: {id, name, amount, category, date, note, type: 'Credit'|'Debit'}
  const [transactions, setTransactions] = useState([
    { id: "1", name: "Starbucks", date: "2025-07-12", status: "Completed", amount: -250, category: "Coffee", type: "Debit" },
    { id: "2", name: "Big Bazaar", date: "2025-07-10", status: "Completed", amount: -2000, category: "Groceries", type: "Debit" },
    { id: "3", name: "Netflix", date: "2025-07-08", status: "Completed", amount: -499, category: "Entertainment", type: "Debit" },
    { id: "4", name: "Salary", date: "2025-07-01", status: "Completed", amount: 25000, category: "Salary", type: "Credit" },
    { id: "5", name: "Apollo Pharmacy", date: "2025-07-05", status: "Completed", amount: -350, category: "Medical", type: "Debit" },
    { id: "6", name: "Rent Paid", date: "2025-07-03", status: "Completed", amount: -15000, category: "Rent", type: "Debit" }
  ]);
  // Budgets: {id, category, limit}
  const [budgets, setBudgets] = useState([
    { id: 1, category: "Groceries", limit: 8000 },
    { id: 2, category: "Rent", limit: 15000 },
    { id: 3, category: "Entertainment", limit: 3000 },
    { id: 4, category: "Medical", limit: 2000 }
  ]);
  // Categories: can be extended by user
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);

  // Derived: balance
  const balance = useMemo(() => {
    return transactions.reduce((acc, t) => acc + Number(t.amount), 0);
  }, [transactions]);

  // Derived: spent per category
  const categorySpend = useMemo(() => {
    const spend = {};
    categories.forEach(cat => { spend[cat.key] = 0; });
    transactions.forEach(t => {
      if (t.type === "Debit") spend[t.category] = (spend[t.category] || 0) + Math.abs(Number(t.amount));
    });
    return spend;
  }, [transactions, categories]);

  // Add transaction
  function addTransaction(tx) {
    setTransactions(txs => [...txs, { ...tx, id: Math.random().toString(36).slice(2, 9) }]);
  }
  // Add/edit/remove budget
  function setBudgetForCategory(category, limit) {
    setBudgets(buds => {
      const idx = buds.findIndex(b => b.category === category);
      if (idx >= 0) {
        const copy = [...buds];
        copy[idx].limit = limit;
        return copy;
      }
      return [...buds, { id: Math.random().toString(36).slice(2, 9), category, limit }];
    });
  }
  // Add/remove category
  function addCategory(cat) {
    setCategories(cats => [...cats, cat]);
  }

  // Remove transaction
  function removeTransaction(id) {
    setTransactions(txs => txs.filter(t => t.id !== id));
  }

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        addTransaction,
        removeTransaction,
        budgets,
        setBudgetForCategory,
        categories,
        addCategory,
        balance,
        categorySpend
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}

export function useFinance() {
  return useContext(FinanceContext);
}
