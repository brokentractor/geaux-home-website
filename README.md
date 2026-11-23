# Geaux Home Real Estate website

Static HTML site for geauxhomerealestate.com (Geaux Home Real Estate LLC, Baton Rouge).
Hosted on Netlify; every push to `main` publishes automatically.

- Source: exported from Lacy's ChatGPT draft, version 25 (2026-11-20).
- No build step. Pages are `*/index.html`; shared files are in `assets/`.

## Before launch (target Tue Dec 8, 2026)
- [x] Contact form sends through Netlify Forms (form name `contact`)
- [ ] Netlify: enable form detection, then set the submission email to lacy@geauxhomerealestate.com (in her account)
- [ ] Property search: embed Flexmls IDX SmartFrame (registration off) after ROAM/GBRAR approval. Spot is marked in search/advanced_search/. Also update the area pages, /featured/ and the homepage note that say IDX is pending, and add IDX to the privacy notice.
- [ ] Lacy to review: rewritten privacy notice; blog fine print about the draft article
- [x] Remove the draft banner and footer links to /launch/
- [ ] Search engines (launch day): robots.txt `Disallow: /` -> allow + sitemap line, and remove `<meta name="robots" content="noindex,nofollow">` from every page
- [ ] Redirects for old Real Geeks URLs
