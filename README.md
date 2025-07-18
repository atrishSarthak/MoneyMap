# 💸 MoneyMap

**MoneyMap** is a modern, full-featured personal finance dashboard web application. It empowers users to track income, expenses, budgets, and overall financial health—all with a beautiful, interactive UI and real-time feedback.

---

## 🚀 Live Demo

> _Deploy on Vercel or run locally. See instructions below._

---

## ✨ Features

- **Landing Page:** Marketing, onboarding, and instant navigation to dashboard.
- **Dashboard:** Financial overview, balance, quick actions, charts, and recent activity.
- **Transactions:** Full list, add, and delete transactions with confirmation and toast feedback.
- **Budgets:** Create, edit, and delete category budgets. Visualize with pie, bar, and line charts.
- **Modals:** All forms and destructive actions use accessible, animated modals.
- **Context API:** All financial data and logic are centralized for instant updates everywhere.
- **Toast Notifications:** Global feedback for every user action.
- **Responsive & Modern UI:** Beautiful on desktop and mobile, built with Tailwind CSS.
- **Ready for Deployment:** Optimized for Vercel, GitHub, and future backend/API integrations.

---

## 🏗️ Architecture

- **React** (Vite) for UI and routing
- **Tailwind CSS** for styling
- **React Context API** for state management
- **Recharts** for analytics and visualizations
- **Modular Components** for cards, charts, modals, and navigation
- **ToastProvider** for global notifications

---

## 📄 Pages & Components

### **Landing Page (`/`)**
- Hero section, email input, and **Get Started** button (navigates to dashboard).
- Visual phone mockup with demo UI.
- Navbar with branding.

### **Dashboard (`/dashboard`)**
- Sidebar for navigation.
- **BalanceCard** and **BalanceQuickActionsCard** (with add transaction modal).
- **BudgetHealthCard** for quick budget status.
- **RecentTransactionsCard** for latest activity.
- **Charts:** Pie, bar, and line for spending analytics.
- **AITipCard** placeholder for future AI features.

### **Transactions (`/transactions`)**
- Full transaction table.
- Delete with confirmation modal and toast feedback.

### **Budgets ([/budgets](cci:7://file:///Users/sarthakatrish/Desktop/MoneyMap/src/components/budgets:0:0-0:0))**
- **BudgetTopBar:** Month selector, totals.
- **BudgetCategoryGrid:** Cards for each budgeted category.
- **BudgetCategoryCard:** Shows icon, limit, spent, percent, and alerts.
- **Add/Edit Budget:** Modal form with validation.
- **Delete Budget:** Confirmation modal.
- **Charts:** Pie, bar, and line for category and time-based spend.

### **Modals**
- **AppModal:** Generic modal wrapper.
- **AddEditBudgetModal:** For adding/editing budgets and categories.
- **AddTransactionModal:** For adding new transactions.
- **ConfirmModal:** For all destructive actions.

---

## 🧠 State & Data Flow

- **FinanceContext:**  
  Manages all financial data: transactions, budgets, categories, and derived values (balance, category spend).
- **Actions:**  
  [addTransaction](cci:1://file:///Users/sarthakatrish/Desktop/MoneyMap/src/context/FinanceContext.jsx:49:2-52:3), [removeTransaction](cci:1://file:///Users/sarthakatrish/Desktop/MoneyMap/src/context/FinanceContext.jsx:70:2-73:3), [setBudgetForCategory](cci:1://file:///Users/sarthakatrish/Desktop/MoneyMap/src/context/FinanceContext.jsx:53:2-64:3), [addCategory](cci:1://file:///Users/sarthakatrish/Desktop/MoneyMap/src/context/FinanceContext.jsx:65:2-68:3), `removeBudgetForCategory`, `removeCategory`.
- **All state is global and reactive.**  
  Components update instantly on any data change.

---

## 📝 Logic Highlights

- **Adding/Deleting Transactions:** Updates context, recalculates all derived values.
- **Budgets:** Each budget is tied to a category; spent is calculated from transactions.
- **Charts:** Aggregate and visualize data defensively (never crash on empty).
- **Modals:** All forms and confirmations use animated, accessible modals.
- **Toasts:** Every user action gets instant feedback.

---

## 📦 Getting Started

### **Clone & Run Locally**

```bash
git clone [https://github.com/atrishSarthak/MoneyMap.git](https://github.com/atrishSarthak/MoneyMap.git)
cd MoneyMap
npm install
npm run dev
