# Geaux Home Real Estate website

Static HTML site for geauxhomerealestate.com (Geaux Home Real Estate LLC, Baton Rouge).
Hosted on Netlify; every push to `main` publishes automatically.

## Where everything lives
Broken Tractor (Michael) manages the site for Lacy; she does not have GitHub or Netlify accounts.
- **Code:** GitHub `brokentractor/geaux-home-website` (public, so the files can be moved anywhere if needed).
- **Hosting:** Netlify team `michael-alford`, project `geaux-home-website` (free plan, ~13 credits per publish; bundle changes).
- **Forms:** Netlify Forms, form name `contact`. Email notifications: lacy@geauxhomerealestate.com (she must click Confirm in Netlify's email).
- **Domain:** geauxhomerealestate.com, Lacy's GoDaddy account (Michael has delegate access). DNS moves from Real Geeks to GoDaddy on launch day.
- **Email:** Lacy's Google Workspace. Keep the MX/SPF records when changing DNS.
- **To move the site off our accounts:** connect the repository (or a copy) to any host, then point the domain's DNS at it.

- Source: exported from Lacy's ChatGPT draft, version 25 (2026-11-20).
- No build step. Pages are `*/index.html`; shared files are in `assets/`.

## Before launch (target Tue Dec 8, 2026)
- [x] Contact form sends through Netlify Forms (form name `contact`)
- [x] Netlify form detection on
- [ ] Launch day: add a form email notification to lacy@geauxhomerealestate.com (she clicks Confirm), remove the test notification to Michael
- [ ] Property search: embed Flexmls IDX SmartFrame (registration off) after ROAM/GBRAR approval. Spot is marked in search/advanced_search/. Also update the area pages, /featured/ and the homepage note that say IDX is pending, and add IDX to the privacy notice.
- [ ] Lacy to review: rewritten privacy notice; blog fine print about the draft article
- [x] Remove the draft banner and footer links to /launch/
- [ ] Search engines (launch day): robots.txt `Disallow: /` -> allow + sitemap line, and remove `<meta name="robots" content="noindex,nofollow">` from every page
- [x] Redirects for old Real Geeks URLs (`_redirects`, covers all ~12,000 addresses in the old sitemap)
