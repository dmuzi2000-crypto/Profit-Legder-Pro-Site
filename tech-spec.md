# Tech Spec — Profit Ledger Pro Website

## Component Inventory

### Layout
| Component | Source | Reuse |
|-----------|--------|-------|
| Navbar | Custom | Once, fixed position |
| Footer | Custom | Once |

### Sections
| Component | Source | Reuse |
|-----------|--------|-------|
| HeroSection | Custom | Once |
| FeatureStrip | Custom | Once |
| FeaturesDeepDive | Custom | Once (renders 5 feature rows) |
| AIAgentSection | Custom | Once |
| PricingSection | Custom | Once |
| RoadmapSection | Custom | Once |

### Reusable Components
| Component | Source | Used By |
|-----------|--------|---------|
| ScrollReveal | Custom wrapper | All sections |
| SectionEyebrow | Custom | Features, AI, Pricing, Roadmap |
| PricingCard | Custom | PricingSection x3 |
| AgentVersionCard | Custom | AIAgentSection x3 |
| TerminalTypewriter | Custom | HeroSection |
| OrbitalFeatureRing | Custom | FeaturesDeepDive |
| SVGTextDraw | Custom | Decorative (Features, AI, Pricing, Roadmap) |

## Animation Implementation Table

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Typewriter Terminal Effect | Vanilla JS + CSS | Class-based typewriter with setInterval, CSS keyframes for cursor blink, pulse, fadeIn | 🔒 High |
| Orbital Feature Ring | CSS @keyframes + JS init | JS positions items in 3D circle, CSS rotates ring container 30s infinite | Medium |
| SVG Text Draw | CSS @keyframes + IntersectionObserver | stroke-dasharray/dashoffset animation triggered by observer | Medium |
| Scroll-triggered fade-in | GSAP ScrollTrigger | Batch setup on elements with data-scroll attribute | Low |
| Navbar scroll transition | CSS transition + scroll listener | Toggle class at 100px scroll threshold | Low |
| Card hover effects | CSS transition | translateY + border-color transitions | Low |
| Button hover effects | CSS transition | scale + background-color transitions | Low |
| Smooth scroll | Lenis | Global instance with lerp: 0.1 | Low |

## Animation Library Choices

**GSAP + ScrollTrigger**: Chosen for scroll-triggered entrance animations. More precise timing control than AOS, handles batched reveals cleanly. Only needed plugin: ScrollTrigger.

**Lenis**: Smooth scroll with `lerp: 0.1` for the refined scroll feel. Integrated with GSAP ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`.

**Vanilla JS**: Typewriter terminal uses setInterval for character-by-character typing with precise timing control. No animation library needed.

**CSS @keyframes**: Cursor blink, processing pulse, result fade-in, ring orbit, SVG stroke draw. All self-contained, no JS animation needed.

## State & Logic Plan

### Typewriter Terminal
- Class-based component with internal state: `currentPhrase`, `isRunning`, `typeInterval`
- Auto-starts after 1.5s on mount, loops through phrases array indefinitely
- Click handler restarts animation if idle
- Cleanup on unmount: clearInterval

### Scroll-Triggered Reveals
- GSAP ScrollTrigger with `start: "top 85%"`, `toggleActions: "play none none none"`
- Batch pattern: query all `[data-scroll]` elements, apply staggered animations
- Elements animate from `opacity: 0, y: 30` to `opacity: 1, y: 0`

### Navbar Scroll Behavior
- Scroll listener (throttled) toggles `.scrolled` class at 100px threshold
- CSS handles background, backdrop-filter, and shadow transitions

### Orbital Ring Visibility
- IntersectionObserver toggles `animation-play-state` (running/paused) based on viewport visibility
- Prevents unnecessary GPU compositing when off-screen

## Other Key Decisions

**No shadcn/ui components needed**: This is a marketing landing page with no forms, dialogs, or complex UI patterns. All components are custom-built with Tailwind.

**Single page with anchor navigation**: Features, Pricing, Roadmap are scroll-to sections, not separate routes. Lenis smooth scroll handles anchor link behavior.

**Font loading**: DM Serif Display (400), Inter (400,500,600,700), JetBrains Mono (400) via Google Fonts link in index.html.

**No image assets**: Feature screenshots will be CSS-styled mockups built as HTML components. This keeps the site lightweight and avoids placeholder image dependencies.

**Vite + React 19 + TypeScript**: Standard webapp-building stack. No additional build configuration needed.
