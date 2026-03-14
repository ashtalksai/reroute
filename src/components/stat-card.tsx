"use client";

import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  color?: string;
  className?: string;
}

export function StatCard({ label, value, color = "text-accent", className }: StatCardProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className={cn("font-mono text-3xl font-semibold tracking-tight leading-none", color)}>
        {value}
      </span>
      <span className="text-sm text-text-secondary">{label}</span>
    </div>
  );
}
