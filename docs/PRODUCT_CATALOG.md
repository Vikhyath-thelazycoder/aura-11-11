# Product and customization intake

Fridge magnets, photo frames and gifting hampers are the first confirmed product families. Give each sellable design its own product page. Every product offers two choices on that page: **As shown** uses the studio’s published design, and **Personalize** lets the buyer change the fields enabled for the chosen variant. Apply the same model when adding future gifts.

## Initial catalog

| Family | As shown | Personalize | Inputs to confirm before sale |
| --- | --- | --- | --- |
| Fridge magnets | Buy a magnet with the displayed design. | Apply the magnet’s enabled options. A photo and crop are useful pilot inputs. | Designs, dimensions, finish, permitted inputs, print area, media and proof rules. |
| Photo frames | Choose a finish and buy the frame in its published configuration. Show what is included. | Choose the frame color and apply its enabled photo or text options. | Use five color variants for planning. Confirm the actual colors, sizes, included artwork, media and availability by SKU. |
| Gifting hampers | Buy the listed assortment as one product. Show contents and quantities before checkout. | Keep the listed assortment and offer the personal touches approved for that hamper. A printed message is a pilot example. | Contents, quantities, packaging, permitted personalization, assembly time, and whether inventory is prepacked or drawn from components. |

Superwallet remains a product name awaiting its family, variants, images and sellable specification. The examples above supply development fixtures. The owner approves the actual fields, designs, prices, stock, lead times and photos for each listing.

## Product configuration

- A variant identifies the physical item or finish. A frame’s color remains selectable in either purchase mode. Define variants and personalization fields as catalog data so another product can have a different number of colors or a different set of options.
- Each product needs a complete as-shown design and at least one usable personalization option before publication. Only the personalized path asks for buyer artwork or text required by its template. Set prices, lead times and proof expectations for the selected configuration. An as-shown product may still be made to order.
- When a buyer switches to As shown, quote and submit the studio design alone. Exclude inactive uploads, custom text, personalization fees and custom proof steps. Gift wrap and gift notes remain separate order options.
- A hamper gets its own product, price, delivery profile and bag line. Freeze its contents and quantities when ordered. The first release supports owner-defined assortments. Customer-built assortments belong to the later Gift Bar builder.

## Product template

| Field | What to capture |
| --- | --- |
| Product | Working name, category, description, occasions and recipients, hero or gallery assets |
| SKU and variants | Variant names and identifiers, material, finish, size, color, sold individually or as a bundle |
| Price | Base price, variant deltas, customization and gift-wrap fees, quantity pricing if applicable, approved tax classification |
| Inventory | Stocked, made to order, or hybrid, per-SKU availability, component requirements for bundles, unit or daily production capacity |
| Personalization | Fields from the table below, where each option applies, which options can be combined, and approved examples |
| Production | Standard/complex lead time, cutoffs, nonworking days, proof requirement, revision policy, QC checks, minimum quantities |
| Shipping | Pickup origin, packed dimensions and weight, fragile or restricted items, allowable shipping modes, delivery exclusions, packing method |
| Returns | Eligible reasons and window, cancellation cutoff, remake or damage policy for this type, owner-approved wording |
| Assets | Product photos, poster, optional 3D file and texture sources, actual font or artwork licenses, sample production output |

## Personalization field template

| Field | What to capture |
| --- | --- |
| Identity | Stable field key and label seen by the buyer |
| Input type | Text, name/initials, date, option selector, color/finish, image, crop, placement, optional gift note, or other method supplied by owner |
| Rules | Required or optional, which variants enable it, characters and line limits, languages and supported glyphs, upload formats, resolution/dimensions, max size, compatibility rules |
| Default | Example content and placeholder media allowed in storefront previews |
| Pricing and time | Additional cost, unit/order pricing, additional lead time, proof policy by field or combination |
| Preview and production | Render surface, font or template version, safe area, output dimensions, final artwork format, approved placement coordinates, fallback behavior |
| Review | Who reviews exceptions, allowable adjustments, what gets reapproved, rejection reasons and customer guidance |

## Proof modes

- **Preview only** for options the buyer can validate in checkout under the product’s approved rules.
- **Staff proof required** when staff need to check a crop, inscription, placement, or other production constraint. Buyer approves a specific revision.
- **Manual quote** for unsupported, bespoke, or bulk configurations. Staff capture a structured quote before a payment request.

## Intake order

1. List the sellable designs in each family, with the as-shown configuration and the personalization options for each.
2. Confirm prices, variants, materials, stock/capacity, and production lead times.
3. Supply real assets and at least one usable example for each customization method.
4. Confirm proof and shipping rules. Product publication requires usable prices, sellability, active customization rules where needed, and a configured delivery policy.
