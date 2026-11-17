# Hari Prasath S – Professional Full Stack Developer Portfolio Frontend

[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A high-performance, editorial-grade personal portfolio frontend engineered for **Hari Prasath S** (Computer Science and Engineering, Sri Eshwar College of Engineering), purpose-built for software developer internship applications and competitive full-stack software engineering roles.

---

## 1. Project Overview

This repository houses the frontend client application for Hari Prasath's software engineering portfolio. Rather than using standard generic student templates, this application was architected from the ground up to embody the visual identity, clean structure, and performance standards of an experienced software engineer.

The interface pairs a high-contrast deep navy/dark charcoal palette with electric blue and subtle violet accents, responsive typography, modular component hierarchies, and micro-interactions.

---

## 2. Objectives

- **Targeted Candidate Presentation:** Highlight academic engineering rigor, hands-on software development, competitive programming, and technical communication tailored for top software engineering teams and technical recruiters.
- **Strict Verification Integrity:** Present strictly verified student background without fictitious employment claims, arbitrary proficiency percentages, or unverified metrics.
- **Frontend-First Architecture:** Deliver a standalone, decoupled frontend that operates gracefully offline using verified local data while maintaining 100% readiness for REST API backend integration.
- **Exceptional Web Performance & Accessibility:** Adhere to semantic HTML, responsive layout principles, smooth scroll spy navigation, and reduced-motion accessibility standards.

---

## 3. Key Features

- **Sticky Glassmorphic Navigation:** Dynamic blur and opacity transition on scroll, scroll-spy section tracking, responsive hamburger drawer for mobile devices, and instant Resume access.
- **Editorial Hero Section:** Two-column layout presenting candidate identity, verified college background, direct contact CTAs, and Hari Prasath's portrait framed with ambient lighting.
- **Technical Competencies Matrix:** Filterable skill categories (Programming Languages, Web Development, Databases, Developer Tools, and Emerging Technologies) emphasizing demonstrable capabilities.
- **Featured Systems Showcase:**
  1. **CocoCut:** Autonomous Coconut Leaf Cutting Machine (Robotics, Hardware, IoT, Automation)
  2. **CyberSentinel AI:** Predictive Network Security & Threat Forecasting (AI, ML, Cybersecurity)
  3. **AI-Powered Retail Intelligence:** Shopper Analytics & Queue Management (Computer Vision, Analytics)
  4. **LocalKart / Namma-Mart:** Full-Stack Local Commerce Engine (React, TypeScript, Node.js, REST APIs)
- **Interactive Project Modal:** Detailed system drill-down containing problem statements, proposed solutions, architectural components, personal engineering contributions, and repository links.
- **Public Speaking Gallery:** Dedicated *Beyond Code* showcase featuring technical symposium presentations with integrated video modal players and placeholder indicators for upcoming uploads.
- **Chronological Timeline:** Verified milestones covering hackathon prototypes, innovation cell project leadership, and technical speaking engagements.
- **Education Section:** Clean overview of Sri Eshwar College of Engineering coursework and academic credentials (with CGPA omitted as required).
- **Zod-Validated Contact Form:** Full client-side validation with React Hook Form, live submission handling via Axios, and accurate offline handling with a 1-click `mailto:` fallback.
- **Printable Resume Modal:** In-browser verified candidate summary equipped with a 1-click print/save-as-PDF action.

---

## 4. Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Library** | React | 19.3+ | UI rendering and component architecture |
| **Language** | TypeScript | 5.8+ | Strict type safety and interface contracts |
| **Build Tool** | Vite | 8.3+ | Fast HMR dev server and optimized Rollup bundler |
| **Styling** | Tailwind CSS | 4.0+ | Modern utility CSS with custom dark color system |
| **Animations** | Framer Motion | 12.0+ | Declarative scroll reveals and micro-interactions |
| **Icons** | Lucide React | 1.16+ | Clean, lightweight feather icon set |
| **Routing** | React Router | 7.3+ | Client-side routing and 404 handling |
| **HTTP Client**| Axios | 1.8+ | Centralized REST client with timeout interceptors |
| **Forms** | React Hook Form | 7.54+ | Uncontrolled performant form state management |
| **Validation** | Zod | 3.24+ | Schema declaration and static type inference |

---

## 5. Folder Structure

```text
frontend/
├── public/
│   ├── favicon.svg              # Custom developer monogram SVG icon
│   └── images/
│       └── hari-prasath-profile.png
│
├── src/
│   ├── assets/
│   │   └── hari-prasath-profile.png
│   │
│   ├── components/
│   │   ├── animations/
│   │   │   └── FadeIn.tsx       # Motion wrapper with reduced-motion support
│   │   ├── cards/
│   │   │   ├── ProjectCard.tsx  # Project showcase card
│   │   │   └── ProjectVisual.tsx# Interactive UI schematic illustration
│   │   ├── common/
│   │   │   ├── BrandIcons.tsx   # Pixel-perfect GitHub & LinkedIn SVG icons
│   │   │   ├── Footer.tsx       # Bottom footer and quick navigation
│   │   │   ├── ProjectModal.tsx # Full architectural project modal
│   │   │   ├── ResumeModal.tsx  # Candidate summary & printable resume view
│   │   │   ├── SectionHeading.tsx # Reusable section title component
│   │   │   └── VideoModal.tsx   # Video playback & placeholder modal
│   │   └── navigation/
│   │       └── Navbar.tsx       # Sticky navbar with mobile drawer
│   │
│   ├── data/
│   │   └── portfolioData.ts     # Verified fallback candidate dataset
│   │
│   ├── hooks/
│   │   ├── usePrefersReducedMotion.ts # Accessibility hook
│   │   └── useScrollSpy.ts      # Active section detector
│   │
│   ├── pages/
│   │   ├── Home.tsx             # Main single-page portfolio layout
│   │   └── NotFound.tsx         # 404 error fallback page
│   │
│   ├── services/
│   │   ├── apiClient.ts         # Axios instance configured with VITE_API_URL
│   │   ├── achievementsService.ts # Dynamic achievements endpoint adapter
│   │   ├── contactService.ts    # Form submission dispatcher with offline detection
│   │   ├── projectsService.ts   # Projects data fetcher & fallback
│   │   ├── skillsService.ts     # Skills data fetcher & fallback
│   │   └── speakingService.ts   # Speaking events fetcher & fallback
│   │
│   ├── styles/
│   │   └── theme.ts             # Global design tokens
│   │
│   ├── types/
│   │   └── portfolio.ts         # TypeScript models and API schemas
│   │
│   ├── utils/
│   │   └── formatters.ts        # String and date helper utilities
│   │
│   ├── App.tsx                  # Root router component
│   ├── index.css                # Tailwind directives and base layer styles
│   └── main.tsx                 # React DOM mount point
│
├── .env                         # Local environment configuration
├── .env.example                 # Example template for environment variables
├── index.html                   # HTML entry point with rich Open Graph metadata
├── package.json                 # Dependency manifest and scripts
├── tsconfig.json                # TypeScript root configuration
├── tsconfig.app.json            # Application compiler options
└── vite.config.ts               # Vite bundler and manual chunking configuration
```

---

## 6. Prerequisites

Ensure you have the following installed on your development machine:

- **Node.js**: v18.0.0 or later (v20+ or v24+ recommended)
- **npm**: v9.0.0 or later (or `pnpm` / `yarn`)

Verify with:
```bash
node -v
npm -v
```

---

## 7. Installation

Clone the repository and enter the frontend directory:

```bash
cd Portfolio/frontend
npm install
```

---

## 8. Development Commands

Run the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 9. Production Build

Compile TypeScript and build the optimized production assets:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 10. Environment Variables

Create a `.env` file in the `frontend` root by copying `.env.example`:

```bash
cp .env.example .env
```

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `VITE_API_URL` | Base URL of the backend REST API server | `http://localhost:5000/api` |

---

## 11. Backend Integration Instructions

The frontend is architected for plug-and-play REST API integration. If a backend server is not running at `VITE_API_URL`, the application automatically falls back to verified static data without crashing.

### Expected Backend Endpoints:

1. **`GET /api/projects`**
   - **Response**: `{ success: true, data: Project[] }`
2. **`GET /api/projects/:id`**
   - **Response**: `{ success: true, data: Project }`
3. **`GET /api/skills`**
   - **Response**: `{ success: true, data: SkillCategory[] }`
4. **`GET /api/speaking`**
   - **Response**: `{ success: true, data: SpeakingEngagement[] }`
5. **`GET /api/achievements`**
   - **Response**: `{ success: true, data: AchievementItem[] }`
6. **`POST /api/contact`**
   - **Payload**: `{ name: string, email: string, subject: string, message: string }`
   - **Response**: `{ success: true, message: string }`

All schemas are strictly defined in [`src/types/portfolio.ts`](src/types/portfolio.ts).

---

## 12. Deployment Instructions

### Vercel / Netlify / Cloudflare Pages

1. **Root Directory**: `frontend` (or set project root to `Portfolio/frontend`)
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Environment Variables**: Add `VITE_API_URL` if you have a deployed backend.

---

## 13. Author & Candidate Information

- **Name**: Hari Prasath S
- **Degree**: B.E. Computer Science and Engineering (Second Year)
- **Institution**: Sri Eshwar College of Engineering, Coimbatore, Tamil Nadu, India
- **Role Interest**: Software Developer Intern (Winter 2026) / Backend & Full-Stack Developer
- **Email**: [hariprasath.s2025cse@sece.ac.in](mailto:hariprasath.s2025cse@sece.ac.in)
- **GitHub**: [github.com/hariprasath-tech](https://github.com/hariprasath-tech)
- **LinkedIn**: [linkedin.com/in/hari-prasath-b47a38359](https://www.linkedin.com/in/hari-prasath-b47a38359/)

---

## 14. Future Improvements

- Add live YouTube embeds once tech talk presentation video recordings are edited and published.
- Implement an interactive live terminal simulator component for command-line portfolio exploration.
- Integrate automated end-to-end testing with Playwright or Vitest.
- Connect to a production Node.js / Express backend with email dispatch via Resend or Nodemailer.
