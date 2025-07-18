import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import { useFinance } from "../context/FinanceContext";
import ConfirmModal from "../components/common/ConfirmModal";
import { useToast } from "../components/common/ToastProvider";

export default function Transactions() {
  const { transactions, removeTransaction } = useFinance();
  const [deleteTx, setDeleteTx] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const { showToast } = useToast();
  return (
    <>
      <div className="flex min-h-screen w-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white">
        <Sidebar />
        <main className="ml-48 md:ml-64 flex-1 p-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-6">Transactions</h1>
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-blue-100">
            {transactions.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-[220px]">
                <div className="text-blue-400 text-5xl mb-2">🗃️</div>
                <div className="text-blue-900 font-bold mb-1">No transactions yet</div>
                <div className="text-blue-400 text-sm">Add your first transaction to get started!</div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-blue-900" role="table">
                  <thead className="sticky top-0 bg-white/80 backdrop-blur border-b border-blue-100 z-10">
                    <tr>
                      <th className="py-2 text-left font-bold">Transaction ID</th>
                      <th className="py-2 text-left font-bold">Payment Name</th>
                      <th className="py-2 text-left font-bold">Date</th>
                      <th className="py-2 text-left font-bold">Status</th>
                      <th className="py-2 text-left font-bold">Amount</th>
                      <th className="py-2 text-left font-bold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx, idx) => (
                      <tr
                        key={tx.id || idx}
                        className={
                          `border-b border-blue-50 transition-colors duration-150 ` +
                          (idx % 2 === 0 ? 'bg-white/60' : 'bg-blue-50/50') +
                          ' hover:bg-blue-100/60'
                        }
                        role="row"
                      >
                        <td className="py-2" role="cell">{tx.id}</td>
                        <td role="cell">{tx.name}</td>
                        <td role="cell">{tx.date}</td>
                        <td role="cell">{tx.status}</td>
                        <td className={tx.amount < 0 ? "text-red-500 font-bold" : "text-green-500 font-bold"} role="cell">{tx.amount < 0 ? "-" : "+"}₹{Math.abs(tx.amount)}</td>
                        <td role="cell">
                          <button className="px-2 py-1 rounded-lg bg-blue-50 text-blue-900 text-xs font-semibold hover:bg-blue-100 mr-1 cursor-not-allowed" disabled>Edit</button>
                          <button className="px-2 py-1 rounded-lg bg-red-50 text-red-600 text-xs font-semibold hover:bg-red-100" onClick={() => setDeleteTx(tx)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
      <ConfirmModal
        open={!!deleteTx}
        onClose={() => setDeleteTx(null)}
        onConfirm={async () => {
          if (!deleteTx) return;
          setDeleting(true);
          try {
            removeTransaction(deleteTx.id);
            showToast("Transaction deleted", "success");
          } catch (e) {
            showToast("Failed to delete transaction", "error");
          }
          setDeleting(false);
          setDeleteTx(null);
        }}
        title="Delete Transaction"
        message={`Are you sure you want to delete this transaction? This cannot be undone.`}
        confirmText="Delete"
        loading={deleting}
      />
    </>
  );
}
