# Aura 11:11 system flow

See [PRD](PRD.md) for requirements, [TRD](TRD.md) for contracts, and [Operations](OPERATIONS.md) for staff procedures. This is the proposed operating model.

## Account entry and storefront management

- The shared account portal verifies identity. A new public sign-up receives customer permissions. Invited staff and admins enter their authorized workspace. A customer can return to the bag or checkout, and guest checkout remains available.
- An authorized admin opens a content or product draft, edits it in the panel, and previews it. Publishing validates the draft and updates the relevant storefront pages. Archiving removes a product from future sale. Existing orders keep their saved purchase details.

## End-to-end journey

```mermaid
flowchart TD
    A[Discover gift and check pincode] --> B[Select variant and buy as shown or personalize]
    B --> C[Review preview and bag]
    C --> U[Apply coupon if desired and review final quote]
    U --> D[Reserve inventory or capacity and eligible coupon use]
    D --> E[Payment pending]
    E -->|Verified capture| F{Staff proof required?}
    E -->|Failed or expired| X[Recover checkout or release reservation]
    F -->|Yes| G[Staff prepares versioned proof]
    G --> H{Buyer decision}
    H -->|Request changes| G
    H -->|Buyer submits approval for exact revision| I[Release production job]
    F -->|No| I
    I --> S{Which eligible line transition commits first?}
    S -->|Cancellation within cutoff| Canceled[Cancel line and route financial adjustment]
    S -->|Production start| J[Produce and check quality]
    J -->|Rework needed| I
    J -->|Pass| K[Pack and book shipment]
    K --> L[Label, pickup and tracking]
    L --> M{Carrier outcome}
    M -->|Delivered| N[Close fulfillment]
    M -->|Exception| O[Support follows up or handles return]
```

## Buyer and checkout

1. Shopper browses or filters by gift intent. Early pincode checks indicate coverage and indicative timing. Exact estimates require the chosen items, options, and quantities.
2. For each line, select the SKU and purchase mode. As shown uses the displayed studio design. Personalize applies the enabled fields for that variant. Save only the active configuration, including its artwork version, chosen color and any buyer asset references. Show hamper contents and quantities. Show preview and validation. When the proof is mandatory, clearly explain approval timing and its impact on the estimate.
3. At checkout, capture buyer, recipient, shipping address, billing details if needed, wrap and note, and relevant communication preferences. Server verifies sellability, compatibility, availability, capacity, any coupon and the delivery quote. Final review shows timing, applied discounts and the total.
4. Create an order and reservation from that quote before creating a gateway session. If payment is pending after return, show the same order reference and refresh status. Retry only after the previous attempt is confirmed safe to retry.
5. Verify the provider outcome and reconcile amount, currency, and order. Finalize paid state once, confirm the stock or capacity reservation and coupon redemption, and publish the event. Release expired holds when the payment status allows it. Route a capture after release to reconciliation. Verify fulfillment and coupon capacity before proceeding, or use the approved refund workflow.

A signed-in buyer may claim a guest order by completing a fresh challenge sent to the original buyer contact. Bind that order once and retain its coupon history.

## Shop by Arrival Date

Collect destination pincode and required date. Estimate a range from current stock, selected configuration or a conservative default, production capacity, proof time, business days, pickup cutoffs, and carrier transit. Offer the date filter for serviceable products with a credible estimate. Clearly label uncertain or unavailable results and offer alternatives. At checkout, recompute using exact choices and current capacity, and show the buyer immediately if the date has changed. Pause the feature for affected products or regions when reliable estimates are unavailable.

For a basket shipping together, use the latest line readiness including proof time, then add shared transit once. A missed proof cutoff triggers a fresh estimate and buyer notice. The [pilot gate](LAUNCH_READINESS.md#arrival-date-pilot-gate) controls date-filter visibility by service area and fulfillment type.

## Proof and production

1. Create production tasks per fulfillment line or group. Staff see the purchased mode, frozen design or approved personalization, selected color, any hamper pick list and target ship date.
2. For proof-required items, staff publish a revision and buyer sees a private approval link. Opening the link permits viewing after buyer verification. Explicit submission persists order line, revision, timestamp, and actor. A change affecting content or placement creates a fresh proof version and invalidates prior production approval for the new version. A stalled order stays visible for follow-up and a revised ETA.
3. Production records work started and finished. QC compares output against approved artwork or frozen inputs, checks finish, spelling, quantity, and condition. Rework reopens the task. A material spec change requires renewed approval before production.
4. Packing uses the gift note and packaging instructions. Keep buyer-only financial documents separate from gift-facing materials.

## Shipping, billing, and aftercare

1. Record packed weight and dimensions. Create shipment once, capture provider and carrier references, print the label, and request or arrange pickup. Packing, label creation, and actual carrier handover are separate milestones.
2. Reconcile tracking webhooks and scheduled status checks. Expose buyer-safe history and a tracking link. Failed delivery, address correction, lost parcels, return to origin, and damage create assigned exception work. Capture any replacement shipment under its own reference.
3. Issue the applicable receipt or invoice at the milestone approved by finance, using the frozen billed values. A refund has its own request and provider confirmation. Issue an associated credit document where the approved billing policy requires one.
4. Queue transactional notifications on committed business events. A failed send appears in the queue and can be retried without producing duplicate messages. Keep recipient messages limited to intended delivery communications.
5. Buyer opens a secure tracking or support link. Support records a request and routes it to the team with authority. Policy controls cancellation, remake, replacement and refund eligibility.

## State ownership

| Track | Example progression | Owns the change |
| --- | --- | --- |
| Payment | Pending → captured / failed / expired → refund pending → partial or fully refunded | Payment verification and reconciliation, with scoped finance actions |
| Proof per line | Not needed / awaiting proof → awaiting buyer → revision requested or approved | Staff submits, buyer approves specific revision |
| Production per line | Queued → in progress → QC → passed or rework → packed | Assigned production and packing staff |
| Shipment per parcel | Unbooked → label ready → handed over → in transit → delivered or exception / returned | Shipping workflow and verified carrier events |
| Dispute | Open → evidence due → submitted → decided → settlement reconciled | Finance tracks provider deadline, evidence and overlapping refunds |
| Invoice | Pending → issued → adjustment document where applicable | Billing workflow and authorized finance |
| Notification | Queued → submitted → delivered when known, retry scheduled, or failed | Outbox worker and verified provider updates |

Customer order status is a projection of these tracks. Proof and production can differ by line. A shipment update cannot change payment or proof state. At the cancellation cutoff, support and production use the same line transition. A committed cancellation blocks production. If work has started, show the current state and send exceptions to support under the frozen policy. Finance reserves any eligible refund separately. Follow explicit rules for mixed orders and expose customer-friendly summaries.
