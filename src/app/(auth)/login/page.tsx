"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function DecorativePanel() {
  return (
    <div className="hidden md:flex md:w-1/2 relative flex-col items-center justify-center bg-surface overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/images/bg-grid-pattern.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-alt via-surface to-[#0B1628] opacity-60" />

      {/* Subtle accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #00D68F 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-12 max-w-sm w-full">
        {/* Mock claim card */}
        <div
          className="w-full rounded-2xl border border-border p-5"
          style={{
            background: "#0F1420",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(30,38,64,0.5)",
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-text-muted font-mono mb-1">
                Claim Update
              </p>
              <p className="text-text-primary font-sans text-sm leading-snug">
                Your{" "}
                <span className="font-mono text-accent">KL1234</span> claim
                was approved
              </p>
            </div>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium font-sans"
              style={{
                background: "rgba(0,214,143,0.12)",
                color: "#00D68F",
                border: "1px solid rgba(0,214,143,0.25)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              Deposited
            </span>
          </div>

          <div className="flex items-baseline gap-1.5 mb-3">
            <span
              className="text-4xl font-mono font-semibold"
              style={{ color: "#00D68F" }}
            >
              €400
            </span>
            <span className="text-text-muted text-sm font-sans">deposited</span>
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-border">
            <div className="w-6 h-6 rounded-full bg-surface-hover flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#8B95B0" strokeWidth="2" strokeLinejoin="round" />
                <path d="M2 17l10 5 10-5" stroke="#8B95B0" strokeWidth="2" strokeLinejoin="round" />
                <path d="M2 12l10 5 10-5" stroke="#8B95B0" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xs text-text-secondary font-sans">
              AMS → LHR · Dec 15, 2025
            </span>
          </div>
        </div>

        {/* Stat */}
        <div className="text-center">
          <p
            className="text-5xl font-mono font-bold tracking-tight"
            style={{ color: "#00D68F" }}
          >
            €440
          </p>
          <p className="text-text-secondary text-sm font-sans mt-1">
            average successful claim
          </p>
        </div>

        {/* Testimonial */}
        <div
          className="w-full rounded-xl border border-border p-4"
          style={{ background: "rgba(20,25,41,0.8)" }}
        >
          <div className="flex gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#00D68F">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-text-secondary text-sm font-sans leading-relaxed mb-3 italic">
            &ldquo;Reroute made the compensation process incredibly easy. I
            recovered €400 without filling out a single form.&rdquo;
          </p>
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold font-display"
              style={{ background: "rgba(0,214,143,0.15)", color: "#00D68F" }}
            >
              SK
            </div>
            <div>
              <p className="text-text-primary text-xs font-medium font-sans">
                Sarah K.
              </p>
              <p className="text-text-muted text-xs font-sans">
                Verified User
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (!email.trim()) {
      setError("Email address is required.")
      return
    }
    if (!password) {
      setError("Password is required.")
      return
    }

    setLoading(true)
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/dashboard",
    })

    if (result?.error) {
      setError("Invalid email or password. Please try again.")
      setLoading(false)
    } else if (result?.url) {
      window.location.href = result.url
    }
  }

  async function handleGoogleSignIn() {
    await signIn("google", { callbackUrl: "/dashboard" })
  }

  return (
    <div className="flex min-h-screen">
      {/* Left — form panel */}
      <div className="w-full md:w-1/2 flex flex-col min-h-screen bg-background px-8 py-10 md:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 mb-12 self-start group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden">
            <Image
              src="/images/logo-placeholder.png"
              alt="Reroute"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-lg font-semibold font-display text-text-primary group-hover:text-accent transition-colors">
            Reroute
          </span>
        </Link>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-semibold text-text-primary leading-tight mb-2">
            Welcome back
          </h1>
          <p className="text-text-secondary font-sans text-sm">
            Sign in to track your claims and check new eligibility.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 w-full max-w-md">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-text-secondary text-xs uppercase tracking-wider font-sans">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              disabled={loading}
              className="h-11 bg-surface border-border text-text-primary placeholder:text-text-muted rounded-xl focus-visible:border-accent focus-visible:ring-accent/20 text-sm"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-text-secondary text-xs uppercase tracking-wider font-sans">
                Password
              </Label>
              <Link
                href="/forgot-password"
                className="text-xs text-text-muted hover:text-accent transition-colors font-sans"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              disabled={loading}
              className="h-11 bg-surface border-border text-text-primary placeholder:text-text-muted rounded-xl focus-visible:border-accent focus-visible:ring-accent/20 text-sm"
            />
          </div>

          {/* Error state */}
          {error && (
            <div
              className="rounded-xl px-4 py-3 text-sm font-sans"
              style={{
                background: "rgba(255,71,87,0.08)",
                border: "1px solid rgba(255,71,87,0.25)",
                color: "#FF4757",
              }}
            >
              {error}
            </div>
          )}

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="h-11 w-full rounded-xl text-sm font-semibold font-sans"
            style={{
              background: loading ? "rgba(0,214,143,0.5)" : "#00D68F",
              color: "#0B0F1A",
              border: "none",
            }}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5 w-full max-w-md">
          <div className="flex-1 h-px bg-border" />
          <span className="text-text-muted text-xs font-sans">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Google OAuth */}
        <div className="w-full max-w-md">
          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="h-11 w-full rounded-xl text-sm font-medium font-sans border-border text-text-secondary hover:text-text-primary hover:border-border-hover gap-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </Button>
        </div>

        {/* Sign up link */}
        <p className="mt-6 text-sm font-sans text-text-muted max-w-md">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-accent hover:text-accent-hover font-medium transition-colors"
          >
            Sign up free
          </Link>
        </p>

        {/* Legal note */}
        <p className="mt-auto pt-10 text-xs text-text-muted font-sans max-w-md leading-relaxed">
          By signing in you agree to our{" "}
          <Link href="/terms" className="underline hover:text-text-secondary transition-colors">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-text-secondary transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      {/* Right — decorative panel */}
      <DecorativePanel />
    </div>
  )
}
