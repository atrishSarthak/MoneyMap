import React, { useState } from "react";
import AppModal from "../common/AppModal";
import NeumorphicButton from "../common/NeumorphicButton";
import { useFinance } from "../../context/FinanceContext";
import { useToast } from "../common/ToastProvider";

const ICONS = [
  "🛒", "🏠", "🎬", "💊", "☕", "📚", "🚗", "🍽️", "🛍️", "💡"
];
const COLORS = [
  "#60a5fa", "#f59e42", "#a78bfa", "#f87171", "#6b7280", "#34d399", "#facc15", "#f87171", "#a78bfa", "#34d399"
];

export default function AddEditBudgetModal({ open, onClose, editBudget }) {
  const { addCategory, setBudgetForCategory, categories, budgets } = useFinance();
  const [category, setCategory] = useState(editBudget ? editBudget.category : "");
  const [icon, setIcon] = useState(editBudget ? editBudget.icon : ICONS[0]);
  const [color, setColor] = useState(editBudget ? editBudget.color : COLORS[0]);
  const [limit, setLimit] = useState(editBudget ? editBudget.limit : "");
  const [error, setError] = useState("");
  const { showToast } = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!category.trim()) return setError("Category name is required.");
    if (!limit || isNaN(limit) || Number(limit) <= 0) return setError("Budget limit must be a positive number.");
    // Add category if not exists
    if (!categories.find(c => c.key === category)) {
      addCategory({ key: category, icon, color });
    }
    setBudgetForCategory(category, Number(limit));
    setError("");
    onClose();
    showToast(editBudget ? "Budget updated successfully!" : "Budget added successfully!", "success");
  }

  // For edit, pre-fill values
  React.useEffect(() => {
    if (editBudget) {
      setCategory(editBudget.category);
      setIcon(editBudget.icon);
      setColor(editBudget.color);
      setLimit(editBudget.limit);
    }
  }, [editBudget]);

  return (
    <AppModal open={open} onClose={onClose} width="max-w-md">
      <form className="flex flex-col gap-5 p-3" onSubmit={handleSubmit} aria-label={editBudget ? 'Edit Budget Modal' : 'Add Budget Modal'}>
        <div className="text-xl font-extrabold text-blue-900 mb-2 tracking-tight drop-shadow-sm">{editBudget ? "Edit Budget" : "Add Budget"}</div>
        {error && <div className="bg-red-100 text-red-600 rounded-lg px-3 py-2 text-sm font-semibold animate-fade-in">{error}</div>}
        <div className="flex gap-2 items-center">
          <label htmlFor="category-input" className="sr-only">Category name</label>
          <input
            id="category-input"
            className="border border-blue-100 rounded-xl px-3 py-2 text-blue-900 bg-blue-50 flex-1 shadow-inner focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Category name"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
            aria-label="Category name"
          />
          <label htmlFor="icon-select" className="sr-only">Icon</label>
          <select
            id="icon-select"
            className="border border-blue-100 rounded-xl px-2 py-2 bg-blue-50 text-xl shadow-inner focus:ring-2 focus:ring-blue-200 focus:outline-none"
            value={icon}
            onChange={e => setIcon(e.target.value)}
            aria-label="Category icon"
          >
            {ICONS.map(ic => <option key={ic} value={ic}>{ic}</option>)}
          </select>
          <input
            type="color"
            className="w-10 h-10 border-none outline-none bg-transparent"
            value={color}
            onChange={e => setColor(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border rounded-lg px-3 py-2 text-blue-900 bg-blue-50 w-full"
            placeholder="Budget limit (₹)"
            type="number"
            min="1"
            value={limit}
            onChange={e => setLimit(e.target.value)}
            required
          />
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <div className="flex gap-2 justify-end mt-2">
          <NeumorphicButton variant="secondary" type="button" onClick={onClose}>Cancel</NeumorphicButton>
          <NeumorphicButton variant="primary" type="submit">{editBudget ? "Save" : "Add"}</NeumorphicButton>
        </div>
      </form>
    </AppModal>
  );
}
