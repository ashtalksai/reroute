# Brand & Design Spec — Reroute

## Brand Identity

**Tagline:** Flight compensation on autopilot.
**Personality:** Confident, sharp, protective — like a seasoned travel assistant who's always three steps ahead. Premium but not pretentious. Think Flighty × Revolut × Linear.
**Tone:** Luxury/Refined meets Industrial/Utilitarian — premium travel dashboard with fintech-grade data clarity.
**Unforgettable Element:** Departure-board aesthetic — flip-board style transitions on status changes, giving the entire product a distinctly aviation feel that no competitor has.

---

## A. Brand Tokens

```css
:root {
  /* Backgrounds */
  --background: #0B0F1A;          /* Deep navy-black — primary bg */
  --surface: #141929;             /* Elevated card surface */
  --surface-hover: #1A2035;       /* Card hover state */
  --surface-alt: #0F1420;         /* Alternate section bg */
  --border: #1E2640;              /* Subtle borders */
  --border-hover: #2A3555;        /* Border hover */

  /* Text */
  --text-primary: #F0F2F5;        /* Primary text — off-white */
  --text-secondary: #8B95B0;      /* Secondary text — muted blue-gray */
  --text-muted: #505A75;          /* Muted text — timestamps, labels */

  /* Accent — Emerald Green (money, success, GO) */
  --accent: #00D68F;              /* Primary accent — emerald green */
  --accent-hover: #00F5A0;        /* Accent hover — brighter */
  --accent-foreground: #0B0F1A;   /* Text on accent bg */
  --accent-muted: rgba(0, 214, 143, 0.12); /* Accent tint for backgrounds */

  /* Secondary Accent — Amber (alerts, warnings) */
  --warning: #FFB020;             /* Delay/warning amber */
  --warning-muted: rgba(255, 176, 32, 0.12);

  /* Status */
  --destructive: #FF4757;         /* Cancelled, rejected, error */
  --destructive-muted: rgba(255, 71, 87, 0.12);
  --success: #00D68F;             /* Same as accent — on time, resolved */
  --info: #4C9AFF;                /* Informational blue */

  /* Compensation Amounts (unique to Reroute) */
  --comp-250: #4C9AFF;            /* €250 — blue */
  --comp-400: #FFB020;            /* €400 — amber */
  --comp-600: #00D68F;            /* €600 — green */
}
```

**Tailwind Config Extension:**
```js
colors: {
  background: '#0B0F1A',
  surface: { DEFAULT: '#141929', hover: '#1A2035', alt: '#0F1420' },
  border: { DEFAULT: '#1E2640', hover: '#2A3555' },
  text: { primary: '#F0F2F5', secondary: '#8B95B0', muted: '#505A75' },
  accent: { DEFAULT: '#00D68F', hover: '#00F5A0', foreground: '#0B0F1A', muted: 'rgba(0,214,143,0.12)' },
  warning: { DEFAULT: '#FFB020', muted: 'rgba(255,176,32,0.12)' },
  destructive: { DEFAULT: '#FF4757', muted: 'rgba(255,71,87,0.12)' },
  info: '#4C9AFF',
}
```

**Typography:**
```
--font-display: "Space Grotesk", system-ui, sans-serif     → headings, hero text, flight numbers
--font-body: "Plus Jakarta Sans", system-ui, sans-serif     → paragraphs, UI text
--font-mono: "JetBrains Mono", monospace                    → data, stats, flight codes, prices

Scale: 12 / 14 / 16 / 20 / 24 / 32 / 48 / 72px
```

**Spacing:**
```
Base unit: 4px
Section padding: 96px top/bottom (desktop), 56px (mobile)
Container max-width: 1200px
Content max-width: 680px (text blocks)
```

**Border Radius:**
```
Small: 8px (buttons, inputs, badges)
Medium: 12px (cards, panels)
Large: 16px (modals, hero cards)
Full: 9999px (pills, avatar)
```

**Shadows:**
```
Card: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(30, 38, 64, 0.5)
Dropdown: 0 8px 32px rgba(0, 0, 0, 0.5)
Modal: 0 24px 64px rgba(0, 0, 0, 0.6)
Glow (accent): 0 0 24px rgba(0, 214, 143, 0.2)
```

---

## B. Site Map

```
Pages:
├── / (Landing)
│   └── Sections: navbar, hero, problem, solution, features, how-it-works, social-proof, pricing, FAQ, CTA, footer
├── /about
│   └── Sections: hero, company story, mission, what makes us different, team, CTA
├── /pricing
│   └── Sections: pricing cards (Spotter free, Guardian €29/mo, Success fee 15%), feature comparison, FAQ mini
├── /calculator (Lead Magnet)
│   └── 5-step eligibility flow: flight number → disruption type → details → calculation → result + CTA
├── /signup (+ /login)
│   └── Split layout: form left, product showcase right
├── /dashboard
│   ├── Flight cards (tracked flights with status)
│   ├── Claim tracker (5-stage pipeline)
│   ├── Compensation summary (sidebar widget)
│   ├── Quick actions bar
│   └── Recent alerts feed
├── /claim/:id
│   └── Claim detail: flight info, disruption evidence, generated documents, status timeline
├── /contact
├── /privacy
├── /terms
├── /deck (Pitch presentation)
└── /docs (Document hub)
    ├── Sidebar nav (collapsible mobile)
    ├── Research
    ├── GTM
    ├── Marketing
    ├── Brand
    └── Pitch
```

---

## C. UI Mockups

Generated with nano-banana-pro. See `public/mockups/` for all files.

| Page | File | Resolution |
|------|------|------------|
| Landing | `public/mockups/landing-mockup.png` | 2K |
| Dashboard | `public/mockups/dashboard-mockup.png` | 4K |
| About | `public/mockups/about-mockup.png` | 2K |
| Pricing | `public/mockups/pricing-mockup.png` | 2K |
| Calculator | `public/mockups/calculator-mockup.png` | 2K |
| Auth (Signup) | `public/mockups/auth-mockup.png` | 2K |

---

## D. Page-by-Page Design Specs

### Navbar (ALL pages)
- **Layout:** Logo (left) + nav links (center: Home, Calculator, Pricing, About) + CTA button "Start Monitoring" (right, accent green)
- **Logo:** "Reroute" in Space Grotesk Bold with a subtle route-arrow icon (→ with a curve)
- **Mobile:** Hamburger menu (right), logo (left)
- **Behavior:** Sticky, transparent on hero → solid surface bg on scroll (backdrop-blur)
- **Active state:** Accent underline on current page link

### Landing Page (/)

| Section | Design Spec |
|---------|-------------|
| **Hero** | Full-height section, split layout: left = headline "Your flights break. We fix them." in Space Grotesk 72px, subline in Plus Jakarta 20px, two CTAs (primary "Start Monitoring — Free" green, secondary "Calculate Compensation" ghost/outline). Right = product dashboard screenshot showing 3 flight cards with one delayed showing "€400 eligible" with glowing green File Claim button. Subtle grid lines in bg. Departure-board style dots pattern. |
| **Problem** | Dark surface-alt bg. Headline "Airlines count on you not following up" 48px. Three pain point cards in a row — each with icon (clock, money-x, scissors), headline, and story paragraph. Cards have subtle border glow on hover. |
| **Solution** | Back to main bg. "A travel agent that works while you sleep" 48px. Body text explaining the flow. Right side: animated sequence mock — flight card → delayed → compensation → claim → sent ✓ (Framer Motion stagger). |
| **Features** | 3×2 bento grid. Each cell has emoji icon, title in Space Grotesk 24px, description in Plus Jakarta 16px. Cards have surface bg with border, accent tint on hover. Two larger cards (monitoring + EU261 engine), four standard. |
| **How It Works** | Three numbered step cards connected by dotted line. Numbers in accent green circles (64px). Each step: title + description + mini illustration. Below: "Average time from disruption to claim filed: 2 minutes" in mono font with accent color. |
| **Social Proof** | Three testimonial cards in a row, each with quote, name, role. Above: stats bar — "€2.4M+ identified · 4,200+ flights · €440 avg claim" in mono font, large numbers. |
| **Pricing** | Two pricing cards side by side (Spotter + Guardian) + smaller success fee option below. Guardian card highlighted with accent border + "Most Popular" badge. Feature lists with check/x icons. Below: "One €600 claim covers 20 months of Guardian" callout. |
| **FAQ** | Accordion style (shadcn Accordion). 7 questions. Surface-alt bg section. |
| **Final CTA** | Full-width section with gradient bg (subtle emerald). "Stop leaving money at the gate" 48px. Subline + CTA button + "No credit card required" small text. |
| **Footer** | Dark bg. 4 columns: Product (links), Legal (privacy, terms), Company (about, contact), Connect (social). Bottom: copyright + legal disclaimer about not being a law firm. |

**Animations:**
- Hero: Staggered reveal — headline slides up (delay 0), subline (delay 200ms), CTAs (delay 400ms), dashboard screenshot fades in from right (delay 600ms)
- Problem cards: Scroll-triggered fade-up, staggered 100ms each
- Features: Scroll-triggered, bento cells slide in from different directions
- How It Works: Steps appear sequentially on scroll, dotted line draws in
- Pricing: Cards scale up from 0.95 on scroll enter
- All transitions: 400ms ease-out, using Framer Motion `motion.div` with `whileInView`

**Responsive (mobile):**
- Hero: Stack vertically, headline 40px, dashboard screenshot below text
- Problem: Cards stack vertically
- Features: 1 column, full width
- How It Works: Vertical timeline instead of horizontal
- Pricing: Stack cards vertically, Guardian first
- FAQ: Full width
- Section padding: 56px top/bottom

### Dashboard (/dashboard)

- **Layout:** Sidebar (240px, collapsible) + main content area
- **Sidebar:** Logo top, nav items with icons: Dashboard, My Flights, Claims, Calculator, History, Settings. Active item: accent bg tint + accent text. Collapse to icon-only on small screens.
- **Top bar:** Search (flight number quick-add), notifications bell with badge, user avatar dropdown
- **Main content sections (top to bottom):**
  1. **Quick actions bar** — "Add Flight" primary button + "Check Eligibility" secondary + search input
  2. **Flight cards** — Horizontal scrollable row. Each card: airline logo placeholder, flight number (mono font), route (AMS → LHR), date, status badge (color-coded: green=On Time, amber=Delayed, red=Cancelled, blue=Diverted). Click expands to details.
  3. **Claim tracker** — Vertical list/table. Columns: Flight, Airline, Disruption, Amount (€250/400/600 color-coded), Status (5-stage pipeline with progress dots), Date, Action. Status stages: Eligible → Draft → Submitted → In Progress → Resolved.
  4. **Sidebar widget (right)** — Compensation summary: Total Recovered (large green number), Pending (amber), Eligible Unclaimed (blue). Mini bar chart.
  5. **Recent alerts** — Timeline feed. Each alert: timestamp, flight number, disruption type, eligible amount, action button ("File Claim" or "View Details").
- **Empty state:** Illustration of departure board. "No flights tracked yet. Add your first flight to start monitoring." + prominent flight number input.
- **Colors:** Full dark mode. Cards have surface bg. Status badges use status colors. Accent for interactive elements.
- **Responsive:** Sidebar collapses to bottom tab bar on mobile. Cards stack vertically. Summary widget moves to top on mobile.

### About (/about)

- **Hero:** "Born from 80 delayed flights and zero patience" — large editorial headline. Subtle departure board pattern bg.
- **Story section:** Two-column: text left (company origin story from enrichment doc), abstract travel illustration right.
- **Mission:** Centered block quote style. "Make flight compensation effortless and fair."
- **What makes us different:** Three cards — Proactive, Flat Fee, Built for Frequent Flyers. Each with icon and description.
- **Team:** "Built by ChimeStream — Rotterdam-based studio." Simple, clean.
- **CTA:** "Ready to stop leaving money behind?" + signup button.

### Pricing (/pricing)

- **Layout:** Three pricing cards with feature comparison
- **Spotter (Free):** Standard card, border only
- **Guardian (€29/mo):** Highlighted — accent border, subtle glow, "Most Popular" badge
- **Success Fee (15%):** Standard card with "Pay only when you win" badge
- **Feature comparison table below cards** with check/x marks
- **FAQ mini section:** 3-4 pricing-specific questions
- **Bottom CTA:** "Start with Spotter — it's free"

### Calculator (/calculator — Lead Magnet)

- **5-step flow (wizard pattern):**
  1. Flight number input (with autocomplete)
  2. Disruption type selector (delay/cancellation/denied boarding/diversion)
  3. Duration/details
  4. Calculating animation (departure board flip effect)
  5. Result: eligible amount (€250/400/600) with breakdown + CTA to sign up
- **Progress bar** at top (accent green, 5 steps)
- **Single card centered** in page, max-width 600px
- **Result screen:** Large compensation amount in accent green, breakdown of eligibility, "File This Claim" CTA → signup

### Auth Pages (/signup, /login)

- **Layout:** Split screen — left 50% form, right 50% product showcase
- **Form side:** Clean, centered. Logo top. "Create your account" heading. Fields: Full Name, Email, Password. "Continue with Google" social login button. Link to opposite auth page.
- **Showcase side:** Dark surface bg with grid pattern. Product screenshot showing a successful claim notification. Quote from a testimonial. Key stat "€440 average claim."
- **Mobile:** Full width form, showcase section hidden.

### Contact (/contact)

- **Simple layout:** Contact form (name, email, subject, message) + "hello@reroute.app" email + response time note
- **Sidebar:** FAQ quick links, support hours

### Privacy & Terms (/privacy, /terms)

- **Clean reading layout.** Max-width 680px centered. Table of contents sidebar. Standard legal content formatting.

### /docs (Document Hub)

- **Layout:** Fixed sidebar (left, 260px) + scrollable content (right)
- **Sidebar sections:** Research, GTM, Marketing, Brand, Pitch — each a nav item
- **Content area:** Section title + summary cards linking to Google Docs
- **Mobile:** Hamburger drawer for sidebar, full-width content
- **Consistent with brand tokens** — dark bg, surface cards, accent links

### /deck (Pitch Deck)

- **Full-screen slide navigation** (built per pitch-deck skill)
- **Framer Motion transitions** between slides
- **Content from marketer** (populated later in pipeline)

---

## E. Component Specs

| Component | Base | Custom Styling |
|-----------|------|----------------|
| **Button (primary)** | shadcn Button | bg: accent, text: accent-foreground, hover: accent-hover, rounded-lg, font-semibold, px-6 py-3 |
| **Button (secondary)** | shadcn Button variant="outline" | border: border color, text: text-secondary, hover: surface-hover bg |
| **Button (ghost)** | shadcn Button variant="ghost" | text: text-secondary, hover: surface bg |
| **Card** | shadcn Card | bg: surface, border: border, rounded-xl, shadow: Card shadow, hover: surface-hover + border-hover |
| **Input** | shadcn Input | bg: surface, border: border, focus: accent ring (2px), text: text-primary, placeholder: text-muted |
| **Badge (status)** | shadcn Badge | Variants: on-time (success bg-muted + text), delayed (warning), cancelled (destructive), diverted (info) |
| **Accordion** | shadcn Accordion | border-b: border, text: text-primary, trigger hover: text-secondary |
| **Dialog/Modal** | shadcn Dialog | bg: surface, border: border, shadow: Modal shadow, overlay: bg-black/60 backdrop-blur |
| **Table** | shadcn Table | Header: text-muted, rows: hover surface-hover, border-b: border |
| **Tabs** | shadcn Tabs | Active: accent underline + text-primary, inactive: text-muted |
| **Progress** | shadcn Progress | Track: surface, fill: accent, rounded-full |
| **Navigation** | Custom | Desktop: horizontal links, mobile: Sheet drawer |
| **Flight Card** | Custom component | Surface bg, airline logo left, flight info center, status badge right. Hover: scale 1.02 + glow shadow. Departure-board mono font for flight number. |
| **Claim Pipeline** | Custom component | 5 dots connected by line. Active dot: accent filled. Past: accent outline. Future: border color. Labels below each dot. |
| **Stat Card** | Custom component | Large number (mono font, accent color), label below (text-muted), subtle accent-muted bg tint. |

**Animation patterns (Framer Motion):**
```js
// Page entrance
const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } }

// Stagger children
const stagger = { animate: { transition: { staggerChildren: 0.1 } } }

// Scroll-triggered
<motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true, margin: "-100px" }} />

// Status badge flip (departure board effect)
const flipBoard = { initial: { rotateX: -90 }, animate: { rotateX: 0 }, transition: { type: "spring", stiffness: 200 } }
```

---

## F. Website Images

Generated with nano-banana-pro. Saved to `~/Dev/reroute/public/images/`.

| Image | File | Purpose |
|-------|------|---------|
| Placeholder logo | `logo-placeholder.png` | Navbar/footer — "Reroute" text logo with route arrow |
| Hero dashboard | `hero-dashboard.png` | Landing hero — product screenshot showing flight cards + claim |
| Feature: monitoring | `feature-monitoring.png` | Real-time monitoring feature icon |
| Feature: EU261 | `feature-eu261.png` | Compensation engine feature icon |
| Feature: claims | `feature-claims.png` | One-tap claim filing feature icon |
| Feature: dashboard | `feature-dashboard.png` | Compensation dashboard feature icon |
| Feature: alerts | `feature-alerts.png` | Proactive alerts feature icon |
| Feature: history | `feature-history.png` | Travel history analysis feature icon |
| About illustration | `about-illustration.png` | Abstract travel/aviation visual |
| BG pattern | `bg-grid-pattern.svg` | Subtle grid dot pattern for hero bg |
| CTA background | `cta-gradient-bg.png` | Gradient background for CTA sections |

---

## G. Artist Brief

```
ARTIST BRIEF — Reroute

Brand tokens: [Google Doc link — see Brand subfolder]

Logo:
- Concept: Route path that curves/redirects — representing "rerouting"
  flights but also money flowing back to the traveler
- Style: Icon + wordmark. Icon is an abstract arrow/path that curves
  or redirects. Wordmark "Reroute" in Space Grotesk Bold.
- Color: Accent green (#00D68F) for icon, white (#F0F2F5) for wordmark
  on dark. Reversed version: dark icon + wordmark on light.
- Constraints: Must work at 32px (favicon — icon only) and 200px
  (full wordmark). Icon should be recognizable standalone.
- Mood: Premium, confident, travel-adjacent but not cliché (no planes,
  no globes, no clouds)

Social Media Kit:
- LinkedIn banner (1584×396): Dark bg (#0B0F1A) with subtle grid pattern.
  Left: "Reroute" logo. Center: "Flight compensation on autopilot."
  Right: dashboard screenshot snippet showing a €600 claim.
  Accent green highlights.

- Twitter/X header (1500×500): Same dark theme. "Your flights break.
  We fix them." headline left-aligned. Product screenshot right side.
  Clean, premium, fintech feel.

- OG image (1200×630): Dark bg. "Reroute — Flight compensation on autopilot."
  centered. Below: mini dashboard screenshot. Badge: "Keep 100% of
  your compensation." Green accent elements.

- Favicon (32×32 + 16×16): Icon only — the redirect/reroute arrow mark
  in accent green on transparent bg.
```

---

## H. /docs Hub Page Design

```
Layout:
├── Sidebar (left, 260px, fixed on desktop)
│   ├── Logo + "Documentation" label
│   ├── ─────────────────
│   ├── 📊 Research (link)
│   ├── 🚀 GTM (link)
│   ├── 📣 Marketing (link)
│   ├── 🎨 Brand (link)
│   └── 📈 Pitch (link)
└── Content area (right, scrollable)
    └── Selected section → cards linking to Google Docs

Styling:
- Sidebar: surface bg, border-right
- Active nav item: accent-muted bg + accent text + accent left border (3px)
- Content cards: surface bg, border, hover: surface-hover
- Each card: document title, type badge, last updated, "Open in Google Docs" link
- Mobile: sidebar becomes hamburger drawer (Sheet component)
- Typography: Space Grotesk for section titles, Plus Jakarta for descriptions
```
