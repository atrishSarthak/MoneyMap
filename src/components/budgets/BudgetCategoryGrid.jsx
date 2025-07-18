import React, { useState } from "react";
import BudgetCategoryCard from "./BudgetCategoryCard";
import { useFinance } from "../../context/FinanceContext";
import { calculateBudgetStatus } from "../../utils/calculations";
import AddEditBudgetModal from "./AddEditBudgetModal";
import ConfirmModal from "../common/ConfirmModal";
import { useToast } from "../common/ToastProvider";

export default function BudgetCategoryGrid() {
  const { budgets, categories, categorySpend, removeBudgetForCategory, removeCategory } = useFinance();
  const [editBudget, setEditBudget] = useState(null);
  const [deleteBudget, setDeleteBudget] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const { showToast } = useToast();

  const handleDelete = async () => {
    if (!deleteBudget) return;
    setDeleting(true);
    try {
      removeBudgetForCategory(deleteBudget.category);
      removeCategory(deleteBudget.category);
      showToast(`Budget for '${deleteBudget.category}' deleted`, "success");
    } catch (e) {
      showToast("Failed to delete budget", "error");
    }
    setDeleting(false);
    setDeleteBudget(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {budgets.map((budget) => {
          const cat = categories.find(c => c.key === budget.category) || {};
          const spent = categorySpend[budget.category] || 0;
          const percent = budget.limit ? Math.round((spent / budget.limit) * 100) : 0;
          const status = calculateBudgetStatus(budget, spent);
          let alert = null;
          if (status === "overspent") alert = "Overspent";
          else if (status === "warning") alert = "Warning";
          return (
            <BudgetCategoryCard
              key={budget.category}
              category={budget.category}
              icon={cat.icon}
              limit={budget.limit}
              spent={spent}
              percent={percent}
              alert={alert}
              color={cat.color}
              onEdit={() => setEditBudget({ ...budget, icon: cat.icon, color: cat.color })}
              onDelete={() => setDeleteBudget({ ...budget, icon: cat.icon, color: cat.color })}
            />
          );
        })}
      </div>
      <AddEditBudgetModal open={!!editBudget} onClose={() => setEditBudget(null)} editBudget={editBudget} />
      <ConfirmModal
        open={!!deleteBudget}
        onClose={() => setDeleteBudget(null)}
        onConfirm={handleDelete}
        title="Delete Budget"
        message={`Are you sure you want to delete the budget for '${deleteBudget?.category}'? This cannot be undone.`}
        confirmText="Delete"
        loading={deleting}
      />
    </>
  );
}
