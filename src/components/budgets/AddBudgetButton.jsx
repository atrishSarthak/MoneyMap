import React from "react";
import NeumorphicButton from "../common/NeumorphicButton";

export default function AddBudgetButton({ onClick }) {
  return (
    <NeumorphicButton
      variant="primary"
      className="fixed bottom-8 right-8 z-50 px-6 py-4 text-lg flex items-center gap-2"
      iconLeft={<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>}
      onClick={onClick}
    >
      Add Budget
    </NeumorphicButton>
  );
}
