# React Website

A modern, responsive React-based website built with TypeScript, Vite, and React Router.

## Features

- ⚡ **Vite** - Next generation frontend tooling for fast development and production builds
- 🎯 **React 18** - Latest React for building interactive UIs
- 📘 **TypeScript** - Static type checking for better code quality
- 🛣️ **React Router** - Client-side routing for seamless navigation
- 📱 **Responsive Design** - Mobile-friendly layout that works on all devices
- 🎨 **Modern Styling** - Clean, modern CSS with support for both light and dark modes
- ✅ **ESLint** - Code quality and consistency checks

## Project Structure

```
src/
├── components/        # Reusable React components
│   └── Navigation.tsx # Navigation bar component
├── pages/            # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── App.tsx          # Main app component
├── index.css        # Global styles
└── main.tsx         # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:5173`

### Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Check code quality:
```bash
npm run lint
```

## Pages

- **Home** - Landing page with hero section and feature cards
- **About** - Information about the project and technology stack
- **Contact** - Contact form for user inquiries

## Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update the navigation in `src/components/Navigation.tsx`

### Styling

- Global styles are in `src/index.css`
- Component-specific styles are in corresponding `.css` files
- Supports both light and dark color schemes

## Technologies Used

- React 18
- TypeScript
- Vite
- React Router v6
- ESLint

## License

MIT
