import axios from "axios";

// 🔥 Base URL
const BASE_URL = import.meta.env.VITE_API_URL;

// ❗ HARD STOP if missing (important)
if (!BASE_URL) {
  throw new Error("❌ VITE_API_URL missing in frontend .env file");
}

// 🔥 Axios instance
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔥 Attach JWT token
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

// 🔥 Error handling
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