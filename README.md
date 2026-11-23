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

## Making changes (keeps Netlify credits low)
Every publish to the live site (a push to `main`) costs 15 Netlify credits. The free plan has 300 a month, and the whole site pauses if they run out. Builds of the `preview` branch are free.

1. Work and commit on the `preview` branch, then push it.
2. Check it at https://preview--geaux-home-website.netlify.app. Don't send forms from the preview: they may email Lacy. Test forms on the live site after a release.
3. When a batch is ready, merge `preview` into `main` and push. That's the one paid publish.

## Before launch (target Tue Dec 8, 2026)
- [x] Forms send through Netlify Forms: `contact`, `wish-list`, `home-value`, `market-report`. Nothing a visitor types goes into the page address.
- [x] Netlify form detection on
- [ ] Form email notification to lacy@geauxhomerealestate.com for every form (she clicks Confirm), then test a wish list and a home value request reaching her. Remove the test notification to Michael at launch.
- [ ] Property search: embed Flexmls IDX SmartFrame (registration off) after ROAM/GBRAR approval. Spot is marked in search/advanced_search/. Keep the wish list (Lacy wants both). Also update the "Live home search is coming soon" notes (homepage, search page, area pages, /featured/) and add IDX to the privacy notice. Lacy wants browsing without registering.
- [x] Lacy reviewed the privacy notice and site wording (Nov 23); blog draft note removed
- [x] Remove the draft banner and footer links to /launch/
- [ ] Search engines (launch day): robots.txt `Disallow: /` -> allow + sitemap line, and remove `<meta name="robots" content="noindex,nofollow">` from every page
- [x] No analytics on the site (privacy notice says so). If any are added, update the notice.
- [x] Redirects for old Real Geeks URLs (`_redirects`, covers all ~12,000 addresses in the old sitemap)
