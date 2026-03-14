"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  ExternalLink,
  BarChart3,
  Rocket,
  Megaphone,
  Palette,
  Presentation,
  TrendingUp,
  Globe,
  Target,
  Users,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// ─── Section Types ─────────────────────────────────────────────────────────────

interface Section {
  id: string;
  emoji: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
  content: React.ReactNode;
}

// ─── Research Section Content ──────────────────────────────────────────────────

function ResearchContent() {
  return (
    <div className="space-y-10">
      {/* Executive Summary */}
      <div
        className="rounded-xl p-8"
        style={{ background: "rgba(0,214,143,0.04)", border: "1px solid rgba(0,214,143,0.12)" }}
      >
        <h3 className="font-display text-xl font-bold text-text-primary mb-4">
          Executive Summary
        </h3>
        <p className="text-text-secondary leading-relaxed mb-6">
          Reroute addresses the €6B+ annually unclaimed in EU flight compensation.
          Under EC 261/2004, passengers are entitled to €250–€600 for disruptions,
          but 98% never claim. Current solutions (AirHelp, Flightright) are reactive
          — they only engage after disruption. Reroute is proactive: monitoring flights,
          detecting disruptions in real-time, and auto-filing claims.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Opportunity Score", value: "9/10", color: "#00D68F" },
            { label: "Problem Severity", value: "9/10", color: "#FFB020" },
            { label: "Idea Score", value: "77/100", color: "#4C9AFF" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-lg p-4 text-center"
              style={{ background: "#141929", border: "1px solid #1E2640" }}
            >
              <div className="font-mono text-2xl font-bold" style={{ color: m.color }}>
                {m.value}
              </div>
              <div className="text-text-muted text-xs mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Opportunity */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <TrendingUp className="size-4" style={{ color: "#4C9AFF" }} />
          Market Opportunity
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "TAM — Unclaimed annually", value: "€6B+", color: "#4C9AFF", bg: "rgba(76,154,255,0.06)" },
            { label: "EU passengers annually", value: "1.1B", color: "#00D68F", bg: "rgba(0,214,143,0.06)" },
            { label: "Keyword growth (easyjet delay)", value: "+1578%", color: "#FFB020", bg: "rgba(255,176,32,0.06)" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl p-5"
              style={{ background: m.bg, border: `1px solid ${m.color}20` }}
            >
              <div className="font-mono text-3xl font-bold" style={{ color: m.color }}>
                {m.value}
              </div>
              <div className="text-text-muted text-sm mt-2">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Keywords */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4">
          Search Trends
        </h3>
        <div className="space-y-2">
          {[
            { keyword: "easyjet flight delay compensation", volume: "9.9K", growth: "+1578%", comp: "MEDIUM" },
            { keyword: "flight delay compensation eu", volume: "18.1K", growth: "—", comp: "HIGH" },
            { keyword: "flight diversion compensation", volume: "4.4K", growth: "—", comp: "MEDIUM" },
            { keyword: "eu airline delay compensation", volume: "18.1K", growth: "—", comp: "HIGH" },
          ].map((k) => (
            <div
              key={k.keyword}
              className="rounded-lg p-4 flex items-center justify-between gap-4"
              style={{ background: "#141929", border: "1px solid #1E2640" }}
            >
              <span className="text-text-primary text-sm font-mono">{k.keyword}</span>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-text-secondary text-sm font-mono">{k.volume}</span>
                {k.growth !== "—" && (
                  <span className="font-mono text-xs" style={{ color: "#00D68F" }}>
                    {k.growth}
                  </span>
                )}
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded"
                  style={{
                    color: k.comp === "MEDIUM" ? "#FFB020" : "#FF4757",
                    background: k.comp === "MEDIUM" ? "rgba(255,176,32,0.1)" : "rgba(255,71,87,0.1)",
                  }}
                >
                  {k.comp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competitive Landscape */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4">
          Competitive Landscape
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid #1E2640" }}>
                <th className="py-3 px-4 text-left text-text-muted font-mono text-xs uppercase">Company</th>
                <th className="py-3 px-4 text-left text-text-muted font-mono text-xs uppercase">Proactive</th>
                <th className="py-3 px-4 text-left text-text-muted font-mono text-xs uppercase">Fee</th>
                <th className="py-3 px-4 text-left text-text-muted font-mono text-xs uppercase">Weakness</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary">
              {[
                { name: "AirHelp", proactive: false, fee: "35-50%", weakness: "Reactive only, high fees, slow processing" },
                { name: "Flightright", proactive: false, fee: "20-30%+VAT", weakness: "Complex fee structure, slow on contested claims" },
                { name: "Skycop", proactive: false, fee: "44-50%", weakness: "Highest fees in market" },
                { name: "ClaimCompass", proactive: false, fee: "35%", weakness: "Longer resolution for complex cases" },
                { name: "Reroute ✨", proactive: true, fee: "10-15%", weakness: "—" },
              ].map((c) => (
                <tr key={c.name} style={{ borderBottom: "1px solid rgba(30,38,64,0.5)" }}>
                  <td className="py-3 px-4 font-medium text-text-primary">{c.name}</td>
                  <td className="py-3 px-4">
                    {c.proactive ? (
                      <span style={{ color: "#00D68F" }}>✓ Yes</span>
                    ) : (
                      <span style={{ color: "#FF4757" }}>✗ No</span>
                    )}
                  </td>
                  <td className="py-3 px-4 font-mono text-xs">{c.fee}</td>
                  <td className="py-3 px-4 text-xs">{c.weakness}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Community Signals */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4">
          Community Validation
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { platform: "Reddit", members: "2.5M+", score: "8/10", details: "6 subreddits — r/travel, r/flights, r/legaladvice" },
            { platform: "Facebook", members: "150K+", score: "7/10", details: "4 groups — flight compensation communities" },
            { platform: "YouTube", members: "15 channels", score: "7/10", details: "Compensation guides, travel tip creators" },
          ].map((p) => (
            <div
              key={p.platform}
              className="rounded-xl p-5"
              style={{ background: "#141929", border: "1px solid #1E2640" }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-semibold text-text-primary">{p.platform}</span>
                <span className="font-mono text-xs" style={{ color: "#00D68F" }}>{p.score}</span>
              </div>
              <div className="text-text-secondary text-sm mb-1">{p.members} members</div>
              <div className="text-text-muted text-xs">{p.details}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── GTM Section Content ───────────────────────────────────────────────────────

function GTMContent() {
  return (
    <div className="space-y-10">
      {/* Positioning */}
      <div
        className="rounded-xl p-8"
        style={{ background: "rgba(0,214,143,0.04)", border: "1px solid rgba(0,214,143,0.12)" }}
      >
        <h3 className="font-display text-xl font-bold text-text-primary mb-3">
          Positioning
        </h3>
        <p className="text-2xl font-display font-bold" style={{ color: "#00D68F" }}>
          &ldquo;AirHelp is the ambulance. Reroute is the bodyguard.&rdquo;
        </p>
        <p className="text-text-secondary mt-3 leading-relaxed">
          For frequent flyers who are tired of leaving money on the table after
          flight disruptions, Reroute is the only proactive flight compensation
          agent that monitors, detects, and files claims automatically — before
          you even think about it.
        </p>
      </div>

      {/* Launch Channels */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <Target className="size-4" style={{ color: "#4C9AFF" }} />
          Launch Channels
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              channel: "Reddit",
              tag: "PRIMARY",
              tagColor: "#00D68F",
              desc: "Targeted posts in r/travel, r/flights, r/legaladvice (2.5M+ members). Answer compensation questions, share calculator. Aim for 50+ engaged users month 1.",
            },
            {
              channel: "SEO & Content",
              tag: "ORGANIC",
              tagColor: "#4C9AFF",
              desc: "5 pillar articles targeting 28K+ monthly search volume. Keywords: 'flight delay compensation eu', 'easyjet compensation', 'EU261 rights'. Long-term traffic engine.",
            },
            {
              channel: "LinkedIn",
              tag: "PAID",
              tagColor: "#FFB020",
              desc: "Business traveler audience. Content + targeted ads for corporate frequent flyers. B2B angle: company travel managers. €200/mo budget.",
            },
            {
              channel: "Product Hunt",
              tag: "LAUNCH",
              tagColor: "#FF4757",
              desc: "Launch event targeting tech-savvy frequent travelers. Coordinate makers community. Target: Top 5 of the day, 200+ upvotes.",
            },
            {
              channel: "YouTube Partnerships",
              tag: "COLLAB",
              tagColor: "#8B95B0",
              desc: "Partner with 3-5 travel YouTubers for reviews and 'how to claim' content. Affiliate model with 10% commission on conversions.",
            },
          ].map((item) => (
            <div
              key={item.channel}
              className="rounded-xl p-5"
              style={{ background: "#141929", border: "1px solid #1E2640" }}
            >
              <div className="flex items-center justify-between mb-3">
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
      </div>

      {/* Revenue Timeline */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <TrendingUp className="size-4" style={{ color: "#00D68F" }} />
          Revenue Targets
        </h3>
        <div className="flex flex-col sm:flex-row gap-4">
          {[
            { period: "Month 1", mrr: "€2K", signups: "~70 users", color: "#4C9AFF" },
            { period: "Month 6", mrr: "€20K", signups: "~700 users", color: "#FFB020" },
            { period: "Month 12", mrr: "€50K", signups: "~1,700 users", color: "#00D68F" },
          ].map((item, i) => (
            <div key={item.period} className="flex-1 flex items-center gap-4">
              <div
                className="flex-1 rounded-xl p-5"
                style={{ background: "#141929", border: "1px solid #1E2640" }}
              >
                <div className="text-text-muted text-xs font-mono mb-1">{item.period}</div>
                <div className="font-mono text-2xl font-bold" style={{ color: item.color }}>
                  {item.mrr}
                </div>
                <div className="text-text-muted text-xs mt-1">{item.signups}</div>
              </div>
              {i < 2 && (
                <ArrowRight className="size-4 text-text-muted hidden sm:block shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div
        className="rounded-xl p-6"
        style={{ background: "#141929", border: "1px solid #1E2640" }}
      >
        <h3 className="font-display text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <DollarSign className="size-4" style={{ color: "#FFB020" }} />
          Month 1 Budget: ~€800
        </h3>
        <div className="space-y-3">
          {[
            { item: "LinkedIn Ads", amount: "€200", pct: 25 },
            { item: "Content creation", amount: "€200", pct: 25 },
            { item: "Reddit ads / promoted", amount: "€150", pct: 19 },
            { item: "YouTube partnerships", amount: "€150", pct: 19 },
            { item: "Tools & analytics", amount: "€100", pct: 12 },
          ].map((b) => (
            <div key={b.item}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-text-secondary">{b.item}</span>
                <span className="font-mono text-text-primary">{b.amount}</span>
              </div>
              <div className="w-full h-1.5 rounded-full" style={{ background: "#1E2640" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${b.pct}%`, background: "#00D68F" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Marketing Section Content ─────────────────────────────────────────────────

function MarketingContent() {
  return (
    <div className="space-y-10">
      {/* Brand Voice */}
      <div
        className="rounded-xl p-8"
        style={{ background: "rgba(0,214,143,0.04)", border: "1px solid rgba(0,214,143,0.12)" }}
      >
        <h3 className="font-display text-xl font-bold text-text-primary mb-3">
          Brand Voice
        </h3>
        <p className="text-text-secondary leading-relaxed mb-4">
          Confident, sharp, protective — like a seasoned travel assistant who&apos;s always
          three steps ahead. Premium but not pretentious.
        </p>
        <div className="flex flex-wrap gap-3">
          {["Flighty", "Revolut", "Linear"].map((ref) => (
            <span
              key={ref}
              className="px-3 py-1 rounded-full text-sm font-mono"
              style={{ background: "rgba(0,214,143,0.08)", color: "#00D68F", border: "1px solid rgba(0,214,143,0.15)" }}
            >
              × {ref}
            </span>
          ))}
        </div>
      </div>

      {/* Brand Copy Package */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4">
          Core Messaging
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Tagline", value: "Flight compensation on autopilot." },
            { label: "Headline", value: "Your flights break. We fix them." },
            { label: "Subtitle", value: "The proactive flight agent that monitors disruptions and files EU261 claims automatically." },
            { label: "CTA", value: "Start Monitoring — Free" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-5"
              style={{ background: "#141929", border: "1px solid #1E2640" }}
            >
              <div className="text-text-muted text-xs font-mono uppercase mb-2">
                {item.label}
              </div>
              <div className="text-text-primary font-display font-semibold">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Pillar Articles */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <Globe className="size-4" style={{ color: "#4C9AFF" }} />
          SEO Content Plan — 5 Pillar Articles
        </h3>
        <div className="space-y-3">
          {[
            { title: "Complete Guide to EU261 Flight Compensation", target: "18.1K searches/mo" },
            { title: "EasyJet Delay Compensation: How to Claim", target: "9.9K searches/mo" },
            { title: "Flight Cancellation Rights in Europe", target: "8.2K searches/mo" },
            { title: "Denied Boarding Compensation Calculator", target: "4.4K searches/mo" },
            { title: "How to Get Compensation for Diverted Flights", target: "4.4K searches/mo" },
          ].map((article, i) => (
            <div
              key={article.title}
              className="rounded-lg p-4 flex items-center gap-4"
              style={{ background: "#141929", border: "1px solid #1E2640" }}
            >
              <span
                className="font-mono text-lg font-bold shrink-0 w-8 text-center"
                style={{ color: "#4C9AFF" }}
              >
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="text-text-primary text-sm font-medium">{article.title}</div>
                <div className="text-text-muted text-xs mt-0.5 font-mono">{article.target}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Calendar */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4">
          4-Week Content Calendar
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid #1E2640" }}>
                <th className="py-3 px-4 text-left text-text-muted font-mono text-xs">Week</th>
                <th className="py-3 px-4 text-left text-text-muted font-mono text-xs">Blog</th>
                <th className="py-3 px-4 text-left text-text-muted font-mono text-xs">Social</th>
                <th className="py-3 px-4 text-left text-text-muted font-mono text-xs">Email</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary">
              {[
                { week: "1", blog: "Launch announcement", social: "5 Twitter + 5 LinkedIn", email: "Welcome sequence (4 emails)" },
                { week: "2", blog: "EU261 guide", social: "5 Twitter + 5 LinkedIn", email: "Feature highlight" },
                { week: "3", blog: "Compensation calculator tutorial", social: "5 Twitter + 5 LinkedIn", email: "Case study" },
                { week: "4", blog: "AirHelp vs Reroute comparison", social: "5 Twitter + 5 LinkedIn", email: "Monthly roundup" },
              ].map((w) => (
                <tr key={w.week} style={{ borderBottom: "1px solid rgba(30,38,64,0.5)" }}>
                  <td className="py-3 px-4 font-mono" style={{ color: "#00D68F" }}>W{w.week}</td>
                  <td className="py-3 px-4 text-xs">{w.blog}</td>
                  <td className="py-3 px-4 text-xs">{w.social}</td>
                  <td className="py-3 px-4 text-xs">{w.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sample Social Posts */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <Megaphone className="size-4" style={{ color: "#FFB020" }} />
          Sample Social Posts
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              platform: "Twitter/X",
              post: "Your flight was delayed 3 hours last month.\n\nYou're owed €400.\n\nBut the airline counted on you not knowing that.\n\nReroute monitors your flights and files claims automatically. Zero effort.",
            },
            {
              platform: "LinkedIn",
              post: "I used to spend 40+ minutes per claim. Forms, emails, follow-ups.\n\nNow I add my flights once and Reroute handles everything.\n\nLast quarter: 3 claims filed automatically. €1,200 recovered.\n\nThis is what 'set it and forget it' should actually mean.",
            },
          ].map((s) => (
            <div
              key={s.platform}
              className="rounded-xl p-5"
              style={{ background: "#141929", border: "1px solid #1E2640" }}
            >
              <div className="text-text-muted text-xs font-mono uppercase mb-3">
                {s.platform}
              </div>
              <div className="text-text-secondary text-sm whitespace-pre-line leading-relaxed">
                {s.post}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Brand Section Content ─────────────────────────────────────────────────────

function BrandContent() {
  return (
    <div className="space-y-10">
      {/* Brand Identity */}
      <div
        className="rounded-xl p-8"
        style={{ background: "rgba(0,214,143,0.04)", border: "1px solid rgba(0,214,143,0.12)" }}
      >
        <h3 className="font-display text-xl font-bold text-text-primary mb-3">
          Brand Identity
        </h3>
        <p className="text-text-secondary leading-relaxed mb-2">
          <strong className="text-text-primary">Personality:</strong> Confident, sharp, protective — like a
          seasoned travel assistant who&apos;s always three steps ahead. Premium but
          not pretentious.
        </p>
        <p className="text-text-secondary leading-relaxed mb-2">
          <strong className="text-text-primary">Tone:</strong> Luxury/Refined meets Industrial/Utilitarian — premium
          travel dashboard with fintech-grade data clarity.
        </p>
        <p className="text-text-secondary leading-relaxed">
          <strong className="text-text-primary">Unforgettable Element:</strong> Departure-board aesthetic — flip-board
          style transitions on status changes, giving the product a distinctly aviation feel.
        </p>
      </div>

      {/* Color Palette */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <Palette className="size-4" style={{ color: "#00D68F" }} />
          Color Palette
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: "Background", hex: "#0B0F1A", desc: "Deep navy-black" },
            { name: "Surface", hex: "#141929", desc: "Elevated cards" },
            { name: "Accent", hex: "#00D68F", desc: "Emerald green — money, success" },
            { name: "Accent Hover", hex: "#00F5A0", desc: "Brighter on interaction" },
            { name: "Warning", hex: "#FFB020", desc: "Delay/warning amber" },
            { name: "Destructive", hex: "#FF4757", desc: "Cancelled, rejected" },
            { name: "Info", hex: "#4C9AFF", desc: "Informational blue" },
            { name: "Text Primary", hex: "#F0F2F5", desc: "Off-white text" },
            { name: "Text Secondary", hex: "#8B95B0", desc: "Muted blue-gray" },
            { name: "Border", hex: "#1E2640", desc: "Subtle borders" },
            { name: "€250 Claims", hex: "#4C9AFF", desc: "Blue tier" },
            { name: "€600 Claims", hex: "#00D68F", desc: "Green tier" },
          ].map((c) => (
            <div
              key={c.name}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid #1E2640" }}
            >
              <div className="h-16" style={{ background: c.hex }} />
              <div className="p-3" style={{ background: "#141929" }}>
                <div className="text-text-primary text-sm font-medium">{c.name}</div>
                <div className="font-mono text-xs text-text-muted mt-0.5">{c.hex}</div>
                <div className="text-text-muted text-xs mt-0.5">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4">
          Typography
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              name: "Space Grotesk",
              role: "Display / Headings",
              usage: "Hero text, section titles, flight numbers",
              sample: "Aa Bb Cc 123",
              className: "font-display",
            },
            {
              name: "Plus Jakarta Sans",
              role: "Body Text",
              usage: "Paragraphs, UI text, descriptions",
              sample: "Aa Bb Cc 123",
              className: "font-sans",
            },
            {
              name: "JetBrains Mono",
              role: "Mono / Data",
              usage: "Stats, prices, flight codes, data tables",
              sample: "€440 KL1234",
              className: "font-mono",
            },
          ].map((f) => (
            <div
              key={f.name}
              className="rounded-xl p-6"
              style={{ background: "#141929", border: "1px solid #1E2640" }}
            >
              <div className={`text-3xl font-bold text-text-primary ${f.className} mb-3`}>
                {f.sample}
              </div>
              <div className="text-text-primary text-sm font-semibold">{f.name}</div>
              <div className="text-text-muted text-xs mt-0.5 font-mono">{f.role}</div>
              <div className="text-text-muted text-xs mt-1">{f.usage}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing & Radius */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          className="rounded-xl p-6"
          style={{ background: "#141929", border: "1px solid #1E2640" }}
        >
          <h4 className="font-display font-semibold text-text-primary mb-3">Spacing</h4>
          <div className="space-y-2 text-sm">
            {[
              { label: "Base unit", value: "4px" },
              { label: "Section padding (desktop)", value: "96px" },
              { label: "Section padding (mobile)", value: "56px" },
              { label: "Container max-width", value: "1200px" },
              { label: "Content max-width", value: "680px" },
            ].map((s) => (
              <div key={s.label} className="flex justify-between">
                <span className="text-text-muted">{s.label}</span>
                <span className="font-mono text-text-primary">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-xl p-6"
          style={{ background: "#141929", border: "1px solid #1E2640" }}
        >
          <h4 className="font-display font-semibold text-text-primary mb-3">Border Radius</h4>
          <div className="space-y-2 text-sm">
            {[
              { label: "Small (buttons, inputs)", value: "8px" },
              { label: "Medium (cards, panels)", value: "12px" },
              { label: "Large (modals, hero)", value: "16px" },
              { label: "Full (pills, avatar)", value: "9999px" },
            ].map((r) => (
              <div key={r.label} className="flex justify-between">
                <span className="text-text-muted">{r.label}</span>
                <span className="font-mono text-text-primary">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Component Specs */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4">
          Key Components
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "Button (primary)", spec: "bg: accent, text: accent-foreground, rounded-lg, font-semibold" },
            { name: "Button (outline)", spec: "border: border, text: text-secondary, hover: surface-hover" },
            { name: "Card", spec: "bg: surface, border: border, rounded-xl, shadow: card shadow" },
            { name: "Input", spec: "bg: surface, border: border, focus: accent ring (2px)" },
            { name: "Badge (status)", spec: "Variants: on-time (success), delayed (warning), cancelled (destructive)" },
            { name: "Flight Card", spec: "Surface bg, airline logo left, flight info center, status badge right" },
          ].map((c) => (
            <div
              key={c.name}
              className="rounded-lg p-4"
              style={{ background: "#141929", border: "1px solid #1E2640" }}
            >
              <div className="text-text-primary text-sm font-semibold mb-1">{c.name}</div>
              <div className="text-text-muted text-xs font-mono leading-relaxed">{c.spec}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Pitch Section Content ─────────────────────────────────────────────────────

function PitchContent() {
  return (
    <div className="space-y-10">
      {/* Link to interactive deck */}
      <div
        className="rounded-xl p-8"
        style={{ background: "rgba(0,214,143,0.04)", border: "1px solid rgba(0,214,143,0.12)" }}
      >
        <h3 className="font-display text-xl font-bold text-text-primary mb-3">
          Interactive Pitch Deck
        </h3>
        <p className="text-text-secondary leading-relaxed mb-4">
          The full interactive pitch deck with animated slide navigation is available
          as a standalone page. Navigate with arrow keys or click through slides.
        </p>
        <a
          href="/deck"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all text-sm"
          style={{ background: "#00D68F", color: "#0B0F1A" }}
        >
          Open Pitch Deck <ExternalLink className="size-4" />
        </a>
      </div>

      {/* Slide Overview */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <Presentation className="size-4" style={{ color: "#4C9AFF" }} />
          10-Slide Overview
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { num: "01", title: "Title", desc: "Reroute — Flight Compensation on Autopilot. Seed Round 2026." },
            { num: "02", title: "Problem", desc: "€6B unclaimed annually. Airlines count on passengers not following up. 98% never claim." },
            { num: "03", title: "Solution", desc: "Proactive monitoring + auto-filing. 'AirHelp is the ambulance. Reroute is the bodyguard.'" },
            { num: "04", title: "Market Size", desc: "€6B+ TAM, 1.1B EU passengers, +1578% keyword growth. $1.67T global travel market." },
            { num: "05", title: "How It Works", desc: "Sync → Monitor → Recover. Average claim filed in 2 minutes from disruption detection." },
            { num: "06", title: "Traction", desc: "9/10 opportunity score, 77/100 idea score, 2.5M+ Reddit community, proven demand." },
            { num: "07", title: "Business Model", desc: "Spotter (free + 35% fee), Guardian (€29/mo + 10%), Success Fee (15%). LTV:CAC 14-23x." },
            { num: "08", title: "Competition", desc: "AirHelp, Flightright, Skycop — all reactive, 35-50% fees. We're proactive, 10-15%." },
            { num: "09", title: "GTM", desc: "5 channels: Reddit, SEO, LinkedIn, Product Hunt, YouTube. €800/mo budget. €50K MRR month 12." },
            { num: "10", title: "Team & Ask", desc: "Built by ChimeStream, Rotterdam. Seed round for airline API partnerships and growth." },
          ].map((slide) => (
            <div
              key={slide.num}
              className="rounded-xl p-5 flex gap-4"
              style={{ background: "#141929", border: "1px solid #1E2640" }}
            >
              <span
                className="font-mono text-lg font-bold shrink-0 w-8"
                style={{ color: "#00D68F" }}
              >
                {slide.num}
              </span>
              <div>
                <div className="font-display font-semibold text-text-primary text-sm mb-1">
                  {slide.title}
                </div>
                <div className="text-text-muted text-xs leading-relaxed">
                  {slide.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Stats */}
      <div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-4">
          Key Investor Stats
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "€6B+", label: "Unclaimed annually", color: "#FFB020" },
            { value: "14-23x", label: "LTV:CAC", color: "#00D68F" },
            { value: "+1578%", label: "Keyword growth", color: "#4C9AFF" },
            { value: "<1 mo", label: "Payback period", color: "#00D68F" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-4 text-center"
              style={{ background: "#141929", border: "1px solid #1E2640" }}
            >
              <div className="font-mono text-xl font-bold" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="text-text-muted text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Sections Data ─────────────────────────────────────────────────────────────

const sections: Section[] = [
  { id: "research", emoji: "📊", icon: BarChart3, label: "Research", content: <ResearchContent /> },
  { id: "gtm", emoji: "🚀", icon: Rocket, label: "GTM Plan", content: <GTMContent /> },
  { id: "marketing", emoji: "📣", icon: Megaphone, label: "Marketing", content: <MarketingContent /> },
  { id: "brand", emoji: "🎨", icon: Palette, label: "Brand Spec", content: <BrandContent /> },
  { id: "pitch", emoji: "📈", icon: Presentation, label: "Pitch Deck", content: <PitchContent /> },
];

// ─── Sidebar Nav Item ──────────────────────────────────────────────────────────

function SidebarItem({
  section,
  active,
  onClick,
}: {
  section: Section;
  active: boolean;
  onClick: () => void;
}) {
  const Icon = section.icon;
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left relative"
      style={
        active
          ? { background: "rgba(0,214,143,0.12)", color: "#00D68F" }
          : { color: "#8B95B0" }
      }
      onMouseEnter={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(30,38,64,0.8)";
          (e.currentTarget as HTMLButtonElement).style.color = "#F0F2F5";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          (e.currentTarget as HTMLButtonElement).style.color = "#8B95B0";
        }
      }}
    >
      {active && (
        <div
          className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full"
          style={{ background: "#00D68F" }}
        />
      )}
      <Icon className="size-4 shrink-0" />
      <span>{section.label}</span>
    </button>
  );
}

// ─── Sidebar Content ───────────────────────────────────────────────────────────

function SidebarContent({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1 p-4 pt-6">
      <div className="flex items-center gap-2 px-3 mb-4">
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <path d="M4 16L12 8L20 16L28 8" stroke="#00D68F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 24L12 16L20 24L28 16" stroke="#00D68F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        </svg>
        <span className="font-display font-bold text-text-primary text-sm">Documentation</span>
      </div>
      <div className="h-px mb-2" style={{ background: "#1E2640" }} />
      <p className="text-text-muted text-xs font-mono uppercase tracking-widest px-3 mb-2">
        Sections
      </p>
      {sections.map((section) => (
        <SidebarItem
          key={section.id}
          section={section}
          active={active === section.id}
          onClick={() => onSelect(section.id)}
        />
      ))}
      <div className="h-px my-4" style={{ background: "#1E2640" }} />
      <p className="text-text-muted text-xs font-mono uppercase tracking-widest px-3 mb-2">
        Links
      </p>
      <a
        href="/"
        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-muted hover:text-text-primary transition-colors"
      >
        <ExternalLink className="size-4" />
        <span>Live Site</span>
      </a>
      <a
        href="/deck"
        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-muted hover:text-text-primary transition-colors"
      >
        <Presentation className="size-4" />
        <span>Pitch Deck</span>
      </a>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentSection = sections.find((s) => s.id === activeSection) ?? sections[0];

  // Update active section based on hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && sections.find((s) => s.id === hash)) {
      setActiveSection(hash);
    }
  }, []);

  const handleSelect = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="min-h-screen bg-background flex" style={{ paddingTop: "65px" }}>
      {/* Desktop sidebar */}
      <aside
        className="hidden md:flex flex-col w-64 shrink-0 fixed top-[65px] bottom-0 overflow-y-auto"
        style={{ background: "#141929", borderRight: "1px solid #1E2640" }}
      >
        <SidebarContent active={activeSection} onSelect={handleSelect} />
      </aside>

      {/* Mobile header bar */}
      <div
        className="md:hidden fixed top-[65px] inset-x-0 z-20 flex items-center gap-3 px-4 py-3"
        style={{ background: "#141929", borderBottom: "1px solid #1E2640" }}
      >
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary text-sm font-medium transition-colors hover:text-text-primary"
            style={{ background: "rgba(30,38,64,0.8)" }}
          >
            <Menu className="size-4" />
            <span>Sections</span>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-64 p-0"
            style={{ background: "#141929", borderColor: "#1E2640" }}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Document sections</SheetTitle>
            </SheetHeader>
            <SidebarContent active={activeSection} onSelect={handleSelect} />
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <span>{currentSection.emoji}</span>
          <span className="font-medium text-text-primary">{currentSection.label}</span>
        </div>
      </div>

      {/* Content area */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="md:ml-64">
          <div className="mt-[49px] md:mt-0 px-6 md:px-10 py-10 max-w-[900px]">
            {/* Section header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{currentSection.emoji}</span>
                <h1 className="font-display text-2xl font-bold text-text-primary">
                  {currentSection.label}
                </h1>
              </div>
              <div className="h-px mt-4" style={{ background: "#1E2640" }} />
            </div>

            {/* Section content */}
            {currentSection.content}
          </div>
        </div>
      </main>
    </div>
  );
}
