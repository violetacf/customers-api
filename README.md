# 🚀 topi Take Home Exercise Frontend

This is a frontend React application built with Vite, TypeScript, and React 19.

## 🛠️ Technologies Used

- **React 19**: Modern UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Next-generation frontend build tool
- **Storybook**: UI component development and documentation
- **Vitest**: Testing framework
- **Styled Components**: CSS-in-JS styling solution
- **React Router**: Navigation library

## 📋 Prerequisites

- Node.js (18.x or higher recommended)
- npm or yarn

## 🔧 Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone <repository-url>
cd take-home-exercise-frontend

# Install dependencies
npm install
```

## 📜 Available Scripts

- **Development server:**

  ```bash
  npm run dev
  ```

  Starts the development server at http://localhost:5173

- **Build for production:**

  ```bash
  npm run build
  ```

  Creates an optimized production build in the `dist` folder

- **Preview production build:**

  ```bash
  npm run preview
  ```

  Serves the production build locally for preview

- **Lint code:**

  ```bash
  npm run lint
  ```

  Runs ESLint to check for code quality issues

- **Storybook:**

  ```bash
  npm run storybook
  ```

  Starts Storybook development server at http://localhost:6006

- **Build Storybook:**
  ```bash
  npm run build-storybook
  ```
  Builds Storybook as a static web application

## 📁 Project Structure

- `/src` - Source code of the application
  - `/ui` - UI components
  - `/stories` - Storybook stories
  - `/storybook-helpers` - Utilities for Storybook
  - `App.tsx` - Main application component
  - `main.tsx` - Application entry point
- `/public` - Static assets
- `/.storybook` - Storybook configuration
