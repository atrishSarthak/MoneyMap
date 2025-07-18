import React from "react";

export default function CardsList() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <div className="bg-gradient-to-tr from-blue-200 via-blue-100 to-blue-50 rounded-xl p-4 flex-1 min-w-[120px]">
          <div className="text-xs text-blue-900 font-bold mb-2">VISA</div>
          <div className="text-lg font-bold text-blue-900 mb-2">**** 4455</div>
          <div className="text-xs text-blue-400">Jack Walson</div>
        </div>
        <div className="bg-gradient-to-tr from-blue-400 via-blue-200 to-blue-50 rounded-xl p-4 flex-1 min-w-[120px]">
          <div className="text-xs text-blue-900 font-bold mb-2">MASTERCARD</div>
          <div className="text-lg font-bold text-blue-900 mb-2">**** 1999</div>
          <div className="text-xs text-blue-400">Jack Walson</div>
        </div>
      </div>
    </div>
  );
}
