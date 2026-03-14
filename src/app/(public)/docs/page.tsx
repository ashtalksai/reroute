"use client";

import { useState } from "react";
import { Menu, FileText } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// ─── Data ──────────────────────────────────────────────────────────────────────

const sections = [
  {
    id: "research",
    emoji: "📊",
    label: "Research",
    cards: [
      { title: "Market Analysis", description: "Total addressable market, EU261 claim volumes, and competitive landscape sizing." },
      { title: "Competitor Landscape", description: "Comparative breakdown of AirHelp, Flightright, ClaimCompass, and others." },
      { title: "Customer Interviews", description: "Qualitative research with 40 frequent flyers on pain points and willingness to pay." },
      { title: "Regulatory Overview", description: "Deep-dive on EU261/2004 applicability, enforcement bodies, and case law." },
    ],
  },
  {
    id: "gtm",
    emoji: "🚀",
    label: "GTM",
    cards: [
      { title: "Launch Plan", description: "Phase-by-phase go-to-market playbook from private beta to public launch." },
      { title: "Channel Strategy", description: "Acquisition channel prioritisation: SEO, paid, partnerships, and referral." },
      { title: "Partnership Pipeline", description: "Target partners across travel agencies, corporate booking tools, and fintechs." },
      { title: "Launch Metrics", description: "KPIs, targets, and dashboard for tracking launch performance week by week." },
    ],
  },
  {
    id: "marketing",
    emoji: "📣",
    label: "Marketing",
    cards: [
      { title: "Brand Guidelines", description: "Logo usage, typography, colour system, and tone of voice documentation." },
      { title: "Content Calendar", description: "Editorial calendar for blog, social, and email content through Q2 2024." },
      { title: "Social Strategy", description: "Platform-specific strategy for LinkedIn, X/Twitter, and Instagram." },
      { title: "Email Sequences", description: "Onboarding, nurture, claim update, and re-engagement email flows." },
    ],
  },
  {
    id: "brand",
    emoji: "🎨",
    label: "Brand",
    cards: [
      { title: "Visual Identity", description: "Full visual identity system: wordmark, icon, colour palette, and spatial system." },
      { title: "Tone of Voice", description: "Brand voice principles, example copy pairs, and writing dos and don'ts." },
      { title: "Asset Library", description: "Approved brand assets, illustrations, icons, and photography direction." },
      { title: "UI Design System", description: "Component library, design tokens, and interaction patterns for the product." },
    ],
  },
  {
    id: "pitch",
    emoji: "📈",
    label: "Pitch",
    cards: [
      { title: "Investor Deck", description: "Full seed-round pitch deck covering problem, solution, market, team, and ask." },
      { title: "One-Pager", description: "Single-page executive summary for warm introductions and deal flow." },
      { title: "Financial Model", description: "3-year P&L projection, unit economics, LTV/CAC analysis, and scenarios." },
      { title: "Due Diligence Pack", description: "Cap table, legal entity docs, IP ownership, and technical architecture overview." },
    ],
  },
];

// ─── Sidebar nav item ──────────────────────────────────────────────────────────

function SidebarItem({
  section,
  active,
  onClick,
}: {
  section: (typeof sections)[0];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left"
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
      <span className="text-base">{section.emoji}</span>
      <span>{section.label}</span>
    </button>
  );
}

// ─── Sidebar content ───────────────────────────────────────────────────────────

function SidebarContent({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1 p-4 pt-6">
      <p className="text-text-muted text-xs font-mono uppercase tracking-widest px-3 mb-3">
        Documents
      </p>
      {sections.map((section) => (
        <SidebarItem
          key={section.id}
          section={section}
          active={active === section.id}
          onClick={() => onSelect(section.id)}
        />
      ))}
    </div>
  );
}

// ─── Document card ─────────────────────────────────────────────────────────────

function DocCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      className="rounded-xl p-6 flex flex-col gap-3 group cursor-default transition-all duration-200"
      style={{
        background: "#141929",
        border: "1px solid #1E2640",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(30,38,64,0.5)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,214,143,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#1E2640";
      }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ background: "rgba(0,214,143,0.08)", border: "1px solid rgba(0,214,143,0.15)" }}
      >
        <FileText className="size-4" style={{ color: "#00D68F" }} />
      </div>
      <div>
        <h3 className="font-display font-semibold text-text-primary text-base mb-1.5">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto pt-2">
        <span
          className="text-xs font-mono px-2 py-1 rounded"
          style={{ background: "rgba(30,38,64,0.8)", color: "#505A75" }}
        >
          Coming soon
        </span>
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");

  const currentSection = sections.find((s) => s.id === activeSection) ?? sections[0];

  return (
    <div className="min-h-screen bg-background flex" style={{ paddingTop: "65px" }}>
      {/* Desktop sidebar */}
      <aside
        className="hidden md:flex flex-col w-60 shrink-0 fixed top-[65px] bottom-0 overflow-y-auto"
        style={{ background: "#141929", borderRight: "1px solid #1E2640" }}
      >
        <SidebarContent active={activeSection} onSelect={setActiveSection} />
      </aside>

      {/* Mobile header bar */}
      <div
        className="md:hidden fixed top-[65px] inset-x-0 z-20 flex items-center gap-3 px-4 py-3"
        style={{ background: "#141929", borderBottom: "1px solid #1E2640" }}
      >
        <Sheet>
          <SheetTrigger
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary text-sm font-medium transition-colors hover:text-text-primary"
              style={{ background: "rgba(30,38,64,0.8)" }}
            >
              <Menu className="size-4" />
              <span>Sections</span>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0" style={{ background: "#141929", borderColor: "#1E2640" }}>
            <SheetHeader className="sr-only">
              <SheetTitle>Document sections</SheetTitle>
            </SheetHeader>
            <SidebarContent
              active={activeSection}
              onSelect={(id) => {
                setActiveSection(id);
              }}
            />
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <span>{currentSection.emoji}</span>
          <span className="font-medium text-text-primary">{currentSection.label}</span>
        </div>
      </div>

      {/* Content area */}
      <main
        className="flex-1 min-w-0 overflow-y-auto"
        style={{ marginLeft: "0px" }}
      >
        {/* Desktop: offset for sidebar */}
        <div className="md:ml-60">
          {/* Mobile: offset for top bar */}
          <div className="mt-[49px] md:mt-0 px-6 md:px-10 py-10">
            {/* Section header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{currentSection.emoji}</span>
                <h1 className="font-display text-2xl font-bold text-text-primary">
                  {currentSection.label}
                </h1>
              </div>
              <p className="text-text-secondary text-sm">
                Documents will be linked here as they are completed.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {currentSection.cards.map((card) => (
                <DocCard key={card.title} title={card.title} description={card.description} />
              ))}
            </div>

            {/* Bottom note */}
            <div
              className="mt-12 rounded-xl p-5 flex items-start gap-4"
              style={{ background: "rgba(30,38,64,0.5)", border: "1px solid #1E2640" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "rgba(0,214,143,0.08)" }}
              >
                <span className="text-sm">📋</span>
              </div>
              <div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  This is an internal document hub. Links to live Google Docs and Notion pages
                  will be added here as documents are finalised. Contact{" "}
                  <a
                    href="mailto:hello@reroute.app"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    hello@reroute.app
                  </a>{" "}
                  for access requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
