# Portfolio Revamp — Spec

This is the source of truth for the redesign. All subagents read this before doing their job. Keep it updated as decisions change.

## Core structural change
- **From multi-page → single page.** Everything currently split across pages gets consolidated into one scrollable page, in sections.
- **Nav bar becomes a scroll-spy anchor nav.** Clicking a menu item smooth-scrolls to that section on the same page (no route change). Active section should highlight in the nav as the user scrolls.

## Sections (working list — adjust as finalized)
1. **Hero** — personal title + intro
2. **About**
3. **Work / Experience**
4. **Thoughts** — auto-pulled from Substack. See below.
5. **Comments / Guestbook**
6. **Sign-off** — handwriting image + photo

## What to keep (already working, do not lose in the rebuild)
- Personal title framing (not generic "Portfolio" — her own voice)
- Sign-off section with handwriting image
- Personal photo
- These are explicitly the "feels personal" elements — any redesign PR that drops or visually buries these should be flagged.

## What's changing

### Case studies — removed entirely
No case study content, no locally-authored blog posts. Not migrating old case study write-ups. This section of the old site goes away completely, not replaced with a new writing burden.

### Thoughts — auto-synced from Substack, not authored on-site
- Source of truth for "Thoughts" content is her existing Substack, not the portfolio repo. She should never have to push a commit when she publishes a new Substack post.
- **Mechanism:** Substack exposes an RSS feed at `https://<her-subdomain>.substack.com/feed`. Fetch this server-side (build-time with periodic revalidation, e.g. Next.js ISR, or a scheduled fetch — not client-side, since RSS/XML fetches from the browser will hit CORS issues on Substack's feed).
- **Rendering:** each post renders as just a clickable title + a tilted arrow icon (↗ / rotated arrow glyph, e.g. `→` rotated -45deg, or an actual external-link icon), linking out (`target="_blank"`) to the post on Substack. No excerpt, no local copy of the post body — matches the "thoughts" section being light-touch, not a content-migration project.
- **Failure mode to handle:** if the feed fetch fails or is empty (Substack down, feed URL wrong, no posts yet), the section should degrade gracefully — show nothing broken, not a raw error or empty crash.
- **Caching:** don't hit Substack's feed on every single page load; revalidate on an interval (e.g. every hour) so publishing shows up automatically without needing a redeploy, but without hammering the feed endpoint.

### Comments — lightweight JSON-in-repo datastore
- Store comments as a JSON file committed directly to the GitHub repo (e.g. `data/comments.json`) — this *is* the database, no external DB service.
- **Mechanism:** a small server-side endpoint (e.g. a Next.js API route) receives the new comment, then uses the GitHub Contents API (`PUT /repos/{owner}/{repo}/contents/{path}`) to read the current file's SHA, append the new entry, and commit the updated JSON back. This requires a GitHub personal access token stored as a server-side environment variable — **never exposed to the client**.
- **Concurrency:** two people commenting at nearly the same moment can race on the file SHA and one commit can fail/conflict — the endpoint should retry the read-modify-write on a SHA mismatch rather than silently dropping the second comment.
- **Rendering** stays cute/lightweight per the guestbook inspiration: short character limit, playful placeholder copy, no threading/replies.
- **Moderation:** since this writes directly to her public repo's git history, consider whether comments should be auto-published immediately or need a lightweight approval step — flag this as a decision if not yet made when reviewing the implementation.

### Nav bar
Keep the current visual style/labels approach, just rewire it from page links to anchor/scroll links.

## Inspiration reference
https://shraddha-kulkarni.com/ — specifically liked:
- The "thoughts" section framing (informal, rabbit-hole-y, not portfolio-speak)
- The guestbook / cute comment interaction
- The anchor-style nav bar

Not copying: her page-per-section structure (we're going single-page), her calendar/reading-list widget, her polaroid photo grid — unless later decided otherwise.

## Target audience (drives tone + what "good" looks like)
- Hiring managers / recruiters at product-led companies
- Startup founders
- Tech/build-in-public X (Twitter) influencers/creators

These three should be able to, within ~30 seconds of landing on the page: understand who she is, what she's done (impact, not just titles), and want to either reach out, follow, or read a "thoughts" post.

## Open questions to resolve during build
- [ ] Final section order
- [ ] Whether "Work" shows metrics/case-study-lite bullets or just a timeline
- [ ] Comment storage — needs a backend/DB or can it be a simple form-to-email/Formspree-style integration?
- [ ] Mobile nav behavior (hamburger vs always-visible anchor bar)
