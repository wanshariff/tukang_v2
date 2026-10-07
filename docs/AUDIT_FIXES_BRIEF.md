# Tadal Studio — Audit Fixes Brief (Pass 1)

**Scope:** fix conflicts, planner bugs and metadata, and change the copy to match the decided delivery workflow and support policy.
**Not in this pass:** the 3-step estimator rebuild, the Pricing page merge, the Cop Tukang rebrand.
**Sources:** Tadal Studio Audit (https://claude.ai/artifact/Jy5NHhGLhH2qgmhMhEkaHG) and the "Website Project Workflow & Client Request Form" doc. Written 7 Oct 2026.

---

## Paste this into Claude Code

> Read `docs/AUDIT_FIXES_BRIEF.md` and carry out Pass 1 on a new branch `fix/audit-pass-1`. Work task by task in the order given, one commit per task. Change copy exactly as written in the brief. Don't touch anything listed under "Not in this pass". When done, run `npm run build` and `npm run lint`, then list any acceptance check you couldn't confirm.

---

## Decisions already made (don't reopen)

| Topic | Decision |
|---|---|
| Professional Website starting price | **RM3,000** (matches Home and planner). *Confirm with Wan before merging, see Open items* |
| Post-launch support | **14-day fix window, fixes only.** After that, a Care Plan or a new quote |
| Discovery call | **30 minutes**, all tiers |
| Review rounds | **2 consolidated review rounds**, all tiers |
| Design review | Design built straight into a **private staging site**. No wireframe or prototype stage |
| Payment | **50% to start, 50% on written approval of the staging site, before launch** |
| Timelines | Always "**from content received**" |
| Contact details | **tadalstudio.my@gmail.com** · **+60 19-417 6182** (phone and WhatsApp). See T10 |
| Tier names | Landing Page · Professional Website · Custom Web System (never "Business Website", "Professional Business Website" or "Advanced") |
| Voice | "We". Avoid: seamless, flawless, the right way, perfect website, single expert, handoff headache, go-live, small enhancements, review early and often |

---

## Tasks

### T1 · One price for Professional Website
- `app/services/page.tsx` ~L415: Professional card shows `RM1,500` → `RM3,000`.
- Check that `lib/planner-config.ts` and `lib/planner/planner-config-and-pricing.ts` agree on every tier and add-on price. There are **two configs** today: `PlannerClient` imports the first, `/api/plan` and `lib/email-templates.ts` import the second. Pick one source and make the other re-export it.
- **Accept:** the Professional starting price reads RM3,000 on Home, Packages, the planner and the estimate email.

### T2 · Packages page (`app/services/page.tsx`, also served at `/packages`)
- ~L160–171: Landing Page process is misnumbered (1-2-3-4-6-7, with "Day 6: Review & Feedbacks" before "Day 5: Launch & Support"). Replace with:
  1. Day 1: Plan · 2. Day 2: Structure · 3. Day 3: Design in staging · 4. Day 4: Build · 5. Day 5: Review · 6. Day 6–7: Launch
  (Days count from content received. Add a small caption under the list: "Days count from when we have all your content.")
- ~L209, ~L255: "One revision" → "2 review rounds".
- Professional Website deliverables: "Two revisions" (if present) → "2 review rounds".
- L302 heading "2. Professional Business Website" → "2. Professional Website".
- Timeline badges: "Live in 5 - 7 days" → "Live in 5–7 days from content received"; "Live in 10 - 14 days" → "Live in 10–14 days from content received".
- Add-on chip names must match the planner labels exactly (see T5).
- **Accept:** process steps run in order, no "revision" wording left, tier names match the decisions table.

### T3 · Home (`app/components/homepage-client.tsx`)
- L288 badge "Go-Live in 7 Days" → "Launch from 7 days".
- ~L599 Support step → "Fixes for 14 days after launch. Ongoing changes are covered by a Care Plan."
- Design step (process section) → "We map your pages and build the design straight into a private staging site you can click through."
- Build step: remove any "review early and often" / incremental-builds wording → "We build, connect integrations and run QA before you see it."
- Add one sentence under the process heading: "Your timeline starts once we have all your content. You review once on staging, in up to 2 rounds."
- FAQ ~L704 "Do you write the copy?" → "We polish the copy you give us for free. Want us to write it from scratch? That's the Copywriting add-on."
- FAQ ~L768 payment → "50% to start, 50% when you approve the staging site, before launch. Bank transfer in Malaysia; Stripe or Wise for international payments."
- FAQ "How fast can we launch?" → "Landing Page: 5–7 days. Professional Website: 10–14 days. Custom Web System: by scope. All timelines count from when we have your content."
- Add FAQ "How many changes can I ask for?" → "Two review rounds, each sent as one batch of comments from one person. Fixes like typos or broken links are always free. New pages or features are quoted separately."
- Add FAQ "What happens after launch?" → "We fix anything that's broken for 14 days. After that, a Care Plan covers updates, or we quote new work."
- **Accept:** no "30 days", "Go-Live", "small enhancements" or "on launch" payment wording left on Home.

### T4 · About (`app/about/AboutPageClient.tsx`)
- L125: remove "review early and often" (same Build copy as T3).
- L152: Support step → same copy as T3.
- L199 disclosure → "Before Tadal, our team led projects at Big 4 consultancies, GLCs and MNCs. Work from those roles is labelled 'prior role'."
- **Accept:** process copy is identical on Home and About.

### T5 · Planner (`app/planner/PlannerClient.tsx`, `lib/planner-config.ts`)
- L21: `step` starts at 2 and there is no step 1, so the label reads "Step 2 of 3". Short fix for this pass: change the label to `Step {step - 1} of 2` (or rename the states to 1 and 2). The full 3-step rebuild comes in Pass 2.
- L361–363: Proceed is disabled on Custom until a platform is chosen, with no explanation. Add helper text next to the button while it's disabled: "Choose a platform type above to continue." Link it with `aria-describedby`.
- L229: "Customize Your Business Website" → "Customize Your Professional Website".
- Rename add-ons so the planner and the Packages chips match. Use the planner's labels and update `app/services/page.tsx` L266–272, L395–401 to match. Remove chips for add-ons that don't exist in the planner (e.g. "Motion"), or add them to the planner config.
- Copywriting add-on description: "We write your page copy from scratch, structured to bring in enquiries. Polishing your own copy is free."
- **Accept:** every add-on on Packages exists in the planner with the same name, and Custom without a platform shows the hint.

### T6 · Contact (`app/contact/page.tsx`)
- L339, L346, L359: "15 minute" → "30-minute".
- Project type option "Business Website" → "Professional Website".
- "What happens next" list: add "Your timeline starts once we have all your content."
- **Accept:** no "15 minute" left anywhere (also check `app/schedule-discovery/page.tsx`).

### T7 · Metadata and old-brand leftovers
- `app/layout.tsx` L39, L69, L89 and `components/SEO.tsx` L16 description → "Websites for Malaysian businesses. Strategy, design and code in one team, with the price and launch date agreed before you pay."
- `app/layout.tsx` L94 and `components/SEO.tsx` L53 `@tukangdesign` → the current Tadal handle (**ask Wan**). If there isn't one, remove `twitter:site`.
- `app/layout.tsx` L100 and `components/SEO.tsx` L94 `YOUR_GOOGLE_VERIFICATION_CODE` → real code from Wan, or remove the tag.
- OG image `tukang-design-social-share.jpg` in `app/packages/layout.tsx`, `app/services/layout.tsx`, `app/solutions/page.tsx`, `app/blog/[slug]/page.tsx`: rename the file to `/tadal-social-share.jpg` (keep the image for now; it gets redesigned in the rebrand pass) and point every reference to it, including the `https://tukang.design/...` absolute URLs.
- Planner page: twitter:image currently resolves to the site root. Give `/planner` its own metadata with the OG image.
- `app/schedule-discovery/page.tsx` L225–228 `hello@tukangdesign.com` → `tadalstudio.my@gmail.com` (see T10). Remove the 📧 emoji.
- `app/booking-success/page.tsx` L133 WhatsApp text "Hi Tukang Design!" → "Hi Tadal Studio!"
- `lib/structuredData.ts` L179–180 social URLs: update if the handles changed (**ask Wan**).
- `app/components/Footer.tsx` L39: `© 2025` → `© {new Date().getFullYear()}`.
- `app/components/ClayBrowserMockup.tsx` L34 `https://yourdomain.com/` → `tadalstudio.com`.
- **Accept:** `grep -rni "tukang\|YOUR_GOOGLE\|yourdomain\|single expert\|flawless\|seamless" app components lib` returns only intentional matches.

### T8 · WhatsApp with context
- `app/components/NavigationBar.tsx` L199 and the floating WhatsApp button: add a prefilled `?text=` that includes the page, e.g. `Hi Tadal Studio! I'm on the Packages page and have a question.` Build the text with `encodeURIComponent` from the current pathname.
- **Accept:** WhatsApp opens with a message that names the page.

### T9 · Contrast and mobile overlap (small)
- Hero H1: the dimmed first line ("GET YOUR") renders `#3E5947` on `#131B16` = **2.28:1**. Either start the typing animation at full contrast or don't dim the text (needs at least 3:1 for large text).
- Mobile: the floating WhatsApp button overlaps the "Prices in MYR" toast and content on `/packages`. Add bottom padding to `main` equal to the button height + 16px, and stack the toast above the button.
- **Accept:** both checked at 375px wide.

### T10 · Contact details: one email, one number
Decided 7 Oct 2026:
- **Email:** `tadalstudio.my@gmail.com`
- **Phone and WhatsApp:** `+60 19-417 6182` (links: `https://wa.me/60194176182`, `tel:+60194176182`)

Today the code uses six different addresses and the old number. Replace every one:

| File | Now | Change to |
|---|---|---|
| `app/contact/page.tsx` | `hello@tadal.studio` ×2, `+60 17-406 2788` | new email, `+60 19-417 6182` |
| `app/privacy/page.tsx` | `hello@tukang.studio` ×2 | new email |
| `app/schedule-discovery/page.tsx` | `hello@tukangdesign.com` ×2, `60174062788` | new email, `60194176182` |
| `app/booking-success/page.tsx` | `studio@tukang.design` ×2, `+60 17-406 2788`, `+60174062788`, `60174062788` | new email, new number in all three formats |
| `app/booking/thank-you/page.tsx` | `studio@tukang.design` | new email |
| `app/components/WhatsAppFAB.tsx` | `60174062788`, `+60 17 406 2788` | `60194176182`, `+60 19-417 6182` |
| `app/components/NavigationBar.tsx`, `app/components/BookingSteps.tsx` | `60174062788` | `60194176182` |
| `lib/structuredData.ts` | `studio@tadalstudio.com`, `studio@tukang.design`, `https://tukang.design/…` URLs | new email; URLs → `https://tadalstudio.com`; add `telephone: "+60194176182"` |
| `app/api/contact/route.ts`, `app/api/plan/route.ts` | `syazwan@tadalstudio.com` (notification recipient fallback) | new email |
| `app/api/booking/*`, `app/api/leads`, `app/api/quote/accept`, `lib/notifications.ts` | `studio@tukang.design` as **recipient** or in email body text | new email |
| `lib/email.ts` L16, `lib/notifications.ts` L96 | `studio@tukang.design` as the **From** address | see note below |

**Sender vs recipient.** Gmail works as the **recipient**, the **reply-to** and the public contact. It can't be the **From** address when mail goes out through Resend or another provider, because those only send from domains you've verified.
- **Resend:** verify `tadalstudio.com` there, and send from an address like `estimates@tadalstudio.com` with `replyTo: "tadalstudio.my@gmail.com"`.
- **SMTP:** to send *as* the Gmail address, use Gmail's own server (`smtp.gmail.com:465`) with an app password on that account. Set `SMTP_USER`/`SMTP_FROM` to the Gmail address.

Also update these environment variables in Vercel: `CONTACT_TO`, `ADMIN_NOTIFICATION_EMAIL`, `NEXT_PUBLIC_BUSINESS_EMAIL` → `tadalstudio.my@gmail.com`.

- **Accept:** `grep -rnE "tukang\.design|tukang\.studio|tukangdesign\.com|tadal\.studio|syazwan@|studio@tadalstudio|74062788|406 2788|406-2788" app components lib` returns nothing.

---

## Not in this pass
- Merging Packages and Planner into one Pricing page, the 3-step estimator with a running total, sending the estimate to Contact.
- Cop Tukang visual system (colours, Familjen Grotesk / IBM Plex Mono, stamps).
- The 6-phase process with stamps on Home and About, and the industry-specific request form.
- Case study template changes.
- `app/booking/*` and `app/solutions/page.archived.tsx`, beyond the string fixes above. Check whether `/booking` is still linked before investing in it.

## Open items (need Wan before merge)
1. Confirm **RM3,000** as the Professional Website starting price.
2. Current social handles (X/Threads/Instagram), or remove them.
3. Google Search Console verification code.
4. ~~Public email~~ Decided 7 Oct: `tadalstudio.my@gmail.com`, phone and WhatsApp `+60 19-417 6182` (T10).

## Verification
- `npm run build` and `npm run lint` pass.
- Click through Home → Packages → Planner (all 3 tiers) → Contact at 1366px and 375px.
- Run the T7 grep.
- Test the WhatsApp link on one page from a phone: it should open a chat with +60 19-417 6182.
