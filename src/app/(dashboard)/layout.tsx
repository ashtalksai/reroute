"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Plane,
  FileText,
  Calculator,
  Clock,
  Settings,
  Menu,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  User,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "#", label: "My Flights", icon: Plane },
  { href: "#", label: "Claims", icon: FileText },
  { href: "/calculator", label: "Calculator", icon: Calculator },
  { href: "#", label: "History", icon: Clock },
  { href: "#", label: "Settings", icon: Settings },
];

function SidebarContent({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-border shrink-0">
        <Link href="/dashboard" className="flex items-center gap-2.5" onClick={onNavigate}>
          <Image
            src="/images/logo-placeholder.png"
            alt="Reroute"
            width={28}
            height={28}
            className="rounded"
          />
          <span className="font-display text-lg font-bold text-text-primary">Reroute</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="flex flex-col gap-0.5">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href && href !== "#";
            return (
              <li key={label}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150",
                    isActive
                      ? "bg-accent-muted text-accent"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                  )}
                >
                  <Icon
                    className={cn("h-4 w-4 shrink-0", isActive ? "text-accent" : "text-text-muted")}
                  />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom user section */}
      <div className="px-3 py-4 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-surface-hover">
          <Avatar size="sm">
            <AvatarImage src="" />
            <AvatarFallback className="bg-accent text-accent-foreground text-xs font-bold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-text-primary truncate">James D.</p>
            <p className="text-xs text-text-muted truncate">Guardian Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-60 flex-col bg-surface border-r border-border shrink-0">
        <SidebarContent pathname={pathname} />
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-16 flex items-center justify-between px-5 border-b border-border bg-surface shrink-0 gap-4">
          {/* Mobile menu trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:bg-surface-hover transition-colors">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-surface border-border w-60">
              <SidebarContent
                pathname={pathname}
                onNavigate={() => setMobileOpen(false)}
              />
            </SheetContent>
          </Sheet>

          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" />
            <Input
              placeholder="Add flight number..."
              className="pl-9 bg-surface-hover border-border text-text-secondary placeholder:text-text-muted focus-visible:ring-accent/30 h-9 text-sm"
            />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="ghost"
              size="icon"
              className="text-text-secondary hover:text-text-primary hover:bg-surface-hover relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-surface-hover transition-colors">
                <span className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-accent text-accent-foreground text-xs font-bold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-3.5 w-3.5 text-text-muted" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-surface border-border text-text-primary"
              >
                <DropdownMenuItem className="text-text-secondary hover:text-text-primary cursor-pointer gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-text-secondary hover:text-text-primary cursor-pointer gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-border" />
                <DropdownMenuItem className="text-destructive hover:text-destructive cursor-pointer gap-2">
                  <LogOut className="h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
