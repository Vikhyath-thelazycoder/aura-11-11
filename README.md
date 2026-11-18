# Aura 11:11 Gifting Studio

Aura 11:11 is a personalized gifting storefront with a planned owner/admin and staff workspace. The current storefront direction combines [Gift Bar](design/homepage/03-gift-bar-concept.png) typography and UI with [One of One](design/homepage/05-one-of-one-concept.png) display type and personalization controls.

## Project documentation

Start with the [consolidated project plan and requirements](docs/README.md). The individual planning documents are also in the `docs/` folder.

| Document | Covers |
| --- | --- |
| [PID](docs/PID.md) | Project purpose, ownership, scope and release criteria |
| [PRD](docs/PRD.md) | What the storefront and back office need to do |
| [System Flow](docs/systemflow.md) | Buyer, production, shipping, billing and support workflows |
| [TRD](docs/TRD.md) | Backend location, architecture, data, integrations, permissions and tests |
| [Implementation Plan](docs/IMPLEMENTATION_PLAN.md) | Build sequence, dependencies and acceptance criteria |
| [Product Catalog](docs/PRODUCT_CATALOG.md) | Intake for products, variants and customization rules |
| [Feature Register](docs/FEATURES.md) | Launch scope and proposed additions |
| [Operations](docs/OPERATIONS.md) | Roles, work queues, notifications and release procedures |
| [Project Decisions](docs/PROJECT_DECISIONS.md) | Confirmed choices and decisions still open |
| [Homepage Concepts](design/homepage/README.md) | Locked design and alternate concepts |

## Previous storefront baseline

These commands describe the original Vite source. The current checkout has pre-existing tracked source deletions. Confirm which source to continue from before application work.

### Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn-ui
- Vitest

### Getting Started

#### Prerequisites

- Node.js 18+
- npm 9+

#### Install and Run

```sh
npm install
npm run dev
```

The app runs locally with Vite at the URL shown in your terminal.

### Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint
- `npm run test` - run tests once
- `npm run test:watch` - run tests in watch mode

### Project Structure

- `src/pages` - route-level pages
- `src/components` - reusable UI and feature components
- `src/context` - cart and wishlist state providers/hooks
- `src/data` - static product/category data

### Deployment

Deploy the generated `dist/` output from:

```sh
npm run build
```
