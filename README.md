# Aura 11:11 Gifting Studio

Aura 11:11 is a personalized gifting storefront with a planned owner/admin and staff workspace. Buyers can choose fridge magnets, photo frames and gifting hampers as shown or personalize them on the same product page. See the [product catalog](docs/PRODUCT_CATALOG.md) for variants and open specifications. The current storefront direction combines [Gift Bar](design/homepage/03-gift-bar-concept.png) typography and UI with [One of One](design/homepage/05-one-of-one-concept.png) display type and personalization controls.

## Local storefront preview

Run `python3 -m http.server 4173 --bind 127.0.0.1 --directory storefront` from the repository root and open `http://127.0.0.1:4173/`. The homepage links to the magnet, frame and hamper designs. Demo prices, finishes and artwork are fixtures. The bag uses browser session storage and photo previews stay on the device.

## Project documentation

Use the [request router](AGENTS.md) to match a change to its work package, inputs and acceptance checks. The store owner approves the catalog, commercial rules, providers and launch readiness.

| Topic | Governing source |
| --- | --- |
| Confirmed choices and open owner inputs | [Project decisions](docs/PROJECT_DECISIONS.md) |
| Buyer and staff requirements | [Product requirements](docs/PRD.md) |
| Magnets, frames and hampers, purchase modes, variants and asset intake | [Product catalog](docs/PRODUCT_CATALOG.md) |
| Buyer, production and fulfillment transitions | [System flow](docs/systemflow.md) |
| Architecture, data, provider interfaces and trust boundaries | [Technical requirements](docs/TRD.md) |
| URL families, access, caching, redirects and recovery | [Application routes](docs/ROUTES.md) |
| Current visual references and page review criteria | [Design record](design/homepage/README.md) and [UI review](design/UI_REVIEW.md) |
| Permissions, queues and recovery procedures | [Operations](docs/OPERATIONS.md) |
| Coupon eligibility, reservations and refunds | [Promotions](docs/PROMOTIONS.md) |
| Work packages, dependencies and acceptance evidence | [Implementation plan](docs/IMPLEMENTATION_PLAN.md) |
| Public launch and arrival-date pilot criteria | [Launch readiness](docs/LAUNCH_READINESS.md) |


## Fresh application baseline

Aura 11:11 will start from a fresh application scaffold in this repository. The previous Vite storefront is available in Git history at `d2adb80`. Use the [implementation plan](docs/IMPLEMENTATION_PLAN.md) for the foundation, storefront, and launch work.
