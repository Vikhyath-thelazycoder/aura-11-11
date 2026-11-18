# Aura 11:11 operations and back office

The admin and staff areas share the same order record and event history. Their screens and allowed actions reflect each role.

## Workspaces and permissions

| Role | Views and actions |
| --- | --- |
| Owner | All queues and reporting. Staff invitations and role assignments, integration readiness, policy and settings, audit review, escalation and approvals. |
| Admin / merchandising | Manage catalog, SKU availability, pricing, allowed customization, CMS draft and publication, appointments or deadlines where enabled, and operations oversight. Separate permission for refunds, credential management, and sensitive exports. |
| Concierge / support | Search buyer orders and see permitted contact and delivery details. Record notes, handle proof questions and delivery exceptions, request changes, remake or refund. Send approved messages from the order record. |
| Production and QC | View assigned work, needed inputs and proofs, priority and due date. Prepare proofs, log production, check output, hold or rework jobs. Prices, accounting and unrelated customer data are outside this role. |
| Packing / fulfillment | See packing checklist, gift note, recipient label data, package dimensions, pickup, and carrier handover. Escalate damage or booking exceptions. |
| Finance | Review captures, settlements, refunds, billing documents and exports. Approve or issue adjustments under configured authority. |

All users enter through the same account portal. The owner invites staff and assigns roles. After sign-in, each role has access to its permitted workspace and actions. Log role changes, approver, time and reason. Deactivation ends staff access.

## Storefront and catalog publishing

Authorized admins manage themes, homepage wallpaper, hero, navigation, footer, pages and product data from the admin panel. Preview drafts at mobile and desktop widths, publish when approved, and use version history to restore earlier content. Archive products that leave the catalog and preserve purchases, proofs and invoices. Refer to the [implementation plan](IMPLEMENTATION_PLAN.md) for the full editing scope.

## Daily queues and handoffs

| Queue | Trigger and next action |
| --- | --- |
| Payment follow-up | Pending beyond the expected window, mismatched amount, late capture or ambiguous outcome. Finance reconciles and authorizes next step. |
| Proof review | Proof-required paid line. Staff submits revision, buyer approves or requests changes. Concierge follows overdue approvals and refreshes estimates. |
| Production and QC | Approved or preview-only paid line. Staff validates source file, produces, checks quantity and compares artwork. Failures go to rework with reason. |
| Packing and shipping | QC-passed items. Check wrap, note, SKU, address label, weight and dimensions. Book once, verify label and mark actual handover. |
| Delivery exceptions | Failed delivery, address issue, return to origin, lost or damaged parcels. Support records carrier contact, buyer communication, replacement or refund decision. |
| Billing / message failures | Failed invoice generation, refund reconciliation, missing templates or exhausted sends. Review the original transaction or provider receipt before retrying. |

## Notifications and billing

| Event | Audience and channel |
| --- | --- |
| Paid order or confirmed failure | Buyer email, with optional configured WhatsApp status link. Leave sensitive details on the private order page. |
| Proof ready, change request or approval | Buyer gets proof link when ready. Assigned staff see revision and approval events in the work queue. |
| Delay, dispatch and tracking | Buyer by email and opted-in/eligible WhatsApp where available. Recipient receives only the delivery details configured for recipient notification. |
| Receipt or invoice, refund or credit | Buyer via private document link or the approved delivery method. Finance sees issue, reconciliation and error states. |
| Operational exception | Assigned staff queue. Escalate unresolved high-priority items to owner or finance as applicable. |

Admin configures approved templates and sender identity. Record template version and event delivery status, and include retry and suppression rules. Keep marketing subscription separate from order communications. Collect only appropriate permissions and preferences, including recipient handling. Finance supplies invoice issue timing, merchant details, numbering rules, tax and reconciliation inputs before any production invoice. No order-related pricing is printed on a recipient gift note.

## Release and ongoing operations

- Configure staging then production merchant accounts, approved sender identities, callback destinations, pickup origin, package types, and serviceability defaults. Verify provider event contracts in test environments.
- Configure availability, nonworking days, cutoffs, order policies, proof time, vendor contact path and responsible staff. Test estimates against sample destinations and fragile or oversize products.
- Monitor unresolved payments, aged proofs, production backlog, delayed carrier handover, delivery exceptions and failed notifications. Use alerts with an owner and actionable links.
- Document backup and restore cadence, allowed operators, environment rollback, and provider outage procedures. During a provider outage, show an honest pending or unavailable state and reconcile queued events on recovery.
- Reconcile money and shipment records against providers on an agreed operational cadence. Resolve mismatches with traceable adjustments.
