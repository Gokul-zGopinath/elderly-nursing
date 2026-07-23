import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/medications",
});

API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export const getMedications = () => API.get("/");
export const createMedication = (data) => API.post("/", data);