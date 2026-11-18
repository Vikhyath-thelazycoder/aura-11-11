# Aura 11:11 project decisions

## Confirmed

- On 19 November 2026, the owner chose [Gift Bar](../design/homepage/03-gift-bar-concept.png) for core typography and UI and [One of One](../design/homepage/05-one-of-one-concept.png) for oversized display type and UI patterns across one shared storefront design. Iris is the earlier approved concept in the [design record](../design/homepage/README.md).
- One sign-in and sign-up portal serves customers, admins and staff. Server-side roles determine access. Authorized admins manage storefront appearance, content, navigation and the product catalog from the admin panel.
- The owner will provide the actual products and customization options. The catalog examples in earlier drafts and images are illustrative.
- Planning covers the customer storefront, backend, database, owner/admin and staff panels, delivery, billing, invoices, email and WhatsApp, with local Javali as a reference for operations and integration structure.
- Shop by Arrival Date is approved for the plan. Release it once estimates are validated against production and carrier data.
- Cashfree is the priority checkout integration. Superwallet is a product name supplied by the owner. Its category, assets and customization options await catalog details.

## Proposed and awaiting owner or technical confirmation

| Decision | Working proposal | Confirm before |
| --- | --- | --- |
| Launch products and hero SKU | Enter real SKUs and options in [Product Catalog](PRODUCT_CATALOG.md). Use the shared 03 and 05 design direction with imagery for a real item or an approved hero concept. | Finalizing catalog and 3D asset production |
| Payment flow | Online checkout with Cashfree, with WhatsApp as concierge and support. Confirm whether COD, assisted checkout, or pay links are needed. | Checkout and integration configuration |
| Delivery | Owner will provide pickup location, coverage, dates, cutoffs and nonworking days. Evaluate Shiprocket, Blue Dart and Ekart against real parcel profiles and launch locations. | Accurate quotes, date filtering and labels |
| Proof model | Use product-specific proof policies. Proposed baseline for paid orders is proof before production. Confirm whether any category needs a proof or bespoke quote before payment. | Proof rules and customer copy |
| Pricing and policies | Confirm base and add-on prices, applicable billing/tax inputs, returns, cancellation, remake and refunds, service regions, cutoffs and lead times. | Production catalog and billing |
| Communications | Resend is the email candidate. Confirm sender domain, support number, WhatsApp account/provider and approved templates, and recipient-notification rules. | Live notifications |
| Ownership and access | Confirm active staff roles, sensitive action approval, retention periods, and backup and support owners. | Back-office pilot |
| Technical foundation | Evaluate Next.js plus protected server routes and Supabase against the last Vite baseline or any newer authorized source. Choose hosting after validating runtime, job scheduling, data and 3D delivery needs. | Foundation exit |
| Additional features | Shop by Arrival Date is approved. Revisit bundle builder, repeat orders, milestone reminders and corporate bulk based on catalog and demand. | Scheduling post-launch work |

## Reference history

The [archived PRD](archive/PRD-v2.md), [archived implementation plan](archive/IMPLEMENTATION_PLAN-v1.md), and [earlier redesign blueprint](../aura-11-11-redesign-plan.md) preserve earlier design, WhatsApp-first and architecture proposals. Use the current planning documents for scope and open decisions. The Javali reference informed role boundaries, provider adapters, billing and reconciliation, and operational queues. Aura’s procedures and published policies will be confirmed independently.
