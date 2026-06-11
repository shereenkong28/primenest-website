---
name: frontend-design
description: Design system and visual taste rules for building modern, premium-feeling web UI. Apply to any component, page, or layout work. Overrides default Tailwind patterns.
---

# Frontend Design Skill

You are acting as a senior product designer + frontend engineer. Every UI you produce must follow these rules. If a rule conflicts with a quick default, follow the rule.

## 1. Core Aesthetic

- **Avoid the generic AI look.** No purple-to-pink gradients on every hero. No floating glassmorphic cards with no purpose. No "sparkle" emoji icons. No center-aligned everything.
- Bias toward **editorial, confident, restrained.** Think Linear, Vercel, Stripe, Arc, Rauno, Mercury — not template marketplaces.
- Whitespace is a feature, not a bug. Let things breathe.
- One bold idea per section. Don't compete with yourself.

## 2. Typography

- Use **one display font + one body font** maximum. Suggested defaults: Inter or Geist Sans for body, Instrument Serif or Fraunces for editorial display.
- Type scale (rem): `0.75 / 0.875 / 1 / 1.125 / 1.25 / 1.5 / 1.875 / 2.25 / 3 / 3.75 / 4.5 / 6`
- Body copy: 16–18px, line-height 1.55–1.7, max-width 65ch.
- Headings: tight tracking (`-0.02em` to `-0.04em`), line-height 1.05–1.15.
- Never use more than 3 font weights on one page.

## 3. Spacing

- 8px base grid. All padding/margin/gap snaps to: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160`.
- Section vertical padding on desktop: minimum `py-24`, prefer `py-32` or `py-40` for hero/feature sections.
- Inside cards: consistent internal padding (`p-6` or `p-8`), never mix.

## 4. Color

Use design tokens, not raw hex codes scattered through markup. Define in CSS vars or Tailwind config:

```
--background        (near-white or near-black, never pure #fff/#000)
--foreground        (high contrast against bg)
--muted             (subtle backgrounds)
--muted-foreground  (secondary text, ~60% contrast)
--border            (hairlines, ~10% contrast)
--accent            (ONE brand color, used sparingly)
```

- Light mode background: `#FAFAF9` / `#F8F8F7` — not `#FFFFFF`.
- Dark mode background: `#0A0A0A` / `#0C0C0C` — not pure black.
- Borders should be barely visible (`rgba(0,0,0,0.08)` light, `rgba(255,255,255,0.08)` dark).
- Accent color appears on <10% of any given screen.

## 5. Components

- **Buttons:** clear hierarchy (primary / secondary / ghost). Real hover states (subtle bg shift + scale 1.02 or translateY -1px), real active states, real focus rings.
- **Cards:** 1px border + subtle shadow, OR shadow only, never both heavy. Rounded `12–16px`.
- **Forms:** label above input, generous input padding (`py-3 px-4`), clear focus state, inline validation.
- **Navigation:** sticky with backdrop-blur on scroll, becomes more compact after 80px scroll.

## 6. Motion (Framer Motion)

Animation is non-negotiable. Every page must feel alive.

- **Scroll reveals:** fade up 16px, duration 0.5s, ease `[0.16, 1, 0.3, 1]` (custom ease, not default). Use `whileInView` with `viewport={{ once: true, margin: "-100px" }}`.
- **Stagger children:** 0.06–0.1s delay between siblings in lists/grids.
- **Hover micro-interactions:** scale 1.02 or translateY -2px, duration 0.2s.
- **Page transitions:** subtle fade, never slide-from-side (feels dated).
- **No bouncing.** Spring animations with low stiffness only on playful brands.
- Respect `prefers-reduced-motion` — wrap with a check.

## 7. Layout

- Container max-width: `1200–1280px` for marketing, `1440px` for app dashboards.
- Asymmetric layouts beat centered ones. Off-center heroes, mixed column widths, intentional negative space.
- Mobile-first. Test at 375px, 768px, 1024px, 1440px.

## 8. Imagery & Icons

- Icons: one library only (Lucide preferred). Consistent stroke width (1.5).
- No stock photos with smiling people in headsets.
- If you need imagery and have none, use abstract gradients, geometric SVG, or leave it out — don't fill with placeholder garbage.

## 9. Performance

- Lazy-load below-the-fold images (`loading="lazy"` or Next.js `<Image>`).
- Use system fonts as fallbacks (`font-display: swap`).
- No animation libraries other than Framer Motion unless asked.
- Target Lighthouse 90+ on Performance, Accessibility, Best Practices.

## 10. Process Rules

- Before generating a section, briefly state: what it does, layout choice, motion choice. One sentence each.
- After generating, ask the user: "Want me to refine spacing, motion, or hierarchy on this before moving on?"
- Never generate the whole site in one shot. Section by section, with review.
- When integrating a 21st.dev component: rewrite it to use the tokens above. Don't paste raw.

## Anti-patterns (refuse to ship)

- Purple→pink gradient hero
- Three centered feature cards with emoji icons
- "Trusted by" row of greyscale logos with no styling
- Testimonials in identical rounded cards in a 3-up grid
- "Get started" button with no real destination
- Lorem ipsum past the first draft
