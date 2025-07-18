import React from "react";
import Sidebar from "../components/layout/Sidebar";
import DashboardHeader from "../components/layout/DashboardHeader";
import DashboardNav from "../components/dashboard/DashboardNav";
import BalanceQuickActionsCard from "../components/dashboard/BalanceQuickActionsCard";
import SavingsGoalsCard from "../components/dashboard/SavingsGoalsCard";
import AITipCard from "../components/dashboard/AITipCard";
import MonthlySpendingChart from "../components/dashboard/MonthlySpendingChart";
import UpcomingBillsCard from "../components/dashboard/UpcomingBillsCard";
import RecentTransactionsCard from "../components/dashboard/RecentTransactionsCard";
import BudgetHealthCard from "../components/dashboard/BudgetHealthCard";

import ErrorBoundary from "../components/ErrorBoundary";

import { FinanceProvider } from "../context/FinanceContext";

export default function Dashboard() {
  return (
    <ErrorBoundary>
      <FinanceProvider>
        <div className="min-h-screen w-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white flex">
          <Sidebar />
          <main className="ml-48 md:ml-64 flex flex-col items-start justify-start py-8 px-2 w-full min-h-screen">
            <div className="w-full h-full rounded-3xl shadow-2xl bg-white bg-opacity-70 backdrop-blur-lg p-0 md:p-6 flex flex-col gap-2">
              <DashboardHeader />
              <DashboardNav />
              {/* Top Row: Full-width Balance + Quick Actions */}
              <div className="w-full px-4"><BalanceQuickActionsCard /></div>
              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                <SavingsGoalsCard />
                <AITipCard />
                <MonthlySpendingChart />
              </div>
              {/* Third Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                <UpcomingBillsCard />
                <RecentTransactionsCard showSummary={true} />
              </div>
              {/* Fourth Row */}
              <div className="w-full px-4"><BudgetHealthCard /></div>
              {/* Bottom Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                <RecentTransactionsCard showSummary={true} />
                <BudgetHealthCard />
              </div>
            </div>
          </main>
        </div>
      </FinanceProvider>
    </ErrorBoundary>
  );
}
