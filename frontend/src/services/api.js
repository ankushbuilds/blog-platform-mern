import axios from "axios";

// 🔥 Base URL from env
const BASE_URL = import.meta.env.VITE_API_URL;

// ❌ Safety check
if (!BASE_URL) {
  console.error("❌ VITE_API_URL is missing in .env file");
}

// 🔥 Axios instance
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // required for cookies/session auth
});

// 🔥 Request interceptor (attach JWT token)
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

// 🔥 Response interceptor (optional but helpful for debugging)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("❌ API Error:", error.response.data);
    } else {
      console.error("❌ Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default API;