"use client";

import menuItems from "../model/sidebar-nav";
import SideBarNavItem from "./side-bar-nav-item";

export default function SideBarNav() {
  return (
    <nav className="flex-1 py-4">
      <h2 className="mb-2 px-4 text-lg font-bold tracking-tight">메뉴</h2>
      <ul className="space-y-2">
        {menuItems.map(({ label, icon, href }) => (
          <SideBarNavItem //
            key={href}
            label={label}
            icon={icon}
            href={href}
          />
        ))}
      </ul>
    </nav>
  );
}
