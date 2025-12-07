## Torque & Lustre API INVENTORY - Frontend

This is a modern React application for managing your personal car collection, built with Vite, React Router, and shadcn/ui components.

---

## Features

- Car Display: Browse your cars in a responsive card layout

- Add Cars: Form-based car entry with validation

- Responsive Design: Mobile-first layout that looks great on all devices

- Modern UI: Clean, accessible interface using shadcn/ui

- Form Validation: Client-side validation powered by Zod

---

## Tech Stack

- React – Functional components and hooks

- Vite – Fast and lightweight dev server + build tool

- React Router – Client-side routing

- React Hook Form – Efficient and scalable form handling

- Zod – TypeScript-first validation schemas

- Tailwind CSS – Utility-first styling

- shadcn/ui – Accessible, pre-built UI components

- React Hot Toast – Toast notifications

---

## Prerequisites

Before starting, ensure you have installed:

- Node.js (version 22 or higher)

- npm

---

## Setup Instructions

## 1. Initial Vite Setup

- If starting a fresh project:

```bash
npm create vite@latest frontend
cd frontend
npm install
```

## 2. Install Required Dependecies

```bash
# React Router for routing
npm install react-router-dom

# Tailwind + utilities
npm install tailwindcss @tailwindcss/vite

# Toast notifications
npm install react-hot-toast
```

## 3. Setup Tailwind CSS

- Delete everything inside index.css and replace it with:

```bash
@import "tailwindcss";
```

- Update vite.config.js:

```bash
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

## 4. Setup Path Aliases (recommended when using shadcn/ui)

- Edit vite.config.js:

```bash
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

- Create or update jsconfig.json:

```bash
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 5. Setup shadcn/ui (Optional but highly recommended)

```bash
npx shadcn@latest init
```

- Add components used in this project:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add form
```

---

## Usage

## Viewing Cars

- Open the home page to view your car collection

- Cars are displayed using a responsive grid layout

- Each car card displays:

1. Make

2. Model

3. Year

4. Type (Sedan, SUV, Truck, etc.)

5. Description

---

## Adding Cars

- Navigate to Add Car and fill out the form:

1. Make: Brand of the car

2. Model: Model name

3. Year: Manufacturing year

4. Type: Choose from available categories

5. Description: At least 10 characters

- Form validation will display helpful error messages.
- Submitting currently logs the data to the console.

---

## Architecture & Patterns

## 1. Component Patterns

- Functional components with hooks

- Component composition via shared layout

- Controlled components for form inputs

## 2. State Management

- `useState` for local state

- `react-hook-form` for form state + submission

## 3. Routing

- React Router for navigation

- Layout route for shared navigation UI

## 4. Validation

- Zod schemas for strong validation

- Integrated seamlessly with React Hook Form

## 5. Styling

- Tailwind CSS utility classes

- Fully responsive design

- Consistent colors and spacing

- shadcn/ui components for accessibility

---

## Learning Resources

## 1. React Concepts

- React Documentation

- React Hook Form

- React Router

## 2. Styling & UI

- Tailwind CSS

- shadcn/ui

## 3. Validation

- Zod Documentation

## 4. Build Tools

- Vite Documentation

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## Future Enhancements

- Add car editing

- Implement car deletion

- Add search and filtering

- Upload car images

- Add user authentication

- Add car rating system

- Implement car categories & tags

## License

This project is licensed under **All Rights Reserved**.  
You may not copy, modify, or distribute this project without explicit permission.
