# Weef Lijn — Luxury Textile Collection

Weef Lijn is a curated luxury textile brand and collection designed for sophisticated hospitality and residential spaces. This web application serves as the digital catalog, philosophy presentation, and contact portal for the brand.

---

## 🏛️ Brand Concept & Philosophy

Curated by Hussain Aamir and designed in the Netherlands, Weef Lijn offers premium textile craftsmanship, specializing in custom natural linen and silk blends. The collection blends modern geometric aesthetics with traditional luxury craftsmanship, tailored for boutique hotels, fine dining establishments, and high-end wholesale partners.

---

## ✨ Features

- **Interactive Lookbook Grid**: A visually stunning showcase of the luxury textile collection.
- **Philosophy Showcase**: In-depth presentation of the brand’s history, heritage, and values.
- **Hospitality & Wholesale**: Specialized sections highlighting commercial and custom textile partnerships.
- **Lead Capture & Contact Portal**: A premium, interactive contact form and digital business card for inquiries.
- **Aesthetic Navigation**: Sleek, sticky glassmorphic navigation header featuring the custom Brand Logo.
- **Vercel Analytics Integration**: Web performance and user engagement analytics pre-configured.

---

## 🛠️ Tech Stack & Design System

### Technology Stack
- **Framework**: [React 19](https://react.dev/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [@vercel/analytics](https://vercel.com/docs/analytics)

### Luxury Color Palette (Tailwind v4 Theme Tokens)
Our style system is defined inside [src/index.css](file:///f:/Dev_Workspace/Active_Projects/weeflijn/src/index.css) using Tailwind v4 theme extensions:

| Token | Hex Code | Description |
| :--- | :--- | :--- |
| `brand-charcoal` | `#111111` | Deep primary black for high-contrast luxury text & backgrounds |
| `brand-cream` | `#faf9f6` | Warm ivory paper background |
| `brand-red` | `#c8102e` | Bold accent red for call-to-actions and branding lines |
| `brand-crimson` | `#a60f26` | Deep red accent variant |
| `brand-sand` | `#c2b2a2` | Soft metallic gold/sand for borders, outlines, and highlights |
| `brand-taupe` | `#8d8070` | Muted organic brown for secondary text |
| `brand-slate` | `#f2f1ed` | Cool grey-cream for section backgrounds |

### Typography
- **Serif (Headers)**: `Playfair Display`, Georgia, serif
- **Sans-serif (Body)**: `Outfit`, system-ui, sans-serif

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yahyahus/weeflijn.git
   cd weeflijn
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the local Vite development server:
```bash
npm run dev
```

### Production Build
Build the application for production deployment:
```bash
npm run build
```
This runs TypeScript compilation checks (`tsc -b`) and bundles the static assets using Vite into the `dist/` directory.

### Preview Build
Preview the production build locally:
```bash
npm run preview
```

---

## 📈 Vercel Analytics

Vercel Web Analytics is fully supported and integrated.

### Local Configuration
To toggle Vercel Analytics tracking on/off, you can import and include the `<Analytics />` component in the main entry point:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
```

> [!NOTE]
> Make sure Web Analytics is enabled under the **Analytics** tab of your project's dashboard on Vercel. Pushing these files to GitHub will automatically trigger a Vercel rebuild with tracking enabled.

---

## 🗺️ Project Structure

```
weeflijn/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Images, patterns, brand photography
│   ├── components/         # React Components
│   │   ├── Contact.tsx     # Inquiries Form & Contact Info
│   │   ├── Hero.tsx        # Hero banner with brand imagery
│   │   ├── Hospitality.tsx # Hospitality & wholesale solutions
│   │   ├── Logo.tsx        # SVG/Image brand logo wrapper
│   │   ├── Lookbook.tsx    # Showcase gallery of textile designs
│   │   ├── Navbar.tsx      # Sticky glassmorphism header
│   │   └── Philosophy.tsx  # Brand backstory & values
│   ├── App.tsx             # Page layout orchestrator
│   ├── index.css           # Tailwind v4 imports, theme, & custom styles
│   └── main.tsx            # Main React mounting entrypoint
├── package.json            # Scripts & dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite bundler options
```

---

## 📞 Coordinates

- **Creative Lead**: Hussain Aamir
- **E-mail**: [info@weeflijn.nl](mailto:info@weeflijn.nl)
- **Phone**: +31 6 52 03 17 17
- **Location**: Curated in the Netherlands
