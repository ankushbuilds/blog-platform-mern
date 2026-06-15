import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Render backend URL from Vercel env
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token automatically to every request
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;