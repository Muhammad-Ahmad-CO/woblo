# Woblo — Creative Digital Studio Website

**Woblo** is a premium creative digital studio website focused on building visually rich experiences through websites, 3D graphics, WebGL, and immersive motion-driven interfaces. Built with modern web technologies, this project showcases a portfolio-style landing page designed to reflect creativity, premium branding, and high-end digital craftsmanship.

**Live Preview**: https://woblo.lovable.app

---

## 🎨 Key Features

- **Immersive 3D Visuals**: Built using Three.js and React Three Fiber for rich, animated 3D compositions
- **Smooth Motion Design**: Powered by Motion (Framer Motion-style animation library) for cinematic transitions and reveal effects
- **Custom Cursor Experience**: Interactive cursor with contextual labels and action-based states
- **Creative Portfolio Showcase**: Structured sections for case studies, services, process, and achievements
- **Responsive Layout**: Mobile-first and desktop-ready design with flexible, modern UI composition
- **Visual Texture & Atmosphere**: Grain overlays, layered backgrounds, and artistic styling elements for a unique studio identity
- **Navigation Experience**: Animated menu, scroll indicators, and anchor-based section flow

---

## 🛠️ Technical Stack

### Core Technologies
- **Framework**: TanStack Start + React 19
- **Styling**: Tailwind CSS 4
- **Animation**: Motion, scroll-based transitions, reveal effects
- **3D Graphics**: Three.js + React Three Fiber
- **Forms & Validation**: React Hook Form + Zod
- **UI Components**: Radix UI
- **Build Tool**: Vite
- **Routing**: TanStack Router

### Key Dependencies

```json
{
  "@tanstack/react-start": "1.168.32",
  "@react-three/fiber": "^9",
  "@react-three/drei": "^10",
  "motion": "^13.2.0",
  "react-hook-form": "^7.71.2",
  "recharts": "^2.15.4",
  "lucide-react": "^0.575.0"
}
```

---

## 📁 Project Structure

```text
woblo/
├── src/
│   ├── routes/                     # File-based routing with TanStack
│   │   ├── __root.tsx             # App shell and global layout
│   │   ├── index.tsx              # Home page / landing page
│   │   └── README.md              # Routing conventions
│   │
│   ├── components/
│   │   └── site/                  # Main landing page sections
│   │       ├── Chrome.tsx         # Header, mobile menu, navigation
│   │       ├── Hero.tsx           # Hero section with 3D blob and scroll effects
│   │       ├── Works.tsx          # Portfolio / case studies section
│   │       ├── Services.tsx       # Service overview
│   │       ├── Process.tsx        # Workflow section
│   │       ├── Contact.tsx        # Footer and contact area
│   │       ├── Cursor.tsx         # Custom cursor
│   │       ├── ScrollProgress.tsx # Scroll progress indicator
│   │       ├── Grain.tsx          # Texture overlay effect
│   │       ├── GoldBlobScene.tsx  # 3D scene
│   │       ├── Marquee.tsx        # Scrolling text marquee
│   │       ├── Manifesto.tsx      # Studio values and philosophy
│   │       ├── Reveal.tsx         # Animated reveal transitions
│   │       ├── Achievements.tsx   # Awards / milestones
│   │       ├── Clients.tsx        # Client section
│   │       └── Spark.tsx          # Special projects / highlights
│   │
│   ├── assets/                    # Images and media assets
│   ├── lib/                       # Utility logic
│   ├── styles.css                 # Global styling and custom theme
│   └── server.ts                  # SSR support file
│
├── package.json                   # Scripts and dependencies
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript configuration
├── README.md                      # Project documentation
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/Muhammad-Ahmad-CO/woblo.git
cd woblo
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Linting and Formatting

```bash
npm run lint
npm run format
```

---

## 🎯 What This Project Represents

Woblo is not just a landing page — it is a visual brand experience. The design language is built to feel premium, artistic, and experimental. The website communicates a studio identity rooted in creativity, digital craftsmanship, and modern visual storytelling.

It is especially suitable for:
- digital agencies
- creative studios
- product showcases
- premium portfolio brands
- concept-driven design businesses

---

## 🧩 Page Experience

The homepage is divided into thoughtfully designed sections:

1. **Header / Navigation**
   - Fixed top navigation
   - Responsive mobile menu
   - Premium studio-like look and feel

2. **Hero Section**
   - Large cinematic typography
   - WebGL-inspired 3D visual background
   - Parallax and layered motion effects

3. **Portfolio / Case Studies**
   - Showcases different creative projects with image-based cards
   - Tags like Sites, CGI, and Interfaces
   - Clear visual hierarchy and premium presentation

4. **Services**
   - Explains what the studio offers and how it helps brands

5. **Process / Workflow**
   - Communicates a structured creative methodology

6. **Achievements / Clients**
   - Highlights credibility, experience, and impact

7. **Footer / Contact**
   - Email, social links, and CTA area for business inquiries

---

## ✨ Design Highlights

- Distinctive black-and-cream studio aesthetic
- Rich visual contrast with warm accent colors
- Premium typography and editorial layout
- Motion-led storytelling
- Website feels more like a creative brand experience than a standard portfolio

---

## 🌐 Live Demo

Visit the project here:

https://woblo.lovable.app

---

## 📬 Contact

- Email: hello@woblo.studio
- Phone: +1 000 000 00 00

---

## 📝 Summary

Woblo is a bold, modern, and high-end creative studio website that blends design, motion, and 3D visuals into a polished digital experience. It serves as an ideal example of how a portfolio website can feel custom, premium, and unforgettable while still being built using a scalable modern frontend stack.

Built with creativity, motion, and digital experimentation.

---

**Woblo Studio**
