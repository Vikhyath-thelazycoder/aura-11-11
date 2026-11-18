# Aura 11:11 implementation plan

**Status** Planning baseline updated 19 November 2026. This plan defines the shared storefront style, account portal, and admin-managed storefront and catalog. Confirm the intended source checkout before application work. The present working tree has pre-existing tracked application deletions.

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
| Personalization and gifting | Manage allowed options per variant, labels, input rules, swatches, fonts and uploads, price and lead-time adjustments, proof requirements, preview templates, gift wrap and notes. |
| Store operations | Manage supported delivery regions, calendar/cutoffs, operating copy, transactional templates and operational settings according to role. Finance and staff functions remain permission-scoped. |

All day-to-day configurable storefront content and catalog changes go through authorized admin screens without a code change or redeploy. Offer structured fields and approved presets to keep the mini pages consistent and accessible. Credentials, application code, financial records, and order history follow their existing protected workflows.

### Publishing and deletion

- **Content**. Save drafts, preview at desktop and mobile sizes, validate links and required assets, then publish a version. Support rollback, audit history, and conflict detection for concurrent changes. Public pages and search use published values. Refresh affected routes and indexes after publishing.
- **Products**. An admin can remove a product from sale by unpublishing or archiving it. Restore is available. Offer permanent deletion only for an unused draft with no dependent records. Check menu, homepage, collection, bundle, and active cart references. Require confirmation for deletion and retain the audit record. Preserve order snapshots, proof history and invoices for previous purchases.
- **Acceptance**. An authorized admin can change the wallpaper, hero, navigation and footer, create a page and product, edit variants and customization, then preview, publish, and roll back. An archived product stops accepting new orders while past purchases remain readable. Customer and unprivileged staff sessions cannot call any admin mutation.

## Sequencing and acceptance

| Phase | Deliverables | Exit criteria |
| --- | --- | --- |
| 0 · Scope and catalog | Confirm source baseline, launch SKUs, options, hero asset, lead times, policy owners, delivery inputs and provider accounts. | Pilot products have real media and production rules. Record owner decisions in the [decision log](PROJECT_DECISIONS.md). |
| 1 · Foundation and shared auth | Confirm framework and hosting, set up staging, DB migrations, shared authentication, server permissions, component tokens, audit, secrets and CI. | New sign-ups have customer permissions. Invited admins and staff land in the correct workspace. Direct access and role revocation tests pass. |
| 2 · Storefront and content editor | Shared page templates and components, homepage and 3D fallback, discovery and product views, admin editors for content, navigation, appearance and assets. | All storefront routes use the same design on mobile and desktop. An admin can preview, publish and restore content without deploying. |
| 3 · Catalog and personalization | Product and variant lifecycle, collection editors, inventory/capacity, configurable options, media privacy, previews, cart persistence. | Create, publish, edit, archive and restore representative SKUs. Removal keeps historical orders readable. Invalid options get clear errors. |
| 4 · Checkout and finance | Guest and signed-in checkout, server quote and delivery estimate, Cashfree integration, reservations, verification, invoices, refunds and reconciliation. | Both checkout paths work in sandbox. Duplicate and late payment events, failed payments, refunds and changed quotes leave one traceable result. |
| 5 · Atelier and staff | Staff work queues, proof revisions, production, QC/rework, packing, permissions and exception handling. | A proof-required order reaches packing with the correct approved version. Unauthorized staff cannot access unrelated data or privileged actions. |
| 6 · Shipping and communications | Shipment booking, labels, tracking, delivery exceptions, email and approved WhatsApp flows. Validate the arrival-date filter against sample routes and production schedules. | Tracking and notifications use the intended buyer/recipient information. Retries are safe. Enable Shop by Arrival Date when estimates are dependable. |
| 7 · Launch readiness | Acceptance testing, accessibility and performance checks, restore drill, reconciliation, staff training and staged release. | Owner signs off on catalog, editable content and policies. Finance checks billing. Staff complete representative end-to-end orders. |

Build against isolated fixtures while actual product details arrive. Before enabling payments, billing, or delivery, verify provider capabilities against current official documentation and the selected merchant accounts. Use AgyLite planning and verification to track phase acceptance.
