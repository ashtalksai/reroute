"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const spotterFeatures = [
  "Automatic flight monitoring",
  "Claim eligibility check",
  "Access to basic claim tools",
  "Email notifications",
];

const guardianFeatures = [
  "Everything in Spotter",
  "Premium dedicated support",
  "Faster claim processing",
  "Legal team representation",
  "No success fee deducted",
  "Priority status",
  "Worldwide coverage",
  "Family plan included (up to 4)",
];

const successFeeFeatures = [
  "Everything in Spotter",
  "Pay 15% only on successful claims",
  "No hidden fees",
  "Dedicated support",
];

type FeatureValue = "check" | "x" | "minus";

const comparisonRows: { feature: string; spotter: FeatureValue; guardian: FeatureValue; successFee: FeatureValue }[] = [
  { feature: "Flight monitoring", spotter: "check", guardian: "check", successFee: "check" },
  { feature: "Claim eligibility check", spotter: "check", guardian: "check", successFee: "check" },
  { feature: "Basic claim tools", spotter: "check", guardian: "check", successFee: "check" },
  { feature: "Email notifications", spotter: "check", guardian: "check", successFee: "check" },
  { feature: "Priority support", spotter: "x", guardian: "check", successFee: "minus" },
  { feature: "Fast processing", spotter: "x", guardian: "check", successFee: "x" },
  { feature: "Legal representation", spotter: "x", guardian: "check", successFee: "x" },
  { feature: "No success fee", spotter: "x", guardian: "check", successFee: "x" },
  { feature: "Priority status", spotter: "x", guardian: "check", successFee: "x" },
  { feature: "Worldwide coverage", spotter: "minus", guardian: "check", successFee: "minus" },
  { feature: "Family plan (up to 4)", spotter: "x", guardian: "check", successFee: "x" },
  { feature: "Instant payouts", spotter: "x", guardian: "check", successFee: "x" },
];

const faqItems = [
  {
    question: "What happens if my claim is unsuccessful?",
    answer:
      "You pay nothing. For Success Fee users, our fee is only charged on successful claims — if we don't win, you owe us nothing. Guardian subscribers pay a flat monthly fee regardless of outcomes, but gain access to priority processing and legal representation that increases success rates.",
  },
  {
    question: "Can I switch plans?",
    answer:
      "Yes, upgrade or downgrade anytime from your account settings. If you upgrade mid-month, you'll be charged the pro-rated difference. Downgrades take effect at the end of your current billing period.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No long-term contracts. Guardian is a month-to-month subscription — cancel anytime without penalty. We believe our results speak for themselves.",
  },
];

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === "check") {
    return (
      <div className="flex justify-center">
        <Check className="w-4 h-4 text-accent" />
      </div>
    );
  }
  if (value === "x") {
    return (
      <div className="flex justify-center">
        <X className="w-4 h-4 text-text-muted" />
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <Minus className="w-4 h-4 text-text-muted" />
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="bg-background text-text-primary">
      {/* Hero */}
      <section className="pt-32 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-sm text-accent mb-4 tracking-widest uppercase">
              Pricing
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold italic text-text-primary mb-4">
              One delayed flight pays for a year
            </h1>
            <p className="text-text-secondary text-lg max-w-[540px] mx-auto">
              Automate your flight compensation claims with the plan that suits
              you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Spotter */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="bg-surface border border-border rounded-xl p-8 card-shadow flex flex-col"
            >
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-text-primary mb-1">
                  Spotter
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  For occasional travellers
                </p>
                <div className="flex items-end gap-1">
                  <span className="font-mono text-4xl font-bold text-text-primary">
                    Free
                  </span>
                </div>
                <p className="text-text-muted text-xs mt-1">forever</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {spotterFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/signup" className="block">
                <Button
                  variant="outline"
                  className="w-full border-border text-text-primary hover:border-border-hover hover:bg-surface-hover font-semibold"
                >
                  Start for Free
                </Button>
              </Link>
            </motion.div>

            {/* Guardian */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="bg-surface border-2 border-accent rounded-xl p-8 card-shadow flex flex-col relative"
              style={{ boxShadow: "0 0 24px rgba(0,214,143,0.15)" }}
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground text-xs font-semibold px-3 h-7">
                  Most Popular
                </Badge>
              </div>

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-text-primary mb-1">
                  Guardian
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  For frequent flyers
                </p>
                <div className="flex items-end gap-1">
                  <span className="font-mono text-sm text-text-muted mt-1 mb-1">€</span>
                  <span className="font-mono text-4xl font-bold text-text-primary">
                    29
                  </span>
                  <span className="text-text-muted text-sm mb-1">/mo</span>
                </div>
                <p className="text-text-muted text-xs mt-1">billed monthly</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {guardianFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/signup" className="block">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-hover font-semibold">
                  Upgrade to Guardian
                </Button>
              </Link>
            </motion.div>

            {/* Success Fee */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="bg-surface border border-border rounded-xl p-8 card-shadow flex flex-col"
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display text-xl font-bold text-text-primary">
                    Success Fee
                  </h3>
                </div>
                <p className="text-text-muted text-sm mb-3">
                  For occasional claims
                </p>
                <Badge
                  className="text-xs font-semibold px-2 h-6 mb-4"
                  style={{
                    backgroundColor: "rgba(255,176,32,0.12)",
                    color: "#FFB020",
                    border: "1px solid rgba(255,176,32,0.3)",
                  }}
                >
                  Pay only when you win
                </Badge>
                <div className="flex items-end gap-1">
                  <span className="font-mono text-4xl font-bold text-text-primary">
                    15%
                  </span>
                </div>
                <p className="text-text-muted text-xs mt-1">per successful claim</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {successFeeFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/signup" className="block">
                <Button
                  variant="outline"
                  className="w-full border-border text-text-primary hover:border-border-hover hover:bg-surface-hover font-semibold"
                >
                  Select Success Fee
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
              Full feature comparison
            </h2>

            <div className="bg-surface border border-border rounded-xl overflow-hidden card-shadow">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-text-primary font-display font-semibold py-4 px-6 w-1/2">
                      Feature
                    </TableHead>
                    <TableHead className="text-center text-text-primary font-display font-semibold py-4 px-4">
                      Spotter
                    </TableHead>
                    <TableHead className="text-center text-accent font-display font-semibold py-4 px-4">
                      Guardian
                    </TableHead>
                    <TableHead className="text-center text-text-primary font-display font-semibold py-4 px-4">
                      Success Fee
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonRows.map((row, i) => (
                    <TableRow
                      key={row.feature}
                      className={`border-border hover:bg-surface-hover transition-colors ${
                        i % 2 === 0 ? "" : "bg-surface-alt/50"
                      }`}
                    >
                      <TableCell className="text-text-secondary py-3 px-6 text-sm">
                        {row.feature}
                      </TableCell>
                      <TableCell className="py-3 px-4">
                        <FeatureCell value={row.spotter} />
                      </TableCell>
                      <TableCell className="py-3 px-4">
                        <FeatureCell value={row.guardian} />
                      </TableCell>
                      <TableCell className="py-3 px-4">
                        <FeatureCell value={row.successFee} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Callout */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="rounded-xl p-8 text-center border border-accent/20"
            style={{ backgroundColor: "rgba(0,214,143,0.06)" }}
          >
            <p className="font-mono text-sm text-accent mb-2 tracking-widest uppercase">
              Think about it
            </p>
            <p className="font-display text-xl md:text-2xl font-bold text-text-primary">
              One €600 claim covers 20 months of Guardian
            </p>
            <p className="text-text-secondary mt-2 text-sm">
              The average EU261 claim is €440 — that&apos;s over a year of
              Guardian for free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="section-padding">
        <div className="max-w-[680px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
              Pricing questions
            </h2>

            <Accordion>
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-text-primary py-4 hover:no-underline hover:text-accent text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
              Start with Spotter — it&apos;s free
            </h2>
            <p className="text-text-secondary mb-6">
              No credit card required. Upgrade when you&apos;re ready.
            </p>
            <Link href="/signup">
              <Button className="bg-accent text-accent-foreground hover:bg-accent-hover font-semibold px-8 py-3 text-base h-auto">
                Get started free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
