// Helper functions for budgets, categories, and transactions

export function calculateCategorySpent(transactions, category) {
  return transactions
    .filter(t => t.category === category && t.type === "Debit")
    .reduce((sum, t) => sum + Math.abs(Number(t.amount)), 0);
}

export function calculateBudgetStatus(budget, spent) {
  if (spent > budget.limit) return "overspent";
  if (spent > budget.limit * 0.9) return "warning";
  return "ok";
}

export function calculateBalance(transactions) {
  return transactions.reduce((acc, t) => acc + Number(t.amount), 0);
}
