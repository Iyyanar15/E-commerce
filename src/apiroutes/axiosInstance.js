import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://e-commerce-backend-zrxv.onrender.com", 
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for token auth
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
