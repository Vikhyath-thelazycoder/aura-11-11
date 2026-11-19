# Aura 11:11 implementation plan

**Status** Ready for engineering intake. The local storefront design preview is implemented and ready for review. Production application work follows design review. This plan uses the [PRD](PRD.md), [TRD](TRD.md), [system flow](systemflow.md), and [launch readiness review](LAUNCH_READINESS.md) as scope and acceptance references. The fresh application baseline is confirmed.

## First delivery · Frontend design preview

Review the homepage and three linked product pages in `storefront/`. Use Blender-rendered studio imagery and illustrative products, prices and finishes to review composition, motion, mobile layout, both purchase modes and the local demo bag. Prioritize this review before platform setup. The numbered packages below govern the subsequent production implementation.

## Products covered by this plan

Build one catalog and product-page flow for fridge magnets, photo frames and gifting hampers. Each listing has an approved studio design the buyer can order as shown and options they can personalize. A color selects a physical variant in either mode. A hamper is a sellable gift with its own contents and packing instructions. Additional gifts use the same product model. The [product catalog](PRODUCT_CATALOG.md) holds the fields and open commercial decisions.

## One storefront design across all pages

| Reference | What to build from it |
| --- | --- |
| [03 · Gift Bar](../design/homepage/03-gift-bar-concept.png) | Use the heavy geometric headline style, readable body and navigation type, compact gift finder, photo-led product grid, solid buttons, and grounded footer. Use its warm paper, forest, marigold, and mint as the initial theme preset. |
| [05 · One of One](../design/homepage/05-one-of-one-concept.png) | Use oversized condensed display typography for the homepage hero and selected editorial headings. Borrow the compact personalization rail for initials, swatches, product controls, and the main action. |
| [Design record](../design/homepage/README.md) | Keep previous mockups as reference history. Use approved catalog photography and 3D assets for the actual products. |

The PNGs are visual references. Match their letterforms with licensed fonts during implementation. Use three shared typography roles: broad, bold headings from 03, condensed display type from 05, and readable UI and body text. Keep display type responsive so long titles wrap and product imagery does not obscure the heading.

Use one component library and shared theme for the homepage, search, collections, product details, customization, bag, checkout, sign-in, account, tracking, help and policies. Interior pages use the same typography, buttons, links, inputs, spacing, image treatment, header and footer. Checkout and account screens can use simpler layouts while keeping the same visual system. Back-office screens reuse the typography and controls at a higher density suitable for tables and work queues.

## One account portal

1. Build a shared `/auth` entry for sign-in, customer sign-up, account verification, password reset, and sign-out. Customers, staff, and admins use the same authentication service and entry point.
2. Give public sign-ups customer permissions by default. An authorized owner invites staff and grants elevated roles. Resolve roles on the server and route users to their customer account, intended checkout, admin or staff workspace as permitted. A staff account can use its ordinary customer capabilities where appropriate.
3. Keep checkout on the storefront. Support the existing guest checkout plan and return signed-in customers to their bag or checkout without losing personalization. Validate any return destination and handle expired sessions consistently.
4. Check permissions on every protected read and write, including direct URL and API access. Role removal must end back-office access. Cover registration, invitation, logout, session expiry, reset, safe checkout return, and cross-account/role boundaries in end-to-end tests.

## Admin panel and editable storefront

| Admin area | Editable controls |
| --- | --- |
| Appearance | Homepage wallpaper or background image and color, desktop/mobile variants, crop or focal point, overlay, alt text where meaningful, and approved sitewide theme and typography presets. |
| Homepage and hero | Headline, supporting copy, CTA labels and links, image or video, approved 3D asset and poster, featured product, section visibility and order, gift finder labels, product groupings and editorial blocks. |
| Navigation and footer | Logo and site identity assets, menu labels and links, grouping, order and visibility, announcement bar, footer columns, contact and social links. |
| Pages and search metadata | Create or edit campaign, category, help and policy pages using shared templates. Edit slugs, titles, body blocks, media and SEO metadata. Maintain redirects for moved live pages. |
| Catalog | Add, duplicate, edit, preview, publish, unpublish, archive and restore products, collections and variants. Edit SKU, descriptions, photography and 3D media, pricing, inventory or made-to-order capacity, shipping profile, tags and merchandising placement. |
| Personalization and gifting | Manage the studio design, hamper contents where applicable, allowed personalization options per variant, labels, input rules, swatches, fonts and uploads, price and lead-time adjustments, proof requirements, preview templates, gift wrap and notes. |
| Coupons and promotions | Create and schedule offers, pause or archive codes, set eligibility and caps, and review redemption and discount totals. See [Coupons and Promotions](PROMOTIONS.md). |
| Store operations | Manage supported delivery regions, calendar/cutoffs, operating copy, transactional templates and operational settings according to role. Finance and staff functions remain permission-scoped. |

All day-to-day configurable storefront content and catalog changes go through authorized admin screens without a code change or redeploy. Offer structured fields and approved presets to keep the mini pages consistent and accessible. Credentials, application code, financial records, and order history follow their existing protected workflows.

### Publishing and deletion

- **Content**. Save drafts, preview at desktop and mobile sizes, validate links and required assets, then publish a version. Support rollback, audit history, and conflict detection for concurrent changes. Public pages and search use published values. Refresh affected routes and indexes after publishing.
- **Products**. An admin can remove a product from sale by unpublishing or archiving it. Restore is available. Offer permanent deletion only for an unused draft with no dependent records. Check menu, homepage, collection, bundle, and active cart references. Require confirmation for deletion and retain the audit record. Preserve order snapshots, proof history and invoices for previous purchases.
- **Acceptance**. An authorized admin can change the wallpaper, hero, navigation and footer, create a page and product, edit variants and customization, then preview, publish, and roll back. An archived product stops accepting new orders while past purchases remain readable. Customer and unprivileged staff sessions cannot call any admin mutation.

## Work packages and dependencies

| Package | Depends on | Working completion evidence |
| --- | --- | --- |
| 0 · Fresh baseline and pilot scope | Current planning docs | Fresh application baseline recorded and a fixture-backed pilot scope defined |
| 1 · Platform and shared auth | 0 | Staging build, database migration check, and server-side account and role tests |
| 2 · Storefront and CMS | 1, with sample content | Mobile and desktop storefront walkthrough, plus CMS publish and rollback |
| 3 · Catalog and personalization | 1, shared components from 2 | Published sample SKUs, private asset tests, and reproducible cart configurations |
| 4 · Checkout, promotions and finance | 3, delivery quote contract | Repeatable standard checkout with coupon and refund in sandbox |
| 5 · Atelier and order support | 1 and 3. Payment gating depends on 4 | Paid proof-required order through review, production, quality check and packing |
| 6 · Shipping and messaging | Order events from 4 and packing from 5 | Label and tracking exercise, notifications, and validated arrival estimates |
| 7 · Pilot and launch | 2–6 plus production configuration | End-to-end evidence, approved policies, and a signed-off launch decision |

Packages 2 and 3 can overlap once they agree on the [product route](ROUTES.md), shared components and a product-page contract covering purchase mode, variant, included contents, option validity, price, availability, lead time and proof mode. Render the three pilot products through that contract before the teams diverge. Packages 4 and 5 can develop against fixtures. The live checkout and arrival estimate depend on the verified quote and fulfillment rules from package 6.

### 0 · Fresh baseline and pilot scope

- [x] Confirm a fresh application scaffold in the existing repository. The previous Vite storefront is available in Git history at `d2adb80`.
- [ ] Choose the package manager and evaluate the proposed TypeScript/Next.js and Supabase setup against deployment needs. Use the scaffold commit to record the new scripts, initial build result, and ignore rules for dependencies, build artifacts, and local environment files. See the [TRD](TRD.md).
- [ ] Define three fixtures, each available as shown and personalized: a fridge magnet with a test photo and proof revision, a frame with five labeled color variants including one unavailable finish, and a gifting hamper with listed contents and an optional printed message. These fields and stock levels are test data. Supply sample media and options, a stocked or capacity-limited variant, a coupon, a serviceable and unserviceable pincode, and a carrier exception.

- [ ] Verify the Git handoff from a clean checkout of the handoff commit. Both promotion and readiness documents must be present, all local plan links must resolve, and local environment files and build output must be ignored before provider setup.

**Exit check.** Record the framework, package manager and locked install command. Verify the scaffold builds from a clean checkout and retain the command and revision. Fixture products cover both order paths without becoming public catalog entries.

### 1 · Platform and shared auth

- [ ] Establish staging and production boundaries, migration and seed commands, deployment checks, structured logs, and private and public storage. After a locked dependency install, CI and local development run the same verification command for lint, type checks, unit and integration tests, a production build and a browser smoke test against that build. Document both commands in the scaffold README. Record dependency and secret scan results in CI.
- [ ] Implement shared account entry, guest session, verification, password recovery and safe return to checkout. Add owner invitations and scoped admin, staff, finance and support roles. Enforce roles in server actions and data access.
- [ ] Establish the shared page shell and design tokens. Define the delivery quote interface and documented fixture responses. Set up a test account for each role and provider adapters that simulate pending, failed, and successful operations.

- [ ] Provision the first owner once, require MFA for privileged access, protect the last owner, and rehearse recovery and session revocation. Establish buyer verification and a read-only private-link landing page shared by proofs, guest claims and billing documents. Apply the private-page and file controls in the [TRD](TRD.md).

**Exit check.** The clean-checkout CI run passes before storefront feature work begins. Exercise the [route map](ROUTES.md) for each implemented route family. A public sign-up receives customer access. An invited staff user sees only permitted work. Revocation removes access. A customer cannot load another user's data or call admin actions directly.

### 2 · Storefront and CMS

- [ ] Build the Gift Bar and One of One component system. Deliver home, collections, search, product detail, bag, account, tracking, help, policy pages and checkout shells. Show both purchase modes on the shared product page, labeled frame swatches and itemized hamper contents. Include search filtering, clear empty and unavailable states, and published metadata and redirects.
- [ ] Add a product poster first, then load the 3D hero when supported. Keep rotation and view controls accessible and shopping usable with reduced motion or no WebGL.
- [ ] Build admin editing for desktop and mobile wallpaper, hero, navigation, footer, pages, merchandising and approved theme presets. Implement draft preview, validation, publish, refresh of affected public pages and rollback. Start with fixture content and replace it during catalog onboarding.

- [ ] Enforce allowed link destinations, safe text rendering and draft access on both page and media routes. Verify draft previews bypass shared caches before and after a public visitor loads the same route.

**Exit check.** Review home and product-detail renders at 360px, 390px and 1280px with the [storefront UI rubric](../design/UI_REVIEW.md). Retain approved baselines and the primary-action results. An authorized admin can change the wallpaper, hero and navigation, preview them privately, publish without redeploying, and restore the previous version. Private drafts stay out of public search.

### 3 · Catalog and personalization

- [ ] Implement product and variant lifecycle, collections, stock and production capacity, source media, fulfillment fields, and versioned customization templates. Validate both purchase modes before publication. Store color availability by variant and version the hamper contents and quantities. Add archive and restore.
- [ ] Add input and combination validation, private uploads and crop where needed, a preview, eligible add-on prices, and clear proof expectations. Carry each line's own configuration and item price through the bag.
- [ ] Add product-page delivery checks against the quote contract. Keep valid personalization when the buyer corrects quantity, variant, address, code, or other checkout details. Preserve old orders when a product or template changes.

- [ ] Gate previews, downloads and production files on a passed media scan. Track original and derived files through expiry, deletion and authorized holds. Exercise the completed-order deletion procedure with support.

**Exit check.** Exercise all three pilot products in both modes. Add the same frame color as shown and personalized as separate lines. Switch a personalized magnet back to As shown and verify its quote, bag and production brief omit the private photo and custom fee. Recover from a validation error with valid fields preserved. Automate configured-line and private-file access checks alongside this feature. Update their catalog versions and verify that a seeded historical order keeps its accepted values. Malformed input and unauthorized asset access are rejected. Archived products cannot be added or purchased from an existing bag.

### 4 · Checkout, promotions and finance

- [ ] Implement authoritative quotes, delivery estimates, price breakdown, buyer and recipient fields, gift notes, stock or capacity holds and order snapshots. Freeze the selected mode, variant, effective artwork and hamper contents per line. Reserve a prepacked hamper or the quantities in its component list according to its stock policy. Support guest and signed-in checkout with clear messages if a quote changes.
- [ ] Build [Coupons and Promotions](PROMOTIONS.md) in the admin and checkout. Support one eligible code per order, schedule and cap checks, atomic reservation at checkout, one redemption per verified order, and frozen line and shipping allocations for billing.
- [ ] Integrate Cashfree in sandbox. Verify payment state and amount on the server, handle pending returns and verified callbacks, deduplicate finalization, and reconcile late captures. Add the approved invoice/receipt and refund workflows with support for partial refunds.
- [ ] Add a customer order area for history, proof links, tracking, invoice and support. Provide secure order access or recovery for guests. Keep invoice and price details with the buyer in gift orders.

- [ ] Link guest orders only after a fresh order-specific challenge to the buyer. Preserve coupon holds and redemptions across registration. Add atomic refund balance reservations and a finance dispute queue with deadlines, evidence and settlement matching.

**Exit check.** Record fixture-backed checkout results separately from the Cashfree sandbox order, refund and reconciliation. Cover payment retries and refund balance limits in the package tests. Both account paths can pay. Last-slot contention, expired holds, stale quotes, duplicate callbacks and interrupted returns leave consistent orders and coupon counts. Finance can explain the exact amounts charged, discounted and refunded.

### 5 · Atelier and order support

- [ ] Build per-line work orders, assignments, due dates, proof revisions, private approval, and audit history. Production is released only when the payment and any required version-specific approval are valid.
- [ ] Build production, quality check, rework and packing flows. Give operators the studio design or buyer-approved inputs for each line, selected frame color, hamper pick list, gift note and packing requirements. Separate staff views from sensitive finance details.
- [ ] Give support a buyer-safe order timeline, issue intake and escalation for delays, revisions, damage, cancellation, remake and refund. Define operational ownership for aged proofs, low stock and saturated production capacity.

- [ ] Freeze each line’s cancellation cutoff at checkout. Make eligible cancellation and production start compete for one committed transition and show support which action succeeded. Require deliberate buyer approval of the current proof revision.

**Exit check.** A revision can replace a proof and needs its own approval. Staff can complete an order through packing, recover from a failed quality check and handle a support case with the appropriate role.

### 6 · Shipping and messaging

- [ ] Configure one verified delivery integration first. Use owner-supplied origin, calendar and package profiles to calculate handling and transit separately. Check coverage, mixed-item estimates, dispatch cutoffs and what happens when estimates are unavailable.
- [ ] Implement booking, labels, pickup/handover, tracking updates, and a carrier exception queue. Keep shipment state separate from payment and proof state.
- [ ] Wire transactional email and configured WhatsApp through the outbox. Verify template, audience and link permissions on confirmation, proof, delay, shipment and refund. Retry safely and surface failures to staff.
- [ ] Compare quoted arrival with observed timing for representative locations, stock and made-to-order items, and proof delays. Enable **Shop by Arrival Date** only where the estimate is dependable.

- [ ] Record the quoted latest arrival for every pilot order and evaluate the [arrival-date pilot gate](LAUNCH_READINESS.md#arrival-date-pilot-gate) by service area and fulfillment type. Include a basket with ready stock and an item awaiting proof.

**Exit check.** Record carrier integration evidence separately from fixture quotes and Cashfree results. A real integration test or authorized test shipment reaches label and tracking successfully. Keep ordinary pincode lookup available with an estimate or an unavailable message while the date filter awaits pilot evidence. Verify a carrier outage or failed delivery, notification retry, and accurate buyer versus recipient content.

### 7 · Pilot and launch

- [ ] Replace fixtures with approved catalog and policies. Configure live merchant accounts, domain, storage, backups and operational alerts. Verify staging and production configuration are isolated.
- [ ] Collect the separate fixture checkout, Cashfree sandbox, carrier integration and arrival-date pilot results. Record revision, environment, reviewer and outstanding decisions for the applicable release scope.
- [ ] Run the [readiness checks](LAUNCH_READINESS.md) and the end-to-end cases below. Check mobile and keyboard shopping, product visibility, data access, billing reconciliation, restore and release rollback.
- [ ] Launch a small pilot with named support, finance and fulfillment owners. Review where buyers drop out, proof turnaround, dispatch delays, arrival accuracy, coupon failures and refunds. Expand after repeatable order handling.

- [ ] Rehearse the [restore drill](OPERATIONS.md#restore-drill) with finance and fulfillment. Capture evidence of provider reconciliation before resuming workers or customer writes.

**Exit check.** The owner confirms catalog and policies, finance confirms receipts and refunds, and staff can handle expected exception cases. Keep a release record with test results and recovery owners.

## End to end release cases

| Case | Evidence to capture |
| --- | --- |
| Mixed product configurations | Order a frame in the same finish in both modes, a personalized magnet and an as-shown hamper. Verify distinct totals and instructions, version-specific magnet approval, and exact hamper quantities at packing. |
| Guest order with a coupon | Correct quote and funds captured, one redemption, buyer invoice, recipient-safe packing and tracking, secure guest order access |
| Signed-in proof-required order | Photo or text saved privately, revision requested and approved, correct work order produced, QC and packing complete |
| Payment interruption or late capture | Same order reference after restart or retry, one finalized payment, correct stock/coupon holds and a traceable reconciliation outcome |
| Discounted partial refund or eligible remake | Approved reason and amount, recorded discount allocation, consistent buyer and finance records, replacement tracking when applicable |
| Shipping exceptions and arrival filter | Serviceable and unserviceable destinations, recalculation after proof delay, recovery or clear fallback when promises cannot be supported |
| Admin publish and security | Audited preview, publish and rollback, catalog archive with past orders intact, direct-access denial for unauthorized roles |
| Mobile and accessibility | Browse, personalize and pay under reduced motion and without WebGL. Confirm keyboard navigation and understandable validation and status changes. |

### Audit acceptance cases

| Package | Exercise in staging or the pilot | Passing result |
| --- | --- | --- |
| 1 · Owner access | Bootstrap twice, concurrently remove owners, then recover a lost MFA device. | Bootstrap succeeds once. One active owner remains. Old sessions lose access and the recovered owner enrolls a replacement factor. |
| 1, 4, 5 · Private links | Open proof and invoice links in a message preview, then as an unintended recipient and as the verified buyer. Repeat with expired and revoked links. Inspect private page and file responses. | Only the buyer sees the resource. No preview approves work. A deliberate submission approves the displayed current revision once. Responses bypass shared caching and send no referrer. |
| 2, 3 · Content and photos | Try a disallowed URL and markup in gift text, fetch a private draft as a public visitor, and attempt to preview or manufacture from a pending or failed scan. Exercise photo deletion with an expired file and an active hold. | Unsafe links are rejected, text renders literally, drafts and quarantined files stay private, and support can show which files expired or remain held and why. |
| 4 · Buyer identity | Use a capped coupon as a guest, register, then claim the order while a second checkout tries the same code. | Proof of the original buyer contact is required. A matching email alone grants no access. The order and redemption keep a single verified buyer identity. |
| 4, 5 · Money and production | Submit two refunds whose combined amount exceeds the balance, simulate a timeout, and race cancellation against engraving start. Open a dispute on a payment with a pending refund. | Reserved plus completed refunds stay within the amount paid. Each line has one winning transition. Finance sees the overlapping adjustment and deadline before sending money. |
| 4, 7 · Cashfree and recovery | Retain a verified Cashfree sandbox order, refund and provider reconciliation. Restore a backup predating a capture, refund and shipping label, then replay outstanding events. | Finance and fulfillment match each external reference once. Replay sends no duplicate refund or label. Sign-off precedes reopening. |
| 6 · Arrival dates | Exercise a mixed basket, proof delay, missed deadline and loss of carrier service. Evaluate the recorded pilot sample. | The basket reflects its last ready item. The date filter is hidden where coverage or timing fails the agreed threshold. |

## Remaining owner inputs

| Input | Needed for |
| --- | --- |
| Sellable magnet designs, five frame color names, hamper contents, both purchase modes’ assets, enabled options, prices and stock/capacity | Pilot catalog, final hero asset and production templates |
| Pickup location, service regions, working days, cutoffs, production lead times and approval of pilot thresholds | Quotes, labels and Shop by Arrival Date |
| Proof turnaround, per-line cancellation cutoffs, photo retention periods, damage and remake handling, invoice fields and coupon policy | Buyer terms, production workflow, receipts and refunds |
| Merchant and carrier accounts, email sender and WhatsApp setup, named recovery, privacy, finance and fulfillment owners | Provider testing, live configuration and launch sign-off |

Start foundation work from the fresh repository baseline. Fixtures can cover most storefront, catalog, promotion, and staff development while the real catalog and provider inputs are collected. Record outstanding owner decisions in the [decision log](PROJECT_DECISIONS.md). Verify provider capabilities against the selected accounts and current official documentation before using them in production.

## After the pilot

Prioritize verified reviews and private saved customizations if pilot behavior supports them. The [post-pilot product scope](PRD.md#after-the-pilot) tracks expansion candidates until their catalog and operational rules are ready.
