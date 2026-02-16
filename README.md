 📚 Book Vibe Website

A modern, interactive book discovery and reading platform built with React, Vite, and Tailwind CSS. Browse books, track your reading list, view detailed book information, and manage your personal library with an elegant, responsive interface.

## 🌟 Features

- **Book Discovery**: Browse and search through an extensive collection of books
- **Book Details**: View comprehensive information about each book
- **Reading List**: Track books you want to read
- **Toast Notifications**: Real-time feedback for user actions
- **Responsive Design**: Seamless experience across all devices
- **Modern UI**: Clean, intuitive interface with Tailwind CSS
- **Context-Based State**: Efficient state management with React Context
- **Pagination**: Easy navigation through large book collections
- **Error Handling**: Graceful error pages and loading states
- **Theme Support**: Customizable theme options

## 📁 Project Structure

```
Book-Vibe-Website/
├── public/                          # Static assets
│   └── [images, icons, fonts]
├── src/
│   ├── assets/                      # Media files and resources
│   ├── components/                  # Reusable UI components
│   │   ├── Banner/                  # Hero/banner section
│   │   │   └── Banner.jsx
│   │   ├── Footer/                  # Footer component
│   │   │   └── Footer.jsx
│   │   ├── Header/                  # Header/navigation
│   │   │   └── Header.jsx
│   │   ├── LoadingSpinner/          # Loading state component
│   │   │   └── LoadingSpinner.jsx
│   │   ├── Logo/                    # Logo component
│   │   │   └── Logo.jsx
│   │   ├── Modal/                   # Modal dialogs
│   │   │   └── Modal.jsx
│   │   ├── MoodFinder/              # Book mood/genre finder
│   │   │   └── MoodFinder.jsx
│   │   ├── Pagination/              # Pagination controls
│   │   │   └── Pagination.jsx
│   │   ├── ScrollToTop/             # Scroll to top button
│   │   │   └── ScrollToTop.jsx
│   │   ├── SearchBar/               # Search functionality
│   │   │   └── SearchBar.jsx
│   │   ├── Skeleton/                # Loading skeleton screens
│   │   │   └── Skeleton.jsx
│   │   └── Toast/                   # Toast notification system
│   │       └── Toast.jsx
│   ├── context/                     # React Context providers
│   │   ├── ThemeContext.jsx         # Theme management
│   │   └── ToastContext.jsx         # Toast notification state
│   ├── pages/                       # Page components
│   │   ├── About/                   # About page
│   │   │   └── About.jsx
│   │   ├── Book/                    # Single book page
│   │   │   └── Book.jsx
│   │   ├── BookDetails/             # Detailed book view
│   │   │   └── BookDetails.jsx
│   │   ├── Books/                   # Book listing page
│   │   │   └── Books.jsx
│   │   ├── ErrorPage/               # 404 and error pages
│   │   │   └── ErrorPage.jsx
│   │   ├── Home/                    # Landing page
│   │   │   └── Home.jsx
│   │   ├── ReadList/                # User's reading list
│   │   │   └── ReadList.jsx
│   │   └── Root/                    # Root layout
│   │       └── Root.jsx
│   ├── Routes/                      # Route configuration
│   │   └── Routes.jsx               # Application routes
│   ├── utility/                     # Helper functions
│   │   └── addToDB.js               # Local storage utilities
│   ├── App.css                      # Global app styles
│   ├── App.jsx                      # Root component
│   ├── index.css                    # Base styles
│   └── main.jsx                     # Application entry point
├── .gitignore                       # Git ignore rules
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and scripts
├── package-lock.json                # Dependency lock file
├── README.md                        # This file
├── tailwind.config.js               # Tailwind CSS configuration
└── vite.config.js                   # Vite build configuration
```

## 🛠️ Tech Stack

### Frontend Framework & Build
- **React 18**: Modern React with hooks and concurrent features
- **Vite**: Lightning-fast build tool and dev server
- **React Router DOM**: Client-side routing and navigation

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Custom CSS**: Component-specific styles

### State Management
- **React Context API**: Global state management
- **Local Storage**: Persistent data storage
- **Custom Hooks**: Reusable state logic

### Development Tools
- **ESLint**: Code linting and quality
- **Vite HMR**: Hot module replacement
- **Git**: Version control

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn**
- **Git**
- A modern web browser

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/mdmahfuz307/Book-Vibe-Website.git
cd Book-Vibe-Website
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Start the development server
```bash
npm run dev
# or
yarn dev
```

The application will open at `http://localhost:5173`

## 🚀 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint

# Format code (if Prettier is configured)
npm run format
```

## 🏗️ Key Features Implementation

### 📖 Book Discovery System
- Browse books with pagination
- Search functionality to find specific books
- Filter by genre, mood, or category
- Responsive grid layout for book cards

### 📝 Reading List Management
- Add books to your personal reading list
- Remove books from the list
- Persistent storage using localStorage
- Toast notifications for user feedback

### 🎨 Theme System
- Light and dark theme support
- Theme toggle functionality
- Persistent theme preference
- Smooth theme transitions

### 🔍 Book Details Page
- Comprehensive book information
- Cover image display
- Author details
- Description and synopsis
- Genre and category tags
- Rating display

### 🍞 Toast Notification System
- Success, error, and info notifications
- Auto-dismiss functionality
- Customizable duration
- Accessible design

### 🔄 Loading States
- Skeleton screens for better UX
- Loading spinners
- Progressive content loading
- Error boundaries
