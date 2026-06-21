# 🚀 Blog Platform - MERN Stack

A full-stack blogging platform built with the MERN Stack that enables users to create, manage, and interact with blog posts through a modern and responsive web interface.

🌐 **Live Demo:** https://blog-platform-mern-psi.vercel.app

---

## 📖 About The Project

Blog Platform is a full-stack web application designed for writers and readers. Users can register, log in securely, create blog posts, edit their content, delete posts, and engage with articles through comments.

The application follows a scalable client-server architecture using React on the frontend and Node.js/Express on the backend, with MongoDB as the database.

---

## ✨ Features

### 🔐 Authentication & Authorization
- User Registration
- Secure Login
- JWT-Based Authentication
- Protected Routes
- Persistent User Sessions

### 📝 Blog Management
- Create Blog Posts
- View All Blogs
- Read Individual Blog Posts
- Edit Existing Posts
- Delete Posts
- User-Owned Content Management

### 💬 Comment System
- Add Comments to Posts
- View Comments
- User Engagement and Interaction

### 🎨 User Experience
- Responsive Design
- Clean and Modern UI
- Loading Indicators
- Error Handling
- Success Notifications

### ⚡ Backend Features
- RESTful API Architecture
- MongoDB Database Integration
- Secure Authentication Middleware
- Request Validation
- Centralized Error Handling

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- JWT (JSON Web Tokens)
- bcrypt.js

### Database
- MongoDB
- Mongoose

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📂 Project Structure

```text
blog-platform/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB Atlas Account or Local MongoDB

---

### Clone the Repository

```bash
git clone https://github.com/ankushbuilds/blog-platform-mern.git
cd blog-platform-mern
```

---

## Backend Setup

Navigate to backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm run dev
```

---

## Frontend Setup

Navigate to frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

---

## 📡 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Blog Posts

```http
GET    /api/posts
GET    /api/posts/:id
POST   /api/posts
PUT    /api/posts/:id
DELETE /api/posts/:id
```

### Comments

```http
POST /api/comments
GET  /api/comments/:postId
```

---

## 🔒 Security Features

- Password Hashing using bcrypt
- JWT Authentication
- Protected API Routes
- Environment Variable Protection
- Secure MongoDB Connection
- CORS Configuration
- Error Handling Middleware

---

## 🎯 Future Enhancements

- Rich Text Editor
- Blog Categories & Tags
- Search Functionality
- User Profiles
- Likes & Reactions
- Image Upload Support
- Bookmarks
- Dark Mode
- Admin Dashboard
- Pagination
- Email Verification
- Password Reset Functionality

---

## 📸 Screenshots

Add screenshots of your application here.

### Home Page

```md
![Home Page](./screenshots/home.png)
```

### Login Page

```md
![Login](./screenshots/login.png)
```

### Create Post

```md
![Create Post](./screenshots/create-post.png)
```

### Blog Details

```md
![Blog Details](./screenshots/blog-details.png)
```

---

## 🧠 Learning Outcomes

This project helped strengthen my understanding of:

- MERN Stack Development
- RESTful API Design
- Authentication & Authorization
- MongoDB Data Modeling
- Frontend & Backend Integration
- Deployment Workflows
- State Management
- Error Handling Best Practices

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Ankush Singh**

GitHub: https://github.com/ankushbuilds



---

## ⭐ Show Your Support

If you like this project, please consider giving it a ⭐ on GitHub. It helps others discover the project and motivates further development.

---

### Built with ❤️ using the MERN Stack
