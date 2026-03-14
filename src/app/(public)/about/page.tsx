"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Wallet, Plane, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const differentiators = [
  {
    icon: Shield,
    title: "Proactive Not Reactive",
    description: "We catch disruptions before you even know about them.",
  },
  {
    icon: Wallet,
    title: "Flat Fee Not Commission",
    description:
      "Guardian members pay a fixed monthly fee, not a percentage of their claim.",
  },
  {
    icon: Plane,
    title: "Built for Frequent Flyers",
    description:
      "Designed for people who fly regularly and want automated protection.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-text-primary">
      {/* Hero */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg-grid-pattern.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-sm text-accent mb-4 tracking-widest uppercase">
              Our Story
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight max-w-[720px]">
              Born from 80 delayed flights and zero patience
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-6">
                We built the tool we wished existed
              </h2>
              <p className="text-text-secondary leading-relaxed text-base">
                Reroute wasn&apos;t started in a boardroom. It began in airport
                lounges, endless queues, and the frustration of being ignored by
                airlines. After 80 delayed flights and hours spent filling out
                forms that led nowhere, we decided enough was enough.
              </p>
              <p className="text-text-secondary leading-relaxed text-base mt-4">
                We built the tool we wished existed — one that watches your
                flights, catches disruptions in real-time, and files your claims
                automatically. No more chasing. No more paperwork. No more being
                left behind.
              </p>
              <p className="text-text-secondary leading-relaxed text-base mt-4">
                Every frequent flyer deserves compensation when airlines fail
                them. We&apos;re here to make sure that actually happens.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden border border-border">
                <Image
                  src="/images/about-illustration.png"
                  alt="Reroute team building the product"
                  width={600}
                  height={420}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="max-w-[680px] mx-auto text-center"
          >
            <p className="font-mono text-sm text-text-muted mb-4 tracking-widest uppercase">
              Our Mission
            </p>
            <blockquote className="font-display text-2xl md:text-3xl italic text-accent leading-relaxed">
              &ldquo;Make flight compensation effortless and fair.&rdquo;
            </blockquote>
            <p className="text-text-secondary mt-6 leading-relaxed">
              Airlines benefit from complexity. We&apos;re here to strip it away — so
              every passenger gets what they&apos;re owed under EU261 and beyond,
              without lifting a finger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
              What makes us different
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="bg-surface border border-border rounded-xl p-8 card-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent-muted flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className="pb-16"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-text-secondary">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="font-sans text-sm">
              Built by{" "}
              <span className="text-text-primary font-semibold">ChimeStream</span>{" "}
              — Rotterdam
            </span>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="bg-surface-alt rounded-2xl p-12 text-center border border-border"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to stop leaving money behind?
            </h2>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              Join thousands of frequent flyers reclaiming what&apos;s theirs.
              Your first audit is completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button className="bg-accent text-accent-foreground hover:bg-accent-hover font-semibold px-8 py-3 text-base h-auto">
                  Check your compensation
                </Button>
              </Link>
              <Link href="/calculator">
                <Button
                  variant="outline"
                  className="border-border text-text-secondary hover:text-text-primary hover:border-border-hover font-semibold px-8 py-3 text-base h-auto"
                >
                  Try the calculator
                </Button>
              </Link>
            </div>
            <p className="text-text-muted text-sm mt-6 flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              No credit card required
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
