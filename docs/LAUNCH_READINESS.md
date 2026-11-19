# Storefront launch readiness review

This is a planning audit of the current product, architecture, workflow, catalog, admin and implementation documents, with the older Aura plans and storefront reference notes used for context. The items below describe gaps or details to verify during implementation. Working storefront or backend behavior has not been verified. Implementation will start from a fresh scaffold.

## Before the first public orders

| Area | Gap or decision to close | Acceptance |
| --- | --- | --- |
| Launch catalog | Verify as-shown and personalized purchases for each magnet, frame and hamper listing. Confirm real SKUs, variants, sellable options, rights-cleared photos, prices, packed dimensions, stock or made-to-order capacity, lead times, and examples of finished customization. | Every live item has a complete product record and an approved preview or sample. Stock and capacity rules are configured before publication. |
| Discovery and product pages | Finish mobile search and filtering details, out-of-stock states, no-result recovery, and the total price and delivery range as options change. | Buyers can recover from a failed search, see available variants and charges, and check delivery before reaching checkout. |
| Checkout and promotions | Scope [Coupons and Promotions](PROMOTIONS.md) alongside guest checkout, verified payment and cart recovery. Define what happens when a changed cart, price, availability or pincode invalidates a quote. | A buyer can reprice and correct checkout without re-entering valid gift details. Payment, coupon discount and order records agree after interruption or retry. |
| Account and support | Define the customer order area under the shared sign-in portal. Give buyers access to their own history, pending proof, invoice, tracking, and an order-specific support link. Provide a secure guest access or recovery path. | Guests can reopen an order and signed-in buyers can find orders without exposing another buyer’s details. Support has one timeline and an assigned next action. |
| Personalized order policies | Set when edits and cancellation close, how proof delays change ETA, and how staff handle damage, incorrect work, remake, return and refund requests. Publish the applicable rules on product and checkout pages and in help. | Staff can handle a proof revision, a damaged gift and a partial refund through one agreed process. Buyer and recipient messages follow gift privacy rules. |
| Delivery and order exceptions | Confirm pickup location, cutoffs, nonworking dates, capacity, provider coverage and package profiles. Decide how mixed-item orders are estimated and handled at launch. Test representative pincodes and proof-required orders. | The PDP and checkout communicate a credible range. Staff can handle failed delivery and carrier returns. Enable Shop by Arrival Date where the estimates are reliable. |
| SEO and shareability | Define product and collection titles, share images, canonical URLs, sitemap, redirects and handling for discontinued pages. Keep public product and offer markup in sync with visible pricing and availability. [Google merchant listing guidance](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing) | A representative product renders meaningful metadata and current information. Hidden drafts and private links stay out of the public index. |
| Accessibility and mobile performance | Use WCAG 2.2 AA as a practical target. Test keyboard and screen-reader access, clear field errors, status announcements, checkout authentication, reduced motion and the static 3D fallback on a slow mobile connection. [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) | The core order journey works with touch and keyboard. Errors are understandable and the 3D experience does not block shopping. |
| Trust and support content | Confirm business and support contact details, delivery and return policies, privacy terms, and help for photo quality, proofs and gift orders. Publish only actual product claims and verified reviews when enabled. | Product pages and confirmation messages direct buyers to the right help before and after payment. |
| Operational readiness | Assign owners to low stock, saturated production capacity, aged proofs, unresolved payments, shipment exceptions and failed messages. Verify the storefront domain, sender identity, private asset retention, backups, restore, and order reconciliation. | Staff complete representative orders in staging and demonstrate an exception, backup restore, and rollback. Finance can match a paid order, discount, refund and invoice to the payment records and export a reconciliation report. |
| Measurement | Define the checkout funnel and events for customization failures, coupon failures, promised-versus-actual arrival, proof delays and returns. Exclude gift messages, private images and sensitive details from analytics. | A small pilot produces usable signals and named owners can act on recurring failures. |

## Arrival-date pilot gate

**Proposed starting values for owner approval.** Fulfillment evaluates each service area and fulfillment type over a rolling 60-day window. Start with a minimum of 30 eligible pilot orders and a maximum late rate of 5% per group. Record the original checkout estimate, subsequent revisions and actual delivery separately. Use the original latest arrival date for scoring. Count an undelivered parcel as late once that date passes. Include proof delays and mixed baskets in the applicable group. Exclude orders cancelled before dispatch and record the exclusion reason.

Use orders whose original latest arrival date has passed as the denominator. The late rate is the number delivered after that date or still undelivered divided by that denominator. For example, one late order in 30 passes the proposed timing threshold and two fail it. Fulfillment reviews daily and on carrier outages. Hide affected results when the sample is too small, the late rate exceeds the approved limit, or coverage is unavailable. Keep ordinary pincode checks available with the current estimate or an unavailable message. Re-enable after coverage returns and the group meets the gate. Record the approved values, reviewer and decision before enabling public filtering.

## Audit evidence required for launch

Use the [audit acceptance cases](IMPLEMENTATION_PLAN.md#audit-acceptance-cases) as the release record. Engineering records privileged recovery, private-link, CMS, upload and guest-claim results. Production and support demonstrate cancellation contention and photo deletion. Finance signs off Cashfree capture, refunds and disputes. Finance and fulfillment jointly sign off the [restore drill](OPERATIONS.md#restore-drill). Record the environment, release revision, result and responsible reviewer for each case.

## After the pilot

| Feature | When it earns priority |
| --- | --- |
| Verified reviews and buyer photos | Start when real fulfilled orders exist and moderation, consent and photo handling are defined. |
| Private saved customization, wishlist and back-in-stock alerts | Prioritize if shoppers regularly return to finish gifts or specific items sell out. Keep reminders opt-in. |
| Customer-built Gift Bar assortments and corporate quote requests | Pilot when the catalog supports interchangeable components or there is demand for branded bulk orders. |
| Automatic offers, gift cards, loyalty, referrals and more delivery methods | Phase in after the first release. Each needs its own business rules and support process. |

## Owner inputs still needed

- Sellable magnet designs, actual frame colors and sizes, hamper contents and packaging, and examples for both purchase modes. Superwallet needs a sellable specification before inclusion.
- Pickup location, service regions, operating calendar, capacity, order cutoffs, and which arrival promises to show.
- Approved promo exclusions and caps, invoicing inputs, cancellation and remake rules, support hours, and notification channels.
- Approved merchant, courier, email and WhatsApp account setup.
