# React Router Application

A clean, modern React application built with TypeScript, Vite, and React Router. This application features a structured codebase with two main pages: Home and Onboarding.

## Features

- 🚀 **React 18** with TypeScript support
- 📱 **Responsive Design** with modern CSS
- 🛣️ **React Router** for client-side routing
- 🎨 **Modern UI** with glassmorphism effects
- 📁 **Organized Structure** with separate components and pages
- ⚡ **Vite** for fast development and building

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation component
│   └── Navigation.css
├── pages/              # Application pages
│   ├── Home.tsx        # Home page component
│   ├── Home.css
│   ├── Onboarding.tsx       # Onboarding page component
│   ├── Onboarding.css
│   └── index.ts        # Export barrel
├── styles/             # Global styles
│   └── App.css         # Main app styles
├── assets/             # Static assets
├── App.tsx             # Main app component with routing
├── main.tsx           # Application entry point
└── index.css          # Global CSS styles
```

## Available Routes

- `/` - Redirects to onboarding page
- `/onboarding` - User onboarding page
- `/home` - Main application page
- `*` - Catch-all route redirects to onboarding

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the development server on `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

1. Start the application and you'll be redirected to the onboarding page
2. Enter any email and password to proceed to the home page
3. Use the navigation bar to switch between pages
4. The application features responsive design that works on all devices

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Modern CSS** - Flexbox, Grid, and CSS custom properties

## Customization

The application uses a modular CSS approach where each component has its own stylesheet. You can easily customize the design by modifying the respective CSS files:

- Global styles: `src/index.css` and `src/styles/App.css`
- Component styles: Individual `.css` files next to each component
- Color scheme and themes can be adjusted in the CSS custom properties
  tseslint.configs.stylisticTypeChecked,

        // Other configs...
      ],
      languageOptions: {
        parserOptions: {
          project: ['./tsconfig.node.json', './tsconfig.app.json'],
          tsconfigRootDir: import.meta.dirname,
        },
        // other options...
      },

  },
  ])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
