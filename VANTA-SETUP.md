# Vanta.js NET Background Effect Setup

## ✨ What's Been Added

Your NaidenovART portfolio now features a stunning **Vanta.js NET** 3D animated background with the following configuration:

### Settings Applied:
- **Color:** `0x1c1ca0` (Deep Blue)
- **Background Color:** `0x7abcfc` (Light Blue)
- **Points:** 10
- **Max Distance:** 20
- **Spacing:** 15
- **Show Dots:** true
- **Mouse Controls:** Enabled
- **Touch Controls:** Enabled

## 🎨 Blue Color Theme

The entire site has been updated to use a beautiful blue color palette:

- **Primary Blue:** `#1c1ca0` (Vanta color)
- **Light Blue:** `#7abcfc` (Background)
- **Accent Cyan:** `#5a9fd4`

### Updated Elements:
- ✅ Header with blue gradient logo
- ✅ Hero section with blue gradients
- ✅ CTA button with blue glow effect
- ✅ Showcase cards with blue/cyan themes
- ✅ Global background colors

## 🚀 How to Run

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

You should see the animated NET background with connected points moving as you move your mouse!

## 🎛️ Customizing Vanta Settings

To adjust the Vanta.js effect, edit `components/HeroSection.tsx`:

```typescript
vantaEffect.current = window.VANTA.NET({
  el: vantaRef.current,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x1c1ca0,           // Change this for different dot colors
  backgroundColor: 0x7abcfc,  // Change this for different background
  points: 10,                 // Number of connection points
  maxDistance: 20,            // Connection distance
  spacing: 15,                // Space between points
  showDots: true,             // Show/hide dots
});
```

## 🎨 Color Code Reference

To change colors, use hex colors but replace `#` with `0x`:

| Visual Color | Hex Code  | Vanta Format |
|-------------|-----------|--------------|
| Deep Blue   | #1c1ca0   | 0x1c1ca0     |
| Light Blue  | #7abcfc   | 0x7abcfc     |
| Cyan        | #00ffff   | 0x00ffff     |
| Purple      | #8b5cf6   | 0x8b5cf6     |
| Pink        | #ec4899   | 0xec4899     |

## 📦 CDN Libraries Used

- **Three.js r134** - 3D rendering library
- **Vanta.js NET** - Animated network effect

Both are loaded via CDN in `app/layout.tsx` for optimal performance.

## ⚡ Performance Notes

- The Vanta effect is GPU-accelerated for smooth performance
- It automatically adjusts to screen size
- Mobile-optimized with touch controls
- Cleans up properly when component unmounts

## 🎯 Next Steps

1. Add your actual artwork images to `public/images/`
2. Create portfolio gallery section
3. Add contact form
4. Deploy to Vercel or your hosting platform

Enjoy your stunning new background effect! 🎉


