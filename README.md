# Wits Perfumes

> An e-commerce web platform for luxury fragrances and signature scents.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-20232a?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)

---

## Overview

Wits Perfumes is a modern web application designed for a luxury perfume brand. The application provides an intuitive shopping experience with dedicated scent profile exploration, an editorial blog, and a streamlined checkout flow.

---

## Key Features

- **Product Catalog**: Comprehensive listing of perfumes with detailed fragrance notes (Top, Heart, Base), volume specifications, and pricing.
- **Fragrance Profiles**: Scent categorization allowing users to browse products by olfactory families (Citrus, Woody, Oriental, Floral).
- **Editorial Section**: Brand articles, scent care guides, and industry news.
- **Cart and Checkout**: State-managed cart drawer with an intuitive multi-step checkout interface.
- **Responsive Layout**: Designed for optimal viewing across mobile, tablet, and desktop devices.
- **Modern Performance**: Built with React Server Components and Turbopack for minimal load times.

---

## Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js (App Router) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React |
| **Carousels** | Swiper |
| **Language** | JavaScript (ES6+) |

---

## Project Structure

```
wits-perfumes/
├── app/                       # Application routes (App Router)
│   ├── about/                 # About page
│   ├── blog/                  # Editorial and articles
│   ├── checkout/              # Checkout flow
│   ├── flavors/               # Scent families and notes
│   ├── store/                 # Product catalog
│   ├── layout.js              # Global layout and font configuration
│   ├── page.js                # Landing page
│   └── globals.css            # Global stylesheets
├── components/                # Reusable UI components
│   ├── about/                 # About page components
│   ├── blog/                  # Blog cards and grids
│   ├── checkout/              # Order summary and checkout forms
│   ├── flavors/               # Flavor showcase components
│   ├── home/                  # Landing page sections
│   ├── layout/                # Navigation, footer, and modals
│   └── store/                 # Product cards and filters
├── context/                   # React context providers (Cart, State)
├── data/                      # Static datasets for products and content
├── public/                    # Static assets (images, icons)
├── LICENSE                    # MIT License
└── package.json               # Dependencies and scripts
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abdullah-nasar/wits.git
   cd wits
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Script | Purpose |
| :--- | :--- |
| `npm run dev` | Starts the development server with Turbopack |
| `npm run build` | Compiles and optimizes the application for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## License

This project is licensed under the terms of the [MIT License](LICENSE).
