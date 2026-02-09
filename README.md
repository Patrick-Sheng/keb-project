# KEB - Korean Engineering Body

Website for the Korean Engineering Body (KEB), a student club for Korean engineering students at the University of Auckland.

## Tech Stack

- **React 19** with Vite
- **React Router** for client-side routing
- **React Bootstrap** for UI components

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable components (Footer, etc.)
├── events/         # Event-related components
├── images/         # Static images and assets
├── pages/          # Page components (Home, About, Events, EventPage)
├── util/           # Utilities and data (event metadata)
├── App.jsx         # Main app with routing and navbar
└── main.jsx        # Entry point
```

## Pages

- **Home** `/` - Landing page with hero section, featured events, and community CTA
- **About** `/about` - Team members and club information
- **Events** `/events` - List of all events
- **Event Details** `/events/:eventId` - Individual event page
