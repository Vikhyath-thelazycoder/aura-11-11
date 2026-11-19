# Aura 11:11 project decisions

## Confirmed

- On 19 November 2026, the owner chose [Gift Bar](../design/homepage/03-gift-bar-concept.png) for core typography and UI and [One of One](../design/homepage/05-one-of-one-concept.png) for oversized display type and UI patterns across one shared storefront design. Iris is the earlier approved concept in the [design record](../design/homepage/README.md).
- One sign-in and sign-up portal serves customers, admins and staff. Server-side roles determine access. Authorized admins manage storefront appearance, content, navigation and the product catalog from the admin panel.
- The initial product families are fridge magnets, photo frames and gifting hampers. Treat every sellable gift, including a hamper, as a product buyers can purchase as shown or personalize. The [catalog](PRODUCT_CATALOG.md) records the options and outstanding SKU details.
- Planning covers the customer storefront, backend, database, owner/admin and staff panels, delivery, billing, invoices, email and WhatsApp, with local Javali as a reference for operations and integration structure.
- Shop by Arrival Date is approved for the plan. Release it once estimates are validated against production and carrier data.
- Cashfree is the launch checkout provider. Its sandbox payment, refund and reconciliation are required for sign-off. Superwallet is a product name supplied by the owner. Its category, assets and customization options await catalog details.
- Start the new application from a fresh scaffold in this repository. The previous Vite storefront remains in Git history.
- Admin-managed coupon codes are approved for the launch plan. [Coupons and Promotions](PROMOTIONS.md) defines the proposed first release.

## Proposed and awaiting owner or technical confirmation

| Decision | Working proposal | Confirm before |
| --- | --- | --- |
| Launch products and hero SKU | Confirm the frame palette (five planned colors), magnet designs, hamper contents, and enabled personalization for each SKU in [Product Catalog](PRODUCT_CATALOG.md). Use the shared 03 and 05 design direction with imagery for a real item or an approved hero concept. | Finalizing catalog and 3D asset production |
| Payment flow | Online checkout with Cashfree, with WhatsApp as concierge and support. Confirm whether COD, assisted checkout, or pay links are needed. | Checkout and integration configuration |
| Delivery | Owner will provide pickup location, coverage, dates, cutoffs and nonworking days. Evaluate Shiprocket, Blue Dart and Ekart against real parcel profiles and launch locations. | Accurate quotes, date filtering and labels |
| Proof model | Use product-specific proof policies. Proposed baseline for paid orders is proof before production. Confirm whether any category needs a proof or bespoke quote before payment. | Proof rules and customer copy |
| Pricing and policies | Confirm base and add-on prices, applicable billing/tax inputs, returns, cancellation, remake and refunds, service regions, cutoffs and lead times. | Production catalog and billing |
| Promo policy | Start with one code per order. Confirm campaign values, product and add-on exclusions, caps, and any exceptions to the baseline of counting a redemption after refund. | Enabling live codes |
| Communications | Resend is the email candidate. Confirm sender domain, support number, WhatsApp account/provider and approved templates, and recipient-notification rules. | Live notifications |
| Arrival-date pilot | Owner and fulfillment lead approve the observation window, minimum sample and maximum late rate per service area and fulfillment type. The proposed starting values are in [Launch Readiness](LAUNCH_READINESS.md#arrival-date-pilot-gate). | Enabling the date filter |
| Ownership and access | Name the initial owner, recovery operator, privacy owner, finance and fulfillment leads. Approve photo retention periods, cancellation cutoffs and sensitive action authority. | Back-office pilot |
| Technical foundation | Evaluate Next.js, protected server routes, and Supabase for the fresh application. Choose hosting after validating runtime, job scheduling, data and 3D delivery needs. | Foundation exit |
| Additional features | Shop by Arrival Date is approved. Revisit bundle builder, repeat orders, milestone reminders and corporate bulk based on catalog and demand. | Scheduling post-launch work |

## Reference history

Earlier design and architecture proposals are available in Git history at `5a7cc3b`. The Javali reference informed role boundaries, provider adapters, billing and reconciliation, and operational queues. Aura’s procedures and published policies will be confirmed independently.
