import React, { useRef } from "react";
import clsx from "clsx";

export default function NeumorphicButton({
  variant = "primary",
  iconLeft,
  iconRight,
  className = "",
  children,
  ...rest
}) {
  const btnRef = useRef(null);

  // Handle ripple effect
  function handleRipple(e) {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    let x, y;
    if (e.touches && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left - size / 2;
      y = e.touches[0].clientY - rect.top - size / 2;
    } else if (e.clientX !== undefined) {
      x = e.clientX - rect.left - size / 2;
      y = e.clientY - rect.top - size / 2;
    } else {
      // Keyboard event: center ripple
      x = rect.width / 2 - size / 2;
      y = rect.height / 2 - size / 2;
    }
    const ripple = document.createElement("span");
    ripple.className = "neumorphic-ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.background = variant === "primary"
      ? "rgba(255,255,255,0.4)"
      : variant === "grey"
      ? "rgba(59,130,246,0.10)"
      : "rgba(59,130,246,0.15)";
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

  return (
    <button
      ref={btnRef}
      className={clsx(
        "relative overflow-hidden flex items-center gap-3 px-7 py-3 rounded-[999px] font-semibold text-lg focus:outline-none transition-all duration-200",
        variant === "primary"
          ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white border border-blue-600 shadow-blue-300/40 transition-all duration-200 hover:border-white hover:shadow-xl hover:scale-[1.03]"
          : variant === "grey"
          ? "bg-white border border-blue-200 text-blue-700 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:border-blue-400 hover:shadow-lg hover:scale-[1.03]"
          : "bg-gradient-to-br from-white to-gray-100 text-blue-900 border border-blue-200 shadow-gray-300/50 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200",
        "active:scale-97 active:shadow-inner",
        className
      )}
      onClick={e => {
        handleRipple(e);
        if (rest.onClick) rest.onClick(e);
      }}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleRipple(e);
        }
        if (rest.onKeyDown) rest.onKeyDown(e);
      }}
      {...rest}
    >
      {/* Icon Left */}
      {iconLeft && (
        <span className="z-10 flex items-center justify-center text-2xl drop-shadow-sm">
          {iconLeft}
        </span>
      )}
      {/* Label */}
      <span className="z-10 whitespace-nowrap">
        {children}
      </span>
      {/* Icon Right */}
      {iconRight && (
        <span className="z-10 flex items-center justify-center text-2xl drop-shadow-sm">
          {iconRight}
        </span>
      )}
      {/* Ripple effect style */}
      <style>{`
        .neumorphic-ripple {
          position: absolute;
          border-radius: 999px;
          transform: scale(0);
          animation: neumorphic-ripple 0.6s cubic-bezier(0.4,0,0.2,1);
          background: ${variant === "primary" ? "rgba(255,255,255,0.4)" : "rgba(59,130,246,0.15)"};
          pointer-events: none;
          z-index: 1;
        }
        @keyframes neumorphic-ripple {
          to {
            transform: scale(2.2);
            opacity: 0;
          }
        }
        button:active {
          box-shadow: 0 2px 8px 0 rgba(59,130,246,0.08) inset, 0 1.5px 8px 0 rgba(0,0,0,0.08) inset;
        }
      `}</style>
    </button>
  );
}

