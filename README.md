# Fast Go Travel

[![Website](https://img.shields.io/badge/Website-live-brightgreen)](https://fast-go-travel.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A multi-service travel booking web application built with Next.js 15 (App Router). Fast Go Travel provides a unified interface for searching and booking flights, hotels, buses, tours, cruises, visas, Umrah packages, and travel insurance, along with a user dashboard for managing bookings, travelers, and account settings.

**Live demo:** [fast-go-travel.vercel.app](https://fast-go-travel.vercel.app/)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Routing Overview](#routing-overview)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Multi-service booking** — Dedicated search, listing, filter, detail, and booking flows for Flights, Hotels, Buses, Tours, Cruises, Visas, Umrah packages, and Insurance.
- **User dashboard** — Manage bookings, saved travelers, promo codes, account details, and settings.
- **Authentication flows** — Sign up, sign in, email/OTP verification, and password reset (forgot password / new password) screens.
- **Payment review** — Client-side checkout and payment review UI.
- **Static & marketing pages** — Home page with hero search, popular destinations, testimonials, FAQ, "list your property," and contact pages.
- **Reusable component library** — shadcn/ui (new-york style) built on Radix UI primitives, with toast notifications, carousels, and date pickers.
- **Responsive design** — Optimized for desktop, tablet, and mobile.

## Tech Stack

| Category      | Technology                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| Framework     | [Next.js 15](https://nextjs.org/) (App Router, React Server Components)                                             |
| UI Library    | [React 19](https://react.dev/)                                                                                      |
| Styling       | [Tailwind CSS 4](https://tailwindcss.com/), PostCSS, `tw-animate-css`                                               |
| Components    | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/), [Headless UI](https://headlessui.com/) |
| Animation     | [Motion](https://motion.dev/)                                                                                       |
| Carousels     | [Swiper](https://swiperjs.com/), [Embla Carousel](https://www.embla-carousel.com/)                                  |
| Icons         | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)                      |
| Dates         | [date-fns](https://date-fns.org/), [React Day Picker](https://react-day-picker.js.org/)                             |
| Notifications | [Sonner](https://sonner.emilkowal.ski/)                                                                             |
| Utilities     | `clsx`, `class-variance-authority`, `tailwind-merge`                                                                |
| Tooling       | ESLint 9, `eslint-config-next`                                                                                      |
| Language      | JavaScript (JSX)                                                                                                    |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later
- npm 9+ (or yarn / pnpm / bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/Sobuj54/Fast-Go-Travel.git
cd Fast-Go-Travel

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| `npm run dev`   | Start the development server at `localhost:3000`     |
| `npm run build` | Create an optimized production build                 |
| `npm start`     | Run the production server (requires a prior `build`) |
| `npm run lint`  | Run ESLint across the project                        |

## Project Structure

```text
fast_go_travel/
├─ public/                     # Static assets (images, icons)
├─ src/
│  ├─ app/                     # Next.js App Router
│  │  ├─ (services)/           # Grouped service routes
│  │  │  ├─ flight/            #   flight, hotel, bus, cruise,
│  │  │  ├─ hotel/             #   tour, visa, umrah, insurance
│  │  │  ├─ ...                #   (each: page + components/details/booking)
│  │  │  └─ components/        # Shared service components
│  │  ├─ (utility)/            # contact-us, 404, shared utility pages
│  │  ├─ authentication/       # signIn, signup, verify, code,
│  │  │                        #   forget-pass, newpass
│  │  ├─ dashboard/            # account, bookings, travelers,
│  │  │                        #   promocodes, settings
│  │  ├─ payment/              # Checkout & payment review
│  │  ├─ list-your-property/   # Property listing flow
│  │  ├─ components/           # Home-page & shared components
│  │  ├─ layout.js             # Root layout
│  │  ├─ page.js               # Home page
│  │  ├─ error.js              # Error boundary
│  │  ├─ not-found.js          # 404 page
│  │  └─ globals.css           # Global styles & Tailwind layers
│  ├─ components/ui/           # shadcn/ui components
│  ├─ lib/utils.js             # Shared helpers (cn, etc.)
│  └─ utils/showToast.js       # Toast utility
├─ components.json             # shadcn/ui configuration
├─ next.config.mjs             # Next.js configuration
├─ jsconfig.json               # Path aliases (@/* -> src/*)
├─ eslint.config.mjs           # ESLint flat config
└─ postcss.config.mjs          # PostCSS configuration
```

## Routing Overview

The app uses the Next.js App Router with [route groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups) to organize related pages without affecting the URL path.

| Route                                                                            | Description                                             |
| -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `/`                                                                              | Home page with hero search and marketing sections       |
| `/flight`, `/hotel`, `/bus`, `/cruise`, `/tour`, `/visa`, `/umrah`, `/insurance` | Service search, listings, and details                   |
| `/authentication/*`                                                              | Sign in, sign up, verification, and password recovery   |
| `/dashboard/*`                                                                   | Bookings, travelers, promo codes, account, and settings |
| `/payment`                                                                       | Checkout and payment review                             |
| `/list-your-property`                                                            | Property listing submission                             |
| `/contact-us`                                                                    | Contact page                                            |

## Configuration

### Path Aliases

The `@` alias maps to the `src` directory (see [jsconfig.json](jsconfig.json)):

```js
import { cn } from "@/lib/utils";
import Header from "@/app/components/Header";
```

### Remote Images

External images are served from Pexels. Additional hosts must be whitelisted in [next.config.mjs](next.config.mjs):

```js
images: {
  domains: ["images.pexels.com"],
}
```

### Adding UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) configured for JavaScript (`tsx: false`) and the `new-york` style. Add components with:

```bash
npx shadcn@latest add <component>
```

## Deployment

The application is deployed on [Vercel](https://vercel.com/), the recommended platform for Next.js.

To deploy your own instance:

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Vercel auto-detects the Next.js framework — no extra build configuration is required.
4. Each push to the tracked branch triggers an automatic deployment.

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other hosting options.

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes with clear messages.
4. Run `npm run lint` and ensure the app builds.
5. Push the branch and open a pull request against `main`.
