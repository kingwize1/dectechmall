# DecentralizedSVM.com — Decentralized Silicon Valley Mall

Static marketing site for **Decentralized Silicon Valley Mall (DecentralizedSVM.com)**, *Decentralized Silicon Valley Mall by [VFOX Island Trust](https://vfoxisland.com)*. Formerly DecTechMall / Decentralized AiTech Mall.

Slogan: **You Should Be Funded**. Mission: a decentralized launchpad marketplace for multicultural startups and founders. We connect founders to capital markets and capital markets to founders.

SVM has two meanings: **Silicon Valley Mall** (an open marketplace for capital and deal flow) and **Solana / Sovereign Virtual Machine** (settlement rails).

Live preview: https://kingwize1.github.io/dectechmall/

Intended domain: **DecentralizedSVM.com**. This repository does not include DNS records and has no `CNAME` file. Add one only after the domain is pointed at GitHub Pages; it would contain the single line `decentralizedsvm.com`. If you do, change the `/dectechmall/` prefix in `404.html` to `/`.

## Swapping in a new logo

The old raster at `assets/brand/logo.png` still shows the previous name, so the page uses a typographic wordmark instead. Each logo spot is a single element marked with an HTML comment `LOGO SLOT`:

- header: `<span class="wordmark wordmark-sm">` inside `.brand`
- hero: `<span class="wordmark wordmark-lg">` inside `.hero-mark`
- footer: `<span class="wordmark wordmark-sm">` inside `.footer-brand`
- `404.html` header: same as the header

To swap, replace each span with one `<img src="assets/brand/new-logo.png" alt="DecentralizedSVM.com" width="…" height="…">`. The existing `.brand img`, `.hero-mark img`, and `.footer-brand img` rules in `css/styles.css` already size images in those spots. The favicons in `assets/brand/` are still the old artwork; replace them with the new logo when it is ready.

## Preview locally

No build step. From the repository root:

```bash
python3 -m http.server 8741
```

Open `http://127.0.0.1:8741/`.

## Publish on GitHub Pages

Settings → Pages → Deploy from a branch → `main` / root. `.nojekyll` is included.

## Contact routes

The apply form does not post to a server. Submit opens the visitor’s email app with a `mailto:` to `coachg@vfoxisland.com`. The Green-Light Judge and Accredited Investor buttons are also `mailto:` links to the same address (subjects `DecentralizedSVM.com Green-Light Judge interest` and `DecentralizedSVM.com investor materials request`). Phone `+1-301-237-7938` and Instagram `@coachgwheeler` are on the page.

## Investor content rule

This is a public site. Offering terms (valuation caps, discounts, liquidation preferences, raise size), pro-forma financials, and return or safety claims are **not** published here. Investor materials go only to verified accredited investors on request. All plans and figures on the page are forward-looking and presented as intended design.

## Brand

Direction 1, ProSport Metallic Crest (`ideas.md`), extended with burnished gold and laser-orange orbital accents. Business facts the copy may use are in `business-intake.md`.
