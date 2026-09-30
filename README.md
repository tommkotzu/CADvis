# CAD-Vis Website

One-page site for CAD-Vis (3D-Visualisierung für Maschinenbau & Elektronik), built from the Claude Design handoff "Website v3".

Static HTML/CSS/JS, with no build step and no dependencies apart from the Inter font on Google Fonts.

```
index.html   page markup
styles.css   design tokens and all styles
main.js      nav hide/show on scroll, sticky CTA, video autoplay, contact form
img/         case-study images, hero video and its poster frame
cases/       raw source material (git-ignored, not published)
```

## Run locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Publish on GitHub Pages

1. Create an empty repository on github.com (e.g. `CADvis`).
2. Push this folder: `git remote add origin https://github.com/<user>/CADvis.git && git push -u origin main`
3. On GitHub: Settings → Pages → Source "Deploy from a branch" → Branch `main`, folder `/ (root)` → Save.
4. After a minute the site is live at `https://<user>.github.io/CADvis/`.

All paths are relative, so the site works under the `/CADvis/` sub-path without changes. `.nojekyll` tells Pages to serve the files as-is.

## Before going live

- **Image and video rights:** the case-study images and `hero.mp4` come from third-party portfolio work. Replace them or get permission before publishing. The engine images also show a BMW logo.
- **Contact form:** there is no backend yet. Submitting opens a prefilled e-mail to `tlmwork@pm.me`. To use a form service such as Formspree, add `action` and `method="post"` to `#contact-form`; the JS then steps aside.
- **Prices:** hidden. Remove the `hidden` attribute on the `.tier-price` elements to show them. The amounts are still placeholders.
- **Impressum / Datenschutz:** the footer links go to `#`. German law requires both pages.
