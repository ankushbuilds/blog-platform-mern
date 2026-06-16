import axios from "axios";

// 🔥 Make sure env is properly handled
const BASE_URL = import.meta.env.VITE_API_URL;

// Safety check (important for debugging)
if (!BASE_URL) {
  console.error("❌ VITE_API_URL is not defined in .env");
}

// Create axios instance
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 🔥 important for cookies/auth consistency
});

// Attach JWT token automatically
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default API;