import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/services",
});

API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export const getServices = () => API.get("/");
export const createService = (data) => API.post("/", data);