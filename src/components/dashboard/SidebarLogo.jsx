import React from "react";
import Logo from "../branding/Logo";

export default function SidebarLogo() {
  return (
    <span className="flex items-center gap-2">
      <Logo className="h-8 w-auto" />
    </span>
  );
}
