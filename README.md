<div align="center">

# ✨ WITS PERFUMES ✨
### *The Art of Luxury & Signature Fragrances*

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

<br/>

> **Wits Perfumes** is an ultra-modern, high-end luxury e-commerce web application meticulously crafted for connoisseurs of exquisite scents, signature notes, and premium fragrances.

<br/>

[✨ Explore Store](#-features) • [🚀 Quick Start](#-getting-started) • [📂 Architecture](#-project-structure) • [💎 Tech Stack](#-tech-stack)

---

</div>

<br/>

## 🌟 Key Highlights & Features

- 💎 **Luxury Aesthetic & UX**: Rich dark-mode glassmorphic visuals, refined gold accents, and smooth transitions that reflect high-end perfumery.
- 🛍️ **Interactive Product Showcase**: Dynamic fragrance listings featuring detailed notes (Top, Heart, Base), longevity stats, and bottle sizes.
- 🧪 **Flavor & Scent Exploration**: Dedicated fragrance profiling (`/flavors`) to help customers discover scents based on aroma families (Citrus, Woody, Oriental, Fresh).
- 📰 **Perfume Editorial & Journal**: In-depth blog platform (`/blog`) featuring masterclass fragrance guides, reviews, and seasonal wear tips.
- 🛒 **Seamless Checkout Experience**: Frictionless cart & checkout flow (`/checkout`) with intuitive order breakdowns.
- ⚡ **Turbopack Powered**: Lightning-fast developer experience with Next.js Turbopack & React 19 server components.
- 📱 **100% Mobile Responsive**: Flawless swipe experiences powered by SwiperJS and modern responsive layouts.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Turbopack) |
| **Core UI** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Carousels & Sliders** | [Swiper.js](https://swiperjs.com/) |
| **Fonts** | Next Google Fonts (Geist / Modern Sans) |

---

## 📁 Project Structure

```bash
wits-perfumes/
├── 📂 app/                    # Next.js App Router
│   ├── 📂 about/              # Brand story & vision
│   ├── 📂 blog/               # Fragrance articles & reviews
│   ├── 📂 checkout/           # Checkout & order processing
│   ├── 📂 flavors/            # Scent profiles & fragrance notes
│   ├── 📂 store/              # Product catalog & filters
│   ├── 📄 layout.js           # Root layout & global providers
│   ├── 📄 page.js             # High-impact Hero & Homepage
│   └── 📄 globals.css         # Design tokens & custom styling
├── 📂 components/             # Reusable UI components
│   ├── 📂 common/             # Navbar, Footer, Modals
│   ├── 📂 home/               # Hero, BestTasteSection, BrandLogos
│   └── 📂 store/              # Product cards, Filters, Cart drawer
├── 📂 context/                # Global React contexts (Cart, UI, Mounted)
├── 📂 data/                   # Product datasets, brands, and blogs
├── 📂 public/                 # Optimized images, icons & branding assets
├── 📄 LICENSE                 # MIT License
└── 📄 package.json            # Scripts & project dependencies
```

---

## 🚀 Getting Started

Follow these simple steps to run **Wits Perfumes** locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/wits-perfumes.git
cd wits-perfumes
```

### 2️⃣ Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Launch the Dev Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to experience the site live.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs development server with fast HMR |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Serves the production build |
| `npm run lint` | Runs ESLint checks across project |

---

## 🌐 Cloudflare Tunnel Setup (Instant Live Preview)

To share your local dev server instantly with clients or team members:

```bash
npx cloudflared tunnel --url http://localhost:3000
```

---

## 📄 License

This project is open-source and distributed under the **[MIT License](LICENSE)**.

<div align="center">
  <sub>Crafted with passion, elegance & code by <b>Shoaib</b> ✨</sub>
</div>
