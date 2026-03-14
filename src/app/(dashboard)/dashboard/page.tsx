"use client";

import { motion } from "framer-motion";
import { Plus, CheckCircle, AlertCircle, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ClaimPipeline } from "@/components/claim-pipeline";
import { StatCard } from "@/components/stat-card";
import { cn } from "@/lib/utils";

// ─── Seed Data ────────────────────────────────────────────────────────────────

const SEED_FLIGHTS = [
  {
    id: "1",
    flightNumber: "KL1234",
    airline: "KLM",
    airlineColor: "#009CD8",
    origin: "AMS",
    destination: "LHR",
    date: "Dec 15, 2025",
    status: "on-time" as const,
  },
  {
    id: "2",
    flightNumber: "EZY5678",
    airline: "easyJet",
    airlineColor: "#FF6600",
    origin: "LGW",
    destination: "BCN",
    date: "Dec 12, 2025",
    status: "delayed" as const,
    delayNote: "Delayed 3h — €400 eligible",
  },
  {
    id: "3",
    flightNumber: "BA9012",
    airline: "British Airways",
    airlineColor: "#2B6CB0",
    origin: "LHR",
    destination: "JFK",
    date: "Dec 10, 2025",
    status: "on-time" as const,
  },
];

const SEED_CLAIMS = [
  {
    flight: "KL1234",
    airline: "KLM",
    amount: 400,
    status: "in-progress" as const,
    date: "Dec 15, 2025",
  },
  {
    flight: "EZY5678",
    airline: "easyJet",
    amount: 400,
    status: "eligible" as const,
    date: "Dec 12, 2025",
  },
  {
    flight: "BA9012",
    airline: "British Airways",
    amount: 600,
    status: "resolved" as const,
    date: "Nov 28, 2025",
  },
  {
    flight: "FR3456",
    airline: "Ryanair",
    amount: 250,
    status: "submitted" as const,
    date: "Nov 15, 2025",
  },
  {
    flight: "LH7890",
    airline: "Lufthansa",
    amount: 400,
    status: "draft" as const,
    date: "Oct 30, 2025",
  },
];

const ALERTS = [
  {
    id: "1",
    type: "success" as const,
    title: "Claim Resolved",
    description: "Your BA9012 claim for €600 has been paid",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    type: "warning" as const,
    title: "New Eligibility",
    description: "EZY5678 delayed 3h, eligible for €400",
    timestamp: "5 hours ago",
  },
  {
    id: "3",
    type: "info" as const,
    title: "Claim Update",
    description: "KL1234 claim moved to In Progress",
    timestamp: "1 day ago",
  },
];

// ─── Mini Bar Chart data ───────────────────────────────────────────────────────

const BAR_DATA = [
  { label: "Oct", accent: 600, pending: 0 },
  { label: "Nov", accent: 850, pending: 0 },
  { label: "Dec", accent: 950, pending: 400 },
];
const MAX_BAR = 1200;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function amountColor(amount: number) {
  if (amount === 250) return "text-comp-250";
  if (amount === 600) return "text-comp-600";
  return "text-comp-400";
}

function statusLabel(status: string) {
  const map: Record<string, string> = {
    "in-progress": "In Progress",
    eligible: "Eligible",
    resolved: "Resolved",
    submitted: "Submitted",
    draft: "Draft",
  };
  return map[status] ?? status;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AirlineDot({ letter, color }: { letter: string; color: string }) {
  return (
    <span
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
      style={{ backgroundColor: color }}
    >
      {letter}
    </span>
  );
}

function FlightStatusBadge({ status }: { status: "on-time" | "delayed" | "cancelled" }) {
  if (status === "on-time")
    return (
      <Badge className="bg-accent-muted text-accent border-0 font-medium px-2.5 py-0.5 h-auto">
        On Time
      </Badge>
    );
  if (status === "delayed")
    return (
      <Badge className="bg-warning-muted text-warning border-0 font-medium px-2.5 py-0.5 h-auto">
        Delayed
      </Badge>
    );
  return (
    <Badge className="bg-destructive-muted text-destructive border-0 font-medium px-2.5 py-0.5 h-auto">
      Cancelled
    </Badge>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  return (
    <div className="px-5 py-6 lg:px-8 max-w-[1400px] mx-auto">
      {/* Page heading */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <h1 className="font-display text-2xl font-bold text-text-primary">Dashboard</h1>
        <p className="text-text-secondary text-sm mt-0.5">
          Welcome back, James — here&apos;s your compensation overview.
        </p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="flex items-center gap-3 mb-8"
      >
        <Button className="bg-accent text-accent-foreground hover:bg-accent-hover font-semibold gap-2 h-9">
          <Plus className="h-4 w-4" />
          Add Flight
        </Button>
        <Button
          variant="outline"
          className="border-border text-text-secondary hover:text-text-primary hover:bg-surface-hover h-9"
        >
          Check Eligibility
        </Button>
      </motion.div>

      {/* Main grid: content + right widget */}
      <div className="flex gap-6 flex-col xl:flex-row">
        {/* Left column */}
        <div className="flex-1 min-w-0 flex flex-col gap-8">
          {/* Flight Cards */}
          <section>
            <h2 className="font-display text-base font-semibold text-text-primary mb-4">
              Tracked Flights
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {SEED_FLIGHTS.map((flight) => (
                <motion.div
                  key={flight.id}
                  variants={itemVariants}
                  className="bg-surface border border-border rounded-xl p-5 card-shadow flex flex-col gap-4 hover:border-border-hover transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <AirlineDot
                        letter={flight.airline[0]}
                        color={flight.airlineColor}
                      />
                      <div>
                        <p className="font-mono font-semibold text-text-primary text-sm tracking-wide">
                          {flight.flightNumber}
                        </p>
                        <p className="text-xs text-text-muted">{flight.airline}</p>
                      </div>
                    </div>
                    <FlightStatusBadge status={flight.status} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-text-primary font-semibold text-sm">
                      <span>{flight.origin}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-text-muted" />
                      <span>{flight.destination}</span>
                    </div>
                    <p className="text-xs text-text-muted mt-0.5">{flight.date}</p>
                  </div>

                  {flight.status === "delayed" && flight.delayNote && (
                    <div className="border-t border-border pt-3 flex items-center justify-between gap-2">
                      <span className="text-xs text-warning font-medium">{flight.delayNote}</span>
                      <Button
                        size="sm"
                        className="bg-accent text-accent-foreground hover:bg-accent-hover h-7 text-xs px-3 font-semibold shrink-0"
                      >
                        File Claim
                      </Button>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Claim Tracker Table */}
          <section>
            <h2 className="font-display text-base font-semibold text-text-primary mb-4">
              Claim Tracker
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="bg-surface border border-border rounded-xl overflow-hidden card-shadow"
            >
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-text-muted text-xs font-medium px-5 py-3">
                      Flight
                    </TableHead>
                    <TableHead className="text-text-muted text-xs font-medium px-3 py-3">
                      Airline
                    </TableHead>
                    <TableHead className="text-text-muted text-xs font-medium px-3 py-3">
                      Amount
                    </TableHead>
                    <TableHead className="text-text-muted text-xs font-medium px-3 py-3">
                      Status
                    </TableHead>
                    <TableHead className="text-text-muted text-xs font-medium px-3 py-3">
                      Date
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {SEED_CLAIMS.map((claim, i) => (
                    <TableRow
                      key={claim.flight}
                      className={cn(
                        "border-border hover:bg-surface-hover transition-colors",
                        i === SEED_CLAIMS.length - 1 && "border-0"
                      )}
                    >
                      <TableCell className="px-5 py-3.5">
                        <span className="font-mono text-sm font-semibold text-text-primary tracking-wide">
                          {claim.flight}
                        </span>
                      </TableCell>
                      <TableCell className="px-3 py-3.5 text-text-secondary text-sm">
                        {claim.airline}
                      </TableCell>
                      <TableCell className="px-3 py-3.5">
                        <span
                          className={cn(
                            "font-mono text-sm font-semibold",
                            amountColor(claim.amount)
                          )}
                        >
                          €{claim.amount}
                        </span>
                      </TableCell>
                      <TableCell className="px-3 py-3.5">
                        <div className="flex items-center gap-3">
                          <ClaimPipeline status={claim.status} />
                          <span className="text-xs text-text-secondary whitespace-nowrap">
                            {statusLabel(claim.status)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-3 py-3.5 text-text-muted text-sm">
                        {claim.date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </motion.div>
          </section>

          {/* Recent Alerts */}
          <section>
            <h2 className="font-display text-base font-semibold text-text-primary mb-4">
              Recent Alerts
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-3"
            >
              {ALERTS.map((alert) => {
                const isSuccess = alert.type === "success";
                const isWarning = alert.type === "warning";
                return (
                  <motion.div
                    key={alert.id}
                    variants={itemVariants}
                    className={cn(
                      "flex items-start gap-4 rounded-xl p-4 border-l-2 bg-surface border border-border card-shadow",
                      isSuccess && "border-l-accent",
                      isWarning && "border-l-warning",
                      !isSuccess && !isWarning && "border-l-info"
                    )}
                  >
                    <div
                      className={cn(
                        "mt-0.5 shrink-0 h-5 w-5",
                        isSuccess && "text-accent",
                        isWarning && "text-warning",
                        !isSuccess && !isWarning && "text-info"
                      )}
                    >
                      {isSuccess && <CheckCircle className="h-5 w-5" />}
                      {isWarning && <AlertCircle className="h-5 w-5" />}
                      {!isSuccess && !isWarning && <Info className="h-5 w-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-text-primary">{alert.title}</p>
                      <p className="text-sm text-text-secondary mt-0.5">{alert.description}</p>
                    </div>
                    <span className="text-xs text-text-muted shrink-0 mt-0.5">
                      {alert.timestamp}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>
        </div>

        {/* Right Sidebar Widget */}
        <motion.aside
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="w-full xl:w-72 shrink-0 flex flex-col gap-4"
        >
          {/* Recovery stats card */}
          <div className="bg-surface border border-border rounded-xl p-5 card-shadow">
            <h3 className="font-display text-sm font-semibold text-text-primary mb-5">
              Recovery Summary
            </h3>

            <div className="flex flex-col gap-5">
              <StatCard label="Total Recovered" value="€2,400" color="text-accent" />
              <div className="h-px bg-border" />
              <StatCard label="Pending" value="€400" color="text-warning" />
            </div>

            {/* Mini bar chart */}
            <div className="mt-6">
              <p className="text-xs text-text-muted mb-3 font-medium uppercase tracking-wider">
                Monthly
              </p>
              <div className="flex items-end gap-2 h-20">
                {BAR_DATA.map((bar) => {
                  const accentH = Math.round((bar.accent / MAX_BAR) * 80);
                  const pendingH = Math.round((bar.pending / MAX_BAR) * 80);
                  return (
                    <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex flex-col justify-end gap-0.5" style={{ height: 72 }}>
                        {bar.pending > 0 && (
                          <div
                            className="w-full rounded-t-sm bg-warning/60"
                            style={{ height: pendingH }}
                          />
                        )}
                        <div
                          className="w-full rounded-sm bg-accent/80"
                          style={{
                            height: accentH,
                            borderRadius: bar.pending > 0 ? "0 0 4px 4px" : "4px",
                          }}
                        />
                      </div>
                      <span className="text-[10px] text-text-muted">{bar.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="bg-surface border border-border rounded-xl p-5 card-shadow">
            <h3 className="font-display text-sm font-semibold text-text-primary mb-4">
              At a Glance
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Flights Tracked", value: "3", color: "text-text-primary" },
                { label: "Active Claims", value: "4", color: "text-text-primary" },
                { label: "Claims Won", value: "1", color: "text-accent" },
                { label: "Success Rate", value: "100%", color: "text-accent" },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">{label}</span>
                  <span className={cn("font-mono text-sm font-semibold", color)}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
