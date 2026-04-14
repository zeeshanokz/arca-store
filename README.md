# ARCA Store — Premium Tech Workspace

A polished e-commerce storefront built with **React 19** and **Tailwind CSS v4**, submitted as a Frontend Internship Technical Skills Assessment.

## Live Demo

> Deploy to Vercel / Netlify and paste the URL here.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
npm run build   # production build
npm run preview # preview the production build locally
```

## Features

### Pages & Navigation

- **Home** — hero banner, stats bar, featured products, and a call-to-action section
- **Products** — full product grid with live search (filters on every keystroke) and category filter tabs
- **Product Detail** — large image, full description, spec list, quantity picker, and "View Cart" indicator when already in cart
- **Cart** — inline quantity controls, line totals, order summary panel with free-shipping threshold, and a checkout confirmation modal

### Functional Highlights

- 🔍 Live search filtering with a clear button
- 🗂 Category filter (All, Keyboards, Mice, Audio, Connectivity, Workspace)
- 🛒 Add to cart from both the listing and detail pages
- 🔢 Animated cart badge (replays animation on every count change)
- ⚡ Skeleton loading state on the Products page (900 ms simulated delay using `animate-pulse`)
- 🔔 Toast notification on every add-to-cart action
- 💾 Cart persisted to `localStorage` — survives page refresh
- ✅ Checkout confirmation modal with order summary
- 📱 Fully responsive — 1 / 2 / 3 column grid at mobile / tablet / desktop

## Tech Stack

| Tool         | Version |
| ------------ | ------- |
| React        | 19      |
| Vite         | 8       |
| Tailwind CSS | 4       |
| PostCSS      | 8       |

No UI component libraries, no CSS Modules, no external state management.

## Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx          # Sticky header with animated cart badge
 │    ├── Footer.jsx
 │    ├── ProductCard.jsx     # Grid card with hover effects
 │    ├── CartItem.jsx        # Cart row with inline quantity controls
 │    ├── OrderSummary.jsx    # Sticky summary panel + checkout modal
 │    ├── QuantityPicker.jsx  # Reusable +/- control
 │    ├── CategoryFilter.jsx  # Filter pill buttons
 │    ├── SearchBar.jsx       # Controlled search input with clear button
 │    ├── SkeletonCard.jsx    # Pulse placeholder card
 │    └── Toast.jsx           # Slide-up notification
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── Products.jsx
 │    ├── ProductDetail.jsx
 │    └── Cart.jsx
 │
 ├── data/
 │    └── products.js         # 8 hardcoded products across 5 categories
 │
 ├── hooks/
 │    └── useCart.js          # Cart state + localStorage persistence
 │
 ├── App.jsx                  # Top-level routing via conditional rendering
 └── index.css                # Tailwind v4 entry + custom keyframe animations
```

## Design Decisions

- **Niche:** Premium tech workspace accessories — keyboards, mice, headsets, hubs, and desk gear
- **Palette:** Slate-900 (primary) · Blue-600 (accent) · Amber-400 (badge highlight) · Gray-50 (background)
- **Font:** Inter via Google Fonts — clean and legible for a tech brand
- **Routing:** Conditional rendering in `App.jsx` — no React Router needed for three views
- **Cart state:** Lives in `App` and is passed down as props per the spec; extracted into a `useCart` hook for readability
- **Animations:** Custom `slideUp` (toast) and `badgePop` (cart badge) keyframes defined as Tailwind `@utility` blocks in `index.css`
# arca-store
