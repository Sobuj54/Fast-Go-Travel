# Fast Go Travel

[![Website](https://img.shields.io/badge/Website-live-brightgreen)](https://fast-go-travel.vercel.app/)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Architecture](#architecture)
5. [Project Structure](#project-structure)
6. [Getting Started](#getting-started)
7. [Installation & Setup](#installation--setup)
8. [Routing & Pages](#routing--pages)
9. [Booking & Static Flow](#booking--static-flow)
10. [Build & Run Commands](#build--run-commands)
11. [Testing & Linting](#testing--linting)
12. [Deployment](#deployment)
13. [Security & Best Practices](#security--best-practices)
14. [Contributing](#contributing)
15. [License](#license)
16. [Contact](#contact)

---

## Project Overview

**Fast Go Travel** is a **Next.js static frontend** using the **App Router**. It demonstrates a multi-service travel booking UI for flights, hotels, buses, visas, tours, and cruises. The project is fully client-side, responsive, and ready for deployment.

- Fully static frontend (no backend yet)
- Responsive design for desktop, tablet, and mobile
- Demonstration of booking flows
- Structured for future API/backend integration

---

## Features

- Home page with hero search, popular destinations, FAQ, and testimonials
- Services pages for Flight, Hotel, Bus, Visa, Tour, Cruise (search, filters, listings, details, booking forms)
- Authentication pages (Login, Register UI only)
- Payment review page (UI only, client-side mock)
- Reusable components: Radix UI components, Swiper/Embla Carousels, Lucide React, React Icons, Sonner notifications, React Day Picker

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** TailwindCSS 4 + PostCSS
- **UI Libraries:** Radix UI, Lucide React, React Icons
- **Carousel/Slider:** Swiper.js, Embla Carousel
- **State Management:** React hooks / local state
- **Utilities:** clsx, class-variance-authority, tailwind-merge, date-fns
- **Development Tools:** ESLint, tw-animate-css, Prettier

---

## Architecture

``````Next.js App Router
├─ src/app/
│ ├─ (services)/ # Flight, Hotel, Bus, Visa, Tour, Cruise pages
│ ├─ authentication/ # Login, Register pages
│ ├─ page.tsx # Home page
│ └─ layout.tsx # Root layout
├─ components/ # Reusable components (buttons, modals, forms)
├─ styles/ # TailwindCSS & global styles
├─ public/ # Images, icons, static assets
├─ utils/ # Helper functions`````

---

## Project Structure

````fast-go-travel/
├─ src/
│ └─ app/
│ ├─ (services)/ # Flight, Hotel, Bus, Visa, Tour, Cruise
│ ├─ authentication/ # Login, Register
│ ├─ page.tsx # Home page
│ └─ layout.tsx # Root layout
├─ components/ # Reusable UI components
├─ styles/ # TailwindCSS + PostCSS
├─ public/ # Images, icons, assets
├─ utils/ # Helper functions
├─ package.json
├─ tailwind.config.js
├─ .eslintrc.json
└─ README.md````

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+ or Yarn

---

## Installation & Setup

```bash
# Clone repository
git clone https://github.com/yourusername/fast-go-travel.git
cd fast-go-travel

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
# Open http://localhost:3000

# Build for production
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start

# Lint code
npm run lint
# or
yarn lint```

``````
