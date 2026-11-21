# Von Ryan Sumague — Portfolio

A static personal portfolio: plain HTML, CSS and JavaScript. It has no build step, framework, backend or database.
It is hosted for free on GitHub Pages.

## Folder structure

```
portfolio/
├── index.html                  Page shell, SEO tags, structured data
├── .nojekyll                   Tells GitHub Pages to serve files as-is
├── README.md
├── Portfolio_Von_Ryan_Sumague.pdf   Original résumé (source, untouched)
└── assets/
    ├── js/
    │   ├── content.js          ← ALL WEBSITE TEXT LIVES HERE
    │   └── main.js             Renders content.js into the page, plus interactions
    ├── css/styles.css          Design system (colors, type, layout, light/dark)
    ├── img/                    favicon.svg, apple-touch-icon.png, og-image.png
    └── resume/Von-Ryan-Sumague-Resume.pdf   The file visitors download
```

## Updating content

Open **`assets/js/content.js`**, edit the text and save. Then refresh the browser. Comments at the top of the file explain the rules.

| I want to… | Do this in `content.js` |
|---|---|
| Add LinkedIn / GitHub | Fill `profile.links.linkedin` / `profile.links.github` with the full URL |
| Add a project | Copy one `{ … }` block inside `work.items`, then edit it. Add `links: { github: "…", demo: "…" }` |
| Add a project screenshot | Put the image in `assets/img/`, then add `image: "assets/img/name.webp", imageAlt: "what it shows"` to that project |
| Add a certification | Add a line at the **top** of `certifications.items` (newest first). Add `url` to link the credential |
| Change job title / new job | Edit or add a block at the top of `experience.jobs` |
| Hide a section | Empty its list, e.g. `items: []`. The section and its menu link disappear |
| Italic green accent word | Wrap it in `*asterisks*` (hero headline and contact title) |

Also update these when your **role or headline** changes. They live in `index.html` because search engines and link previews read them:
- `<title>`, `<meta name="description">` and the `og:` tags
- The JSON-LD `Person` block (job title, certifications)
- The `<noscript>` summary
- `assets/img/og-image.png`, the 1200×630 image shown when your link is shared

**Replacing the résumé:** save the new PDF as `assets/resume/Von-Ryan-Sumague-Resume.pdf`, overwriting the old one. Every download button uses that path.

## Run locally

Double-click `index.html`. It works directly from the file system.

Optionally, run it through a local server:

```bash
npx serve .          # or:  python -m http.server 8000
```

## Deploy to GitHub Pages

1. Create a new **public** repository on GitHub.
   - If you name it `<your-username>.github.io`, the site lives at `https://<your-username>.github.io/`.
   - Any other name, e.g. `portfolio`, gives `https://<your-username>.github.io/portfolio/`.
2. Upload the files. Either drag the folder contents into the repo's **Add file → Upload files** page, or use git:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages → Build and deployment**. Set **Source: Deploy from a branch**, **Branch: `main` / `(root)`**, then click Save.
4. Wait about 1 minute. The URL appears at the top of the Pages settings.
5. After the first deploy, open `index.html` and change `og:image` to the absolute URL
   (`https://<your-username>.github.io/<repo>/assets/img/og-image.png`). Add
   `<meta property="og:url" content="https://<your-username>.github.io/<repo>/">` as well. Link previews on LinkedIn and Slack need absolute URLs.

Every later `git push` (or upload) to `main` redeploys automatically.

> Tip: `Portfolio_Von_Ryan_Sumague.pdf` in the root contains your phone number. That's fine, because the downloadable copy contains it too. You can leave the root copy out of the repo if you prefer.

## Troubleshooting

- **Page is blank / shows "content file could not be loaded"**: there's a syntax error in `content.js`, usually a missing comma between items or an unclosed quote. Press F12 → Console to see the line number.
- **404 after deploying**: check that Pages is set to `main` / `(root)` and that `index.html` sits at the repo root, not inside a subfolder.
- **Old version still showing**: hard-refresh with Ctrl+F5. GitHub Pages can take 1–2 minutes to update.
- **Images or résumé not loading online, but fine locally**: file names are case-sensitive on GitHub, so `Resume.pdf` ≠ `resume.pdf`. Keep paths relative (no leading `/`).
- **LinkedIn shows an old preview**: re-scrape the URL with LinkedIn's Post Inspector.

## Design notes

- **Concept "the record":** bold grotesk headlines (Space Grotesk), Inter for body text, and JetBrains Mono for record-style labels.
- **Colors:** warm paper / near-black ink with one deep green accent. A dark theme is included.
- **Theme behavior:** follows the visitor's system setting by default. The toggle remembers their choice.
- **Accessibility:** WCAG AA contrast in both themes, keyboard-navigable menu, skip link, visible focus rings, and `prefers-reduced-motion` support.
- **Dependencies:** Google Fonts only. Everything else is local.
