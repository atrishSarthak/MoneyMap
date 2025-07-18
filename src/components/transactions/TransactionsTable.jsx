import React from "react";
import NeumorphicButton from "../common/NeumorphicButton";

export default function TransactionsTable() {
  return (
    <div className="flex-1 overflow-x-auto">
      <table className="min-w-full bg-white bg-opacity-80 rounded-xl shadow">
        <thead>
          <tr className="text-blue-700 text-xs">
            <th className="py-3 px-2 font-semibold text-left">Transaction ID</th>
            <th className="py-3 px-2 font-semibold text-left">Payment Name</th>
            <th className="py-3 px-2 font-semibold text-left">Date</th>
            <th className="py-3 px-2 font-semibold text-left">Status</th>
            <th className="py-3 px-2 font-semibold text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* Example rows */}
          <tr className="border-b border-blue-50 hover:bg-blue-50 transition">
            <td className="py-2 px-2">TM-20240210</td>
            <td className="py-2 px-2">Transfer from Bank</td>
            <td className="py-2 px-2">Feb 23, 2025</td>
            <td className="py-2 px-2"><span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">Completed</span></td>
            <td className="py-2 px-2 text-green-600 font-bold">+$3,000</td>
          </tr>
          <tr className="border-b border-blue-50 hover:bg-blue-50 transition">
            <td className="py-2 px-2">TM-20240209</td>
            <td className="py-2 px-2">Youtube Premium</td>
            <td className="py-2 px-2">Feb 22, 2025</td>
            <td className="py-2 px-2"><span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">Completed</span></td>
            <td className="py-2 px-2 text-red-500 font-bold">-$12</td>
          </tr>
          <tr className="border-b border-blue-50 hover:bg-blue-50 transition">
            <td className="py-2 px-2">TM-20240208</td>
            <td className="py-2 px-2">Internet</td>
            <td className="py-2 px-2">Feb 21, 2025</td>
            <td className="py-2 px-2"><span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">Completed</span></td>
            <td className="py-2 px-2 text-red-500 font-bold">-$30</td>
          </tr>
          <tr className="hover:bg-blue-50 transition">
            <td className="py-2 px-2">TM-20240207</td>
            <td className="py-2 px-2">Transfer from Bank</td>
            <td className="py-2 px-2">Feb 20, 2025</td>
            <td className="py-2 px-2"><span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">Completed</span></td>
            <td className="py-2 px-2 text-green-600 font-bold">+$5,000</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xs text-blue-400">Showing 1-4 of 200</span>
        <div className="flex gap-2">
          <NeumorphicButton variant="secondary">Prev</NeumorphicButton>
          <NeumorphicButton variant="primary">Next</NeumorphicButton>
        </div>
      </div>
    </div>
  );
}
