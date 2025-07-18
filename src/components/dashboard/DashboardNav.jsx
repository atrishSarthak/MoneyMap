import React, { useState } from "react";
import NeumorphicButton from "../ui/NeumorphicButton";

const navItems = [
  "All", "Transactions", "Analytics", "Expenses", "Spending"
];

export default function DashboardNav() {
  const [selected, setSelected] = useState(0);
  return (
    <nav className="flex gap-4 px-6 py-1 mb-2 border-b border-blue-100 overflow-x-auto">
      {navItems.map((item, idx) => (
        <NeumorphicButton
          key={item}
          variant={idx === selected ? "primary" : "grey"}
          className={
            "px-6 py-2 text-base"
          }
          onClick={() => setSelected(idx)}
        >
          {item}
        </NeumorphicButton>
      ))}
    </nav>
  );
}
