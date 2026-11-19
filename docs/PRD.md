# Aura 11:11 Product Requirements Document

**Status** Planning draft. Gift Bar and One of One are the current design references. SKU details, operating policies, and integration choices await confirmation.

## Product goal

Aura 11:11 helps shoppers find a gift, make it personal, see what they are ordering, and understand when it can arrive. Staff need a reliable production brief and clear ownership of the order from payment through delivery. The owner needs control over what is sold, how it can be customized, and what reaches the storefront.

## Users and their needs

| User | Needs |
| --- | --- |
| Gift buyer | Find something appropriate by recipient, occasion, price, or delivery date. Personalize it, approve any required proof, pay, and track it. |
| Gift recipient | Receive the gift and intended note without receiving the buyer’s invoice or seeing prices in gift-facing materials. |
| Production and packing staff | See assigned items, exact approved artwork or text, due dates, packing instructions, and the next allowed action. |
| Support and concierge | Find orders, communicate about proofs or delivery, record exceptions, and request escalations with the appropriate permissions. |
| Owner and admin | Publish catalog and CMS changes, manage staff, oversee inventory, orders, billing, delivery, and exceptions. |
| Finance staff | Reconcile payments and refunds and access approved billing documents and exports. |

## Launch requirements

| ID | Area | Expected behavior |
| --- | --- | --- |
| P01 | Homepage and discovery | Use [Gift Bar](../design/homepage/03-gift-bar-concept.png) typography and layout patterns and [One of One](../design/homepage/05-one-of-one-concept.png) oversized display type and personalization UI. Apply one design system across home and interior pages. Include the 3D hero, gift finder, collections, search, filters, product details and footer. |
| P02 | Product and customization | Offer As shown and Personalize on each product page. Display the selected variant, included contents, price, availability, lead time, and applicable preview or proof expectations. Validate required fields, allowed combinations, image requirements, and additional charges. Let buyers correct their configuration before submitting. |
| P03 | Bag and checkout | Preserve each line’s purchase mode, variant and configuration, including the contents of a hamper. Show item prices, add-ons, applied discounts, shipping, applicable taxes, and the total. Support guest checkout with distinct buyer, recipient, and billing details as needed. Collect gift note and wrapping choices when enabled. Reconfirm changed price or availability before payment. |
| P04 | Payment and confirmation | Create a server-side order reference and support online payment through the chosen gateway. Handle success, pending, failed, and late outcomes. Show a recoverable status after a redirect or reload and prevent double charge attempts or duplicate fulfillment. |
| P05 | Delivery and tracking | Check recipient pincode and show an estimated arrival range which includes both production and transit. Let shoppers filter by required arrival date once estimates are validated. Show order stage, shipment tracking, and what happens when a carrier cannot deliver. |
| P06 | Proof, production, and QC | For products that need a proof, send a versioned preview and collect the buyer’s approval or revision request. Approve the specific version before production. Capture job assignment, production, quality check, packing, and shipment handover. |
| P07 | Owner and staff panels | Keep an owner/admin workspace and scoped staff workspace. Include catalog, variants, inventory and capacity, personalization templates, CMS, orders, proof tasks, shipment exceptions, billing, reports, and audit history according to permissions. |
| P08 | Billing and support | Give the buyer access to the applicable receipt or invoice. Handle cancellations, refunds, and approved adjustments using policy-driven eligibility. Provide a support path through the order or WhatsApp concierge. |
| P09 | Communications | Send email for core transactional events and support authorized WhatsApp templates where configured. Record delivery outcomes and respect channel preferences. Route proof and order details to the buyer by default. |
| P10 | Accessibility and trust | Shopping and customization work with keyboard, touch, reduced motion, and a static alternative to WebGL. Publish approved delivery, returns, privacy, and contact information. Claims, ratings and prices need real sources. |
| P11 | Shared account portal | Customers, staff and admins sign in through one portal. Public registration creates a customer account. Elevated roles are assigned privately by authorized owners. Return shoppers to their cart or checkout when applicable. |
| P12 | Admin content and catalog | Authorized admins edit backgrounds, hero, navigation, footer, pages, content and approved themes. Manage product, variant and customization lifecycles, including removal from sale and safe deletion. Preview, publish and roll back storefront changes without deploying. |
| P13 | Coupons and promotions | Authorized admins create, schedule, pause and track percentage, fixed-amount and free-shipping codes. A shopper can apply or remove one eligible code and see the updated total. Freeze the discount at checkout and retain it for order history and refunds. See [Coupons and Promotions](PROMOTIONS.md). |

Buyers can claim a guest purchase after verifying the original order contact. Their coupon usage follows them when they register. Proof and invoice links require buyer verification. Opening a link never approves a proof. Buyers explicitly approve the displayed revision and can request deletion of uploaded artwork through support. Staff see the applicable cancellation cutoff for each line and the recorded outcome if production starts during a request.

## Catalog and design boundaries

The examples in old notes and design images illustrate layouts. Plan discovery and product pages for fridge magnets, photo frames and gifting hampers. The owner supplies SKU-level designs, options, pricing, inventory, production constraints and approved media through the [catalog intake](PRODUCT_CATALOG.md). Use the shared 03 and 05 style with real catalog imagery, including a hero asset and poster for approved merchandise. See the [design record](../design/homepage/README.md) for the current direction and previous concepts.

## Launch acceptance and measurement

- A buyer can complete a representative standard order and a proof-required order on mobile and desktop, recover after interruption, and see a correct delivery estimate and tracking state.
- A staff member can take assigned work through proof, production, QC, and packing while access stays within their role. The owner can trace one order from placement through payment, billing, and shipment.
- A timed-out or repeated payment, provider event, refund, or shipment retry leaves a single correct business result. A genuine exception appears in an owned work queue.
- Track discovery to checkout, checkout completion, proof turnaround, production delays, delivery exceptions, and support contact rate. Record aggregate funnel events without collecting gift text or private images in analytics. Set target values after a pilot baseline.

## Scope and decisions

[Project decisions](PROJECT_DECISIONS.md) lists owner inputs and open choices. Launch sequencing is in the [implementation plan](IMPLEMENTATION_PLAN.md).

### After the pilot

Consider verified reviews, wishlists, catalog-based recommendations, localized copy, saved private customization drafts, richer 3D previews and batch personalization as demand warrants. The Gift Bar builder can support buyer-built assortments once enough compatible components are available. Corporate or bulk gifting calls for structured quotes and proofs. A scheduled private gift reveal requires explicit access and retention rules.

Gift cards, loyalty, referrals, automatic or stackable offers, COD, international shipping, direct carrier accounts, pickup, scheduled delivery and split shipments each need their own rules and provider checks. Revisit advanced finance exports, multi-location stock, marketing reminders and support integrations after the pilot.
