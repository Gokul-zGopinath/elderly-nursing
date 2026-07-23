import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/caregivers",
});

API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export const getCaregivers = () => API.get("/");
export const createCaregiver = (data) => API.post("/", data);