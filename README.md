# Tin Pham Portfolio

Personal portfolio website for Tin Pham, a .NET developer building AI systems,
creator workflows, and modern web products.

## Overview

This site presents selected projects, current learning direction, technical
stack, and contact links in a polished dark interface inspired by modern
productivity tools.

Live site: https://phamtrongtin-portfolio-website.vercel.app/

## Features

- Premium dark portfolio UI with responsive layouts
- Hero section with product-lab positioning and project preview visual
- Featured project cards with live demo and GitHub links
- About, current focus, tech stack, and contact sections
- SEO metadata and JSON-LD person schema
- Motion-based reveal animations

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
src/app                 App router, metadata, global styles
src/components/layout   Navbar, footer, layout container
src/components/sections Portfolio page sections
src/components/ui       Reusable UI primitives
src/data                Portfolio content and links
public/images           Static visual assets
```

## Deployment

The project is ready to deploy on Vercel. Build verification:

```bash
npm run build
```
