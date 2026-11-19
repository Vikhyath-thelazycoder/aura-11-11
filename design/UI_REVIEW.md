# Storefront UI review

Use [Gift Bar](homepage/03-gift-bar-concept.png) for broad headings, warm paper, forest, marigold, mint, shop navigation and the photo-led grid. Use [One of One](homepage/05-one-of-one-concept.png) for the condensed hero display and compact personalization controls. Translate them into one set of licensed typefaces, spacing, colors and interactive controls. The [design record](homepage/README.md) identifies the current and historical concepts.

| Surface | What the reviewer should be able to do or see |
| --- | --- |
| Homepage | Recognize the product and reach shopping from the first screen. Headline and image stay legible together. The poster appears before 3D. With reduced motion or WebGL disabled, navigation and the primary action still work. |
| Product detail | Identify the item from its imagery, read the selected variant, total price and proof expectation, then buy it as shown or personalize it on the same page. Label frame color swatches with text and show hamper contents and quantities. Keep the primary action reachable with long names, an unavailable option and an inline error. Preserve valid entries during correction. |
| Interiors | Search, bag, checkout and account share the storefront’s type, controls, spacing and focus treatment. Use the simplest layout that supports the task. Keep gift text, prices and proof status legible at narrow widths. |
| Copy and imagery | Each heading, label, image and badge serves a shopping action or conveys verified product information. Use approved catalog media for publication. Remove invented ratings, filler claims, decorative badges and repeated cards that bury the product or its controls. |

## Review evidence

- For the first home and product pages, capture consistent renders at **360px, 390px and 1280px** viewport widths with stable fixture data and loaded fonts. Review long text, overflow, image crops, tap targets, focus visibility and the primary action. Record the route, fixture, viewport and revision with each render.
- Exercise both purchase modes on the magnet, five-color frame and hamper fixtures. Switching back to As shown must restore the studio preview and remove personalization charges. Verify separate configured bag lines, an unavailable variant and a recoverable validation error. Navigate by keyboard and repeat the hero check with reduced motion and WebGL disabled.
- Compare the first renders with the two concept images and record the design reviewer’s decision. Retain approved renders for later visual regression checks. Review intentional changes alongside the baseline before replacing it. For each subsequent page change, capture the affected route and states and exercise its real action.

Catalog fields and proof modes come from the [product intake](../docs/PRODUCT_CATALOG.md). Pilot fixture imagery is for development and review.
