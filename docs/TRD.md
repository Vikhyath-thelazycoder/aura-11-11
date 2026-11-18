# Aura 11:11 Technical Requirements Document

**Status** Proposed architecture. Provider account capabilities, deployment runtime, and applicable billing policy will be verified during implementation before production configuration.

## Architecture and ownership

- **Web**. A TypeScript React storefront, admin shell, and staff shell backed by server handlers. Evaluate Next.js for one deployment with indexable catalog routes and protected handlers. The historic baseline used Vite; if retained after code audit, pair it with an explicit server API that has the same trust boundaries. Decide at foundation before feature work.
- **Design system**. Build one shared theme and component library across storefront routes from 03 Gift Bar and 05 One of One. Use core display, large condensed display, and UI typography roles with licensed fonts. Candidate hero uses Three.js with optimized GLB and lazy loading. Deliver a static poster before WebGL, accessible controls for view selection and rotation, and honor reduced motion.
- **Data**. Proposed Supabase/Postgres for durable commerce, one Auth identity system for customers, admins and staff, and object storage for media. Keep customer uploads, proofs, billing documents and exports private. Public product media can use a separate published media area.
- **Server and workers**. Server owns pricing, stock/capacity, permissions, immutable purchase snapshots, transitions, provider credentials, and webhook receipt. A jobs worker consumes durable events for notifications, expiring holds, reconciliation, label retries, tracking refresh and cleanup. Monitor health and failures.
- **Providers**. Cashfree is planned for checkout. Keep payment, shipping, email and WhatsApp behind capability-specific interfaces. Evaluate Shiprocket for shipment operations, Blue Dart and Ekart through available accounts or integrations, Resend for email, and an approved WhatsApp Business provider. Keep the provider identity on each record for reconciliation. Store credentials in server-side environment or deployment secrets.

## Backend location

This checkout has no verified deployed Aura backend. The historical commit shows a Vite storefront. Javali is a separate reference project. The proposed Aura backend lives in this repository as protected server routes and server-only commerce modules. If Next.js is selected, use `app/api/` for handlers and `src/server/` for business logic and adapters. Keep database changes under `supabase/migrations/` and jobs in a server-side worker, with the deployment and scheduling location decided in foundation. If Vite is selected, put the API and worker in a separate server package in this repository.

## Data requirements

| Domain | Entities and invariants |
| --- | --- |
| Catalog and CMS | Product, variant/SKU, collection, product media, page/section/menu revisions, theme preset, publish pointer, pricing and configuration template version. SKUs have stable identities and changed published slugs preserve redirects. Historical orders retain their purchase snapshots. |
| Inventory and production capacity | Stock movement ledger, reservation, component/BOM rules where needed, capacity calendar. Keep time-bound holds and prevent oversell with atomic reservation updates and constraints. |
| Cart and quote | Cart, line, selected options, shipping estimate and quote expiry. Revision checks prevent stale edits. Quotes carry fulfillment assumptions and amounts in integer minor units with currency. |
| Order and people | Order, immutable priced line snapshot, frozen customization, buyer contact, recipient and shipping snapshot, gift note, status history. Keep minimal customer and recipient data separately where access differs. |
| Personalization | Template versions, upload records, preview metadata, proof revisions, approvals, production artifact and job. Store object keys and ownership, retain only according to approved policy. |
| Payment and billing | Attempts, provider references, authorized adjustments, refunds, invoice and credit document snapshots, reconciliation records. Use unique provider event/reference constraints and idempotent side effects. Preserve issued record and audit history. |
| Delivery and messages | Shipment and package, booking attempt, carrier/AWB, tracking event, notification preference, outbox and message attempt. Order-to-shipment relationship allows future multiple parcels. |
| Access and audit | Staff identity, role, assignment, customer consent, audit events and state timelines. Store actor, action, scope and reason for privileged changes, with sensitive fields redacted. |

## Internal interface sketch

| Interface | Contract |
| --- | --- |
| Catalog and search reads | Public published data and allowed choices. No costs, supplier notes, private assets, or stale unpublished prices in responses. |
| Shared authentication | Public sign-up assigns customer access. Owner-authorized invitations grant staff and admin roles. Resolve roles server-side and validate checkout return destinations. Recheck access on privileged requests and after role revocation. |
| Content publishing | Preview drafts privately. Validate assets and structure, publish the new version atomically, invalidate changed pages and search entries, and audit the actor and version. Rollback republishes a valid previous version. |
| Catalog mutations | Recheck permissions and dependencies before publish, archive, restore or delete. Permanent deletion applies to unused drafts. Reject archived SKUs when repricing an active cart and preserve historical orders and issued documents. |
| Customization and media | Issue restricted upload capability and validate type, dimensions, size, authorization and scan state before use. Render using template version and normalized fields. Return actionable validation errors. |
| Quote and checkout | Inputs are SKU, configuration references, quantities, destination and permitted incentive code. Server returns authoritative price breakdown, ETA, quote version and expiry. Checkout mutations carry idempotency keys, and repeat submissions return the prior result for the same input. |
| Order and proofs | Authenticated account or private signed opaque customer link with expiry and revocation. Approval uses an expected revision and rejects stale versions. Sensitive URLs excluded from analytics and logs. |
| Ops actions | Server-checked permission and assignment. Update via explicit transitions with expected prior state or version. Financial and privilege changes require an audit reason and prescribed approvals. |
| Provider webhooks | Authenticate against the selected provider contract, persist a deduplicated event before acknowledgment, verify critical fields, and reconcile missing/out-of-order events. Use shared finalization for webhook and return verification. |
| Outbox | Write business event and outbox record in the same transaction. Worker leases due attempts, uses stable dedupe keys, records results and handles retry, exhausted attempts and manual review. For unknown external outcomes reconcile before repeating side effects. |

## Privacy and security

Use least-privilege roles and server enforcement on each back-office request. Apply DB access policies as appropriate and test for cross-order and cross-role access. Keep admin credentials server-side. Restrict private upload downloads with scoped, expiring links. Validate real media, remove unneeded metadata where safe, and clean abandoned uploads on an approved schedule. Rate-limit public writes and access-token verification. Redact PII, private images, notes and payment data in logs and analytics. Require staff MFA where supported. Use payment-provider checkout so Aura does not handle raw card data. Define retention, deletion exceptions and restore access before launch.

## Reliability and verification

- Unit-test pricing, option compatibility, capacity and ETA calculations, state projections, role rules and message triggers.
- Integration-test concurrent checkout, stale quotes, duplicate and delayed provider callbacks, expired reservations with a late capture, upload isolation, stale proof approvals, rework, repeated refund attempts and shipment retry.
- Browser-test standard/review orders, keyboard/touch and slow mobile, reduced motion, no-WebGL fallback, staff access, and buyer/recipient privacy. Confirm public pages expose approved metadata and assets.
- Staging fixtures simulate all providers before production onboarding. Close one test order from quote through proof, invoice, shipment and refund. Exercise backup restoration and production rollback. Capture deployment metrics including failed jobs, stuck proofs, pending payments, shipping exceptions and delivery estimates.
