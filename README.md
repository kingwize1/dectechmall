# DecTechMall

Static marketing site for DecTechMall, the Decentralized A.I. Mall. A platform by [VFOX Island Trust](https://vfoxisland.wixsite.com/vfoxisland).

Slogan: **You Should Be Funded**.

Intended domain: **DecTechMall.com**. This repository does not include DNS records. Add a `CNAME` file only after the domain is pointed at GitHub Pages. The file would contain a single line:

```
dectechmall.com
```

Do not commit that file until the domain is ready. A `CNAME` here would tell GitHub Pages to serve this site on that host.

## Preview locally

No build step. From the repository root:

```bash
python3 -m http.server 8741
```

Open `http://127.0.0.1:8741/`.

## Publish on GitHub Pages

1. Push this branch to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set the branch to **main** and the folder to **/ (root)**.
5. Save. The site is the files at the root, including `index.html`. `.nojekyll` is included so GitHub Pages will not run Jekyll.

There is no install step and no bundler. HTML, CSS, and JS are already the published files. Fonts are self-hosted under `assets/fonts/`.

## Apply form

The form does not post to a server. Submit opens the visitor’s email app with a `mailto:` to `gw@vfoxisland.com`. Phone `+1-301-237-7938` and Instagram `@coachgwheeler` are on the page as other routes. An application is not a funding commitment.

## Brand

Direction 1, ProSport Metallic Crest, is documented in `ideas.md` and noted at the top of the CSS and page files. The business facts the copy is allowed to use are in `business-intake.md`.
