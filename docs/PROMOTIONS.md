# Coupons and promotions

**Scope.** Admin-managed coupon codes are part of the launch plan. The defaults below are proposed implementation rules. The owner can configure actual campaigns without a deployment.

## Admin controls

| Control | Launch behavior |
| --- | --- |
| Campaign | Create, preview, schedule, pause, resume and archive. Store an internal label, case-insensitive unique code, customer-facing terms, and an audit trail. Keep a version when a published rule changes. |
| Discount | Percentage off eligible merchandise with an optional maximum discount, fixed INR amount off eligible merchandise, or free standard shipping for eligible orders. Shipping and customization charges stay outside the merchandise discount unless explicitly allowed. |
| Eligibility | All or selected products/collections, explicit exclusions including sale items where configured, minimum eligible subtotal before discount and excluding shipping, start/end date, overall cap, and optional per-buyer cap. Show times in the store time zone and store precise timestamps. |
| Reporting | Show reserved slots, completed redemptions, and discount totals, with links to order history for authorized users. Audit changes and keep past redemptions when a campaign is archived. |

## Buyer experience and pricing

- Make it clear where to apply or remove a code in the bag or checkout. Allow one code per order. Show applicable savings on the order summary and clear reasons for failure, such as expired, minimum spend unmet, or ineligible products. An unavailable coupon must leave checkout usable.
- Price from current sellable variants, eligible add-ons and the authoritative shipping quote. Reprice after changes to items, quantities, configuration or destination. When a discount changes or drops, show the updated total for review before payment.
- Use integer minor units and cap a discount at the value it can reduce. Calculate the minimum against the configured eligible base and allocate merchandise discounts across eligible paid lines deterministically. Store any shipping discount separately. Apply approved tax and billing rules to the resulting amounts. The launch flow supports positive payable totals. Keep zero-payable promotions disabled until a separate confirmation flow is supported.
- Enforce optional per-buyer caps against verified account identity or a verified guest contact under the same policy. Resolve the same verified buyer contact to one redemption identity across guest checkout, registration and order claims. Carry active holds and paid uses forward atomically. A typed address or recipient contact cannot claim an order. Other codes can be redeemed in guest checkout. Apply server-side validation and rate limits to code entry.

## Redemption and finance

1. Include the applied code, campaign version and calculated allocations in the server quote. Reserving a coupon use happens when checkout creates a pending order and its stock or capacity hold. Check both global and per-buyer limits atomically. An applied code in a cart alone does not reserve it.
2. A confirmed payment consumes the reservation once per order. Repeated payment events or retries return the existing result. On confirmed terminal failure, cancellation before capture or expiry, release the hold once no active payment attempt remains. Pausing or editing a code affects new holds. An existing valid reservation is honored until its order or quote expires.
3. A late capture after release goes to the existing reconciliation queue. Re-secure eligibility, coupon capacity and fulfillment before release to production, or handle the paid amount through the approved refund workflow. Customer price stays as agreed for that payment.
4. Record the frozen promotion and discount on each order line and any shipping adjustment. Use amounts actually paid and the approved billing rules for cancellations, partial refunds and credit documents. Baseline policy keeps a paid redemption counted after a refund. Have the owner confirm any audited exception or reissue policy.

## Acceptance tests

- Scheduled, expired, paused, capped and ineligible codes, threshold boundaries, exclusions, cap enforcement on both account and guest flows, and one-code behavior.
- Redeem a one-use code as a verified guest, then register and claim the order. The prior use still counts, including during a concurrent checkout. An unrelated account entering the same address cannot claim the order.
- On a mixed order, apply eligibility to the purchased SKU and eligible charges. Exercise the same frame color in both modes and a hamper sold as one line. Switching to As shown removes custom fees before discount allocation.
- Changed cart or delivery choice, custom fees excluded by default, rounding across lines, no negatives and disabled zero-payable outcome.
- A single last slot contested by two orders, safe retry, duplicate callback, expired hold, late capture, and admin pause while a hold exists.
- Discount shown consistently in checkout and the order record, finance reconciles partial refunds from recorded amounts, and only authorized admins can mutate promotions.
