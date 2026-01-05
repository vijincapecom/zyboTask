# zyboTask

Setup instructions

Framework: Next.js (App Router)(version 16.1.1)

Language: TypeScript

State Management: Zustand

Data Fetching & Caching: React Query (TanStack Query)

Authentication: NextAuth.js

HTTP Client: Axios

Styling: Tailwind CSS

UI Components: shadcn/ui

Animations: GSAP

Notifications: Sonner

Progress Indicator: Next.js Top Loader

*Setup Instructions

1 Prerequisites

Make sure you have the following installed:

Node.js (22.16.0)

npm 

Git


Tech descisions

* Next.js App Router

Uses App Router for improved routing, layouts, and server components

Enables better code splitting and performance optimization

Supports both Server Components and Client Components where needed

* TypeScript

Provides strong typing and improved developer experience

Helps catch errors during development

Improves code readability and maintainability


* Zustand (State Management)

Lightweight and minimal state management solution

Used for managing global UI and business states

Avoids boilerplate compared to Redux

Easy integration with React hooks

* React Query (TanStack Query)

Handles server-state management efficiently

Built-in caching, background refetching, and request deduplication

Reduces manual API state handling

Works seamlessly with Axios


* Axios

Centralized API request handling

Configured with interceptors for:

Authentication tokens

Global error handling

Clean separation of API logic

* NextAuth.js

Secure authentication solution

Supports credential-based and OAuth providers

Manages sessions using JWT

Integrated with App Router

* Tailwind CSS

Utility-first CSS framework

Enables fast UI development

Ensures consistent spacing, typography, and responsiveness

* shadcn/ui

Accessible, reusable UI components

Built on top of Radix UI and Tailwind CSS

Easy to customize and theme

* GSAP

High-performance animation library

Used for hover effects, transitions, and page animations

Provides smooth and controlled animations

* Sonner (Toast Notifications)

Lightweight toast notification system

Used for success, error, and info feedback

Clean and non-intrusive UI

* Next.js Top Loader

Displays a progress bar during route changes

Improves perceived performance and UX