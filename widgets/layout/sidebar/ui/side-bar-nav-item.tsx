"use client";

import { cn } from "@/shared/lib/utils";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideBarNavItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
}

export default function SideBarNavItem({
  label,
  icon: Icon,
  href
}: SideBarNavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        <Icon
          className={cn(
            "size-4",
            isActive ? "text-primary-foreground" : "text-muted-foreground"
          )}
        />
        <span>{label}</span>
      </Link>
    </li>
  );
}
