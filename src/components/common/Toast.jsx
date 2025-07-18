import React, { useEffect } from "react";

export default function Toast({ message, type = "info", onClose, duration = 3000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  let bg = "bg-blue-500";
  if (type === "success") bg = "bg-green-500";
  if (type === "error") bg = "bg-red-500";
  if (type === "warning") bg = "bg-yellow-400 text-blue-900";

  return (
    <div
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-[9999] px-6 py-3 rounded-2xl shadow-xl text-white font-semibold text-center text-sm animate-fade-in-up ${bg}`}
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
}
