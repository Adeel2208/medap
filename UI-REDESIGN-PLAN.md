# MEDAP UI Redesign Plan

Inspired by Total Technologies' structure and calmness — **not a copy**. Keep MEDAP's identity: teal `#2db8c7` + navy `#003867`, "Caring for Life", since 1990.

---

## 1. Design Principles (what changes and why)

| Current problem | New principle |
|---|---|
| Fake 2s loading screen, animated blobs, shine sweeps, gradient text, pulse effects everywhere | **Calm confidence.** One subtle fade-up per section, nothing loops infinitely. Trust is communicated by content, not motion. |
| Stock Unsplash carousel hero | **Real & specific.** One strong hero image (your products/installations), concrete headline, real numbers. |
| Floating pill navbar (`hidden md:block` — broken on mobile), oddly positioned | **Conventional, sticky header.** Logo left, links center, phone + CTA right. Predictable beats clever. |
| Buttons/cards each styled ad-hoc with inline hex codes | **Design system.** Shared `Button`, `Card`, `SectionHeader`, `CTABand` components using Tailwind theme tokens (`primary`, `navy`) instead of `#2db8c7` literals. |
| Flat product pages, no drill-down feel | **Catalog IA.** Home → Products index → Category page (consistent template) → product cards with counts. |

Color scheme stays exactly as-is. Typography stays Inter/Poppins but with a calmer scale (max `text-5xl/6xl` hero, not `8xl font-black`).

---

## 2. Global Shell (Phase 1)

### 2.1 Header (`Navigation.tsx` + `TopBar.tsx` → merge/redesign)
- Slim top bar: phone, email, hours, socials (navy background) — hides on scroll.
- Main header: white, sticky, subtle shadow on scroll.
  - Logo (MEDAP Logo.png) left.
  - Links: Home, About, Products (dropdown listing the 8 categories with icons), Certifications, Contact.
  - Right: phone number + solid teal "Get a Quote" button (one style, no gradient/shine).
- **Fix mobile:** working hamburger drawer at all breakpoints (currently nav is desktop-only).

### 2.2 Footer (`Footer.tsx`)
- 4 columns: brand + tagline / Company links / Product categories / Contact info.
- Trust strip above copyright: ISO Certified · DRAP Registered · Since 1990.

### 2.3 Shared components (new `src/components/ui/`)
- `Button` (primary teal, outline navy, ghost) — used everywhere.
- `SectionHeader` (eyebrow label, title, subtitle — consistent rhythm like Total's).
- `CTABand` — "Ready to equip your facility?" with quote button + phone. Reused on every page above the footer (their strongest recurring pattern).
- `StatItem`, `Card` primitives.
- Delete `LoadingScreen`; keep `ScrollProgress` optional (recommend removing).

### 2.4 Motion policy
- One `FadeIn` wrapper component (fade + 16px rise, once, `viewport margin -60px`).
- Remove: infinite background blobs, pulse-glow, shine sweep, animated gradient text, hover `scale: 1.05` on buttons (use color/shadow shift instead).

---

## 3. Homepage Sequence (Phase 2)

New order, mirroring what works on totalgroup.com.pk but with MEDAP content:

1. **Hero** — static (no carousel). Split layout: left = headline "Advancing Pakistan's healthcare with complete medical solutions"-style message (write your own), subtext, 2 CTAs (Explore Products / Talk to Our Team), 3 trust badges (ISO, DRAP, Since 1990). Right = one real photo. Local optimized image via `next/image`, not Unsplash.
2. **Stats bar** — 4 real metrics: years (35+), hospitals/clients served, products, cities covered. Counter animation on scroll is fine (once).
3. **Product Categories grid** — 8 cards (ICU & Ward, Operation Theater, CSSD, Diagnostic, Electro-Medical, Emergency, Gyne & Nursery, MGPS), each: icon, name, 1-line description, product count, "Explore →". This is the core of the page.
4. **Why MEDAP** — 4 value cards (Customer First, Reliability, Quality, After-Sales Support) — short, icon-led.
5. **Clients** — logos grouped (private / public / defence if applicable) with counts.
6. **Partners** — logo grid with country + specialty line (like Total's, but your partners).
7. **CTA Band** (shared component).
8. Footer.

Remove from homepage flow: LoadingScreen, decorative fixed blobs, the trust-badge card section (folds into hero badges + stats).

---

## 4. Products IA (Phase 3)

### 4.1 `/products` index
- Small hero: title + one-line value statement (no giant banner).
- The same 8 category cards as homepage (single source of data: `src/data/categories.ts`).
- Partners strip + CTA band.

### 4.2 Category template (all 8 pages share one layout)
- Breadcrumb (Home / Products / ICU & Ward).
- Title + description.
- Product cards grid (image, name, short spec line, "Request Quote" linking to contact with category pre-filled).
- **Related categories** row (Total's pattern — keeps users in the catalog).
- CTA band.
- Refactor: currently 8 near-duplicate `page.tsx` files → one `CategoryPage` component + per-category data file.

---

## 5. Secondary Pages (Phase 4)

- **About**: intro with metrics → mission → **timeline 1990 → today** (Total's most memorable About element — do your own milestones) → leadership (fold `/ceo-message` in as a profile + quote) → why-choose-us → CTA band.
- **Certifications**: cleaner grid of certificates with issuing-body logos; short credibility intro.
- **Contact**: contact-method cards (address, phone, email, hours, **WhatsApp deep link** — high-value for Pakistan market) → simplified form (name, email, phone, organisation, category dropdown, message) → embedded map → footer.

---

## 6. Performance & Quality (Phase 5)

- Replace all remote Unsplash URLs with local `/public` images through `next/image` (sizes, priority on hero).
- Remove unused heavy deps: `three`, `@react-three/*`, `gsap`, `lottie-react`, `lenis`, `react-parallax-mouse` (none load-bearing in current sections) — big bundle win.
- Convert pages that don't need `'use client'` at page level (move interactivity into leaf components) for better SSR/SEO.
- Metadata per category page (ties into existing SEO-IMPLEMENTATION-GUIDE.md).
- Accessibility pass: focus states, alt text, color contrast on teal text, reduced-motion media query.

---

## 7. Suggested Order of Work

| Phase | Scope | Effort |
|---|---|---|
| 1 | Shared components + header/footer/mobile nav + motion cleanup | ~1 session |
| 2 | Homepage rebuild | ~1 session |
| 3 | Products index + category template refactor | ~1 session |
| 4 | About / Certifications / Contact | ~1 session |
| 5 | Images, bundle cleanup, SEO/a11y | ~1 session |

Each phase ships independently — the site stays deployable throughout.
