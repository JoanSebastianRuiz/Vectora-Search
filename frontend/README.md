# Vectora Search - Frontend

A modern React-based frontend for **Vectora Search**, an AI-powered product discovery platform that leverages semantic embeddings and vector similarity search to deliver intelligent, context-aware search results.

## Overview

Vectora Search provides a fast and intuitive user experience for managing products and categories while enabling advanced semantic search capabilities powered by AI embeddings.

### Key Features

* 🔍 **Semantic Product Search** powered by vector embeddings
* 📦 **Product Management** (Create, Read, Update, Delete)
* 🏷️ **Category Management** (Create, Read, Update, Delete)
* ⚡ **Real-Time Search Experience**
* 📱 **Responsive and Modern UI**
* 🎨 **Customizable Design System**
* 🚀 **Fast Development Workflow with Vite**

---

## Tech Stack

### Core Technologies

* **React** – Component-based UI development
* **Vite** – Lightning-fast build tool and development server
* **React Router** – Client-side routing
* **Axios** – HTTP client for API communication

### UI & Styling

* **Tailwind CSS** – Utility-first CSS framework
* **shadcn/ui** – Reusable UI components
* **Radix UI** – Accessible component primitives
* **Sonner** – Toast notifications

---

## Prerequisites

Before getting started, ensure you have the following installed:

* **Node.js** ≥ 18.x
* **npm** ≥ 9.x

or

* **Yarn** ≥ 1.22.x

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/vectora-search.git
cd vectora-search/frontend
```

### Install Dependencies

Using npm:

```bash
npm install
```

Using Yarn:

```bash
yarn install
```

---

## Project Structure

```text
src/
├── components/
│   ├── crud/           # Generic CRUD components
│   ├── form/           # Form components
│   ├── layout/         # Layout components
│   ├── table/          # Data table components
│   └── ui/             # Base UI components (shadcn/ui)
│
├── features/
│   ├── categories/     # Category management
│   ├── products/       # Product management
│   └── search/         # Semantic search functionality
│
├── layouts/            # Application layouts
├── lib/
│   └── axios/          # HTTP client configuration
├── utils/              # Shared utility functions
├── App.jsx             # Root application component
├── routes.jsx          # Application routes
└── index.css           # Global styles
```

---

## Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

### Automatically Fix Lint Issues

```bash
npm run lint:fix
```

---

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### Production Build

Generate and preview a production build:

```bash
npm run build
npm run preview
```

---

## Core Functionality

### Semantic Search

Vectora Search goes beyond traditional keyword matching by using AI-generated embeddings to understand the meaning and context behind user queries.

Features include:

* Natural language search
* Context-aware product discovery
* Semantic similarity ranking
* Fast search experience

### Product Management

Efficiently manage product data through a complete CRUD interface.

Features include:

* Product creation and editing
* Product deletion
* Search and filtering
* Paginated data tables

### Category Management

Organize products into categories with a streamlined management experience.

Features include:

* Category CRUD operations
* Product-category relationships
* Simple and intuitive workflows

### Responsive User Experience

Designed with a mobile-first approach to provide a consistent experience across devices.

Features include:

* Responsive layouts
* Accessible components
* Modern user interface
* Optimized performance

---

## Backend Integration

This frontend application communicates with the Vectora Search backend API.

Before running the frontend, ensure that:

1. The backend service is running.
2. API endpoints are properly configured.
3. The API base URL matches your environment configuration.

By default, the frontend expects the backend to be available at:

```text
http://localhost:8000
```

If necessary, update the API configuration in:

```text
src/lib/axios/client.js
```

---

## Contributing

Contributions are welcome.

1. Create a feature branch:

```bash
git checkout -b feature/amazing-feature
```

2. Commit your changes:

```bash
git commit -m "feat: add amazing feature"
```

3. Push your branch:

```bash
git push origin feature/amazing-feature
```

4. Open a Pull Request.

---

## License

This project is licensed under the MIT License.

See the `LICENSE` file for more information.

---

## Support

If you encounter any issues or have suggestions for improvements, please open an issue in the repository.
