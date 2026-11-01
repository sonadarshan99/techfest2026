import axios from "axios";

const rawUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
// Strip any accidental brackets, quotes, or trailing slashes
const cleanedUrl = rawUrl.replace(/[\[\]'"]/g, "").replace(/\/+$/, "");

const API = axios.create({
  baseURL: `${cleanedUrl}/api`
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;