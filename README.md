# Pillot marketing site

Static marketing site for Pillot, built with Astro. Separate from the iOS app repo.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built dist/
```

## Launch toggle

`src/config.ts` controls the whole site's pre-launch vs. live state:

- `LAUNCH_STATE = 'prelaunch'` — hero + footer show the email capture form.
- `LAUNCH_STATE = 'live'` — both show the App Store badge (set `APP_STORE_URL`).

Flip that one constant on launch day and redeploy. Nothing else to change.

## Before publishing, fill these in

- `src/config.ts` → `EMAIL_FORM_ACTION` — the hosted form endpoint (Buttondown / Web3Forms). Empty = form shows "sign-ups aren't open yet."
- `src/config.ts` → `SUPPORT_EMAIL` — real support address (used on /privacy, /support, footer).
- `src/pages/privacy.astro` → `[DATE]` — privacy policy effective date.
- `APP_STORE_URL` — once the listing is live.

## Deploy (Cloudflare Pages)

Framework preset: Astro. Build command `npm run build`, output directory `dist`.
Point the project at the GitHub repo; add `pillot.app` as a custom domain.

## Assets

- Feature screenshots: `public/screens/feat-*.jpg` (cropped/optimized from app captures).
- OG image: `public/og.png` (1200x630). Apple touch icon: `public/apple-touch-icon.png`.
- App Store badge: `public/appstore-badge.svg` (official Apple artwork).
- Welcome email template: `emails/welcome.html`.
