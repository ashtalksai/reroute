"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Shield,
  Globe,
  TrendingUp,
  DollarSign,
  Zap,
  Target,
  Users,
} from "lucide-react";

// ─── Slide Components ──────────────────────────────────────────────────────────

function TitleSlide() {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2"
        style={{
          background: "rgba(0,214,143,0.15)",
          border: "1px solid rgba(0,214,143,0.3)",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M4 16L12 8L20 16L28 8"
            stroke="#00D68F"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 24L12 16L20 24L28 16"
            stroke="#00D68F"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
          />
        </svg>
      </div>
      <h1
        className="font-display font-bold text-text-primary"
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1 }}
      >
        Reroute
      </h1>
      <p className="text-text-secondary text-xl md:text-2xl font-sans max-w-lg">
        Flight Compensation on Autopilot
      </p>
      <p className="text-text-muted text-base max-w-md">
        The proactive flight monitoring agent that detects disruptions, calculates
        EU261 eligibility, and files claims automatically.
      </p>
      <div
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono"
        style={{
          background: "rgba(0,214,143,0.08)",
          border: "1px solid rgba(0,214,143,0.2)",
          color: "#00D68F",
        }}
      >
        Seed Round — 2026
      </div>
    </div>
  );
}

function ProblemSlide() {
  return (
    <div className="flex flex-col items-center text-center gap-8 max-w-4xl w-full">
      <div className="flex items-center gap-3">
        <AlertTriangle className="size-5" style={{ color: "#FFB020" }} />
        <span className="text-text-muted font-mono text-sm tracking-widest uppercase">
          The Problem
        </span>
      </div>
      <h2
        className="font-display font-bold text-text-primary leading-tight"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        Airlines count on you{" "}
        <span style={{ color: "#FF4757" }}>not following up</span>
      </h2>
      <p className="text-text-secondary text-lg max-w-xl">
        Under EU261/2004, passengers are entitled to €250–€600 for delays,
        cancellations, and denied boarding. But airlines reject most
        first-attempt claims, counting on travellers giving up.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2 w-full max-w-3xl">
        {[
          {
            stat: "€6B",
            label: "Unclaimed compensation annually",
            color: "#FFB020",
            bg: "rgba(255,176,32,0.06)",
            border: "rgba(255,176,32,0.15)",
          },
          {
            stat: "98%",
            label: "Of eligible passengers never claim",
            color: "#FF4757",
            bg: "rgba(255,71,87,0.06)",
            border: "rgba(255,71,87,0.15)",
          },
          {
            stat: "€440",
            label: "Average successful payout",
            color: "#00D68F",
            bg: "rgba(0,214,143,0.06)",
            border: "rgba(0,214,143,0.15)",
          },
        ].map((item) => (
          <div
            key={item.stat}
            className="rounded-xl p-6"
            style={{ background: item.bg, border: `1px solid ${item.border}` }}
          >
            <div
              className="font-mono text-3xl md:text-4xl font-bold"
              style={{ color: item.color }}
            >
              {item.stat}
            </div>
            <div className="text-text-muted text-sm mt-2">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionSlide() {
  return (
    <div className="flex flex-col items-center text-center gap-8 max-w-3xl">
      <div className="flex items-center gap-3">
        <Shield className="size-5" style={{ color: "#00D68F" }} />
        <span className="text-text-muted font-mono text-sm tracking-widest uppercase">
          The Solution
        </span>
      </div>
      <h2
        className="font-display font-bold text-text-primary leading-tight"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        A bodyguard for your{" "}
        <span style={{ color: "#00D68F" }}>flight rights</span>
      </h2>
      <p className="text-text-secondary text-lg md:text-xl max-w-xl">
        Reroute monitors your flights in real-time, detects disruptions the
        moment they happen, and files EU261 compensation claims
        automatically — you do nothing.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-2">
        {[
          { icon: "🔍", title: "Proactive", desc: "Monitors before disruption hits" },
          { icon: "⚡", title: "Instant", desc: "Claims filed in under 2 minutes" },
          { icon: "💰", title: "Fair", desc: "Keep 100% with Guardian plan" },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl p-5"
            style={{
              background: "rgba(0,214,143,0.04)",
              border: "1px solid rgba(0,214,143,0.12)",
            }}
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <div className="font-display font-semibold text-text-primary">
              {item.title}
            </div>
            <div className="text-text-muted text-sm mt-1">{item.desc}</div>
          </div>
        ))}
      </div>
      <div
        className="mt-2 px-6 py-3 rounded-xl text-base font-semibold"
        style={{
          background: "rgba(0,214,143,0.12)",
          color: "#00D68F",
          border: "1px solid rgba(0,214,143,0.25)",
        }}
      >
        &ldquo;AirHelp is the ambulance. Reroute is the bodyguard.&rdquo;
      </div>
    </div>
  );
}

function MarketSlide() {
  return (
    <div className="flex flex-col items-center text-center gap-8 max-w-4xl w-full">
      <div className="flex items-center gap-3">
        <Globe className="size-5" style={{ color: "#4C9AFF" }} />
        <span className="text-text-muted font-mono text-sm tracking-widest uppercase">
          Market Size
        </span>
      </div>
      <h2
        className="font-display font-bold text-text-primary leading-tight"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        A massive, growing, underserved market
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mt-2">
        <div
          className="rounded-xl p-6 text-left"
          style={{
            background: "rgba(76,154,255,0.08)",
            border: "1px solid rgba(76,154,255,0.2)",
          }}
        >
          <span className="font-mono text-xs" style={{ color: "#4C9AFF" }}>
            TAM
          </span>
          <div
            className="font-mono text-3xl md:text-4xl font-bold mt-1"
            style={{ color: "#4C9AFF" }}
          >
            €6B+
          </div>
          <div className="text-text-muted text-sm mt-2">
            Unclaimed EU261 compensation annually
          </div>
        </div>
        <div
          className="rounded-xl p-6 text-left"
          style={{
            background: "rgba(0,214,143,0.06)",
            border: "1px solid rgba(0,214,143,0.15)",
          }}
        >
          <span className="font-mono text-xs" style={{ color: "#00D68F" }}>
            SAM
          </span>
          <div
            className="font-mono text-3xl md:text-4xl font-bold mt-1"
            style={{ color: "#00D68F" }}
          >
            1.1B
          </div>
          <div className="text-text-muted text-sm mt-2">
            EU passengers annually eligible under EC 261
          </div>
        </div>
        <div
          className="rounded-xl p-6 text-left"
          style={{
            background: "rgba(255,176,32,0.06)",
            border: "1px solid rgba(255,176,32,0.15)",
          }}
        >
          <span className="font-mono text-xs" style={{ color: "#FFB020" }}>
            GROWTH
          </span>
          <div
            className="font-mono text-3xl md:text-4xl font-bold mt-1"
            style={{ color: "#FFB020" }}
          >
            +1578%
          </div>
          <div className="text-text-muted text-sm mt-2">
            Keyword growth for &ldquo;flight delay compensation&rdquo;
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {[
          { label: "Global travel bookings", value: "$1.67T by 2025" },
          { label: "AI travel funding", value: "10% → 45% since 2023" },
          { label: "EU regulatory clarity", value: "EC 261/2004" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div className="font-mono text-sm font-bold text-text-primary">
              {item.value}
            </div>
            <div className="text-text-muted text-xs mt-0.5">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HowItWorksSlide() {
  return (
    <div className="flex flex-col items-center text-center gap-8 max-w-4xl w-full">
      <div className="flex items-center gap-3">
        <Zap className="size-5" style={{ color: "#00D68F" }} />
        <span className="text-text-muted font-mono text-sm tracking-widest uppercase">
          How It Works
        </span>
      </div>
      <h2
        className="font-display font-bold text-text-primary"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        Three steps. Zero effort.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-2">
        {[
          {
            step: "01",
            title: "Sync",
            desc: "Connect your email or airline app. We scan your complete travel history and start monitoring all future flights.",
            color: "rgba(76,154,255,0.08)",
            border: "rgba(76,154,255,0.2)",
            accent: "#4C9AFF",
          },
          {
            step: "02",
            title: "Monitor",
            desc: "Real-time flight tracking detects delays, cancellations, diversions, and denied boarding within minutes of occurrence.",
            color: "rgba(255,176,32,0.08)",
            border: "rgba(255,176,32,0.2)",
            accent: "#FFB020",
          },
          {
            step: "03",
            title: "Recover",
            desc: "EU261 eligibility calculated instantly. Claim documents generated and filed automatically. Compensation lands in your account.",
            color: "rgba(0,214,143,0.08)",
            border: "rgba(0,214,143,0.2)",
            accent: "#00D68F",
          },
        ].map((step) => (
          <div
            key={step.step}
            className="rounded-xl p-6 flex flex-col items-center gap-3 text-center"
            style={{ background: step.color, border: `1px solid ${step.border}` }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center font-mono text-2xl font-bold"
              style={{ background: step.color, border: `2px solid ${step.accent}`, color: step.accent }}
            >
              {step.step}
            </div>
            <div className="font-display font-semibold text-text-primary text-xl">
              {step.title}
            </div>
            <div className="text-text-secondary text-sm leading-relaxed">
              {step.desc}
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-2 font-mono text-sm px-5 py-2.5 rounded-lg"
        style={{ background: "rgba(0,214,143,0.08)", color: "#00D68F" }}
      >
        Average time from disruption to claim filed: 2 minutes
      </div>
    </div>
  );
}

function TractionSlide() {
  return (
    <div className="flex flex-col items-center text-center gap-8 max-w-4xl w-full">
      <div className="flex items-center gap-3">
        <TrendingUp className="size-5" style={{ color: "#00D68F" }} />
        <span className="text-text-muted font-mono text-sm tracking-widest uppercase">
          Traction & Validation
        </span>
      </div>
      <h2
        className="font-display font-bold text-text-primary"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        Market is screaming for this
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mt-2">
        {[
          { value: "9/10", label: "Opportunity Score", color: "#00D68F" },
          { value: "9/10", label: "Problem Severity", color: "#FFB020" },
          { value: "77/100", label: "Idea Score", color: "#4C9AFF" },
          { value: "9/10", label: "Go-to-Market", color: "#00D68F" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl p-5"
            style={{ background: "#141929", border: "1px solid #1E2640" }}
          >
            <div
              className="font-mono text-2xl md:text-3xl font-bold"
              style={{ color: item.color }}
            >
              {item.value}
            </div>
            <div className="text-text-muted text-xs mt-2">{item.label}</div>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl p-6 w-full max-w-3xl text-left"
        style={{ background: "#141929", border: "1px solid #1E2640" }}
      >
        <h3 className="font-display font-semibold text-text-primary text-lg mb-4">
          Community Signals
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { platform: "Reddit", members: "2.5M+", score: "8/10", desc: "6 subreddits — r/travel, r/flights, r/legaladvice" },
            { platform: "Facebook", members: "150K+", score: "7/10", desc: "4 groups — flight compensation communities" },
            { platform: "YouTube", members: "15 channels", score: "7/10", desc: "Compensation guides, travel tips" },
          ].map((item) => (
            <div key={item.platform} className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-text-primary font-semibold">{item.platform}</span>
                <span className="font-mono text-xs" style={{ color: "#00D68F" }}>{item.score}</span>
              </div>
              <div className="text-text-secondary text-sm">{item.members} members</div>
              <div className="text-text-muted text-xs">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BusinessModelSlide() {
  return (
    <div className="flex flex-col items-center text-center gap-8 max-w-4xl w-full">
      <div className="flex items-center gap-3">
        <DollarSign className="size-5" style={{ color: "#00D68F" }} />
        <span className="text-text-muted font-mono text-sm tracking-widest uppercase">
          Business Model
        </span>
      </div>
      <h2
        className="font-display font-bold text-text-primary"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        SaaS + success fees
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mt-2">
        <div
          className="rounded-xl p-6 flex flex-col gap-3 text-left"
          style={{ background: "#141929", border: "1px solid #1E2640" }}
        >
          <div className="font-display text-lg font-semibold text-text-primary">
            Spotter
          </div>
          <div className="font-mono text-3xl font-bold text-text-primary">Free</div>
          <div className="text-text-secondary text-sm">
            Past flight recovery. Scan your history, find unclaimed compensation.
          </div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold self-start"
            style={{ background: "rgba(255,176,32,0.1)", color: "#FFB020" }}
          >
            35% success fee
          </div>
        </div>

        <div
          className="rounded-xl p-6 flex flex-col gap-3 text-left relative"
          style={{
            background: "rgba(0,214,143,0.05)",
            border: "1px solid rgba(0,214,143,0.4)",
            boxShadow: "0 0 24px rgba(0,214,143,0.1)",
          }}
        >
          <span
            className="absolute -top-3 left-6 text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: "#00D68F", color: "#0B0F1A" }}
          >
            MOST POPULAR
          </span>
          <div className="font-display text-lg font-semibold text-text-primary">
            Guardian
          </div>
          <div className="font-mono text-3xl font-bold text-text-primary">
            €29<span className="text-text-muted text-lg font-normal">/mo</span>
          </div>
          <div className="text-text-secondary text-sm">
            Real-time monitoring, auto-filing, legal team access.
          </div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold self-start"
            style={{ background: "rgba(0,214,143,0.15)", color: "#00D68F" }}
          >
            10% success fee
          </div>
        </div>

        <div
          className="rounded-xl p-6 flex flex-col gap-3 text-left"
          style={{ background: "#141929", border: "1px solid #1E2640" }}
        >
          <div className="font-display text-lg font-semibold text-text-primary">
            Success Fee
          </div>
          <div className="font-mono text-3xl font-bold text-text-primary">15%</div>
          <div className="text-text-secondary text-sm">
            Pay only when we win. No subscription needed.
          </div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold self-start"
            style={{ background: "rgba(76,154,255,0.1)", color: "#4C9AFF" }}
          >
            Pay when you win
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-4">
        {[
          { value: "14-23x", label: "LTV:CAC Ratio" },
          { value: "<1 month", label: "Payback Period" },
          { value: "€50K", label: "Month 12 MRR Target" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div
              className="font-mono text-2xl font-bold"
              style={{ color: "#00D68F" }}
            >
              {item.value}
            </div>
            <div className="text-text-muted text-xs mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <p className="text-text-muted text-sm font-mono">
        One €600 claim covers 20 months of Guardian
      </p>
    </div>
  );
}

function CompetitionSlide() {
  const competitors = [
    { name: "AirHelp", proactive: false, subscription: false, fee: "35-50%", legalIncluded: false, rebooking: false },
    { name: "Flightright", proactive: false, subscription: false, fee: "20-30%+VAT", legalIncluded: false, rebooking: false },
    { name: "Skycop", proactive: false, subscription: false, fee: "44-50%", legalIncluded: false, rebooking: false },
    { name: "ClaimCompass", proactive: false, subscription: false, fee: "35%", legalIncluded: false, rebooking: false },
  ];

  return (
    <div className="flex flex-col items-center text-center gap-8 max-w-4xl w-full">
      <div className="flex items-center gap-3">
        <Target className="size-5" style={{ color: "#FF4757" }} />
        <span className="text-text-muted font-mono text-sm tracking-widest uppercase">
          Competition
        </span>
      </div>
      <h2
        className="font-display font-bold text-text-primary"
        style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
      >
        Every competitor is{" "}
        <span style={{ color: "#FF4757" }}>reactive</span>. We&apos;re{" "}
        <span style={{ color: "#00D68F" }}>proactive</span>.
      </h2>

      <div className="w-full overflow-x-auto mt-2">
        <table className="w-full text-left text-sm">
          <thead>
            <tr style={{ borderBottom: "1px solid #1E2640" }}>
              <th className="py-3 px-4 text-text-muted font-mono text-xs uppercase">Feature</th>
              {competitors.map((c) => (
                <th key={c.name} className="py-3 px-3 text-text-muted font-mono text-xs text-center">{c.name}</th>
              ))}
              <th
                className="py-3 px-3 font-mono text-xs text-center"
                style={{ color: "#00D68F" }}
              >
                Reroute
              </th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            {[
              { feature: "Real-time monitoring", key: "proactive" },
              { feature: "Subscription model", key: "subscription" },
              { feature: "Legal team included", key: "legalIncluded" },
              { feature: "Auto-rebooking", key: "rebooking" },
            ].map((row) => (
              <tr key={row.feature} style={{ borderBottom: "1px solid rgba(30,38,64,0.5)" }}>
                <td className="py-3 px-4 text-text-primary text-sm">{row.feature}</td>
                {competitors.map((c) => (
                  <td key={c.name} className="py-3 px-3 text-center">
                    <span style={{ color: "#FF4757" }}>✗</span>
                  </td>
                ))}
                <td className="py-3 px-3 text-center">
                  <span style={{ color: "#00D68F" }}>✓</span>
                </td>
              </tr>
            ))}
            <tr style={{ borderBottom: "1px solid rgba(30,38,64,0.5)" }}>
              <td className="py-3 px-4 text-text-primary text-sm">Success fee</td>
              {competitors.map((c) => (
                <td key={c.name} className="py-3 px-3 text-center font-mono text-xs" style={{ color: "#FF4757" }}>
                  {c.fee}
                </td>
              ))}
              <td className="py-3 px-3 text-center font-mono text-xs" style={{ color: "#00D68F" }}>
                10-15%
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="rounded-xl px-6 py-4 text-center"
        style={{
          background: "rgba(0,214,143,0.06)",
          border: "1px solid rgba(0,214,143,0.15)",
        }}
      >
        <p className="text-text-secondary text-sm">
          <span style={{ color: "#00D68F" }} className="font-semibold">Key gap:</span>{" "}
          No competitor offers real-time monitoring, proactive disruption response,
          or a subscription model. They all wait for you to come to them.
        </p>
      </div>
    </div>
  );
}

function GTMSlide() {
  return (
    <div className="flex flex-col items-center text-center gap-8 max-w-4xl w-full">
      <div className="flex items-center gap-3">
        <Target className="size-5" style={{ color: "#4C9AFF" }} />
        <span className="text-text-muted font-mono text-sm tracking-widest uppercase">
          Go-to-Market
        </span>
      </div>
      <h2
        className="font-display font-bold text-text-primary"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        5 channels, €800/month to start
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl mt-2">
        {[
          {
            channel: "Reddit",
            desc: "r/travel, r/flights, r/legaladvice — 2.5M+ members discussing compensation",
            tag: "PRIMARY",
            tagColor: "#00D68F",
          },
          {
            channel: "SEO & Content",
            desc: "5 pillar articles targeting 28K+ monthly searches for compensation keywords",
            tag: "ORGANIC",
            tagColor: "#4C9AFF",
          },
          {
            channel: "LinkedIn",
            desc: "Business traveler audience — targeted content and ads for corporate flyers",
            tag: "PAID",
            tagColor: "#FFB020",
          },
          {
            channel: "Product Hunt",
            desc: "Launch event targeting tech-savvy frequent travelers and early adopters",
            tag: "LAUNCH",
            tagColor: "#FF4757",
          },
          {
            channel: "YouTube",
            desc: "Partnerships with travel creators for reviews and compensation guides",
            tag: "PARTNERSHIPS",
            tagColor: "#8B95B0",
          },
        ].map((item) => (
          <div
            key={item.channel}
            className="rounded-xl p-5 text-left"
            style={{ background: "#141929", border: "1px solid #1E2640" }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-display font-semibold text-text-primary">
                {item.channel}
              </span>
              <span
                className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                style={{ color: item.tagColor, background: `${item.tagColor}15` }}
              >
                {item.tag}
              </span>
            </div>
            <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-4">
        {[
          { value: "€2K", label: "Month 1 MRR" },
          { value: "€20K", label: "Month 6 MRR" },
          { value: "€50K", label: "Month 12 MRR" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div
              className="font-mono text-2xl font-bold"
              style={{ color: "#00D68F" }}
            >
              {item.value}
            </div>
            <div className="text-text-muted text-xs mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamSlide() {
  return (
    <div className="flex flex-col items-center text-center gap-8 max-w-3xl">
      <div className="flex items-center gap-3">
        <Users className="size-5" style={{ color: "#4C9AFF" }} />
        <span className="text-text-muted font-mono text-sm tracking-widest uppercase">
          Team & Ask
        </span>
      </div>
      <h2
        className="font-display font-bold text-text-primary"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        Built by <span style={{ color: "#00D68F" }}>ChimeStream</span>
      </h2>
      <p className="text-text-secondary text-lg max-w-lg">
        Rotterdam-based AI studio building autonomous tools that work while you
        sleep. Reroute is our latest product — built on deep domain expertise in
        automation, AI agents, and SaaS.
      </p>

      <div
        className="rounded-xl p-8 w-full max-w-lg text-left"
        style={{
          background: "rgba(0,214,143,0.04)",
          border: "1px solid rgba(0,214,143,0.2)",
          boxShadow: "0 0 32px rgba(0,214,143,0.06)",
        }}
      >
        <h3
          className="font-display font-bold text-xl mb-4"
          style={{ color: "#00D68F" }}
        >
          The Ask
        </h3>
        <div className="space-y-3">
          {[
            { label: "Round", value: "Seed" },
            { label: "Use of funds", value: "Airline API partnerships, legal team, growth" },
            { label: "Month 1 budget", value: "~€800" },
            { label: "Path to profitability", value: "<12 months" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between gap-4">
              <span className="text-text-muted text-sm">{item.label}</span>
              <span className="text-text-primary text-sm font-medium text-right">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <a
          href="mailto:hello@reroute.app"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all"
          style={{
            background: "#00D68F",
            color: "#0B0F1A",
          }}
        >
          hello@reroute.app
        </a>
        <div className="text-text-muted text-sm mt-3 font-mono">
          Rotterdam, Netherlands
        </div>
      </div>
    </div>
  );
}

// ─── Slides Array ──────────────────────────────────────────────────────────────

const slides = [
  { id: "title", component: <TitleSlide /> },
  { id: "problem", component: <ProblemSlide /> },
  { id: "solution", component: <SolutionSlide /> },
  { id: "market", component: <MarketSlide /> },
  { id: "how-it-works", component: <HowItWorksSlide /> },
  { id: "traction", component: <TractionSlide /> },
  { id: "business-model", component: <BusinessModelSlide /> },
  { id: "competition", component: <CompetitionSlide /> },
  { id: "gtm", component: <GTMSlide /> },
  { id: "team", component: <TeamSlide /> },
];

// ─── Slide transition variants ─────────────────────────────────────────────────

function slideVariants(direction: number) {
  return {
    initial: { x: direction * 80, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: direction * -80, opacity: 0 },
  };
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function DeckPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  const next = useCallback(() => {
    if (current < slides.length - 1) goTo(current + 1);
  }, [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const variants = slideVariants(direction);

  return (
    <div
      className="relative w-full overflow-hidden bg-background"
      style={{ height: "100svh" }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(30,38,64,0.6) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top accent gradient */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,214,143,0.4), transparent)",
        }}
      />

      {/* Slide area */}
      <div className="relative w-full h-full flex items-center justify-center px-6 md:px-16">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slides[current].id}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
            className="flex items-center justify-center w-full"
          >
            {slides[current].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        disabled={current === 0}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-0 disabled:pointer-events-none"
        style={{ background: "rgba(30,38,64,0.8)", border: "1px solid #1E2640" }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5 text-text-secondary" />
      </button>

      {/* Next button */}
      <button
        onClick={next}
        disabled={current === slides.length - 1}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-0 disabled:pointer-events-none"
        style={{ background: "rgba(30,38,64,0.8)", border: "1px solid #1E2640" }}
        aria-label="Next slide"
      >
        <ChevronRight className="size-5 text-text-secondary" />
      </button>

      {/* Bottom navigation row */}
      <div className="absolute bottom-8 inset-x-0 flex items-center justify-between px-6 md:px-12">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-200"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                background: i === current ? "#00D68F" : "#1E2640",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <span className="font-mono text-sm text-text-muted">
          {current + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}
