"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, DollarSign, Scissors, CheckCircle2, ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const container = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const scrollFadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.4 },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const problemCards = [
  {
    icon: Clock,
    title: "Time Drain",
    description:
      "Filling out forms and chasing airlines is a full-time job you don't have.",
  },
  {
    icon: DollarSign,
    title: "Leaving Cash",
    description:
      "Billions in compensation go unclaimed every year. Don't let it be yours.",
  },
  {
    icon: Scissors,
    title: "Red Tape",
    description:
      "Airlines deliberately make the process difficult to discourage claims.",
  },
];

const features = [
  {
    title: "Past Flight Audit",
    description: "Discover compensation from up to 3 years ago.",
    image: "/images/feature-monitoring.png",
  },
  {
    title: "Real-Time Monitoring",
    description: "We watch your flights live and react instantly.",
    image: "/images/feature-alerts.png",
  },
  {
    title: "Expert Filing",
    description: "Our team handles all communication and documentation.",
    image: "/images/feature-claims.png",
  },
  {
    title: "Secure & Private",
    description: "Bank-level encryption and data protection.",
    image: "/images/feature-dashboard.png",
  },
  {
    title: "No Win, No Fee",
    description: "Our service is risk-free for Spotter users.",
    image: "/images/feature-eu261.png",
  },
  {
    title: "Instant Payouts",
    description:
      "Get compensation transferred to your Revolut account immediately.",
    image: "/images/feature-history.png",
  },
];

const steps = [
  {
    number: "01",
    title: "Sync",
    description: "Connect your email or flight app securely.",
  },
  {
    number: "02",
    title: "Relax",
    description: "Reroute identifies eligible claims instantly.",
  },
  {
    number: "03",
    title: "Recover",
    description: "Receive compensation directly to your bank.",
  },
];

const testimonials = [
  {
    quote:
      "Reroute found three claims I had completely forgotten about. Within eight weeks I had €1,200 deposited into my account. Absolutely effortless.",
    name: "Marcus T.",
    role: "Frequent Business Flyer, Amsterdam",
  },
  {
    quote:
      "I fly 80+ times a year. The Guardian plan pays for itself with a single claim. The team handles everything — I literally do nothing.",
    name: "Sophie W.",
    role: "Senior Consultant, London",
  },
  {
    quote:
      "I'd been ignoring a cancelled flight for two years. Reroute filed the claim and I got €400 back. I wish I'd found this sooner.",
    name: "David K.",
    role: "Software Engineer, Berlin",
  },
];

const stats = [
  { value: "50,000+", label: "Flyers" },
  { value: "£15M+", label: "Recovered" },
  { value: "98%", label: "Success Rate" },
  { value: "< 48h", label: "Response Time" },
];

const spotterFeatures = [
  "Past flight recovery",
  "35% success fee",
  "No win, no fee",
  "Standard support",
];

const guardianFeatures = [
  "Past & future flights",
  "10% success fee",
  "Priority filing",
  "Instant payouts",
  "Premium support",
];

const faqs = [
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. We use bank-level 256-bit encryption to protect all your personal data and flight information. We are GDPR compliant and never sell your data to third parties. Your credentials are stored using one-way hashing and our systems undergo regular third-party security audits.",
  },
  {
    question: "Which flights are eligible?",
    answer:
      "Any flight departing from an EU airport within the last 3 years, or any flight arriving into an EU airport on an EU-based carrier, is potentially eligible under EU Regulation 261/2004. This covers delays of 3+ hours, cancellations with less than 14 days' notice, and denied boarding due to overbooking.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Compensation is paid directly to your bank account. Guardian subscribers can also receive instant payouts via Revolut. Once a claim is resolved, funds typically clear within 2–5 business days depending on your bank.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your Guardian subscription at any time with no cancellation fees. Any in-progress claims at the time of cancellation will continue to be handled under your original plan terms.",
  },
  {
    question: "What if my claim is rejected?",
    answer:
      "If your claim is rejected, you owe nothing on the Spotter plan — that's the promise of our no win, no fee model. Guardian subscribers pay their monthly fee regardless, but receive priority representation and legal team support to maximise chances of success.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Most claims are resolved within 6–12 weeks. Simple cases with clear documentation can be resolved in as little as 3 weeks. In contested cases where airlines push back, our legal team may escalate to national enforcement bodies, which can extend timelines to 3–6 months.",
  },
  {
    question: "Do I need to do anything after signing up?",
    answer:
      "No. Once you connect your flights, Reroute handles everything — from identifying eligible claims to filing paperwork and chasing airlines. You'll receive email updates at key milestones and can check progress anytime in your dashboard.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="bg-background text-text-primary">
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center bg-background overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg-grid-pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "40px 40px",
        }}
      >
        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,214,143,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <motion.div
              variants={container}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-6"
            >
              <motion.div variants={item} transition={{ duration: 0.4 }}>
                <span className="inline-flex items-center gap-2 text-sm font-mono text-accent border border-accent/30 bg-accent/10 rounded-full px-3 py-1">
                  EU261 Compensation on Autopilot
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                transition={{ duration: 0.4 }}
                className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-text-primary"
              >
                Your flights break.{" "}
                <span className="text-accent">We fix them.</span>
              </motion.h1>

              <motion.p
                variants={item}
                transition={{ duration: 0.4 }}
                className="text-xl text-text-secondary leading-relaxed max-w-[520px]"
              >
                We monitor your past flights and automatically file EU261 claims
                for delays and cancellations. It&apos;s found money for frequent
                flyers.
              </motion.p>

              <motion.div
                variants={item}
                transition={{ duration: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 pt-2"
              >
                <Link href="/signup">
                  <button className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-accent text-accent-foreground font-semibold text-base hover:bg-accent-hover transition-colors">
                    Check Past Flights
                    <ArrowRight className="size-4" />
                  </button>
                </Link>
                <Link href="#how-it-works">
                  <button className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-border text-text-primary font-semibold text-base hover:border-border-hover hover:bg-surface-hover transition-colors">
                    Learn More
                  </button>
                </Link>
              </motion.div>

              <motion.div
                variants={item}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-6 pt-2"
              >
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <CheckCircle2 className="size-4 text-accent" />
                  No win, no fee
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <CheckCircle2 className="size-4 text-accent" />
                  Up to €600 per flight
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <CheckCircle2 className="size-4 text-accent" />
                  3-year lookback
                </div>
              </motion.div>
            </motion.div>

            {/* Right: product screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-2xl blur-2xl"
                style={{ background: "rgba(0,214,143,0.08)" }}
              />
              <div className="relative rounded-2xl overflow-hidden border border-border card-shadow">
                <Image
                  src="/images/hero-dashboard.png"
                  alt="Reroute dashboard — your flight claims at a glance"
                  width={680}
                  height={460}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div {...scrollFadeUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              Airlines count on you{" "}
              <span className="text-text-secondary">not following up</span>
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {problemCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={item}
                  transition={{ duration: 0.4 }}
                  className="group bg-surface border border-border rounded-xl p-8 hover:border-accent/30 transition-all duration-300 card-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon className="size-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 3. SOLUTION ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <motion.div {...scrollFadeUp} className="flex flex-col gap-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                A travel agent that{" "}
                <span className="text-accent">works while you sleep</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Reroute connects to your travel history, identifies every
                disrupted flight that qualifies for EU261 compensation, and
                handles the entire claims process from first submission to final
                payout. Completely hands-off.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Most travellers leave thousands of euros unclaimed simply
                because they don&apos;t have the time or knowledge to navigate
                the system. Reroute levels the playing field.
              </p>
              <Link href="/signup" className="self-start">
                <button className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent-hover transition-colors">
                  Start Your Free Audit
                  <ArrowRight className="size-4" />
                </button>
              </Link>
            </motion.div>

            {/* Right: flow visualization */}
            <motion.div
              variants={container}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-4"
            >
              {[
                {
                  step: "1",
                  title: "Sync Flights",
                  desc: "Securely connect your email or travel app",
                  color: "border-accent/40 bg-accent/5",
                },
                {
                  step: "2",
                  title: "Auto-File",
                  desc: "We detect disruptions and submit claims automatically",
                  color: "border-accent/60 bg-accent/8",
                },
                {
                  step: "3",
                  title: "Get Paid",
                  desc: "Compensation lands directly in your account",
                  color: "border-accent bg-accent/12",
                },
              ].map((flowStep, index) => (
                <motion.div
                  key={flowStep.step}
                  variants={item}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div
                    className={`flex items-center gap-5 p-5 rounded-xl border ${flowStep.color} card-shadow`}
                  >
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <span className="font-mono font-bold text-accent-foreground text-sm">
                        {flowStep.step}
                      </span>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-text-primary">
                        {flowStep.title}
                      </div>
                      <div className="text-sm text-text-secondary mt-0.5">
                        {flowStep.desc}
                      </div>
                    </div>
                    <CheckCircle2 className="size-5 text-accent ml-auto shrink-0" />
                  </div>
                  {index < 2 && (
                    <div className="flex justify-center my-1">
                      <div className="w-px h-4 border-l-2 border-dashed border-accent/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURES ─────────────────────────────────────────────────────── */}
      <section id="features" className="section-padding bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div {...scrollFadeUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Built for frequent flyers
            </h2>
            <p className="text-lg text-text-secondary max-w-[560px] mx-auto">
              Every feature is designed to remove friction from the compensation
              process and get money back into your account faster.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={item}
                transition={{ duration: 0.4 }}
                className="group bg-surface border border-border rounded-xl p-6 hover:border-accent/20 transition-all duration-300 card-shadow flex flex-col gap-4"
              >
                <div className="rounded-lg overflow-hidden border border-border">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="section-padding bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div {...scrollFadeUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Simple. Seamless. Automatic.
            </h2>
            <p className="text-lg text-text-secondary max-w-[520px] mx-auto">
              Three steps stand between you and your compensation. We handle all
              three.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8 relative"
          >
            {/* Connecting dotted line — desktop only */}
            <div
              className="hidden md:block absolute top-12 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px border-t-2 border-dashed border-border z-0"
              style={{ top: "3rem" }}
            />

            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={item}
                transition={{ duration: 0.4 }}
                className="relative z-10 flex flex-col items-center text-center gap-4 bg-surface border border-border rounded-xl p-8 card-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-surface-alt border border-border flex items-center justify-center">
                  <span className="font-mono text-2xl font-bold text-accent">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stat callout */}
          <motion.div
            {...scrollFadeUp}
            className="mt-16 text-center border border-border rounded-xl p-8 bg-surface card-shadow"
          >
            <p className="font-mono text-text-muted text-sm uppercase tracking-widest mb-3">
              Average outcome
            </p>
            <p className="font-mono text-5xl font-bold text-accent">
              €440
            </p>
            <p className="text-text-secondary mt-2">
              average compensation per successful claim
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 6. SOCIAL PROOF ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div {...scrollFadeUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              Trusted by 50,000+ flyers.{" "}
              <span className="text-accent">£15M+ recovered.</span>
            </h2>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={item}
                transition={{ duration: 0.4 }}
                className="bg-surface border border-border rounded-xl p-6 card-shadow flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="size-4 fill-accent text-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-text-primary text-sm">
                    {t.name}
                  </div>
                  <div className="text-text-muted text-xs mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="font-mono text-3xl md:text-4xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. PRICING ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div {...scrollFadeUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Choose your path to recovery.
            </h2>
            <p className="text-lg text-text-secondary">
              Start free. Upgrade when you&apos;re ready.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto"
          >
            {/* Spotter */}
            <motion.div
              variants={item}
              transition={{ duration: 0.4 }}
              className="bg-surface border border-border rounded-2xl p-8 card-shadow flex flex-col"
            >
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-text-primary mb-1">
                  Spotter
                </h3>
                <div className="font-mono text-4xl font-bold text-text-primary">
                  Free
                </div>
                <p className="text-text-muted text-sm mt-1">
                  No credit card required
                </p>
              </div>
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {spotterFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-text-secondary">
                    <Check className="size-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <button className="w-full h-11 rounded-xl border border-border text-text-primary font-semibold hover:border-border-hover hover:bg-surface-hover transition-colors">
                  Get Started Free
                </button>
              </Link>
            </motion.div>

            {/* Guardian */}
            <motion.div
              variants={item}
              transition={{ duration: 0.4 }}
              className="relative bg-surface border-2 border-accent rounded-2xl p-8 card-shadow card-glow flex flex-col"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-text-primary mb-1">
                  Guardian
                </h3>
                <div className="flex items-end gap-2">
                  <span className="font-mono text-4xl font-bold text-text-primary">
                    €29
                  </span>
                  <span className="text-text-muted mb-1">/month</span>
                </div>
                <p className="text-text-muted text-sm mt-1">
                  Cancel anytime
                </p>
              </div>
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {guardianFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-text-secondary">
                    <Check className="size-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <button className="w-full h-11 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent-hover transition-colors">
                  Start Guardian
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Callout */}
          <motion.div
            {...scrollFadeUp}
            className="mt-10 max-w-[800px] mx-auto rounded-xl p-6 text-center border border-accent/20"
            style={{ background: "rgba(0,214,143,0.06)" }}
          >
            <p className="text-text-secondary">
              <span className="font-semibold text-accent">
                One €600 claim covers 20 months of Guardian
              </span>{" "}
              — and most Guardian members file at least 2–3 claims per year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="section-padding bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div {...scrollFadeUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            {...scrollFadeUp}
            className="max-w-[760px] mx-auto"
          >
            <Accordion>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-border py-1"
                >
                  <AccordionTrigger className="text-text-primary font-semibold text-base py-4 hover:no-underline hover:text-accent transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ────────────────────────────────────────────────────── */}
      <section
        className="relative section-padding overflow-hidden"
        style={{
          backgroundImage: "url('/images/cta-gradient-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-background/60 pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center gap-6 max-w-[680px] mx-auto"
          >
            <motion.h2
              variants={item}
              transition={{ duration: 0.4 }}
              className="font-display text-4xl md:text-6xl font-bold text-text-primary leading-tight"
            >
              Stop leaving money at the gate.
            </motion.h2>

            <motion.p
              variants={item}
              transition={{ duration: 0.4 }}
              className="text-xl text-text-secondary"
            >
              Join thousands of frequent flyers reclaiming what&apos;s theirs.
              Start your free audit today.
            </motion.p>

            <motion.div variants={item} transition={{ duration: 0.4 }}>
              <Link href="/signup">
                <button className="inline-flex items-center gap-2 h-14 px-8 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:bg-accent-hover transition-colors">
                  Sign Up Now
                  <ArrowRight className="size-5" />
                </button>
              </Link>
            </motion.div>

            <motion.p
              variants={item}
              transition={{ duration: 0.4 }}
              className="text-sm text-text-muted"
            >
              Free to start. No credit card. No win, no fee.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
