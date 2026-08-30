# Das Foundation — website

Static website for Das Foundation, an environmental non-profit working on recycling,
waste recovery and sustainability education. Companion to the Instagram account
[@_dasfoundation](https://www.instagram.com/_dasfoundation/).

No build step, no dependencies. Plain HTML, one stylesheet, one small script.

## Structure

```
index.html          Home — mission, programmes overview, process, FAQ
about.html          Purpose, operating principles, governance
programmes.html     The three programmes in detail
get-involved.html   Volunteering, schools, business partners, current needs
contact.html        Contact details and enquiry form
404.html            Not-found page (works on GitHub Pages)
styles.css          All styles
main.js             Mobile nav toggle, footer year
assets/mark.svg     Logo mark / favicon
robots.txt          Crawler directives
```

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Before publishing — required edits

The site ships with placeholders where real organisational details belong. Nothing here is
invented on your behalf; fill each one in yourself. Search the project for `TODO`,
`REPLACE@EXAMPLE.ORG` and `[ADD` to find them all.

| Placeholder | Where | What to put |
|---|---|---|
| `REPLACE@EXAMPLE.ORG` | every page footer, `contact.html` | Your real, monitored contact address |
| `[ADD CITY, COUNTRY]` | every page footer, `contact.html` | Where the organisation is based |
| `[ADD REGISTRATION NUMBER]` | every page footer | Registration/charity number |
| `[ADD REGISTRATION NUMBER AND JURISDICTION]` | `contact.html` | Number plus registering body |
| Governance paragraph | `about.html` | Board/trustees, founding year, reporting |
| Impact section | `index.html` (commented out) | Only real, measured figures — see below |
| Form `action` | `contact.html` | A form endpoint, or delete the form |
| Sitemap line | `robots.txt` | Your sitemap URL once the domain is live |

### The impact section

`index.html` contains a commented-out impact block. It is commented out deliberately. Fill it
with figures you have actually recorded, or leave it out. Publishing estimated or illustrative
numbers as measured results is the fastest way to lose a partner or funder, and in most
jurisdictions misrepresenting a charity's activities carries legal consequences.

### The contact form

The form has no `action` and currently does nothing. GitHub Pages serves static files only and
cannot process submissions. Either point `action` at a form service (Formspree, Basin, Getform,
Tally) or remove the form and rely on the email address. A form that silently discards messages
is worse than no form at all.

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. Repository **Settings → Pages**.
3. Under **Build and deployment**, set source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save. The site publishes at `https://<user>.github.io/<repo>/`.

For a custom domain, add it under Settings → Pages, create a `CNAME` file in the repository root
containing the bare domain, and point a `CNAME` or `ALIAS` DNS record at `<user>.github.io`.

Note: the `404.html` page and `robots.txt` use root-relative paths, so they behave correctly on a
custom domain or a user/organisation Pages site. On a project subpath
(`user.github.io/repo/`) the 404 page's links will resolve to the domain root — use a custom
domain, or change those `/` paths to `/repo/`.

## Accessibility and browser support

Semantic landmarks, a skip link, visible focus outlines, `aria-current` on the active nav item,
and `aria-expanded` on the mobile menu. Everything except the mobile menu toggle works with
JavaScript disabled. Layout uses CSS Grid with `auto-fit`, so it reflows without breakpoints;
`prefers-reduced-motion` is respected.

## Licence

Site content © Das Foundation.
