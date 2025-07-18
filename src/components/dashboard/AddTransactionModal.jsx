import React, { useState } from "react";
import NeumorphicButton from "../common/NeumorphicButton";
import { FiX } from "react-icons/fi";
import AppModal from "../common/AppModal";
import { FiShoppingCart, FiCoffee, FiGift, FiHeart, FiActivity, FiHome, FiBookOpen, FiFilm } from "react-icons/fi";

const CATEGORIES = [
  { key: "Groceries", icon: <FiShoppingCart /> },
  { key: "Coffee", icon: <FiCoffee /> },
  { key: "Gifts", icon: <FiGift /> },
  { key: "Medical", icon: <FiHeart /> },
  { key: "Subscriptions", icon: <FiBookOpen /> },
  { key: "Entertainment", icon: <FiFilm /> },
  { key: "Rent", icon: <FiHome /> },
  { key: "Fitness", icon: <FiActivity /> },
];

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

export default function AddTransactionModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    category: CATEGORIES[0].key,
    date: "",
    note: "",
    status: "Completed",
    type: "Debit" // Default to Debit
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleType(type) {
    setForm({ ...form, type });
  }

  function handleCategory(cat) {
    setForm({ ...form, category: cat });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.date || !form.amount) return;
    const amt = Math.abs(parseFloat(form.amount));
    const signedAmount = form.type === "Debit" ? -amt : amt;
    onAdd({ ...form, amount: signedAmount, id: generateId() });
    setForm({ name: "", amount: "", category: CATEGORIES[0].key, date: "", note: "", status: "Completed", type: "Debit" });
    onClose();
  }

  return (
    <AppModal open={open} onClose={onClose} width="max-w-sm">
      <div className="flex flex-col items-center w-full p-6">
        {/* Modal Close Button (absolute in modal) */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-5 top-5 p-1 text-blue-400 hover:text-blue-700 opacity-70 hover:opacity-100 focus:outline-none z-10"
        >
          <FiX size={22} />
        </button>
        {/* Modal Header */}
        <div className="flex flex-col items-center w-full pt-4 pb-2">
          <div className="flex items-center gap-2 text-xl font-bold text-blue-800"><FiShoppingCart /> Log a transaction</div>
        </div>
        {/* Credit/Debit Toggle */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            type="button"
            className={`px-6 py-2 rounded-full font-semibold border-2 shadow transition-all duration-150 text-base focus:outline-none ${form.type === "Credit" ? "bg-blue-50 border-blue-500 text-blue-700" : "bg-white border-blue-200 text-blue-400"}`}
            onClick={() => handleType("Credit")}
          >
            Credit
          </button>
          <button
            type="button"
            className={`px-6 py-2 rounded-full font-semibold border-2 shadow transition-all duration-150 text-base focus:outline-none ${form.type === "Debit" ? "bg-blue-50 border-blue-500 text-blue-700" : "bg-white border-blue-200 text-blue-400"}`}
            onClick={() => handleType("Debit")}
          >
            Debit
          </button>
        </div>
        <form className="flex flex-col gap-3 w-full mt-2 relative" onSubmit={handleSubmit}>

          <input
            name="amount"
            type="number"
            min="0"
            step="0.01"
            value={form.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="text-2xl font-bold text-blue-900 bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 mb-2 outline-none w-full"
            required
            inputMode="decimal"
          />
          <div className="flex gap-2 overflow-x-auto pb-2 mb-2">
            {CATEGORIES.map(cat => (
              <button
                type="button"
                key={cat.key}
                className={`flex flex-col items-center px-3 py-2 rounded-xl border-2 ${form.category === cat.key ? "border-blue-500 bg-blue-100" : "border-transparent bg-white"} text-blue-700 focus:outline-none`}
                onClick={() => handleCategory(cat.key)}
              >
                <span className="text-xl mb-1">{cat.icon}</span>
                <span className="text-xs font-medium">{cat.key}</span>
              </button>
            ))}
          </div>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Payment Name"
            className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 outline-none text-blue-900 mb-2"
            required
          />
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 outline-none text-blue-900 mb-2"
            required
          />
          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            placeholder="Note (optional)"
            className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 outline-none text-blue-900 min-h-[36px]"
          />
          <div className="flex flex-col gap-2 mt-3">
            <NeumorphicButton variant="primary" type="submit" className="w-full text-lg py-3">Add Transaction</NeumorphicButton>
          </div>
        </form>
      </div>
    </AppModal>
  );
}
