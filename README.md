# Onboarding App

A modern, user-friendly React application designed to streamline the user onboarding process. Built with TypeScript and powered by Vite, this app provides a seamless multi-step registration flow that guides users through phone verification, OTP validation, personal details collection, and secure password creation.

## Features

- **Multi-Step Onboarding Flow**: Intuitive 5-step process including introduction, phone number input, OTP verification, user details, and password creation
- **Secure Authentication**: Phone number verification with OTP for enhanced security
- **Modern UI/UX**: Clean, responsive design with smooth animations and glassmorphism effects
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **Mobile-First**: Fully responsive design that works seamlessly across all devices
- **Type-Safe**: Full TypeScript support for robust, maintainable code
- **Progressive Enhancement**: Smooth transitions and state management throughout the onboarding journey

## Tech Stack

- **Frontend Framework**: React 19 with modern hooks
- **Language**: TypeScript for type safety
- **Build Tool**: Vite for fast development and building
- **Routing**: React Router DOM v7 for client-side navigation
- **Styling**: Tailwind CSS v4 for utility-first CSS
- **Icons**: Custom SVG icon components
- **Linting**: ESLint with TypeScript support
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── assets/
│   ├── icons/           # Custom SVG icon components
│   │   ├── bag.tsx
│   │   ├── checkbox.tsx
│   │   ├── hide-password.tsx
│   │   ├── shield.tsx
│   │   ├── show-password.tsx
│   │   ├── user.tsx
│   │   └── index.ts     # Icon exports
│   └── artboard.png     # Onboarding illustration
├── components/
│   ├── Navigation.tsx   # Main navigation component
│   └── ui/
│       ├── Button.tsx   # Reusable button component
│       └── index.ts     # UI component exports
├── pages/
│   ├── Home.tsx         # Landing page after onboarding
│   ├── index.ts         # Page exports
│   └── Onboarding/
│       ├── Onboarding.tsx    # Main onboarding container
│       ├── index.ts          # Onboarding exports
│       └── Steps/             # Individual onboarding steps
│           ├── Intro.tsx
│           ├── PhoneNumber.tsx
│           ├── OTPVerification.tsx
│           ├── UserDetails.tsx
│           ├── CreatePassword.tsx
│           └── index.ts
├── styles/
│   └── colors.css       # Color scheme definitions
├── App.tsx              # Main app with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd root-assignment
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Code Quality

Run linting to check code quality:

```bash
npm run lint
```

## Usage

1. **Launch the App**: Start the development server and navigate to the application
2. **Onboarding Flow**:
   - **Step 1**: Introduction screen with app overview
   - **Step 2**: Phone number input with validation
   - **Step 3**: OTP verification for security
   - **Step 4**: Personal details collection (first name, last name)
   - **Step 5**: Secure password creation
3. **Completion**: After successful onboarding, users are redirected to the home page
4. **Navigation**: Use the navigation bar to move between pages

## Future Scope

### Planned Enhancements

- **Backend Integration**: Connect with RESTful APIs for user data persistence and OTP services
- **Email Verification**: Add email verification as an alternative to phone verification
- **Multi-Language Support**: Internationalization (i18n) for global user base
- **Dark Mode**: Theme switching capability for better user experience
- **Analytics Integration**: User journey tracking and conversion analytics
- **Progressive Web App (PWA)**: Offline functionality and app-like experience
- **Push Notifications**: Real-time notifications for important updates
- **Advanced Security**: Biometric authentication and two-factor authentication options
- **Social Login**: Integration with Google, Facebook, and other social platforms
- **User Dashboard**: Personalized dashboard with user profile management
- **Admin Panel**: Administrative interface for user management and analytics
- **Search & Discovery**: Advanced search features and content discovery
- **Mobile App**: Native mobile applications for iOS and Android
- **AI-Powered Features**: Smart suggestions and personalized onboarding experiences

### Technical Improvements

- **State Management**: Implementation of Redux Toolkit or Zustand for complex state handling
- **Testing Suite**: Comprehensive unit and integration tests with Jest and React Testing Library
- **Performance Optimization**: Code splitting, lazy loading, and bundle analysis
- **Accessibility**: WCAG compliance and screen reader support
- **Error Handling**: Robust error boundaries and user-friendly error messages
- **Caching Strategy**: Intelligent caching for improved performance
- **Microservices Architecture**: Modular backend services for scalability

### Development Guidelines

1. Follow the existing code style and TypeScript best practices
2. Write meaningful commit messages
3. Test your changes thoroughly
4. Update documentation as needed

---
