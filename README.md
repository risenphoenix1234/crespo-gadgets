# NOIR — Phone Store (Next.js + Tailwind CSS)

A black & gold themed phone-selling storefront built with Next.js (App Router)
and Tailwind CSS 3 (stable).

## Stack
- Next.js 14.2 (App Router)
- React 18
- Tailwind CSS 3.3 (classic stable version, not v4)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure
- `app/layout.js` — root layout, wraps every page with `Navbar` and `Footer`
- `app/page.js` — landing page: Hero + Featured Collection + Why Choose Us
- `app/shop`, `app/about`, `app/contact` — placeholder pages using the same layout
- `components/` — `Navbar`, `Footer`, `Hero`, `FeaturedPhones`, `WhyChooseUs`
- `tailwind.config.js` — black/gold color tokens (`black`, `black-soft`, `black-card`, `gold`, `gold-light`, `gold-dark`, `gold-gradient`)

## Theme
- Primary: black (`#0a0a0a`, `#111111`, `#161616`)
- Secondary/accent: gold (`#D4AF37`, gradient from `#E9CE73` to `#9A7B1F`)

## Notes
- Navbar and Footer are rendered once in `app/layout.js`, so they automatically
  appear on every route.
- Replace the placeholder phone data in `components/FeaturedPhones.js` and
  `app/shop/page.js` with real product data / a CMS or API call.
