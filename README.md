# All About Recovery — website

A rebuild of [allaboutrecovery.com.au](https://allaboutrecovery.com.au) in
Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript.

The brand palette and logo are carried over from the existing Framer site
unchanged. What's new is the **structure**: a proper services architecture,
testimonials, a full footer, FAQs, contact and legal pages, and SEO built in
rather than bolted on.

---

## Running it

```bash
npm install
npm run dev     # http://localhost:8080
npm run build   # production build
npm run lint
```

> The dev server runs on **8080** so it doesn't collide with other projects on 3000.

---

## Structure

```
src/
  app/
    page.tsx                     Home
    about/                       About — vision, mission, values
    services/                    Services index
    services/[slug]/             7 service detail pages (static, from data)
    accommodation-support/       SIL · SDA · STA · MTA · respite
    testimonials/                Participant stories
    faq/                         FAQs (FAQPage schema)
    referrals/                   Referral form
    contact/                     Contact + feedback & complaints
    privacy-policy/  terms/      Legal
    api/enquiry/route.ts         Form handler
    sitemap.ts robots.ts manifest.ts opengraph-image.tsx
  components/
    layout/        Header, Footer
    sections/      Page-level sections (Hero, Testimonials, FAQ, CTA, forms…)
    ui/            Primitives: Section, Container, Button, Reveal, Icons
  data/            ← all copy lives here
  lib/             seo.ts (metadata + JSON-LD), accents.ts
```

**All website copy lives in `src/data/`.** Editing a service, an FAQ, an office
address or a phone number is a one-line change there — no component edits, and
nothing to keep in sync across pages.

---

## Before you go live

1. **Replace the testimonials.** `src/data/testimonials.ts` currently holds
   *placeholder* quotes written to design the layout. They are not from real
   people. Swap in genuine, consented quotes and set
   `TESTIMONIALS_ARE_PLACEHOLDER = false` to remove the warning banners.
2. **Connect the form.** Copy `.env.example` to `.env.local` and fill in the
   Resend keys. Until then the form honestly tells visitors to call or email.
3. **Have the legal pages reviewed.** `/privacy-policy` and `/terms` are solid
   drafts for an Australian registered NDIS provider, but they need your
   lawyer's eyes and your ABN. Remove the review banner via the `reviewNote`
   prop in `LegalBody`.
4. **Check the Acknowledgement of Country** in `Footer.tsx` names the right
   Traditional Custodians for all three office locations.
5. **Confirm the NDIS registration number** if you want it displayed.

---

## Design system

Colours are sampled directly from the live site and defined once as Tailwind v4
tokens in `src/app/globals.css`:

| Token | Hex | Used for |
|---|---|---|
| `cream` | `#FBF1E0` | Default page background |
| `sand` | `#F0E2CC` | Alternating section background |
| `bark` | `#543332` | Body copy, dark sections |
| `sage` / `sage-light` / `sage-pale` | `#68744B` / `#BBC79D` / `#DDE4CB` | Primary accent, vibrant bands |
| `terracotta` | `#C66D39` | Decorative accents, dots, rules |
| `terracotta-deep` / `-ink` | `#A2521F` / `#8D4619` | Buttons and accent **text** |
| `teal` / `teal-light` / `teal-ink` | `#678F97` / `#C2D4D8` / `#3F5C64` | Tertiary accent |

Two notes on the palette:

- **`-deep` and `-ink` are darker shades of the same brand hues**, added only so
  text and buttons clear WCAG AA. Cream text on the original `#C66D39` is
  3.32:1, which fails for normal-size text; on `#A2521F` it's 4.99:1. No new
  hues were introduced. To revert, point `Button.tsx`'s `primary` variant back
  at `bg-terracotta`.
- **Every text/background pair on the site meets WCAG 2.1 AA** (4.5:1 for body
  copy, 3:1 for large display text and UI graphics).

Spacing is centralised too: `Section` owns vertical rhythm (`py-20 md:py-28
lg:py-32`) and `.container-page` owns the horizontal gutter, so padding and
margins stay identical on every page.

Typography is **Gabarito** — the brand's existing typeface — loaded via
`next/font` and self-hosted, so there's no render-blocking Google Fonts request.

---

## SEO

- Per-page `title`, `description`, canonical URL, Open Graph and Twitter cards
  via `pageMetadata()` in `src/lib/seo.ts`
- JSON-LD `@graph` on every page: `Organization`, `WebSite`, three
  `LocalBusiness` nodes (one per office), plus per-page `Service`,
  `BreadcrumbList`, `FAQPage`, `AboutPage`, `ContactPage` and `CollectionPage`
- `sitemap.xml`, `robots.txt` and a web manifest generated at build time
- Generated Open Graph image at `/opengraph-image`
- Semantic landmarks, one `<h1>` per page, no heading-level skips, descriptive
  alt text on every image, and a skip-to-content link
- All 18 routes are statically prerendered except the form endpoint
- Images served as WebP/AVIF through `next/image` with explicit `sizes`; the
  brand photography was re-encoded from ~25 MB of PNG down to ~3 MB

---

## Accessibility

- WCAG 2.1 AA contrast throughout (verified pair by pair)
- Visible focus ring on every interactive element, never removed
- 44×44px minimum touch targets
- Full keyboard operation, including the mobile drawer (Escape closes it) and
  the testimonials carousel
- Forms use visible labels, inline errors, a focusable error summary,
  `aria-invalid` and `aria-describedby`
- `prefers-reduced-motion` disables all scroll reveals and the marquee
- Scroll reveals are progressive enhancement — a `<noscript>` rule makes every
  section visible with JavaScript disabled
- Zoom is not blocked (`maximumScale: 5`)

---

## Content notes

Copy on the seven service pages and the accommodation page is carried over from
the live site and expanded where the original had gaps — the FAQs, the
approach steps, the getting-started flow and the legal pages are new. The
crisis-support line in the footer (Lifeline, Beyond Blue, NDIS Commission) was
added because it's expected of a mental health provider.
