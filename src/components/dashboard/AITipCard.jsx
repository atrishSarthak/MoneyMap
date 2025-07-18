import React from "react";
import { useNavigate } from "react-router-dom";
import NeumorphicButton from "../ui/NeumorphicButton";

export default function AITipCard() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl shadow p-6 flex flex-col gap-3 items-start">
      <div className="font-bold text-blue-800 text-lg flex items-center gap-2">
        <span role="img" aria-label="AI">🤖</span> AI Money Tip
      </div>
      <div className="text-blue-700 text-base">
        "Review your subscriptions—canceling unused ones could save you ₹500+ monthly!"
      </div>
      <NeumorphicButton variant="primary" className="mt-2 px-5 py-2 text-sm" onClick={() => navigate("/ai")}>See More AI Tips</NeumorphicButton>
    </div>
  );
}
