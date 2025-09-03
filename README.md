# ericvono.com — Static Site (Starter)

This is a fast, clean starter website for **ericvono.com**. It’s pure HTML/CSS/JS — easy to host anywhere.

## Files
- `index.html` — the homepage
- `styles.css` — theme + layout
- `script.js` — mobile nav + contact form (mailto)
- `assets/logo.svg` — simple orbit logo
- `assets/favicon.svg` — site icon

## Customize
- Replace the Spotify `<iframe>` src with your real podcast embed.
- Update links in the subscribe row and social icons.
- Swap `assets/logo.svg` with your final logo artwork (same file name to avoid edits).
- Replace the three placeholder project cards in **Builds & Fabrication**.

## How to Deploy on GoDaddy (quickest paths)

### Option A: GoDaddy Website Builder (Simple)
1. In GoDaddy, open *My Products* → your domain.
2. Launch **Website Builder** → choose a blank template.
3. Add a **Section → HTML Embed** and paste the contents of `index.html` (advanced users can do this).
   - Or, just recreate the blocks visually using the Builder with your assets.

### Option B: GoDaddy cPanel Hosting (File Manager)
1. Purchase/activate a basic **cPanel Linux Hosting** plan (if you don’t have hosting yet).
2. In GoDaddy, open **cPanel** → **File Manager** → go to `public_html/`.
3. Upload the contents of the ZIP (keep the folder structure).
4. Ensure `index.html` is directly in `public_html/` so it loads at your root domain.

### Option C: Modern Hosting (Netlify / Cloudflare Pages / Vercel)
1. Create an account on your preferred static host.
2. Drag‑and‑drop this folder/ZIP to deploy.
3. In GoDaddy **DNS**, set your domain’s **A** or **CNAME** records per the host’s instructions.
4. Verify, then enable HTTPS.

## Tip
- If you want a contact form without `mailto:`, use a form backend like Formspree or Basin — they give you an action URL to drop into the `<form>` tag.
- Want a blog? We can add a `/blog` using a static generator later (Astro/11ty).

— Built by ChatGPT
