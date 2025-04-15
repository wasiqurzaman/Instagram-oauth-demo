# Instagram Viewer Demo

A full-stack application demonstrating Instagram API integration with OAuth authentication. Built with React, TypeScript, Node.js, and Tailwind CSS.

## Features

- 🔐 Instagram OAuth Authentication
- 📱 Responsive Design
- 👤 Profile Information
- 🖼️ Instagram Media Viewer
- 🌓 Dark/Light Theme Support
- 💬 Comments Integration

## Tech Stack

### Frontend

- React with TypeScript
- TailwindCSS for styling
- Zustand for state management
- React Router for navigation
- Axios and React Query for API calls

### Backend

- Node.js with Express
- TypeScript
- Instagram Graph API integration
- Cookie-based authentication
- Environment variable configuration

## Getting Started

### Prerequisites

- Node.js 18+
- Instagram Business/Creator Account
- Facebook Developer Account

### Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/wasiqurzaman/Instagram-oauth-demo.git
cd instagram-oauth-demo
```

2. Install dependencies:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Configure environment variables:

Create `.env` file in the server directory:

```env
PORT=3000
CLIENT_ID=your_app_id
CLIENT_SECRET=your_app_secret
REDIRECT_URI=your_app_redirect_uri
```

4. Start the development servers:

```bash
# Start backend server
cd server
npm run dev

# Start frontend development server
cd client
npm run dev
```

## Project Structure

```
instagram-oauth-demo/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── stores/       # Zustand state management
│   │   └── pages/        # Route pages
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── src/
    │   ├── controllers/  # Route controllers
    │   ├── routes/       # Express routes
    │
    └── package.json
```

## Features in Detail

### Authentication Flow

- Instagram OAuth implementation
- Secure token handling

### User Interface

- Responsive sidebar navigation
- Dark/Light theme toggle
- Mobile-friendly design
- Loading states and error handling

### API Integration

- Instagram Graph API endpoints
- Media fetching and display
- Profile information
- Comment management

### Author

- Wasiqur Zaman

## Acknowledgments

- Instagram Graph API Documentation
- React Icons
- TailwindCSS Team
