# Paradise Nursery — Houseplant Shopping Cart

**Student:** Nguyễn Tiến Đạt (HE191693)  
**Course:** Developing Front-End Apps with React — Final Project

Paradise Nursery is a responsive React + Redux Toolkit plant shopping application. Browse 18 indoor plants in three categories, add plants to your cart, adjust quantities, and review your total.

## Features
- Landing page with garden background, company information, and **Get Started** button.
- Three plant categories with **six plants each**; individual images, names, and prices.
- Add to Cart disables for an already-selected plant; Navbar cart badge updates from Redux.
- Redux Toolkit state management with `addItem`, `removeItem`, and `updateQuantity`.
- Cart displays image, unit price, quantity, line total, overall cost and item count.
- Increase, decrease, remove, Continue Shopping, and Checkout (Coming Soon) controls.

## Run locally
Requires Node.js 18+.

```bash
npm install
npm run dev
```

## Project layout
- `src/App.jsx`: landing page and navigation
- `src/App.css`: styles and background
- `src/components/AboutUs.jsx`: company introduction
- `src/components/ProductList.jsx`: catalog and Navbar
- `src/components/CartItem.jsx`: shopping cart
- `src/redux/CartSlice.jsx`: cart reducers
- `src/redux/store.js`: Redux store
- `public/plants/`: original SVG plant illustrations

This educational demonstration includes fictional products and prices.