import axiosInstance from "./axiosInstance";

export const getProducts = () => axiosInstance.get("/products");
export const getProductById = (id) => axiosInstance.get(`/products/${id}`);
export const getProductReviews = (id) => axiosInstance.get(`/products/${id}/reviews`);
