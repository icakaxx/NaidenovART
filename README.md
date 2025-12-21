# NaidenovART Portfolio Website!!!

A stunning portfolio website for NaidenovART, showcasing automotive art, custom car designs, helmet paintings, wall murals, and creative design work.

## 🎨 Features

- **Modern Hero Section** - Eye-catching hero with animated star background
- **Responsive Design** - Looks great on all devices
- **Smooth Animations** - Professional transitions and effects
- **Next.js 14** - Built with the latest Next.js App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project folder

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
naidenovart-portfolio/
├── app/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── Header.tsx          # Navigation header
│   └── HeroSection.tsx     # Hero section with animations
├── public/
│   └── images/             # Image assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Adding Images

Place your artwork images in the `public/images/` directory and update the components to reference them.

### Customizing Colors

Edit `tailwind.config.js` to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      'brand-dark': '#1a1d3a',
      'brand-purple': '#2a2d5a',
      // Add your custom colors here
    },
  },
}
```

### Adding Sections

Create new components in the `components/` directory and import them in `app/page.tsx`:

```tsx
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
```

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** CSS Animations & Canvas API

## 📝 License

This project is created for NaidenovART portfolio purposes.

## 🎯 Services Showcased

- Car Illustrations & Drawings
- Custom Car Painting
- Wall Murals & Street Art
- Motor Helmet Designs
- Transparent Message Art for Occasions

---

Built with ❤️ for NaidenovART



