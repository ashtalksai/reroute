"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div className="bg-background text-text-primary">
      <section className="pt-32 pb-24">
        <div className="max-w-[680px] mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <p className="font-mono text-sm text-accent mb-3 tracking-widest uppercase">
              Contact
            </p>
            <h1 className="font-display text-4xl font-bold text-text-primary mb-3">
              Get in touch
            </h1>
            <p className="text-text-secondary text-base leading-relaxed">
              Have a question or need help? We&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-6 mb-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent-muted flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-text-muted text-xs mb-0.5">Email us at</p>
                <a
                  href="mailto:hello@reroute.app"
                  className="font-mono text-accent hover:text-accent-hover transition-colors text-sm"
                >
                  hello@reroute.app
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-surface-hover flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-text-muted" />
              </div>
              <div>
                <p className="text-text-muted text-xs mb-0.5">Response time</p>
                <p className="text-text-secondary text-sm">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-surface border border-border rounded-xl p-8 card-shadow"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-8"
              >
                <div className="w-14 h-14 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                  Message sent
                </h3>
                <p className="text-text-secondary text-sm mb-6">
                  Thanks for reaching out. We&apos;ll get back to you at{" "}
                  <span className="text-text-primary">{form.email || "your email"}</span>{" "}
                  within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="border-border text-text-secondary hover:text-text-primary"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-text-secondary text-sm"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="bg-surface-hover border-border text-text-primary placeholder:text-text-muted focus:border-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-text-secondary text-sm"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="bg-surface-hover border-border text-text-primary placeholder:text-text-muted focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="subject"
                    className="text-text-secondary text-sm"
                  >
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="bg-surface-hover border-border text-text-primary placeholder:text-text-muted focus:border-accent"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="text-text-secondary text-sm"
                  >
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-border bg-surface-hover px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading || !form.name || !form.email || !form.subject || !form.message}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent-hover font-semibold h-11 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-text-muted text-xs mt-6"
          >
            For urgent claim support, email us directly at{" "}
            <a
              href="mailto:hello@reroute.app"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              hello@reroute.app
            </a>
          </motion.p>
        </div>
      </section>
    </div>
  );
}
