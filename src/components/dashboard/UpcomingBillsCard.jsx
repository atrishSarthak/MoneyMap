import React, { useState } from "react";
import NeumorphicButton from "../common/NeumorphicButton";
import AddBillModal from "./modals/AddBillModal";

export default function UpcomingBillsCard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bills, setBills] = useState([
    { id: "1", name: "Netflix", dueDate: "2025-07-18", amount: 499, type: "Recurring", status: "Upcoming" },
    { id: "2", name: "Rent", dueDate: "2025-08-01", amount: 12000, type: "Recurring", status: "Upcoming" },
    { id: "3", name: "Spotify", dueDate: "2025-07-20", amount: 199, type: "Recurring", status: "Upcoming" },
  ]);

  function handleAddBill(bill) {
    setBills(prev => [bill, ...prev]);
  }

  return (
    <div className="bg-white border border-blue-200 rounded-2xl shadow-xl p-0 flex flex-col min-w-[260px] max-w-full">
      {/* Card header */}
      <div className="flex items-center justify-between bg-blue-50 px-6 py-4 rounded-t-2xl border-b border-blue-100">
        <span className="text-lg font-bold text-blue-800">Upcoming Bills</span>
        <NeumorphicButton variant="primary" className="px-5 py-2 text-sm" onClick={() => setModalOpen(true)}>
          Add Bill
        </NeumorphicButton>
      </div>
      {/* Bills table/list */}
      <div className="px-6 py-4">
        <table className="w-full text-blue-900">
          <thead>
            <tr className="border-b border-blue-100 text-xs text-blue-700">
              <th className="py-1 text-left font-semibold">Bill Name</th>
              <th className="py-1 text-left font-semibold">Amount</th>
              <th className="py-1 text-left font-semibold">Due Date</th>
              <th className="py-1 text-left font-semibold">Type</th>
              <th className="py-1 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {bills.length === 0 ? (
              <tr><td colSpan={5} className="text-center text-gray-400 py-6">No upcoming bills</td></tr>
            ) : (
              bills.map((bill) => (
                <tr key={bill.id} className="border-b border-blue-50 text-sm">
                  <td className="py-2 font-medium">{bill.name}</td>
                  <td>₹{bill.amount}</td>
                  <td>{bill.dueDate}</td>
                  <td>{bill.type}</td>
                  <td>{bill.status || "Upcoming"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <AddBillModal open={modalOpen} onClose={() => setModalOpen(false)} onAdd={handleAddBill} />
    </div>
  );
}
