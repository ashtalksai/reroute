"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, XCircle, UserX, ArrowLeftRight, Check, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type DisruptionType = "delay" | "cancellation" | "denied-boarding" | "diversion" | null;
type DelayDuration = "<2h" | "2-3h" | "3-4h" | "4h+" | null;
type CancellationNotice = "<7d" | "7-14d" | "14d+" | null;

function calculateCompensation(
  disruption: DisruptionType,
  delay: DelayDuration,
  notice: CancellationNotice
): number {
  if (disruption === "denied-boarding") return 600;
  if (disruption === "diversion") return 400;
  if (disruption === "cancellation") {
    if (notice === "<7d" || notice === "7-14d") return 400;
    return 250;
  }
  if (disruption === "delay") {
    if (delay === "4h+") return 600;
    if (delay === "3-4h") return 400;
    return 250;
  }
  return 250;
}

const stepVariants = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

export default function CalculatorPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [flightNumber, setFlightNumber] = useState("");
  const [flightError, setFlightError] = useState("");
  const [disruption, setDisruption] = useState<DisruptionType>(null);
  const [delayDuration, setDelayDuration] = useState<DelayDuration>(null);
  const [cancellationNotice, setCancellationNotice] = useState<CancellationNotice>(null);
  const [compensation, setCompensation] = useState(0);

  const progressPercent = (currentStep / 5) * 100;

  useEffect(() => {
    if (currentStep === 4) {
      const amount = calculateCompensation(disruption, delayDuration, cancellationNotice);
      const timer = setTimeout(() => {
        setCompensation(amount);
        setCurrentStep(5);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, disruption, delayDuration, cancellationNotice]);

  function handleStep1Next() {
    if (!flightNumber.trim()) {
      setFlightError("Please enter a flight number");
      return;
    }
    setFlightError("");
    setCurrentStep(2);
  }

  function handleStep2Next() {
    if (!disruption) return;
    setCurrentStep(3);
  }

  function handleStep3Next() {
    if (disruption === "delay" && !delayDuration) return;
    if (disruption === "cancellation" && !cancellationNotice) return;
    setCurrentStep(4);
  }

  const disruptionOptions = [
    { value: "delay" as DisruptionType, label: "Delay", icon: Clock },
    { value: "cancellation" as DisruptionType, label: "Cancellation", icon: XCircle },
    { value: "denied-boarding" as DisruptionType, label: "Denied Boarding", icon: UserX },
    { value: "diversion" as DisruptionType, label: "Diversion", icon: ArrowLeftRight },
  ];

  const delayOptions: { value: DelayDuration; label: string }[] = [
    { value: "<2h", label: "Less than 2 hours" },
    { value: "2-3h", label: "2 – 3 hours" },
    { value: "3-4h", label: "3 – 4 hours" },
    { value: "4h+", label: "More than 4 hours" },
  ];

  const cancellationOptions: { value: CancellationNotice; label: string }[] = [
    { value: "<7d", label: "Less than 7 days before" },
    { value: "7-14d", label: "7 – 14 days before" },
    { value: "14d+", label: "More than 14 days before" },
  ];

  const eligibilityRules = [
    "Flight operated by EU airline or departed from EU airport",
    "Disruption was within airline control",
    "You arrived at check-in within required time",
    "Claim filed within 3 years of disruption",
  ];

  return (
    <div className="bg-background text-text-primary min-h-screen">
      <section className="pt-32 pb-24">
        <div className="max-w-[600px] mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <p className="font-mono text-sm text-accent mb-3 tracking-widest uppercase">
              Compensation Calculator
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2">
              How much are you owed?
            </h1>
            <p className="text-text-secondary text-sm">
              Answer a few questions to estimate your EU261 compensation.
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-text-muted">
                Step {currentStep} of 5
              </span>
              <span className="font-mono text-xs text-text-muted">
                {Math.round(progressPercent)}%
              </span>
            </div>
            <div className="h-1.5 bg-surface-hover rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: "20%" }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Card */}
          <div className="bg-surface border border-border rounded-xl p-8 card-shadow">
            <AnimatePresence mode="wait">
              {/* Step 1: Flight Number */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                >
                  <h2 className="font-display text-xl font-bold text-text-primary mb-6">
                    Enter your flight number
                  </h2>
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="flight-number" className="text-text-secondary text-sm">
                      Flight number
                    </Label>
                    <Input
                      id="flight-number"
                      placeholder="e.g. KL1234"
                      value={flightNumber}
                      onChange={(e) => {
                        setFlightNumber(e.target.value.toUpperCase());
                        if (flightError) setFlightError("");
                      }}
                      onKeyDown={(e) => e.key === "Enter" && handleStep1Next()}
                      className="font-mono bg-surface-hover border-border text-text-primary placeholder:text-text-muted focus:border-accent uppercase"
                    />
                    {flightError && (
                      <p className="text-destructive text-xs mt-1">{flightError}</p>
                    )}
                  </div>
                  <p className="text-text-muted text-xs mb-6">
                    Enter the IATA flight code (e.g. BA204, KL1234, EZY5678)
                  </p>
                  <Button
                    onClick={handleStep1Next}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent-hover font-semibold"
                  >
                    Next
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Disruption Type */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                >
                  <h2 className="font-display text-xl font-bold text-text-primary mb-2">
                    What happened?
                  </h2>
                  <p className="text-text-secondary text-sm mb-6">
                    Select the type of disruption for{" "}
                    <span className="font-mono text-accent">{flightNumber}</span>
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {disruptionOptions.map(({ value, label, icon: Icon }) => (
                      <button
                        key={value}
                        onClick={() => setDisruption(value)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          disruption === value
                            ? "border-accent bg-accent-muted"
                            : "border-border bg-surface-hover hover:border-border-hover"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 mb-2 ${
                            disruption === value ? "text-accent" : "text-text-muted"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            disruption === value ? "text-accent" : "text-text-secondary"
                          }`}
                        >
                          {label}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 border-border text-text-secondary hover:text-text-primary"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Back
                    </Button>
                    <Button
                      onClick={handleStep2Next}
                      disabled={!disruption}
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent-hover font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Next
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Details */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                >
                  {disruption === "delay" && (
                    <>
                      <h2 className="font-display text-xl font-bold text-text-primary mb-2">
                        How long was the delay?
                      </h2>
                      <p className="text-text-secondary text-sm mb-6">
                        This is your arrival delay at the final destination.
                      </p>
                      <div className="space-y-2 mb-6">
                        {delayOptions.map(({ value, label }) => (
                          <button
                            key={value}
                            onClick={() => setDelayDuration(value)}
                            className={`w-full p-3.5 rounded-lg border-2 text-left transition-all ${
                              delayDuration === value
                                ? "border-accent bg-accent-muted"
                                : "border-border bg-surface-hover hover:border-border-hover"
                            }`}
                          >
                            <span
                              className={`text-sm font-medium ${
                                delayDuration === value
                                  ? "text-accent"
                                  : "text-text-secondary"
                              }`}
                            >
                              {label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {disruption === "cancellation" && (
                    <>
                      <h2 className="font-display text-xl font-bold text-text-primary mb-2">
                        When were you notified?
                      </h2>
                      <p className="text-text-secondary text-sm mb-6">
                        How far in advance did the airline inform you of the cancellation?
                      </p>
                      <div className="space-y-2 mb-6">
                        {cancellationOptions.map(({ value, label }) => (
                          <button
                            key={value}
                            onClick={() => setCancellationNotice(value)}
                            className={`w-full p-3.5 rounded-lg border-2 text-left transition-all ${
                              cancellationNotice === value
                                ? "border-accent bg-accent-muted"
                                : "border-border bg-surface-hover hover:border-border-hover"
                            }`}
                          >
                            <span
                              className={`text-sm font-medium ${
                                cancellationNotice === value
                                  ? "text-accent"
                                  : "text-text-secondary"
                              }`}
                            >
                              {label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {(disruption === "denied-boarding" || disruption === "diversion") && (
                    <>
                      <h2 className="font-display text-xl font-bold text-text-primary mb-2">
                        {disruption === "denied-boarding"
                          ? "Denied boarding confirmed"
                          : "Flight diversion confirmed"}
                      </h2>
                      <p className="text-text-secondary text-sm mb-6">
                        {disruption === "denied-boarding"
                          ? "Passengers denied boarding involuntarily are entitled to compensation under EU261."
                          : "Passengers on diverted flights may be entitled to compensation depending on delay at final destination."}
                      </p>
                      <div className="p-4 rounded-lg bg-accent-muted border border-accent/20 mb-6">
                        <p className="text-accent text-sm font-medium">
                          Based on your disruption type, you are likely eligible for compensation.
                        </p>
                      </div>
                    </>
                  )}

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(2)}
                      className="flex-1 border-border text-text-secondary hover:text-text-primary"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Back
                    </Button>
                    <Button
                      onClick={handleStep3Next}
                      disabled={
                        (disruption === "delay" && !delayDuration) ||
                        (disruption === "cancellation" && !cancellationNotice)
                      }
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent-hover font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Calculate
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Calculating */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                  className="text-center py-8"
                >
                  <div className="flex justify-center mb-6">
                    <div className="relative w-16 h-16">
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-accent/20"
                        style={{ borderTopColor: "#00D68F" }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="absolute inset-2 rounded-full bg-accent-muted flex items-center justify-center">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>

                  <h2 className="font-display text-xl font-bold text-text-primary mb-2">
                    Analyzing your flight...
                  </h2>
                  <p className="text-text-secondary text-sm">
                    Checking EU261 eligibility rules
                  </p>

                  <div className="mt-6 space-y-2">
                    {["Verifying disruption type", "Checking airline liability", "Calculating entitlement"].map(
                      (step, i) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.4 }}
                          className="flex items-center gap-2 text-xs text-text-muted justify-center"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.4 + 0.2 }}
                            className="w-1.5 h-1.5 bg-accent rounded-full"
                          />
                          {step}
                        </motion.div>
                      )
                    )}
                  </div>
                </motion.div>
              )}

              {/* Step 5: Result */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-center mb-6">
                    <p className="text-text-secondary text-sm mb-2">
                      Estimated compensation for{" "}
                      <span className="font-mono text-accent">{flightNumber}</span>
                    </p>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <span className="font-mono text-6xl font-bold text-accent">
                        €{compensation}
                      </span>
                    </motion.div>
                    <p className="font-mono text-text-muted text-sm mt-2">
                      {flightNumber} · EU261 Regulation
                    </p>
                  </div>

                  <div className="bg-surface-alt rounded-lg p-4 mb-6 border border-border">
                    <p className="text-text-secondary text-xs font-medium mb-3 uppercase tracking-wide">
                      Eligibility rules matched
                    </p>
                    <ul className="space-y-2">
                      {eligibilityRules.map((rule) => (
                        <li key={rule} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                          <span className="text-text-secondary text-xs">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/signup" className="block mb-3">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-hover font-semibold text-base h-12">
                      File This Claim — Sign Up Free
                    </Button>
                  </Link>

                  <p className="text-center text-text-muted text-xs mb-4">
                    You keep 100% of your compensation
                  </p>

                  <button
                    onClick={() => {
                      setCurrentStep(1);
                      setFlightNumber("");
                      setDisruption(null);
                      setDelayDuration(null);
                      setCancellationNotice(null);
                      setCompensation(0);
                    }}
                    className="w-full text-center text-text-muted text-xs hover:text-text-secondary transition-colors"
                  >
                    Calculate another flight
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer note */}
          {currentStep < 4 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center text-text-muted text-xs mt-6"
            >
              Estimates are based on EU261/2004 regulation. Actual amounts may vary.
            </motion.p>
          )}
        </div>
      </section>
    </div>
  );
}
