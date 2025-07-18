import React, { useState } from "react";
import NeumorphicButton from "../../ui/NeumorphicButton";
import AppModal from "../../common/AppModal";
import { FiCalendar, FiDollarSign, FiTag, FiRepeat, FiFileText, FiX } from "react-icons/fi";

export default function AddBillModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    dueDate: "",
    type: "One-time",
    note: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.amount || !form.dueDate) return;
    onAdd({ ...form, amount: parseFloat(form.amount), id: Math.random().toString(36).substr(2, 9) });
    setForm({ name: "", amount: "", dueDate: "", type: "One-time", note: "" });
    onClose();
  }

  if (!open) return null;
  return (
    <AppModal open={open} onClose={onClose} width="max-w-lg">
      <div className="flex items-center gap-2 text-lg font-bold text-blue-800 mb-2 mt-4 ml-4 relative"><FiFileText /> Add Bill
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-0 top-0 p-1 text-blue-400 hover:text-blue-700 opacity-70 hover:opacity-100 focus:outline-none"
        >
          <FiX size={20} />
        </button>
      </div>
      <form className="flex flex-col gap-5 px-6 py-2" onSubmit={handleSubmit}>
        <div>
          <label className="block text-blue-700 font-semibold mb-1">Bill Name</label>
          <div className="flex items-center border border-blue-100 rounded-lg bg-blue-50 px-3 py-2">
            <FiTag className="mr-2 text-blue-400" />
            <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Netflix, Rent" className="bg-transparent outline-none flex-1 text-blue-900" required />
          </div>
        </div>
        <div>
          <label className="block text-blue-700 font-semibold mb-1">Amount</label>
          <div className="flex items-center border border-blue-100 rounded-lg bg-blue-50 px-3 py-2">
            <FiDollarSign className="mr-2 text-blue-400" />
            <input name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" type="number" min="0" step="0.01" className="bg-transparent outline-none flex-1 text-blue-900" required />
          </div>
        </div>
        <div>
          <label className="block text-blue-700 font-semibold mb-1">Due Date</label>
          <div className="flex items-center border border-blue-100 rounded-lg bg-blue-50 px-3 py-2">
            <FiCalendar className="mr-2 text-blue-400" />
            <input name="dueDate" value={form.dueDate} onChange={handleChange} type="date" className="bg-transparent outline-none flex-1 text-blue-900" required />
          </div>
        </div>
        <div>
          <label className="block text-blue-700 font-semibold mb-1">Type</label>
          <select name="type" value={form.type} onChange={handleChange} className="border border-blue-100 rounded-lg bg-blue-50 px-3 py-2 text-blue-900 w-full">
            <option value="One-time">One-time</option>
            <option value="Recurring">Recurring</option>
          </select>
        </div>
        <div>
          <label className="block text-blue-700 font-semibold mb-1">Note (optional)</label>
          <textarea name="note" value={form.note} onChange={handleChange} placeholder="Add a note..." className="border border-blue-100 rounded-lg bg-blue-50 px-3 py-2 text-blue-900 w-full min-h-[40px]" />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <NeumorphicButton variant="primary" type="submit" className="px-8 py-2 text-base">Add Bill</NeumorphicButton>
        </div>
      </form>
    </AppModal>
  );
}
