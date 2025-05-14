# Interactive Reading Card Application

A modern, responsive application for creating and managing reading cards from uploaded documents. Features dark/light theme support and an intuitive user interface.

![Reading Card App](https://via.placeholder.com/800x400)

## Features

- 📚 Create reading cards from uploaded documents
- 🌓 Dark/light theme toggle
- 📱 Responsive design for all devices
- 🔍 Search and filter reading cards
- 📋 Export cards in various formats

## Tech Stack

- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express
- **File Processing**: PapaParse, SheetJS
- **Deployment**: Vercel (frontend), Railway (backend)

## Project Structure

```
reading-card-app/
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── context/        # React context providers
│   │   ├── utils/          # Helper functions
│   │   ├── pages/          # Application pages
│   │   ├── styles/         # CSS and Tailwind config
│   │   └── App.jsx         # Main application component
│   ├── package.json
│   └── vite.config.js      # Vite configuration
├── server/                 # Backend Node.js/Express application
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Express middleware
│   ├── services/           # Business logic
│   ├── utils/              # Helper functions
│   ├── index.js            # Server entry point
│   └── package.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/reading-card-app.git
   cd reading-card-app
   ```

2. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../server
   npm install
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

5. In a separate terminal, start the frontend development server:
   ```bash
   cd ../client
   npm run dev
   ```

6. Visit `http://localhost:5173` in your browser to see the application.

## Deployment

### Frontend Deployment (Vercel)

1. Create an account on [Vercel](https://vercel.com) if you don't have one.

2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

3. Navigate to the client directory:
   ```bash
   cd client
   ```

4. Deploy to Vercel:
   ```bash
   vercel
   ```

5. Follow the prompts to link your project and deploy.

### Backend Deployment (Railway)

1. Create an account on [Railway](https://railway.app) if you don't have one.

2. Install the Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

3. Navigate to the server directory:
   ```bash
   cd server
   ```

4. Login to Railway:
   ```bash
   railway login
   ```

5. Initialize your project:
   ```bash
   railway init
   ```

6. Deploy to Railway:
   ```bash
   railway up
   ```

7. Set environment variables in the Railway dashboard as needed.

## Environment Variables

### Frontend (.env in client directory)
```
VITE_API_URL=http://localhost:3000/api  # For development
VITE_API_URL=https://your-backend-url.railway.app/api  # For production
```

### Backend (.env in server directory)
```
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173  # For development
CORS_ORIGIN=https://your-frontend-url.vercel.app  # For production
```

## Usage Guide

1. **Upload Document**: Click the "Upload" button to upload your reading material.
2. **Generate Cards**: Process the document to extract reading cards.
3. **Manage Cards**: View, edit, search, and organize your reading cards.
4. **Export**: Export your cards in various formats for studying.
5. **Toggle Theme**: Switch between dark and light mode using the theme toggle button.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React.js team for the excellent frontend library
- TailwindCSS for the utility-first CSS framework
- All open-source contributors whose libraries made this project possible
