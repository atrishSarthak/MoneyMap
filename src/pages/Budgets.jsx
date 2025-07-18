import React from "react";
import Sidebar from "../components/layout/Sidebar";
import BudgetTopBar from "../components/budgets/BudgetTopBar";
import BudgetCategoryGrid from "../components/budgets/BudgetCategoryGrid";
import BudgetPieChart from "../components/budgets/BudgetPieChart";
import BudgetBarChart from "../components/budgets/BudgetBarChart";
import BudgetLineChart from "../components/budgets/BudgetLineChart";
import AddBudgetButton from "../components/budgets/AddBudgetButton";
import AddEditBudgetModal from "../components/budgets/AddEditBudgetModal";

import { FinanceProvider } from "../context/FinanceContext";

export default function Budgets() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-100 via-gray-50 to-blue-50 flex">
      <Sidebar />
      <main className="flex-1 min-h-screen ml-20 md:ml-64 px-4 md:px-12 py-8 flex flex-col gap-8">
        <BudgetTopBar />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 flex flex-col gap-8">
            <BudgetCategoryGrid />
          </div>
          <div className="flex flex-col gap-6">
            <BudgetPieChart />
            <BudgetBarChart />
            <BudgetLineChart />
          </div>
        </div>
        <AddBudgetButton onClick={() => setModalOpen(true)} />
      </main>
      <AddEditBudgetModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
