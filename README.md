# 📝 Blog App

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React, Node.js). The frontend is styled using Tailwind CSS and built with Vite, while the backend uses Express and MongoDB for managing user authentication and blog CRUD operations.

---

## 🚀 Live Demo

- **Frontend**: [https://blog-app-lilac-rho.vercel.app](https://blog-app-lilac-rho.vercel.app)
- **Backend (API)**: [https://blog-app-co8s.onrender.com](https://blog-app-co8s.onrender.com)

---

## 📁 Project Structure
Blog-App/
├── backend/                      # Express.js Backend
│   ├── config/
│   │   └── connectionDB.js       # MongoDB connection
│   ├── controllers/
│   │   ├── blog.controller.js    # Blog logic (CRUD)
│   │   └── user.controller.js    # User auth logic
│   ├── middleware/
│   │   └── auth.middleware.js    # JWT Auth middleware
│   ├── models/
│   │   ├── blog.model.js         # Blog schema
│   │   └── user.model.js         # User schema
│   ├── routes/
│   │   ├── blog.routes.js        # Blog API routes
│   │   └── user.routes.js        # User API routes
│   ├── uploads/                  # Directory for image uploads
│   ├── .env                      # Environment variables
│   ├── server.js                 # Main server file
│   └── package.json
│
├── frontend/                     # React Frontend (Vite + Tailwind)
│   ├── public/
│   │   └── vite.svg              # Default Vite asset
│   ├── src/
│   │   ├── assets/               # Static assets (e.g., logo, images)
│   │   ├── components/           # Reusable UI components
│   │   ├── context/
│   │   │   └── StoreContext.jsx  # Global state using Context API
│   │   ├── pages/                # Page components (Home, Login, etc.)
│   │   ├── App.jsx               # Root component
│   │   ├── main.jsx              # Vite entry point
│   │   └── index.css             # Tailwind CSS setup
│   ├── .env                      # Frontend environment variables
│   ├── tailwind.config.js        # Tailwind config
│   ├── vite.config.js            # Vite config
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE (optional)


## ⚙️ Tech Stack

### Frontend:
- React + Vite
- Tailwind CSS
- Axios
- React Router
- React Toastify

### Backend:
- Node.js + Express
- MongoDB + Mongoose
- Multer (image uploads)
- CORS

---

## 🛠️ Installation & Setup

### 1. Clone the repo:
```bash
git clone https://github.com/Saurav2411/Blog-App
cd Blog-App

2. Setup Backend:
bash
cd backend
npm install

Create a .env file and add:
MONGO_URL=your_mongodb_connection_url
JWT_SECRET=your_jwt_secret_key

Run the backend:
bash
npm start

3. Setup Frontend:
bash
cd frontend
npm install
Create a .env file and add:

ini
Copy
Edit
VITE_API_URL=https://your backend app.onrender.com

Run the frontend:
bash
npm run dev
