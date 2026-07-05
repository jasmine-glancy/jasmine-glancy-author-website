# Jasmine Glancy's Author Website

A modern, responsive web application built with Next.js 16, React 20, and TypeScript.

## Table of Contents

- [Jasmine Glancy's Author Website](#jasmine-glancys-author-website)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Tech Stack](#tech-stack)
    - [Frontend](#frontend)
    - [Tooling](#tooling)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Development Server](#running-the-development-server)
    - [Available Scripts](#available-scripts)
    - [Code Quality](#code-quality)
  - [Styling](#styling)
  - [UI Components](#ui-components)
  - [Design Principles](#design-principles)
  - [Development Workflow](#development-workflow)
  - [Future Enhancements](#future-enhancements)

## Overview

This project is built using a modern React-based technology stack focused on performance, accessibility, maintainability, and developer experience.

The application leverages the latest features of the Next.js App Router, TypeScript for type safety, Tailwind CSS v4 for utility-first styling, and shadcn/ui for accessible UI components. Development workflows are automated with ESLint, Prettier, Husky, and lint-staged to ensure consistent code quality.

## Tech Stack

### Frontend

|       Technology        | Purpose                                                                   |
| :---------------------: | ------------------------------------------------------------------------- |
| Next.js 16 (App Router) | React framework with server rendering, routing, and optimized performance |
|        React 20         | Component-based UI library                                                |
|       TypeScript        | Static typing and improved developer experience                           |
|     Tailwind CSS v4     | Utility-first CSS framework                                               |
|        shadcn/ui        | Accessible, customizable component library                                |
|      Lucide React       | Modern SVG icon library                                                   |
|         Motion          | Smooth and lightweight animations                                         |

---

### Tooling

|    Tool     | Purpose                         |
| :---------: | ------------------------------- |
|    pnpm     | Fast, efficient package manager |
|   ESLint    | Code quality and linting        |
|  Prettier   | Automatic code formatting       |
|    Husky    | Git hooks                       |
| lint-staged | Run checks only on staged files |

## Features

- Fast page loads with Server Components
- Fully responsive design
- Accessibility-first UI
- Light/Dark mode support
- Modern component library
- Subtle animations
- Type-safe development
- Reusable component architecture
- Optimized production builds
- Automated code formatting and linting

## Project Structure

```plain
.
│
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── layout/
│   ├── navigation/
│   └── shared/
│
├── lib/
│   └── utils.ts
│
├── public/
│
└── src/
    └── app/                # Next.js App Router
       ├── (routes)/
       ├── api/
       ├── layout.tsx
       └── page.tsx
```

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm

### Installation

```bash
git clone https://github.com/jasmine-glancy/jasmine-glancy-author-website.git

cd jasmine-glancy-author-website

pnpm install
```

### Running the Development Server

```bash
pnpm dev
```

Open:

```
http://localhost:3000
```

---

### Available Scripts

|      Command      | Description               |
| :---------------: | ------------------------- |
|    `pnpm dev`     | Start development server  |
|   `pnpm build`    | Production build          |
|   `pnpm start`    | Run production server     |
|    `pnpm lint`    | Run ESLint                |
|   `pnpm format`   | Format code with Prettier |
| `pnpm type-check` | Run TypeScript compiler   |
|  `pnpm prepare`   | Install Husky hooks       |

### Code Quality

This project enforces code quality using:

- ESLint
- Prettier
- Husky Git Hooks
- lint-staged

Before every commit:

- ESLint automatically fixes issues where possible.
- Prettier formats staged files.
- Commits are blocked if checks fail.

## Styling

The project uses:

- Tailwind CSS v4
- CSS Variables
- Responsive utility classes
- Dark/light mode support
- shadcn/ui design system

## UI Components

Components are built using:

- shadcn/ui
- Radix UI primitives
- Lucide React icons
- Motion animations

The goal is to create accessible, reusable, and composable components.

## Design Principles

- Mobile-first
- Accessibility-first
- Minimal animations
- Consistent spacing
- Reusable components
- Type-safe architecture
- Performance-oriented

## Development Workflow

1. Create a new feature branch.
2. Implement changes.
3. Run linting and formatting.
4. Commit changes.
5. Push the branch.
6. Open a Pull Request.

## Future Enhancements

- Authentication
- Database integration
- API routes
- Form validation
- Testing
- CI/CD pipeline
- Analytics
- Error monitoring
- Internationalization
