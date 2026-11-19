# Application route map

These are proposed URL families for the fresh scaffold. Braces denote a parameter. Package 1 owns the shared routing contract. Each feature package implements its routes and tests through the browser and the corresponding server handlers. Exact provider callback paths depend on the chosen integration.

| URL family | Who can use it and what it does | Cache and recovery |
| --- | --- | --- |
| `/`, `/shop`, `/search`, `/collections/{slug}`, `/products/{slug}` | Anyone can browse published catalog data. Each magnet, frame and hamper uses the same product route for As shown and Personalize. Keep color selection and eligible options on that page. | Shared caches may contain published content only. Load private options, saved inputs and location-specific quotes separately. Offer a search reset, a canonical redirect after a rename, or a missing-item page. |
| `/pages/{slug}`, `/help`, `/policies/{slug}`, `/contact` | Anyone can read published content. CMS editors choose slugs inside the appropriate family. | Refresh public pages and redirects on publish and rollback. Drafts have a separate preview route. |
| `/auth` | Shared entry for sign-in, customer registration, verification, recovery and invited staff. Validate the intended internal destination and its permissions after sign-in. | Session-specific, no-store. Expired sessions return here. Resume an authorized checkout with its bag intact or use the permitted workspace. |
| `/bag`, `/checkout`, `/checkout/return` | The guest or signed-in buyer owns the cart and pending order. The return page retrieves server-verified payment status. | No-store. Reload recovers the same attempt. A pending outcome shows its reference and a changed quote allows correction. |
| `/account`, `/account/orders/{id}` | Signed-in buyer with ownership of the order. Include history, proof, tracking, invoice and support actions as applicable. | No-store. Recheck ownership on every read, file and write. Use a recovery response that conceals another buyer’s order. |
| `/track`, `/access/{token}`, `/files/{id}` | Public tracking entry offers buyer verification. Private order tracking, guest claims, proofs, invoices and underlying files require the appropriate buyer or authorized staff access. Bind customer links to purpose, resource and buyer. | Private responses use no-store and no-referrer. GET opens a read-only landing. Expired or revoked access offers re-verification. Approval requires an explicit protected submission for the current revision. |
| `/admin/…`, `/preview/…` | Authorized owners and staff with the specific publishing, catalog, finance or role-management permission. Draft assets require the same checks as draft pages. | No-store for back-office and preview responses. Bypass shared caches. Recheck permission and MFA for privileged access. |
| `/staff/…` | Production, QC, packing, fulfillment, support and finance see permitted queues and assigned resources according to operations rules. | No-store. Recheck permissions on direct visits and mutations, including after role removal. Show a recoverable conflict for a stale job transition. |
| `/api/…`, including `/api/webhooks/{provider}` | Server handlers enforce the same resource rules as the UI. Provider callbacks authenticate the sender and persist deduplicated events. | Private and mutation responses use no-store. Repeated or delayed callbacks converge on one recorded outcome. |

## Naming and navigation checks

1. Reserve the system paths and prefixes in this table. CMS inputs accept a single normalized slug within their assigned family. Validate on save and publish, including redirects, duplicate names within a family, and names reserved by the system. An editor cannot publish over checkout, auth, private files, or API paths.
2. After a published rename, the old URL redirects directly to the current canonical public URL. Test a second rename, a conflicting redirect, rollback and an unpublished destination. Past orders keep their frozen records when a product is archived.
3. From a fresh browser session, follow a menu link, load its destination directly, refresh, then use Back. Repeat checkout across sign-in and interruption. Confirm an invalid return target falls back to an authorized internal destination.
4. Check private URLs and files as the intended buyer, another buyer, a revoked staff user and an anonymous visitor. Open a draft before and after a public visit and inspect the response cache policy. Keep tokens and private URLs out of analytics, logs and search indexes.

The [technical requirements](TRD.md#controls-at-trust-boundaries) define verification, uploads, revocation and private files. The [operations roles](OPERATIONS.md#workspaces-and-permissions) determine back-office authority.
