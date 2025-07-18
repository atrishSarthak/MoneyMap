import React from "react";
import NeumorphicButton from "../common/NeumorphicButton";

function CalendarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><rect x="3" y="5" width="18" height="16" rx="4"/><path d="M16 3v4M8 3v4"/><circle cx="8.5" cy="13.5" r="1.5"/><circle cx="15.5" cy="13.5" r="1.5"/><circle cx="12" cy="17" r="1.5"/></svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
  );
}

export default function NeumorphicButtonDemo() {
  return (
    <div className="flex flex-col gap-6 items-start bg-gray-50 min-h-screen p-10">
      <NeumorphicButton
        variant="primary"
        iconLeft={<CalendarIcon />}
        iconRight={<ArrowIcon />}
        className="w-[320px] group"
      >
        Book a call
      </NeumorphicButton>
      <NeumorphicButton
        variant="secondary"
        iconLeft={<CalendarIcon />}
        iconRight={<ArrowIcon />}
        className="w-[320px] group"
      >
        Book a call
      </NeumorphicButton>
    </div>
  );
}
