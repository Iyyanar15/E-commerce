import axiosInstance from "./axiosInstance";

export const login = (data) => axiosInstance.post("/auth/login", data);
export const signup = (data) => axiosInstance.post("/auth/signup", data);
export const forgotPassword = (data) => axiosInstance.post("/auth/forgot-password", data);
export const verifyOtp = (data) => axiosInstance.post("/auth/verify-otp", data);
