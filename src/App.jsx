import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import { ToastProvider } from "./components/common/ToastProvider";
import { FinanceProvider } from "./context/FinanceContext";
import { TransactionsProvider } from "./context/TransactionsContext";

function App() {
  return (
    <ToastProvider>
      <FinanceProvider>
        <TransactionsProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/budgets" element={<Budgets />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </TransactionsProvider>
      </FinanceProvider>
    </ToastProvider>
  );
}

export default App;
