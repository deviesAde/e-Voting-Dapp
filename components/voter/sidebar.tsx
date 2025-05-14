"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LucideVote,
  LayoutDashboard,
  Vote,
  History,
  User,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface SidebarProps {
  className?: string;
}

export function VoterSidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/voter/dashboard",
      active: pathname === "/voter/dashboard",
    },
    {
      label: "Pemilu Aktif",
      icon: Vote,
      href: "/voter/elections",
      active: pathname === "/voter/elections",
    },
    {
      label: "Riwayat Pemilihan",
      icon: History,
      href: "/voter/history",
      active: pathname === "/voter/history",
    },
    {
      label: "Profil",
      icon: User,
      href: "/voter/profile",
      active: pathname === "/voter/profile",
    },
    {
      label: "Bantuan",
      icon: HelpCircle,
      href: "/voter/help",
      active: pathname === "/voter/help",
    },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        "admin-sidebar flex flex-col h-full border-r bg-gray-100/40 dark:bg-gray-800/40",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="px-3 py-4 flex items-center justify-between">
        <Link
          href="/voter/dashboard"
          className={cn(
            "flex items-center gap-2 font-semibold",
            collapsed && "justify-center"
          )}
        >
          <LucideVote className="h-6 w-6 text-primary" />
          {!collapsed && (
            <span className="text-lg">
              RAKYAT <span className="text-primary">MEMILIH</span>
            </span>
          )}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="hidden md:flex"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="flex-1 mt-6 px-3">
        <nav className="space-y-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm",
                route.active
                  ? "bg-primary text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",
                collapsed && "justify-center"
              )}
            >
              <route.icon className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
              {!collapsed && <span>{route.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="px-3 py-4">
        <Link
          href="/auth/login"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",
            collapsed && "justify-center"
          )}
        >
          <LogOut className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
          {!collapsed && <span>Keluar</span>}
        </Link>
      </div>
    </div>
  );
}