import React from "react";
import { FiX } from "react-icons/fi";

export default function AppModal({ open, onClose, width = 'max-w-lg', children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-white/60 backdrop-blur-[3px] flex items-center justify-center">
      <div
        className={`bg-white rounded-2xl shadow-2xl border border-blue-100 p-0 w-full max-w-lg flex flex-col items-stretch animate-fadeIn max-h-screen overflow-y-auto`}
        style={{ minWidth: 320 }}
      >
        {children}
        <button
          className="absolute top-4 right-4 text-blue-400 hover:text-blue-700 text-xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
    </div>
  );
}
