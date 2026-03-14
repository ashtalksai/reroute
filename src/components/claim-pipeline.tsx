"use client";

import { cn } from "@/lib/utils";

type ClaimStatus = "eligible" | "draft" | "submitted" | "in-progress" | "resolved";

const STATUS_LEVELS: Record<ClaimStatus, number> = {
  eligible: 1,
  draft: 2,
  submitted: 3,
  "in-progress": 4,
  resolved: 5,
};

const STATUS_LABELS: Record<ClaimStatus, string> = {
  eligible: "Eligible",
  draft: "Draft",
  submitted: "Submitted",
  "in-progress": "In Progress",
  resolved: "Resolved",
};

interface ClaimPipelineProps {
  status: ClaimStatus;
  showLabel?: boolean;
  className?: string;
}

export function ClaimPipeline({ status, showLabel = false, className }: ClaimPipelineProps) {
  const level = STATUS_LEVELS[status] ?? 1;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: 5 }, (_, i) => {
          const filled = i < level;
          const isLast = i === level - 1;
          return (
            <span
              key={i}
              className={cn(
                "block h-2 w-2 rounded-full transition-all duration-200",
                filled
                  ? isLast
                    ? "bg-accent shadow-[0_0_6px_rgba(0,214,143,0.6)]"
                    : "bg-accent/70"
                  : "bg-border border border-border"
              )}
            />
          );
        })}
      </div>
      {showLabel && (
        <span className="text-xs text-text-secondary font-medium">
          {STATUS_LABELS[status]}
        </span>
      )}
    </div>
  );
}
