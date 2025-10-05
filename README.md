# RetroMerch

Turn retro posters into wearable merch. This repository contains the frontend for RetroMerch — a Vite + React + TypeScript site styled with Tailwind and shadcn-ui components.

## What is RetroMerch?

RetroMerch is a small storefront that transforms curated retro posters into purchasable merch (prints, apparel, and small goods). The goal is to make it easy for customers to discover nostalgic art and order it as physical products — with a simple, modern shopping experience optimized for mobile and desktop.

Key ideas and features:
- Curated collections (anime, movies, cars, music, nature, etc.) so users can browse by theme.
- Product pages with poster previews, variants (sizes / formats), and an add-to-cart flow.
- Cart and checkout flow powered by a serverless function (see `supabase/functions/create-checkout`) and backend integrations for payments and order creation.
- User accounts for saving orders and a smoother checkout experience (uses Supabase auth integration in the project).
- Responsive UI built with Tailwind CSS and shadcn-ui components for quick, consistent design.

Typical user flow:
1. Browse or search a curated collection.
2. Open a product detail page and pick size/format.
3. Add the item to the cart and proceed to checkout.
4. Complete the purchase via the checkout flow (serverless function triggers backend payment process).

Who this repo is for
- Frontend engineers who want a starter e-commerce UI that hooks into serverless checkout logic.
- Designers who want to tweak layouts, product cards, and responsive behavior.
- Contributors who want to add categories, product filters, or expand the checkout integrations.


## Quick start

Prereqs: Node.js (16+ recommended) and npm.

Install and run locally:

```powershell
npm install
npm run dev
```

Build for production:

```powershell
npm run build
npm run preview
```

Project structure (important files)
- `index.html` — app entry and meta tags (favicon / social images)
- `src/main.tsx` — React entry
- `src/components` — UI components (Navbar, Hero, ProductCard, etc.)
- `src/assets/logo.png` — project logo (used for favicon / OG image)

What I changed recently
- The site favicon and social preview image were updated to use the project logo at `src/assets/logo.png` (see `index.html`).
- The navbar still uses the decorative Sparkles icon (restored) so the brand mark remains the small sparkle next to the site name.

Notes / recommendations
- For production stable favicon behavior it's common to place `logo.png` (or generated favicon files) in `public/` and reference `/logo.png` from `index.html`. That avoids potential path issues after bundling.
- In React components you can also import the image to let Vite process it:

```tsx
import logo from '@/assets/logo.png'
<img src={logo} alt="RetroMerch logo" />
```

Contributing
- Fork, create a branch, open a PR. Keep changes small and focused.

License
- (Add your license here if you have one.)

If you want, I can:
- Move `logo.png` to `public/` and update `index.html` for a production-safe favicon setup.
- Import the logo in the navbar component instead of using an absolute path (recommended if you want the image to be part of the bundle).

## Architecture & diagrams

A simple diagram helps new contributors grok the system quickly. Place any images under `docs/` or `public/` and reference them from this README.

Suggested diagram files:
- `docs/architecture.png` — high-level architecture (browser -> frontend -> Supabase Function -> Stripe / Supabase)
- `docs/sequence-checkout.png` — sequence diagram for the checkout flow (browser calls create-checkout, function creates Stripe session, returns redirect URL)

ASCII sketch (quick reference):

Browser -> Frontend (React) -> Supabase Function (`/create-checkout`) -> Stripe -> Browser (redirect to Stripe Checkout)

## Supabase functions — API notes

This repo includes a serverless function used for checkout: `supabase/functions/create-checkout/index.ts`.
Keep these notes up to date if you modify the function.

- Path: `supabase/functions/create-checkout/index.ts`
- Runtime: Deno (Supabase Functions)
- Purpose: create a Stripe Checkout Session for the authenticated user and return the session URL.

Request
- Method: POST
- Headers:
	- `Authorization: Bearer <access_token>` (required) — the function extracts the token and calls Supabase auth to fetch the user.
	- `Content-Type: application/json`

Request body (JSON):
```
{
	"priceId": "price_xxx",      // required — Stripe Price ID for the chosen product/variant
	"productType": "poster"      // optional — used by your business logic if needed
}
```

Response
- Success (200):
	- JSON: `{ "url": "https://checkout.stripe.com/...." }` — the client should redirect the user to this URL.
- Error (500):
	- JSON: `{ "error": "<message>" }`

Behavior notes
- The function expects a valid Supabase access token in Authorization. If the token is missing or invalid, the function responds with an error.
- It attempts to find an existing Stripe customer by email; if found it uses that customer record, otherwise it passes `customer_email` to Stripe to create a new customer during Checkout.
- CORS: the function allows all origins (Access-Control-Allow-Origin: *). If you restrict domains, update the `corsHeaders` accordingly.

Environment variables required for the function
- SUPABASE_URL — your Supabase project URL
- SUPABASE_ANON_KEY — Supabase anon public key (used to call auth.getUser with token)
- STRIPE_SECRET_KEY — Stripe secret API key used to create sessions

Security note
- Do NOT commit secret keys to source control. Use Supabase project secrets or environment management for deployments.

Example requests

PowerShell (curl) example — replace placeholders:

```powershell
curl -Method POST -Uri "https://<your-project>.functions.supabase.co/create-checkout" `
	-Headers @{
		"Authorization" = "Bearer <USER_ACCESS_TOKEN>";
		"Content-Type" = "application/json"
	} `
	-Body (@{ priceId = "price_xxx" } | ConvertTo-Json)
```

Fetch example (browser / client):

```ts
const res = await fetch('/.netlify/functions/create-checkout' /* or your function URL */, {
	method: 'POST',
	headers: {
		'Authorization': `Bearer ${accessToken}`,
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({ priceId: selectedPriceId, productType: 'poster' })
});
const data = await res.json();
if (data.url) window.location.href = data.url;
else console.error(data.error);
```

## Contributing checklist

Use this checklist when opening a PR:

- [ ] Create a branch named `feature/xxx`, `fix/xxx`, or `chore/xxx` describing the change.
- [ ] Pull the latest `main` and rebase or merge before opening a PR.
- [ ] Run the app locally: `npm install` and `npm run dev`.
- [ ] Run lint: `npm run lint` and fix reported issues.
- [ ] Add or update TypeScript types where appropriate.
- [ ] Add minimal tests for new logic (recommended: add vitest + React Testing Library for future testing).
- [ ] Update this `README.md` with any public-facing API or behavior changes.
- [ ] Keep commits focused and use concise messages (consider Conventional Commits like `feat:`, `fix:`, `chore:`).

PR reviewers should verify:
- The app builds and starts without errors.
- No secrets are present in the diff.
- Public API changes are documented.

## Code style & linting

- Language: TypeScript (strict typing encouraged).
- Linter: ESLint (run `npm run lint`). Fix lint errors before requesting review.
- Formatting: If you add a formatter (Prettier) keep config consistent across the repo. There is not a Prettier config in this repo currently.
- CSS: Tailwind utility classes are used — prefer small, reusable component classes and the shadcn-ui primitives.

Recommended dev commands

```powershell
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview build
npm run lint     # run ESLint
```

## Recommended follow-ups

- Move `src/assets/logo.png` to `public/logo.png` and update `index.html` to reference `/logo.png` for a more reliable favicon in production.
- Add automated tests (Vitest) and a CI workflow that runs lint/build on PRs.
- Add a `CONTRIBUTING.md` and PR/issue templates for consistency.

If you'd like, I can implement any of the recommended follow-ups now (move the logo, add CI, or wire up tests). 
