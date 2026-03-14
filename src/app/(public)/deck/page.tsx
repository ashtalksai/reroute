"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── Slide data ────────────────────────────────────────────────────────────────

const slides = [
  {
    id: "title",
    content: (
      <div className="flex flex-col items-center text-center gap-6">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2"
          style={{ background: "rgba(0,214,143,0.15)", border: "1px solid rgba(0,214,143,0.3)" }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M4 16L12 8L20 16L28 8" stroke="#00D68F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 24L12 16L20 24L28 16" stroke="#00D68F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
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
        <div
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono"
          style={{ background: "rgba(0,214,143,0.08)", border: "1px solid rgba(0,214,143,0.2)", color: "#00D68F" }}
        >
          Seed Round — 2024
        </div>
      </div>
    ),
  },
  {
    id: "problem",
    content: (
      <div className="flex flex-col items-center text-center gap-8 max-w-3xl">
        <div className="text-text-muted font-mono text-sm tracking-widest uppercase">The Problem</div>
        <h2
          className="font-display font-bold text-text-primary leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          <span style={{ color: "#FFB020" }}>€6 billion</span> in flight<br />
          compensation goes unclaimed<br />
          every year.
        </h2>
        <div className="grid grid-cols-3 gap-6 mt-4 w-full max-w-2xl">
          {[
            { stat: "400M+", label: "Eligible passengers/yr" },
            { stat: "2%", label: "Actually claim" },
            { stat: "€440", label: "Avg payout" },
          ].map((item) => (
            <div
              key={item.stat}
              className="rounded-xl p-5"
              style={{ background: "rgba(255,176,32,0.06)", border: "1px solid rgba(255,176,32,0.15)" }}
            >
              <div className="font-mono text-3xl font-bold" style={{ color: "#FFB020" }}>{item.stat}</div>
              <div className="text-text-muted text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "solution",
    content: (
      <div className="flex flex-col items-center text-center gap-8 max-w-3xl">
        <div className="text-text-muted font-mono text-sm tracking-widest uppercase">The Solution</div>
        <h2
          className="font-display font-bold text-text-primary leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Automated EU261 claim filing<br />
          <span style={{ color: "#00D68F" }}>for frequent flyers</span>
        </h2>
        <p className="text-text-secondary text-lg md:text-xl max-w-xl">
          Reroute monitors your flights, detects disruptions, and files
          compensation claims automatically — you do nothing.
        </p>
        <div
          className="mt-2 px-6 py-3 rounded-xl text-base font-semibold"
          style={{ background: "rgba(0,214,143,0.12)", color: "#00D68F", border: "1px solid rgba(0,214,143,0.25)" }}
        >
          &ldquo;AirHelp is the ambulance. Reroute is the bodyguard.&rdquo;
        </div>
      </div>
    ),
  },
  {
    id: "how-it-works",
    content: (
      <div className="flex flex-col items-center text-center gap-8 max-w-3xl w-full">
        <div className="text-text-muted font-mono text-sm tracking-widest uppercase">How It Works</div>
        <h2
          className="font-display font-bold text-text-primary"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Three steps. Zero effort.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-2">
          {[
            {
              step: "01",
              title: "Sync",
              desc: "Connect your email or flight app. We scan your full travel history.",
              color: "rgba(76,154,255,0.08)",
              border: "rgba(76,154,255,0.2)",
              accent: "#4C9AFF",
            },
            {
              step: "02",
              title: "Monitor",
              desc: "We watch every flight live. Disruption detected within minutes.",
              color: "rgba(255,176,32,0.08)",
              border: "rgba(255,176,32,0.2)",
              accent: "#FFB020",
            },
            {
              step: "03",
              title: "Recover",
              desc: "Claim filed automatically. Compensation lands in your account.",
              color: "rgba(0,214,143,0.08)",
              border: "rgba(0,214,143,0.2)",
              accent: "#00D68F",
            },
          ].map((step) => (
            <div
              key={step.step}
              className="rounded-xl p-6 flex flex-col items-center gap-3"
              style={{ background: step.color, border: `1px solid ${step.border}` }}
            >
              <div className="font-mono text-3xl font-bold" style={{ color: step.accent }}>{step.step}</div>
              <div className="font-display font-semibold text-text-primary text-xl">{step.title}</div>
              <div className="text-text-secondary text-sm leading-relaxed">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "business-model",
    content: (
      <div className="flex flex-col items-center text-center gap-8 max-w-3xl w-full">
        <div className="text-text-muted font-mono text-sm tracking-widest uppercase">Business Model</div>
        <h2
          className="font-display font-bold text-text-primary"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Two paths to revenue
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mt-2">
          <div
            className="rounded-xl p-8 flex flex-col gap-4 text-left"
            style={{ background: "rgba(30,38,64,0.6)", border: "1px solid #1E2640" }}
          >
            <div className="font-display text-xl font-semibold text-text-primary">Spotter</div>
            <div className="font-mono text-4xl font-bold text-text-primary">Free</div>
            <div className="text-text-secondary text-sm">Past flight recovery</div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold self-start"
              style={{ background: "rgba(0,214,143,0.1)", color: "#00D68F" }}
            >
              35% success fee
            </div>
          </div>
          <div
            className="rounded-xl p-8 flex flex-col gap-4 text-left"
            style={{
              background: "rgba(0,214,143,0.05)",
              border: "1px solid rgba(0,214,143,0.4)",
              boxShadow: "0 0 24px rgba(0,214,143,0.1)",
            }}
          >
            <div className="font-display text-xl font-semibold text-text-primary">Guardian</div>
            <div className="font-mono text-4xl font-bold text-text-primary">€29<span className="text-text-muted text-lg font-normal">/mo</span></div>
            <div className="text-text-secondary text-sm">Past & future flights, legal team</div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold self-start"
              style={{ background: "rgba(0,214,143,0.15)", color: "#00D68F" }}
            >
              10% success fee
            </div>
          </div>
        </div>
        <p className="text-text-muted text-sm font-mono">
          One €600 claim covers 20 months of Guardian
        </p>
      </div>
    ),
  },
  {
    id: "contact",
    content: (
      <div className="flex flex-col items-center text-center gap-6">
        <div className="text-text-muted font-mono text-sm tracking-widest uppercase">Get In Touch</div>
        <h2
          className="font-display font-bold text-text-primary"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Let&apos;s talk.
        </h2>
        <a
          href="mailto:hello@reroute.app"
          className="font-display font-semibold transition-colors"
          style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", color: "#00D68F" }}
        >
          hello@reroute.app
        </a>
        <div
          className="mt-4 rounded-xl px-8 py-4"
          style={{ background: "rgba(30,38,64,0.6)", border: "1px solid #1E2640" }}
        >
          <div className="text-text-secondary text-sm">Built by</div>
          <div className="font-display font-semibold text-text-primary text-lg mt-0.5">ChimeStream</div>
          <div className="text-text-muted text-sm mt-0.5 font-mono">Rotterdam, Netherlands</div>
        </div>
      </div>
    ),
  },
];

// ─── Slide transition variants ─────────────────────────────────────────────────

function slideVariants(direction: number) {
  return {
    initial: { x: direction * 80, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: direction * -80, opacity: 0 },
  };
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function DeckPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    if (current > 0) goTo(current - 1);
  };

  const next = () => {
    if (current < slides.length - 1) goTo(current + 1);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

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
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,214,143,0.4), transparent)" }}
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
            {slides[current].content}
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
