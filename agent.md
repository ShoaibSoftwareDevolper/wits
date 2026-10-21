# Agent Guidelines and General Rules

## Core Directives

### 1. General Architecture and File Structure
* Always use Tailwind CSS for styling.
* Never use a src folder. All folders such as app/, components/, and public/ must be located directly at the project root.
* Follow an ideal, clean, and modular file structure.
* Break large pages down into dedicated, focused section modules (such as Navbar, Hero, Stats, ProductFeatures, Testimonials, Footer) rather than dumping an entire page into a single file.

### 2. Component Design Principles
* Do not create over-engineered micro-components or abstract UI primitives (such as reusable Button, Input, or Card wrapper components).
* Buttons, inputs, and elements must be hard-coded directly within their respective section files with their specific styles and classes.

### 3. Strict Design Fidelity
* Every visual element, layout, spacing, typography, color, and asset must strictly match the provided design.
* Reproduce designs with exact precision and zero deviation. Do not introduce arbitrary design choices, improvisations, or placeholder aesthetics.
* Match serif and sans-serif typography, font weights, letter spacing, and button drop shadows exactly as shown in the design.
* Primary background color scheme is pure white (`#ffffff` / `bg-white`) and `#fafafa`. Do not introduce arbitrary cream or off-white tones.
* Avoid excessive or nested borders on cards. Use soft, elegant shadows (e.g., `shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]`) and seamless media headers. Keep hover effects minimal and restrained.
* Card Proportions & Sizing: Avoid oversized, bulky cards that dominate the viewport. Use balanced 3 or 4-column responsive grids with compact media heights, refined padding, and restrained, luxury scale.

### 4. No Comments Rule
* Absolutely no comments in code files.
* Do not write JSX comments, HTML comments, JavaScript single-line or multi-line comments.
* Code must be self-explanatory, clean, and concise.

### 5. Code and Text Standards
* Do not use horizontal rule dividers (triple dashes) anywhere.
* Do not use emojis in code, comments, documentation, or UI copy.
* No extra, unused, or unnecessarily complex code.
* Write clean, maintainable, and standard JavaScript with Tailwind CSS.

### 6. To-The-Point Component Generation (No Fluff or Badges)
* When building or updating components requested by the user, keep them strictly to the point and minimalist.
* Do not inject extra AI-generated text, marketing fluff, or unsolicited badges/tags (e.g., "Best Seller", "New Arrival", "Secure Checkout", promo chips, security seals) unless explicitly requested.
* Keep copy and UI elements clean, exact, and free from emojis or decorative distractions.

### 7. Dynamic & Modular Component Architecture
* Keep components dynamic, state-responsive, and properly separated.
* Distinct functional features (such as CartDrawer/CartSidebar, MobileNav, SearchModal, Checkout sections) must have their own dedicated component files rather than inlining massive blocks into parent navbars or pages.
* Extract mapped datasets (such as navigation links, product catalogs, flavor profiles, articles) into separate data files under a dedicated data/ directory directly at root.
* Maintain a clean, disciplined project structure in components/, data/, and app/ while avoiding unnecessary monoliths.

### 8. Image Optimization & Next.js Image Component
* Always use Next.js's `<Image>` component from `next/image` for rendering all images across the application. Never use native HTML `<img>` tags.
* Ensure all images have explicit `width` and `height`, or use `fill` with appropriate `sizes` and parent relative containers.
* Always configure `next.config.mjs` to auto-optimize images into modern formats (`image/webp` and `image/avif`).
